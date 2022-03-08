export default {
    toggleWishlist: function ( { commit }, payload ) {
        commit( 'TOGGLE_WISHLIST', payload );
    },
    addWishlist: function ( { commit }, payload ) {
        commit( 'ADD_WISHLIST', payload );
    }
}
