/* eslint-disable react/prop-types */
import { useState } from 'react';

import Create from '../Create/Create';
import Parcels from '../Parcels/Parcels';
import Client from '../Client/Client';

function Sender({user}) {
    const [ show, setShow ] = useState('parcels')
    const [ borderColor, setBorderColor ] = useState('border-blue_200');

    const showParcels = () =>{
        setShow('parcels')
    };

    const showCreate = () =>{
        setShow('create')
    };

  return (
    <div className={`flex flex-col w-11/12 border shadow-lg rounded-md py-10 px-6 ${borderColor}`}>
        <div className='flex'>
            <Client user={user} />
            <div className='flex flex-1 gap-4 justify-end h-fit self-center'>
                <button onClick={() => showParcels()} className='bg-blue_200 px-6 py-2 text-lg rounded-md shadow-md'>Parcels</button>
                <button onClick={() => showCreate()} className='bg-blue_300 px-6 py-2 text-lg rounded-md shadow-md'>Create parcel</button>
            </div>
        </div>
        <div className='flex justify-center pt-10'>
            {
                show === 'parcels' ?
                    <Parcels type={user.type} />
                :
                    <Create user={user} setBorderColor={setBorderColor} setShow={setShow}/>
            }
        </div>
    </div>
  )
}

export default Sender