import createPersistedState from 'vuex-persistedstate';

export default function ( { store } ) {
    window.onNuxtReady( () => {
        createPersistedState( {
            key: 'storeino',
            paths: []
        } )( store )
    } )
}