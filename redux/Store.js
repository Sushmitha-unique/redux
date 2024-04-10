import {createStore} from "redux";
import Counterreducer from "./reducer/Counterreducer.js"
const Store = createStore(Counterreducer);
export default Store;