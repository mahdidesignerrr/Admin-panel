import { useEffect, useState } from "react";

export default function useAdminToken() {
  const [adminToken, setAdminToken] = useState(
    document.cookie.match(/token=([^;]+)/)?.[1],
  );

  useEffect(() => {
    setAdminToken(document.cookie.match(/token=([^;]+)/)?.[1]);
  });

  return { adminToken };
}
