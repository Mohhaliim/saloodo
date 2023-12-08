import './App.css'
import { Route,createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home'
import Profile from './components/Profile/Profile'
import Register from './components/Register/Register';
import Header from './components/Header/Header';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" Component={Home} />
      <Route path="/profile" Component={Profile} />
      <Route path="/register" Component={Register} />
    </>
  )
)

function App() {
  return (
    <>
      <Header/>
      <div className='flex justify-center' id='app'>
        <RouterProvider router={router}/>
      </div>
    </>
  )
}

export default App
