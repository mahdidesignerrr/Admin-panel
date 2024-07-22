import { Outlet } from "react-router-dom";
import NavbarParent from "./NavbarParent";
import Navbar from "./Navbar";

function AppLayout() {
   return (
      <div>
         <Outlet />
         <NavbarParent>
            <Navbar/>
         </NavbarParent>
      </div>
   );
}

export default AppLayout;
