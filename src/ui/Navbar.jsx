import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
   const Menu = styled.div`
      /* background: var(--backdrop-color); */
      backdrop-filter: var(--filter-blue-md);
      border: 1px solid rgba(255, 255, 255, 0.1);
      box-shadow:var(--shadow-inset) ;
      height: 4rem;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      border-radius: var(--border-radius-lg);
      color: var(--color-gray-900);
      cursor: pointer;
      
      &:hover {
         background: #33383fa3;
      }
      &.active {
         background: var(--color-brand-700);
      }
   `;
   const MenuContent = styled.div`
      color: var(--color-grey-900);
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      font-size: 1.5rem;
      @media screen and (max-width: 770px) {
         :last-child {
            display: none;
         }
      }
   `;

function Navbar({ icon, name, link }) {

  const Navigate = useNavigate()
  const {pathname} = useLocation();
  console.log(pathname);
   return (
      <Menu className={pathname === `/${link}` ? "active" : ""}>
            <MenuContent onClick={()=> Navigate(link)}>
               <h3>{name}</h3>
               {icon}
            </MenuContent>
      </Menu>
   );
}

export default Navbar;
