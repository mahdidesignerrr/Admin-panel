import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const LogoContents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const StyledLogo = styled.img`
  width: 100px;
  filter: drop-shadow(0 0mm 1mm rgba(255, 255, 255, 0.236));
    `;

function Logo() {
   return (
   <LogoContents>
     <h2>وبلورا</h2>
     <StyledLogo src="../../logo-weblora-withShadow.png" />
   </LogoContents>
   )
}

export default Logo;
