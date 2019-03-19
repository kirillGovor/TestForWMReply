export function stationsFetchDataSuccess(stations) {
    return {
        type: "STATIONS_FETCH_DATA_SUCCESS",
        stations
    }
}

export function stationsFetchData(url) {
    return (dispatch) => {
        fetch(url)
            .then(response => {
                if(!response.ok) {
                    throw new Error(response.statusText);
                }
                return response;
            })
            .then(response => response.json())
            .then(stations => dispatch(stationsFetchDataSuccess(stations)))
            .catch(()=>{});
    }
}