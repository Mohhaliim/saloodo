/* eslint-disable react/prop-types */
import { useState } from 'react';

import Client from '../Client/Client';
import Update from '../Update/Update';
import Parcels from '../Parcels/Parcels';

function Biker({user}) {
    const [ show, setShow ] = useState('picked')
    const [ update, setUpdate ] = useState(false);
    const [ updated, setUpdated ] = useState(false);
    const [ updateId, setUpdateId ] = useState(0);

    const showPicked = () => {
        setShow('picked');
        setUpdate(false);
    }

    const showAvailable = () => {
        setShow('available');
        setUpdate(false);
    }

  return (
    <div className="flex flex-col w-11/12 border border-blue_200 shadow-lg rounded-md py-10 px-6">
        <div className='flex'>
            <Client user={user}/>
            <div className='flex flex-1 gap-4 justify-end h-fit self-center'>
                <button onClick={() => showPicked()} className='bg-blue_200 px-6 py-2 text-lg rounded-md shadow-md'>Picked</button>
                <button onClick={() => showAvailable()} className='bg-blue_300 px-6 py-2 text-lg rounded-md shadow-md'>Available</button>
            </div>
        </div>
        <div className='flex justify-center pt-10'>
            {
                update ?
                    <Update setUpdate={setUpdate} updateId={updateId} user={user} step={show} setUpdated={setUpdated}/>
                :
                    show === 'picked' ?
                        <Parcels type={user.type} step={show} setUpdate={setUpdate} setUpdateId={setUpdateId} updated={updated}/>
                    :
                        <Parcels type={user.type} step={show} setUpdate={setUpdate} setUpdateId={setUpdateId} updated={updated}/>
            }
        </div>
    </div>
  )
}

export default Biker