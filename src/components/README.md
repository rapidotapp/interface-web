# components

The [atoms]('./atoms') folder holds the lowest level of components that all others are derived from. Atoms must not include other atoms,. See [Brad Frost's](https://atomicdesign.bradfrost.com) post and a [React-based interpreteation](https://cheesecakelabs.com/blog/rethinking-atomic-design-react-projects) if you wish to learn more

## Guidelines

When making new components remember to

1. Rest spread the function components `props` object so the first component in the tree gets access to all props (see `./atoms/LogoBackdrop.tsx` for an example of this, and example of how we use this in `./CommunityCard.tsx`)
