const initialState = {
    card: []
}

const card = (state = initialState, action)=>{
    switch (action.type){
        case "ADD_ANIMPOP":
         const newState ={
             card:action.payload
         }
         return newState;
         default: 
         return state;
    }
}

export default card;