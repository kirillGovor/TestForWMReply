export function busses (state = [], action) {
    switch (action.type) {
        case "BUSSES_FETCH_DATA_SUCCESS":
            return action.busses;
        default:
            return state;
    }
}