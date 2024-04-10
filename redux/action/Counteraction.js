import { Increase,Decrease,Reset } from "./Actiontype.js";
export function increase(){
    return {
        type:Increase
    }
}
export function decrease(){
    return {
        type:Decrease
    }
}
export function reset(){
    return {
        type:Reset
    }
}