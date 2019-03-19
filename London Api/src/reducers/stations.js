export function stations (state = [], action) {
    switch (action.type) {
        case "STATIONS_FETCH_DATA_SUCCESS":
            return action.stations;
        default:
            return state;
    }
}