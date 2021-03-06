export default {
    addToCart: function ( { commit }, payload ) {
        commit( 'ADD_TO_CART', payload );

        this._vm.$notify( {
            group: 'addCartSuccess',
            text: `has been added to your cart!`,
            data: payload.product
        } );
    },
    removeFromCart: function ( { commit }, payload ) {
        commit( 'REMOVE_FROM_CART', payload );
    },
    updateCart: function ( { commit }, payload ) {
        commit( 'UPDATE_CART', payload );
    },
    emptyCart( { commit }) {
        commit( 'EMPTY_CART');
    },
}
