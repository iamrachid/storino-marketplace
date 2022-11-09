export default {
    [ 'TOGGLE_WISHLIST' ]( state, payload ) {
        let index = state.data.findIndex( item => item.id === payload.id );
        if ( index === -1 ) {
            state.data.push( payload );
        } else {
            state.data.splice( index, 1 );
        }
    },
    [ 'ADD_WISHLIST' ]( state, payload ) {
        let index = state.data.findIndex( item => item.id === payload.id );
        if ( index === -1 ) {
            state.data.push( payload );
        }
    }
}