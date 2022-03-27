export default {
    async nuxtServerInit(store, context) {
        console.log('nuxtServerInit, client=', process.client, 'serveur=', process.server)
        await new Promise(function(resolve, reject) {
            setTimeout(() => {
                // success
                resolve()
            }, 1000)
        })
        store.commit('fetchCategories', 34)
        console.log('nuxtServerInit commit terminé')
    }
}
