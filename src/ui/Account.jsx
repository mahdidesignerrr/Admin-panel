import styled from "styled-components";
import Icon from "./Icon";
import useAdminToken from "../hooks/getAdminToken";
import { useAdmin } from "../features/authentication/useAdmin";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { apiUrl } from "../services/apiConfigs";
import Motion from "./Motion";
import { useNavigate } from "react-router-dom";
import { IconNotification, IconNotificationActive } from "../styles/Icons";

const AccountContents = styled.div`
   display: flex;
   justify-content: start;
   align-items: center;
   gap: 1.5rem;
   width: 100%;
   position: relative;
`;

const AccountImageWrapper = styled.div`
   position: relative;
   cursor: pointer;
   display: flex;
   justify-content: center;
   align-items: center;
   box-shadow: var(--shadow-md);
   border-radius: var(--border-radius-lg);
   transition: all 0.3s ease-in-out;
   &:hover {
      box-shadow: var(--shadow-outset);
      & div {
         opacity: 0;
      }
   }
`;

const AccountImage = styled.img`
   width: 50px;
   height: 50px;
   border-radius: 50%;
`;

const LiveActive = styled.div`
   position: absolute;
   bottom: 0;
   right: 0;
   width: 50px;
   height: 50px;
   border-radius: 50%;
   background-color: #0ed768;
   z-index: -1;
   animation: notShowOpacity 1.5s ease-in; // for don't show this in when the time of loading profile admin
   transition: opacity 0.5s ease-in;

   @keyframes notShowOpacity {
      0% {
         opacity: 0;
      }
      100% {
         opacity: 0;
      }
   }
   &:before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 90%;
      height: 90%;
      border-radius: 50%;
      background-color: #00ff73;
      animation: pulse 2s ease-in-out infinite;
      opacity: 0.5;
   }

   @keyframes pulse {
      0% {
         opacity: 0;
         transform: translate(-50%, -50%) scale(1);
      }
      50% {
         opacity: 0.5;
         transform: translate(-50%, -50%) scale(1.4);
      }
      100% {
         opacity: 0;
         transform: translate(-50%, -50%) scale(1);
      }
   }
`;

function Account() {
   const { adminToken } = useAdminToken();
   const { admin, isLoading } = useAdmin(adminToken);
   const navigate = useNavigate();
   let profile = "../../defaultLogoM.png";
   if (admin?.profile) profile = `${apiUrl}/${admin.profile}`;

   const handleClick = () => {
      if (!adminToken) {
         navigate("/login");
      }
   };

   return (
      <AccountContents>
         <Motion.wrapper>
            <AccountImageWrapper onClick={handleClick}>
               {adminToken && isLoading ? (
                  <Skeleton circle={true} height={50} width={50} />
               ) : (
                  <>
                     <AccountImage src={profile} />
                     <LiveActive />
                  </>
               )}
            </AccountImageWrapper>
         </Motion.wrapper>
         <Icon>
            <IconNotification />
            {/* {<IconNotificationActive />} */}
         </Icon>
      </AccountContents>
   );
}

export default Account;
