import {GET_EMPLOYEE} from '../types'

const initialState = {
    employeeData:[],
    loading:true,
}

export default function(state = initialState, action){
    console.log("nnnn",action)
    switch(action.type){
        case 'GET_EMPLOYEE':
        console.log("in get emp")

        return {
            ...state,
            employeeData:action.payload,
            loading:false
        }
        default: return state
    }

}