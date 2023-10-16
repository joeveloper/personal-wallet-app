import { type } from "os";

const inistialState = 0;

interface Deposit {
    type: "deposit",
    payload: number
}

interface WithdrawAction {
    type: "withdraw",
    payload: number
}

interface BankruptAction {
    type: "bankrupt"
}

type Action = Deposit | WithdrawAction | BankruptAction



const reducer = (state: number = inistialState, action: Action) => {
    switch (action.type) {
        case "deposit":
            return state + action.payload;
        case "withdraw":
            return state - action.payload;
        case "bankrupt":
            return 0
        default:
            return state
    }
}

export default reducer;