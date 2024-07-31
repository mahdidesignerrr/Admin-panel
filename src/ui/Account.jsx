import styled from "styled-components";
import Icon from "./Icon";
import { useAdminToken } from "../hooks/getAdminToken";
import { useAdmin } from "../features/authentication/useAdmin";
import "react-loading-skeleton/dist/skeleton.css";
import { IconNotification, IconNotificationActive } from "../styles/Icons";
import { memo } from "react";
import SideBar from "./SideBar";
import LogoAccount from "./LogoAccount";

const AccountContents = styled.div`
   display: flex;
   justify-content: start;
   align-items: center;
   gap: 1rem;
   width: 100%;
   position: relative;
`;

const Account = memo(function Account() {
   const { adminToken } = useAdminToken();
   const { admin, isLoading } = useAdmin(adminToken);

   return (
      <AccountContents>
         <SideBar isLoading={isLoading} admin={admin} adminToken={adminToken}/>
         <Icon>
            <IconNotification />
            {/* {<IconNotificationActive />} */}
         </Icon>
         <LogoAccount admin={admin} adminToken={adminToken} isLoading={isLoading}/>
      </AccountContents>
   );
});

export default Account;
