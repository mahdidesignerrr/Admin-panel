import { useNavigate } from "react-router-dom";
import { apiUrl } from "../services/apiConfigs";
import Skeleton from "react-loading-skeleton";
import Motion from "./Motion"
import styled from "styled-components";
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
   @media screen and (max-width: 768px) {
      width: 45px;
      height: 45px;
      & svg {
        width: 22px;
        height: 22px;
      }
   }
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
   @media screen and (max-width: 768px) {
      width: 45px;
      height: 45px;
      & svg {
        width: 22px;
        height: 22px;
      }
   }

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

function LogoAccount({admin, adminToken,isLoading}) {
  const navigate = useNavigate();
   let profile = "../../defaultLogoM.png";
   if (admin?.profile) profile = `${apiUrl}/${admin.profile}`;

   const handleClick = () => {
      if (!adminToken) {
         navigate("/login");
      }
   };

  return (
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
  )
}

export default LogoAccount
