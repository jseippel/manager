import {
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE,
    EMPLOYEE_SAVE_SUCCESS,
    EMPLOYEE_DELETE
} from '../actions/types';

const INITIAL_STATE = {
    name: '',
    pone: '',
    shift: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMPLOYEE_UPDATE:
            // action.payload === { prop: 'name', value: 'jane' }
            return { ...state, [action.payload.prop]: action.payload.value };

        case EMPLOYEE_CREATE:
            return INITIAL_STATE;

        case EMPLOYEE_SAVE_SUCCESS:
            return INITIAL_STATE;

        case EMPLOYEE_DELETE:
            return INITIAL_STATE;

        default:
            return state;
    }
};
