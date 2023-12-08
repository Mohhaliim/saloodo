/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";

import parcelServices from "../../services/parcel.service";
import Loading from '../Loading/Loading';

function Create({user, setBorderColor, setShow}) {
  const [isLoading, setIsLoading] = useState(false);

  const create = (e) => {
      e.preventDefault();
      setIsLoading(true);

      const parcel = {
        senderId: user.id,
        pickUpLocation: e.target.pickLocation.value,
        dropOffLocation: e.target.dropLocation.value,
        status: 'Not picked',
        senderName: user.name
      }

      parcelServices.create(parcel)
      .then(res => {
        setTimeout(() => {
          setIsLoading(false)
          setShow('parcels')
        }, 3000);
      })
      .catch(err =>{
        console.log(err)
        setBorderColor('border-red')
        setIsLoading(false);

        setTimeout(() => {
          setBorderColor('border-blue_200')
        }, 3000);
      });
  }

  return (
    <>
      { isLoading ?
          <Loading />
        :
        <form onSubmit={(e) => create(e)} className="flex flex-col gap-4 items-center">
          <input required name="pickLocation" id="pickLocation" type="text" placeholder="enter the pick location" className="border border-blue_200 rounded-md focus-visible:outline-blue_500 pl-1 leading-8" />
          <input required name="dropLocation" id="dropLocation" type="text" placeholder="enter the drop location" className="border border-blue_200 rounded-md focus-visible:outline-blue_500 pl-1 leading-8" />
          <button name="submit" type="submit" className="bg-blue_500 px-4 py-1 rounded-md text-white focus:bg-blue_700 w-fit">Create</button>
        </form>
      }
    </>

  )
}

export default Create