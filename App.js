import Store from "./redux/Store.js";
import { increase,decrease,reset } from "./redux/action/Counteraction.js";
console.log(Store.getState())
Store.dispatch(increase())
console.log(Store.getState())
Store.dispatch(increase())
console.log(Store.getState())
Store.dispatch(increase())
console.log(Store.getState())
Store.dispatch(decrease())
console.log(Store.getState())
Store.dispatch(reset())
console.log(Store.getState())