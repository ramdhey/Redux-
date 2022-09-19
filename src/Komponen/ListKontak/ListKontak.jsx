import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getListKontak } from "../../actions/kontakAction";
import Card from 'react-bootstrap/Card';

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
                getListKontakResult.map((kontak)=>{
                    return(
                        <Card className='cardnya mb-5' style={{ width: '18rem', backgroundImage: 'linear-gradient(to left,#F6BE00,#F2BB66,#2E8B57)', margin: 'auto', borderRadius: '15px' }} >
                            <Card.Body key={kontak.id} >
                                
                                <Card.Text key={kontak.id} className='NoTelephone'> I D : 
                                {' '} {kontak.id}
                                </Card.Text>
                                <Card.Title className='Nama' >Nama : {kontak.nama}</Card.Title>
                                <Card.Text className='NoTelephone'>
                                {kontak.nohp}
                                </Card.Text>
                                
                                
                            

                            </Card.Body>
                        </Card>
                            
                       

                        
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