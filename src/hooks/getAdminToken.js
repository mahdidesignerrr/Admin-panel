import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { IconLoginSecurity } from "../styles/Icons";

export default function useAdminToken() {
  const navigate = useNavigate()

  const [adminToken, setAdminToken] = useState(
    document.cookie.match(/token=([^;]+)/)?.[1],
  );

  useEffect(() => {
    setAdminToken(document.cookie.match(/token=([^;]+)/)?.[1]);
  });

  if(!adminToken) {
    toast.error("لطفا جهت حفظ امنیت حساب شما وارد شوید", {
      icon: "🔐"
    })
    navigate("/login")
  }

  return { adminToken };
}
