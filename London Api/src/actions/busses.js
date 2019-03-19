export function bussesFetchDataSuccess(busses) {
    return {
        type: "BUSSES_FETCH_DATA_SUCCESS",
        busses
    }
}

export function bussesFetchData(url) {
    return (dispatch) => {
        fetch(url)
            .then(response => {
                if(!response.ok) {
                    throw new Error(response.statusText);
                }
                return response;
            })
            .then(response => response.json())
            .then(busses => dispatch(bussesFetchDataSuccess(busses)))
            .catch(()=>{});
    }
}