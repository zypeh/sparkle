// This is aliased in webpack config based on server/client build
import api from 'create-api'

/*
if (config.onServer && !api.warmCacheStarted) {
    api.warmCacheStarted = true
    warmCache()
}

const warmCache = () => {
    fetchItems((api.cachedIds.top || []).slice(0, 30))
    setTimeout(warmCache, 1000 * 60 * 15) // 15 minutes
}
*/

/**
 * TODO: We do need to promisify the API calling process
 */

/**
 * fetch the user profile
 * @param {String} id
 */
export const fetchUser = (id) => api.get(`/v1/user/${id}`)
export const fetchUsers = (ids) => Promise.all(ids.map(id => fetchUser(id)))
/**
 * fetch post information
 * @param {String} id
 */
export const fetchItem = (id) => api.get(`/v1/post/${id}`)
export const fetchItems = (ids) => Promise.all(ids.map(id => fetchItem(id)))
