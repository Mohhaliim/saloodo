/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

import proImg from '../../assets/profile.svg';
import userServices from "../../services/user.service";

function Client({user}) {
    const navigate = useNavigate();

    const logout = () =>{
        localStorage.removeItem("id");
        localStorage.removeItem("type");

        return navigate('/', { replace: true });
    }

    const deleteUser = () => {
        userServices.delete({id: user.id})
            .then(res => {
                logout();
            })
            .catch(err => {
                console.log(err)
            })
    }

  return (
    <div className="flex flex-1 items-center gap-4">
        <img src={proImg} alt="prfile" className='w-16' />
        <div className="flex flex-col">
            <h2 className='font-semibold text-l text-blue_600'>{user.name}</h2>
            <span className='text-blue_400'>{user.type}</span>
        </div>
        <div className='flex gap-2'>
            <button onClick={() => deleteUser()} className='bg-red rounded-md shadow-md text-white px-2 py-1 text-xs'>Delete</button>
            <button onClick={() => logout()} className='bg-blue_300 rounded-md shadow-md px-2 py-1 text-xs'>Logout</button>
        </div>
    </div>
  )
}

export default Client