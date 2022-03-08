export default {
    addToCart: function ( { commit }, payload ) {
        commit( 'ADD_TO_CART', payload );

        this._vm.$notify( {
            group: 'addCartSuccess',
            text: `has been added to your cart!`,
            data: payload.product
        } );
        // this._vm.$notify( {
        //     text: `has been added to your cart!`
        // } );
    },
    removeFromCart: function ( { commit }, payload ) {
        commit( 'REMOVE_FROM_CART', payload );
    },
    updateCart: function ( { commit }, payload ) {
        commit( 'UPDATE_CART', payload );
    }
}
