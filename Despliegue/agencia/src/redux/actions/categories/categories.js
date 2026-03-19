import axios from 'axios';
import { API_URL } from 'config';
import {
    GET_CATEGORIES_SUCCESS,
    GET_CATEGORIES_FAIL,
} from './types';


export const get_categories = () => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    try{

        const res = await axios.get(`${API_URL}/api/category/list`, config)

        if(res.status === 200){
            dispatch({
                type: GET_CATEGORIES_SUCCESS,
                payload: res.data
            });
        }else {
            dispatch({
                type: GET_CATEGORIES_FAIL
            });
        }

    } catch(err){
        dispatch({
            type: GET_CATEGORIES_FAIL
        })
    }
}