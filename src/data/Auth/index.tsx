import { auth } from 'firebase'
import { computed, observable } from 'mobx'
import React from 'react'

const defaultSucc = (user: any) => {
  console.log(`Successfully signed in! \n\n ${JSON.stringify(user, null, 2)}`)
}

const defaultErr = (err: any) => {
  console.error(
    `Could not sign in through google. \n\n ${JSON.stringify(err, null, 2)}`
  )
}

class IAuthStore {
  @observable user: any = null
  @observable authPending = true

  listenToAuth: any

  constructor() {
    this.listenToAuth = auth().onAuthStateChanged(
      (user) => {
        this.user = user

        this.authPending = false
      },
      (err) => {
        console.error(err)
      }
    )
  }

  public async doSignInWithGoogle() {
    const provider = new auth.GoogleAuthProvider()
    await auth().signInWithPopup(provider).then(defaultSucc, defaultErr)
  }

  public async doSignInWithEmail(e: string, p: string) {
    await auth().signInWithEmailAndPassword(e, p).then(defaultSucc, defaultErr)
  }

  @computed
  public get isAuthed() {
    return !!this.user
  }
}

export const AuthStore = new IAuthStore()

export const AuthContext = React.createContext(AuthStore)

export const AuthProvider: React.FunctionComponent<React.ReactNode> = ({
  children,
}) => {
  return (
    <AuthContext.Provider value={AuthStore}>{children}</AuthContext.Provider>
  )
}

export default AuthStore
