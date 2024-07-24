import toast from "react-hot-toast"
import { apiUrl, handleErrorApis, version } from "./apiConfigs"

export const getStoreInfo = async () => {
  const response = await fetch(`${apiUrl}${version}/infos/storeInfo`)
  return response.json()
}

export const login = async (body) => {
  const response = await fetch(`${apiUrl}${version}/auth/loginAdmin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });

  await handleErrorApis(response)
  return response;
};


export const confirmLogin = async ({ email, code }) => {
  const response = await fetch(`${apiUrl}${version}/auth/loginAdmin/${email}/${code}`, {
    method: 'POST'
  });

  await handleErrorApis(response)
  return response.json()
};

export const getMe = async (adminToken) => {
  const response = await fetch(`${apiUrl}${version}/users/getMe`, {
    headers: {
      Authorization: `Bearer ${adminToken}`,
    }
  });
  await handleErrorApis(response)
  return response.json()
}