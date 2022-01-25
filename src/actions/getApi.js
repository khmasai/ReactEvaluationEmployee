import axios from 'axios'
import Admin from '../components/Admin/Admin';
import { GET_EMPLOYEE } from '../types';

export const getApi = () => async dispatch => {
    try{
        const res = await axios.get(`http://localhost:3000/Employee`);
        console.log("erkgjkh",res)
       dispatch( {
            type: 'GET_EMPLOYEE',
            payload: res.data
        })
    }
    catch(e){
      console.log(e)
    }

}