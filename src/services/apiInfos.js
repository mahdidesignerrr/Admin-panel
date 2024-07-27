import { apiUrl, handleErrorApis, version } from "./apiConfigs";

export const getDashboard = async (adminToken,day) => {

  const response = await fetch(`${apiUrl}${version}/infos/adminsDashboard/${day}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${adminToken}`,
    }
  });

  await handleErrorApis(response);
  return response.json();
};