import { useState } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import FormRowVertical from "../../ui/FormRowVertical";
import { useLogin } from "./useLogin";
import SpinnerMini from "../../ui/SpinnerMini";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function LoginForm() {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const { login, isLoading } = useLogin();
   const navigator = useNavigate();
   
   function handleSubmit(e) {
     console.log("this is for test => ", isLoading);
      e.preventDefault();
      
      if (!email || !password)
      return toast.error("لطفا تمامی فیلد هارا پر کنید");
    
    let formData = {
      email: email.trim(),
      password: password.trim(),
    };
    
    login(formData, {
      onSuccess: () => {
        setPassword("");
        setEmail("");
        toast.success("ایمیل و رمز شما تایید شد. لطفا کد تایید را وارد کنید");
        navigator(`/login/verify/${formData.email}`);
      },
    });
   }

   return (
      <Form onSubmit={handleSubmit}>
         <FormRowVertical label="Email address">
            <Input
               type="email"
               id="email"
               // This makes this form better for password managers
               autoComplete="username"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               disabled={isLoading}
            />
         </FormRowVertical>

         <FormRowVertical label="Password">
            <Input
               type="password"
               id="password"
               autoComplete="current-password"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
               disabled={isLoading}
            />
         </FormRowVertical>
         <FormRowVertical>
            <Button size="large" disabled={isLoading}>
               {!isLoading ? "Log in" : <SpinnerMini />}
            </Button>
         </FormRowVertical>
      </Form>
   );
}

export default LoginForm;
