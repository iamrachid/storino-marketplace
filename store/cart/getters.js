export default {
    cartList: state => {
        return state.data;
    },
    totalPrice: state => {
        return state.data.reduce( ( acc, cur ) => {
            return acc + cur.price * cur.qty;
        }, 0 )
    },
    totalCount: state => {
        return state.data.reduce( ( acc, cur ) => {
            return acc + parseInt( cur.qty, 10 );
        }, 0 );
    }
}