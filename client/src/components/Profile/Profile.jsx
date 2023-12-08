import { useEffect, useRef, useState } from 'react';
import Loading from '../Loading/Loading';

import Sender from '../Sender/Sender'
import Biker from '../Biker/Biker'
import parcelServices from "../../services/parcel.service";
import userServices from "../../services/user.service";

function Profile() {
  const data = useRef([]);
  const type = useRef('');
  const id = useRef('');
  const user = useRef([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    type.current = localStorage.getItem('type')
    id.current = localStorage.getItem('id');

    userServices.getUser({id: id.current})
        .then(res =>{
            user.current = res.data;
            setIsLoading(false);
        })
        .catch(err => {
            console.log(err)
            setIsLoading(false);
        })

    if(type.current === 'sender'){
      parcelServices.getSenderParcels({id: id.current})
        .then(res => {
          data.current = res.data;
          setIsLoading(false);
        })
        .catch(err => {
          console.log(err)
          setIsLoading(false);
        })
    }else if(type.current === 'biker'){
      parcelServices.getBikerParcels({id: id.current})
        .then(res => {
          data.current = res.data;
          setIsLoading(false);
        })
        .catch(err => {
          console.log(err)
          setIsLoading(false);
        })
    }
  },[])

  return (
    <>
      { isLoading ?
          <Loading />
        :
          type.current === 'sender' ?
            <Sender id={id.current} user={user.current.user}/>
          :
            <Biker data={data.current} id={id.current} user={user.current.user} />
      }
    </>
  )
}

export default Profile