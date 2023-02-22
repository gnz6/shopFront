import { logout } from '../../../Redux/Reducers/auth/authSlice';
import { useAppDispatch, useAppSelector } from '../../../Redux/Store/store';
import { NavLink, useNavigate } from 'react-router-dom';
import { CheckingAuth } from '../../home/CheckingAuth';

export const Logout = () => {

    const {auth} = useAppSelector(state => state)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    
    const logoutUser = () => {
      dispatch(logout({}))
  }


    console.log(auth.status);
    

  return (
    <div>
        { 
        auth.status === "true"
        ?<button onClick={logoutUser} className='text-white border-white border-2'>Logout</button>
        :auth.status === "false"? 
        <div>
            <button onClick={()=> navigate("/login")} className='text-white border-white border-2'> Login </button>

            <button onClick={()=> navigate("/register")} className='text-white border-white border-2'> Register </button>
        </div>
        :
        <CheckingAuth/>
    }

    </div>
  )
}
