export default (state, action) => {
    switch (action.type) {
        case 'DELETETRANSACTION':
            return {
                ...state,
                transaction: state.transaction.filter(trans => trans.id !== action.payload)
            }
        case 'ADDTRANSACTION':
            return {
                ...state,
                transaction: [action.payload, ...state.transaction]
            }
        default:
            return state;
    }
};