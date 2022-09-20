import axios from 'axios';
import { useDispatch } from 'react-redux';


export const GET_LIST_KONTAK = "GET_LIST_KONTAK";


export const getListKontak = () => {
    return(dispatch)=>{

        // loading
        dispatch({
            type : GET_LIST_KONTAK,
            payload: {
                loading: true,
                data : false,
                errorMessage: false
            }
        })

        //get API
        axios({
            method:'GET',
            url: 'https://kontakjson.herokuapp.com/kontak',
            timeout: 100000
        }).then((response)=>{
            //jika sukses dijalankan

            dispatch({
                type : GET_LIST_KONTAK,
                payload: {
                    loading: false,
                    data : response.data,
                    errorMessage: false
                }
            })

        }).catch((error)=>{
            //jika gagal dijalankan

            dispatch({
                type : GET_LIST_KONTAK,
                payload: {
                    loading: false,
                    data : false,
                    errorMessage: error.message
                }
            })

        })


    }
}