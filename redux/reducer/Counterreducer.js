import { Increase,Decrease,Reset } from "../action/Actiontype.js";
const intialstate = 0;
function Counterreducer(state=intialstate,action){
    switch(action.type){
        case Increase: return state+1;
        case Decrease: return state-1;
        case Reset: return state;
    }
}
export default Counterreducer;