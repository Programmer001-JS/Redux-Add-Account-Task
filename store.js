const initstate = {
    accounts: [
        {
            id: "1",
            name: "danilo",
            phone: "555-555",
            email: "danilo@gmail.com"
        }
    ],
    display: 1
}


const store = Redux.createStore(reducer)

const start = {
    type: "START"
}
const displayAddAccountsAction ={
    type:"DISPLAY_ADD_ACCOUNTS"
}

const dispalyAccountsAction ={
    type:"DISPALY_ACCOUNTS"
}
const addAccount=(newAccount)=>{
 return{
     type:"ADD_ACCOUNT",
     payload:{
         newAccount:newAccount
     }
 }
}


function reducer(state = initstate, action) {
    switch (action.type) {
        case "START":
            return state;
            case "DISPLAY_ADD_ACCOUNTS":
            return Object.assign({},state,{display:2})
            case "DISPALY_ACCOUNTS":
                return Object.assign({},state,{display:1})
            case "ADD_ACCOUNT":
                return Object.assign({},state,{
                    accounts:[...state.accounts,action.payload.newAccount]
                })
        default: return state;
    }

}