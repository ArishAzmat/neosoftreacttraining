export function FirstMiddleWare(store) {
  return function (next) {
    return function (action) {};
  };
} //ES6
export let logger = store=>next=>action=>{

    // console.log("Before Action " , action.type ,store.getState())
    var result = next(action)
    // console.log("After Action store state is" , store.getState())
    return result
}