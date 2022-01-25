import axios from 'axios'
import Employee from '../components/Employee/Employee';

export const requestApi = (employeeData) => async dispatch => {
    console.log(employeeData)
    try{
        const res = await axios.post(`http://localhost:3000/Employee`,employeeData);
        console.log(res);
        /*dispatch( {
            type: 'GET_SEARCH',
            payload: res.data
        })*/
    }
    catch(e){
        console.log(e)
       
    }

}
export const putApi = (id,employeeData) => async dispatch => {
    console.log(employeeData)
    try{
        const res = await axios.put(`http://localhost:3000/Employee/${id}`,employeeData);
        console.log(res);
        /*dispatch( {
            type: 'GET_SEARCH',
            payload: res.data
        })*/
    }
    catch(e){
        console.log(e)
       
    }

}