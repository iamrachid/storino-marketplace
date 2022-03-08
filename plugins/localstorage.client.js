import createPersistedState from 'vuex-persistedstate';

export default function ( { store } ) {
    // create store
    window.onNuxtReady( () => {
        createPersistedState( {
            key: 'storeino',
            paths: []
        } )( store )
    } )
}