import { action, makeAutoObservable } from "mobx"
import { isValidProp } from "./utils/isValidProp.js"


class ObservableAppState {

  olderPosts = null

  user = null
  /** @type {import('./models/Account.js').Account} */
  account = null
  /** @type {import('./models/Profile.js').Profile} */
  profile = null
  /** @type {import('./models/Profile.js').Profile[]} */
  searchedProfiles = []
  /** @type {import('./models/Post.js').Post[]} */
  posts = []
  searchedPosts = []
  /** @type {import('./models/Ad.js').Ad[]} */
  ads = []

  constructor() {
    makeAutoObservable(this)
  }

}

// eslint-disable-next-line no-undef
export const AppState = new Proxy(new ObservableAppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    action(() => {
      target[prop] = value
    })()
    return true
  }
})