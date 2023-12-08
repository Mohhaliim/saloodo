/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from 'react';

import packageSrc from '../../assets/package.svg'
import parcelServices from "../../services/parcel.service";

function Parcels({type, step = '', setUpdate, setUpdateId, updated = ''}) {
    const [parcels, setParcels] = useState([])
    const id = useRef('');
    const [key, setKey] = useState(1);

    const deleteParcel = (id) => {
        parcelServices.delete({id: id})
            .then(res => {
                setKey(key+1);
            })
            .catch(err => {
                console.log(err)
            })
    }

    const updateParcel = (id) => {
        setUpdate(true);
        setUpdateId(id)
    }

    const dateForamt = (date) =>{
        const inputDate = new Date(date);
        return inputDate.toLocaleDateString('en-GB');
    }

    useEffect(()=>{
        id.current = localStorage.getItem('id');

        if(type === 'sender'){
          parcelServices.getSenderParcels({id: id.current})
            .then(res => {
              setParcels(res.data);
            })
            .catch(err => {
              console.log(err)
            })
        }else if(type === 'biker'){
            if(step === 'picked'){
                parcelServices.getBikerParcels({id: id.current})
                .then(res => {
                  setParcels(res.data);
                })
                .catch(err => {
                  console.log(err)
                })
            }else if(step === 'available'){
                parcelServices.getAvailableParcels()
                    .then(res => {
                      setParcels(res.data);
                    })
                    .catch(err => {
                      console.log(err)
                    })
            }
        }
      },[key, step, updated])

  return (
    <div className="flex flex-col items-center w-[90%] gap-5 border border-blue_200 shadow-lg rounded-md py-5 px-5">
        {
            parcels.length ?
                parcels.map((parcel, key) => {
                    return (
                        <div className='w-full flex items-center justify-center gap-10' key={key}>
                            <div className=' w-4/5 flex justify-between border border-blue_200 shadow-lg rounded-md py-4 px-6'>
                                <div className='flex flex-col gap-3 items-center'>
                                    <img src={packageSrc} alt="package" className='w-11'/>
                                    <span>Status: <span className='text-blue_600'>{parcel.status}</span></span>
                                </div>
                                <div className='flex items-center text-left gap-4'>
                                    <div className='flex flex-col'>
                                        <span>Sender: <span className='text-blue_600'>{parcel.senderName ? parcel.senderName : ''}</span></span>
                                        <span>Biker: <span className='text-blue_600'>{parcel.bikerName ? parcel.bikerName : ''}</span></span>
                                    </div>
                                    <div className='flex flex-col'>
                                        <span>From: <span className='text-blue_600'>{parcel.pickUpLocation}</span></span>
                                        <span>Pick date: <span className='text-blue_600'>{dateForamt(parcel.pickupTimestamp)}</span></span>
                                    </div>
                                    <div className='flex flex-col'>
                                        <span>To: <span className='text-blue_600'>{parcel.dropOffLocation}</span></span>
                                        <span>Drop date: <span className='text-blue_600'>{dateForamt(parcel.deliveryTimestamp)}</span></span>
                                    </div>
                                </div>
                            </div>
                            { type === 'biker' ?
                                <div className='flex flex-col gap-2'>
                                    <button onClick={() => updateParcel(parcel.id)} className='bg-blue_500 rounded-md shadow-md py-1 px-3'>{step === 'picked'? 'Update' : 'Assign'}</button>
                                </div>
                                :
                                <div className='flex flex-col gap-2'>
                                    <button onClick={() => deleteParcel(parcel.id)} className='bg-red rounded-md shadow-md py-1 px-3 text-white'>Delete</button>
                                </div>
                            }
                        </div>
                    )
                })
            :
                <span className='text-lg font-semibold text-blue_600'>{`This ${type} has no parcels`}</span>
        }
    </div>
  )
}

export default Parcels