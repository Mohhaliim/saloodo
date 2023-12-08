import { useState } from "react";
import { useNavigate } from "react-router-dom";

import userServices from "../../services/user.service";
import { isValidEmail } from "../../util/verify";
import Loading from '../Loading/Loading';

function Home() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [borderColor, setBorderColor] = useState('border-blue_200');

  const goToRegister = () =>{
    return navigate('/register', { replace: true });
  }

  const login = (e) =>{
    e.preventDefault();
    setIsLoading(true)

    if(isValidEmail(e.target.email.value)){
      const user = {
        email: e.target.email.value,
        password: e.target.password.value
      };

      userServices.login(user)
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
      {
        isLoading ?
          <Loading />
        :
          <form onSubmit={(e) => login(e)} className={`flex flex-col w-80 items-center gap-8 border shadow-lg rounded-md py-14 ${borderColor}`}>
            <div className="flex flex-col gap-4">
              <input required name="email" id="email" type="text" placeholder="enter your email*" className="border border-blue_200 rounded-md focus-visible:outline-blue_500 pl-1 leading-8" />
              <input required name="password" id="password" placeholder="enter your password*" type="password" className="border border-blue_200 rounded-md focus-visible:outline-blue_500 pl-1 leading-8" />
            </div>
            <div className="flex gap-20">
              <button name="submit" type="submit" className="bg-blue_500 px-4 py-1 rounded-md text-white focus:bg-blue_700">Login</button>
              <button onClick={() => goToRegister()} className=" bg-blue_200 px-4 py-1 rounded-md focus:bg-blue_400">Register</button>
            </div>
          </form>
      }
    </div>
  )
}

export default Home