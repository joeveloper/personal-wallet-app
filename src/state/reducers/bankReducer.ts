import { ActionType } from "../action-types";
import { Action } from "../actions/index";

const inistialState = 0;

const reducer = (state: number = inistialState, action: Action) => {
    switch (action.type) {
        case ActionType.DEPOSIT:
            return state + action.payload;
        case ActionType.WITHDRAW:
            return state - action.payload;
        case ActionType.BANKRUPT:
            return 0
        default:
            return state
    }
}

export default reducer;