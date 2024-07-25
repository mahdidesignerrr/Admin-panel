import styled from "styled-components";
import Icon from "./Icon";
import useAdminToken from "../hooks/getAdminToken";
import { useAdmin } from "../features/authentication/useAdmin";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { apiUrl } from "../services/apiConfigs";
import Motion from "./Motion";
import { useNavigate } from "react-router-dom";

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
  &:hover{
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
      animation: pulse 1.5s ease-in-out infinite;
      opacity: 0.5;
   }

   @keyframes pulse {
      0% {
         opacity: 0;
         transform: translate(-50%, -50%) scale(1);
      }
      70% {
         opacity: 0.6;
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
            <svg
               width="24"
               height="24"
               viewBox="0 0 24 24"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
            >
               <path
                  d="M6.44784 7.96942C6.76219 5.14032 9.15349 3 12 3V3C14.8465 3 17.2378 5.14032 17.5522 7.96942L17.804 10.2356C17.8072 10.2645 17.8088 10.279 17.8104 10.2933C17.9394 11.4169 18.3051 12.5005 18.8836 13.4725C18.8909 13.4849 18.8984 13.4973 18.9133 13.5222L19.4914 14.4856C20.0159 15.3599 20.2782 15.797 20.2216 16.1559C20.1839 16.3946 20.061 16.6117 19.8757 16.7668C19.5971 17 19.0873 17 18.0678 17H5.93223C4.91268 17 4.40291 17 4.12434 16.7668C3.93897 16.6117 3.81609 16.3946 3.77841 16.1559C3.72179 15.797 3.98407 15.3599 4.50862 14.4856L5.08665 13.5222C5.10161 13.4973 5.10909 13.4849 5.11644 13.4725C5.69488 12.5005 6.06064 11.4169 6.18959 10.2933C6.19123 10.279 6.19283 10.2645 6.19604 10.2356L6.44784 7.96942Z"
                  stroke="#fff"
                  strokeWidth="2"
               />
               <path
                  d="M8 17C8 17.5253 8.10346 18.0454 8.30448 18.5307C8.5055 19.016 8.80014 19.457 9.17157 19.8284C9.54301 20.1999 9.98396 20.4945 10.4693 20.6955C10.9546 20.8965 11.4747 21 12 21C12.5253 21 13.0454 20.8965 13.5307 20.6955C14.016 20.4945 14.457 20.1999 14.8284 19.8284C15.1999 19.457 15.4945 19.016 15.6955 18.5307C15.8965 18.0454 16 17.5253 16 17"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
               />
            </svg>

            {/* <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.4553 2.47362C13.6943 2.16764 12.865 2 12 2C8.64392 2 5.82455 4.52345 5.45393 7.85899L5.20213 10.1252L5.19608 10.1793C5.08325 11.1625 4.76321 12.1106 4.25708 12.9611L4.22913 13.0077L3.6511 13.9711L3.62695 14.0114C3.38543 14.4138 3.16661 14.7785 3.02086 15.0879C2.87274 15.4024 2.71437 15.8286 2.7906 16.3117C2.86595 16.7893 3.11173 17.2233 3.48245 17.5337C3.85752 17.8476 4.3044 17.931 4.65029 17.9658C4.99066 18.0001 5.41591 18 5.8853 18L5.9322 18H18.0677L18.1146 18C18.584 18 19.0093 18.0001 19.3497 17.9658C19.6955 17.931 20.1424 17.8476 20.5175 17.5337C20.8882 17.2233 21.134 16.7893 21.2093 16.3117C21.2856 15.8286 21.1272 15.4024 20.9791 15.0879C20.8333 14.7785 20.6145 14.4138 20.373 14.0114L20.3488 13.9711L19.7708 13.0077L19.7429 12.9611C19.3641 12.3247 19.0896 11.6336 18.9281 10.914C18.6274 10.9705 18.3171 11 18 11C17.616 11 17.2422 10.9567 16.883 10.8748C17.0676 11.9715 17.4541 13.0259 18.0242 13.9839L18.0558 14.0367L18.6339 15.0001C18.9074 15.456 19.0722 15.733 19.1697 15.9401C19.175 15.9514 19.1799 15.9621 19.1844 15.972C19.1736 15.9733 19.1619 15.9746 19.1495 15.9759C18.9217 15.9988 18.5993 16 18.0677 16H5.9322C5.40061 16 5.07823 15.9988 4.85049 15.9759C4.83804 15.9746 4.82639 15.9733 4.81553 15.972C4.82001 15.9621 4.8249 15.9514 4.83024 15.9401C4.92776 15.733 5.09258 15.456 5.36609 15.0001L5.94412 14.0367L5.97575 13.9839C6.6265 12.8904 7.03797 11.6714 7.18304 10.4073L7.1899 10.3461L7.4417 8.07985C7.69977 5.75718 9.66301 4 12 4C12.463 4 12.9113 4.06898 13.3347 4.19767C13.5866 3.54594 13.9712 2.96023 14.4553 2.47362ZM16.9821 4.27804C16.3942 4.62632 16 5.26713 16 6C16 6.14503 16.0154 6.28645 16.0447 6.42272C16.1651 6.6476 16.2675 6.88404 16.3497 7.13021C16.7101 7.65547 17.3148 8 18 8C18.1918 8 18.3774 7.97298 18.5531 7.92254L18.546 7.85899C18.3938 6.48875 17.8283 5.25555 16.9821 4.27804Z" fill="#fff"/>
<path d="M9.10222 17.6647C9.27315 18.6215 9.64978 19.467 10.1737 20.0701C10.6976 20.6731 11.3396 21 12 21C12.6604 21 13.3024 20.6731 13.8263 20.0701C14.3502 19.467 14.7269 18.6215 14.8978 17.6647" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
<circle cx="18" cy="6" r="2.5" fill="#ff0000" stroke="#ff0000"/>
            </svg> */}
         </Icon>
      </AccountContents>
   );
}

export default Account;
