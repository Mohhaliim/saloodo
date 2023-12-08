import { useState } from "react";
import { useNavigate } from "react-router-dom";

import userServices from "../../services/user.service";
import { isValidEmail, isValidName } from "../../util/verify";
import Loading from '../Loading/Loading';

function Register() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [borderColor, setBorderColor] = useState('border-blue_200');

  const register = (e) =>{
    e.preventDefault();
    setIsLoading(true);

    if(
        isValidEmail(e.target.email.value) &&
        isValidName(e.target.name.value) &&
        e.target.type.value !== "type" &&
        e.target.password.value === e.target.confirm.value
    ) {
      const user = {
        name: e.target.name.value,
        email: e.target.email.value,
        type: e.target.type.value,
        password: e.target.password.value
      }

      userServices.register(user)
        .then(res => {
          localStorage.setItem('id', res.data.id);
          localStorage.setItem('type', res.data.type);

          setTimeout(() => {
            setIsLoading(false)
            return navigate('/profile', { replace: true });
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
    }else {
      setBorderColor('border-red')
      setIsLoading(false);

      setTimeout(() => {
        setBorderColor('border-blue_200')
      }, 3000);
    }
  }

  return (
    <div>
      { isLoading ?
          <Loading />
        :
        <form onSubmit={(e) => register(e)} className={`flex flex-col w-80 items-center gap-8 border shadow-lg rounded-md py-14 ${borderColor}`}>
          <div className="flex flex-col gap-4">
            <input required name="name" id="name" type="text" placeholder="enter your name*" className="border border-blue_200 rounded-md focus-visible:outline-blue_500 pl-1 leading-8" />
            <input required name="email" id="email" type="email" placeholder="enter your email*" className="border border-blue_200 rounded-md focus-visible:outline-blue_500 pl-1 leading-8" />
            <select required name="type" id="type" className="border border-blue_200 rounded-md py-1 focus:outline-blue_500 bg-white">
              <option value="type">Type*</option>
              <option value="sender">Sender</option>
              <option value="biker">Biker</option>
            </select>
            <input required name="password" id="password" placeholder="enter your password*" type="password" className="border border-blue_200 rounded-md focus-visible:outline-blue_500 pl-1 leading-8" />
            <input required name="confirm" id="confirm" placeholder="confirm your password*" type="password" className="border border-blue_200 rounded-md focus-visible:outline-blue_500 pl-1 leading-8" />
          </div>
          <div className="flex gap-20">
            <button name="submit" type="submit" className=" bg-blue_200 px-4 py-1 rounded-md focus:bg-blue_400 ">Register</button>
          </div>
        </form>
      }
    </div>
  )
}

export default Register