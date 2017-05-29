import ProfileView from '../components/profile.vue'

export function profileFactory (type) {
  return {
    name: `${type}-profile-view`,
    // this will be called during SSR to pre-fetch data into the store!
    preFetch (store) {
      return store.dispatch('FETCH_PROFILE_DATA', { type })
    },
    render (h) {
      return h(ProfileView, { props: {type} })
    }
  }
}
