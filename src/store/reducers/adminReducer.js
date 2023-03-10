import actionTypes from '../actions/actionTypes';

const initialState = {
    isLoadingGenDer: false,
    genders: [],
    roles: [],
    positions: []
}

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_GENDER_START:
            let copyState = { ...state };
            copyState.isLoadingGenDer = true;
            return {
                ...copyState,
            }
        case actionTypes.FETCH_GENDER_SUCCESS:
            //let copyState = { ...state };
            state.genders = action.data;
            state.isLoadingGenDer = false;
            return {
                ...state,
            }
        case actionTypes.FETCH_GENDER_FAILED:
            // let copyState = { ...state };
            state.isLoadingGenDer = false;
            state.genders = [];

            return {
                ...state,
            }
        case actionTypes.FETCH_POSITION_SUCCESS:
            //let copyState = { ...state };
            state.positions = action.data;
            return {
                ...state,
            }
        case actionTypes.FETCH_POSITION_FAILED:
            // let copyState = { ...state };
            state.positions = [];

            return {
                ...state,
            }
        case actionTypes.FETCH_ROLE_SUCCESS:
            //let copyState = { ...state };
            state.roles = action.data;
            return {
                ...state,
            }
        case actionTypes.FETCH_ROLE_FAILED:
            // let copyState = { ...state };
            state.roles = [];

            return {
                ...state,
            }

        default:
            return state;
    }
}

export default adminReducer;