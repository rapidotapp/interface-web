import { auth } from 'firebase'
import { observable } from 'mobx'

const defaultSucc = (user: any) => {
  console.log(`Successfully signed in! \n\n ${JSON.stringify(user, null, 2)}`)
}

const defaultErr = (err: any) => {
  console.error(
    `Could not sign in through google. \n\n ${JSON.stringify(err, null, 2)}`
  )
}

class AuthStore {
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

  @action
  public isAuthed() {
    return !!this.user
  }
}

const authStore = new AuthStore()

export default authStore
