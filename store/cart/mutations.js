export default {
    [ 'ADD_TO_CART' ] ( state, payload ) {
        let isAdded = state.data.findIndex( item => item._id === payload.product._id ) > -1;
        let qty = payload.product.qty ? payload.product.qty : 1;
        payload.product.qty = qty;

        if ( isAdded ) {
            state.data = state.data.reduce( ( acc, cur ) => {
                if ( cur._id === payload.product._id ) {
                    acc.push( {
                        ...cur,
                        qty: cur.qty + qty
                    } );
                } else {
                    acc.push( cur );
                }

                return acc;
            }, [] )
        } else {
            state.data.push( payload.product );
        }
    },
    [ 'REMOVE_FROM_CART' ] ( state, payload ) {
        let index = state.data.findIndex( item => item._id === payload._id );
        state.data.splice( index, 1 );
    },
    [ 'UPDATE_CART' ] ( state, payload ) {
        state.data = payload.cartItems;
    },
    [ 'EMPTY_CART' ] ( state) {
        state.data = [];
    }
};