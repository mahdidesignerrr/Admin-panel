import styled, { css } from "styled-components";

const Form = styled.form`
   ${(props) =>
      props.type === "regular" &&
      css`
         padding: 2.4rem 4rem;

         /* Box */
         backdrop-filter: blur(15px);
         background-color: #33383f51;
         border-radius: 7rem;
         border: 1px solid #33383f51;
         width: 100%;
         height: 100%;
      `}

   ${(props) =>
      props.type === "modal" &&
      css`
         width: 80rem;
      `}
    
  overflow: hidden;
   font-size: 1.4rem;
`;

Form.defaultProps = {
   type: "regular",
};

export default Form;
