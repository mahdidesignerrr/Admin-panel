import styled, { css } from "styled-components";

const Row = styled.div`
   display: flex;

   ${(props) =>
      props.type === "horizontal" &&
      css`
         justify-content: space-between;
         align-items: center;
         width: 100%;
      `}

   ${(props) =>
      props.type === "vertical" &&
      css`
         flex-direction: column;
         align-items: flex-end;
      `}
`;

Row.defaultProps = {
   type: "vertical",
};

export default Row;
