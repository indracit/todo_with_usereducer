
type actionType = {
    type : string,
    todo? :  string,
    index? : number
}
export const initialTodos : string[]  = [];

export const reducer = (state : string[],action : actionType): typeof initialTodos =>{
    switch(action.type){

        case 'ADD' : 
        if(action.todo) return [...state,action.todo];
        else return state;

        case 'DELETE' : 
        if(action.index) return [...state.slice(0,action.index),...state.slice(action.index+1,state.length)]
        else return state;

        default : return state;
    }
}