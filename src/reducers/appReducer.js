import { init } from "@/utils/init"
export const appReducer = (state=init,action)=>{
switch(action.type){
    case 'NAME_UPDATE':
        state = {
            ...state,
            name:action.payload
        }
        break;
        case 'AGE_UPDATE':
            state={
                ...state,
                age:action.payload
            }

}
return state;
}