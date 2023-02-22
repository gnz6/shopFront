import { NavLink } from "react-router-dom"
import { Logout } from "../auth/forms/Logout"




export const Navbar = () => (
    <div>
        
   <nav className="fixed bg-black text-white w-full h-[50px] items-center">
    <ul className="flex  justify-between">
        <li>
            <h1>Sportia</h1>
        </li>
        <li>
            <Logout/>
        </li>

    </ul>

   </nav>
    </div>
)
