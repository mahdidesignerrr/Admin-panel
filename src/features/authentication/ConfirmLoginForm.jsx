import { useState } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import FormRowVertical from "../../ui/FormRowVertical";
import SpinnerMini from "../../ui/SpinnerMini";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { useConfirmLogin } from "./useConfirmLogin";

function ConfirmLoginForm() {
   const [code, setCode] = useState("");
   const { confirmLogin, isLoading } = useConfirmLogin();
   const navigator = useNavigate();

   const { email } = useParams();
   function handleSubmit(e) {
      e.preventDefault();

      if (!code) return toast.error("لطفا کد تایید را وارد کنید");
      let formData = {
         email: email.trim(),
         code: code.trim(),
      };

      confirmLogin(formData, {
         onSuccess: (data) => {
          if(data.token) {
            document.cookie =
              "token=" +
              data.token +
              ";path=/;expires=" +
              new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toUTCString();
          }
            toast.success(`${data.message}. خوش اومدید`);
            navigator("/");
         },
         onSettled: () => {
            setCode("");
         },
      });
   }

   return (
      <Form onSubmit={handleSubmit}>
         <FormRowVertical label="کد تایید">
            <Input
               type="number"
               id="number"
               value={code}
               onChange={(e) => setCode(e.target.value)}
               disabled={isLoading}
            />
         </FormRowVertical>

         <FormRowVertical>
            <Button size="large" disabled={isLoading}>
               {!isLoading ? "ارسال" : <SpinnerMini />}
            </Button>
         </FormRowVertical>
      </Form>
   );
}

export default ConfirmLoginForm;
