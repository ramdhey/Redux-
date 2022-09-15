import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getListKontak } from "../../actions/kontakAction";

const ListKontak = () => {

    const {getListKontakResult,getListKontakLoading,getListKontakError} = useSelector((state)=>state.KontakReducers)
    const dispatch = useDispatch()

    useEffect(()=>{

        // panggil action getListKontak
        dispatch(getListKontak())
    },[dispatch])


    return(
        <div>
            {getListKontakResult ? (
                getListKontakResult.map((contact)=>{
                    return(
                        <p key={contact.id}>{contact.nama}-{contact.nohp}</p>
                    )
                })
            ):getListKontakLoading ?(
                <p>Loading ....</p>
            ):(
                <p>{getListKontakError ? getListKontakError : "Data Error"}</p>
            )}

        </div>
    )
}

export default ListKontak