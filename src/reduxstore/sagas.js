import axios from "axios"
import {all, call, put, takeEvery} from "redux-saga/effects"
function login(action){
    // console.log("login in saga")
    return axios({
        method:"post",
        url:"http://apifromashu.herokuapp.com/api/login",
        data:action.payload
    })
}
function* HelloSaga(){
    // console.log("here i am bitch")
}
function*  LoginGenerator(action){
    var result = yield call(login,action) 
    if(result.data.token){
        yield put({type:'LOGIN_SUCCESS',payload:result.data})
        localStorage.setItem('token', result.data.token);
    }
    else{
        yield put({type:"LOGIN_FAILURE"})
    }
}

function* LoginSaga(){
    yield takeEvery('LOGIN',LoginGenerator)
}
export default function* rootSaga(){
    yield all([
        HelloSaga(),
        LoginSaga()
    ])
}