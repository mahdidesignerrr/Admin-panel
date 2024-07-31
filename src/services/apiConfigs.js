import toast from "react-hot-toast";

export const apiUrl = "https://ma-api.liara.run";
export const version = `/v2`;

export async function handleErrorApis (response, message = "خطایی رخ داده است") {
  if (!response.ok) {
    const errorData = await response.json();
    const errorMessage = Object.entries(errorData)[0][1]
    toast.error(errorMessage || message)
    throw new Error(errorMessage || message);
  }
}

export const SendToken = (adminToken) => ({ headers: {
      Authorization: `Bearer ${adminToken}`,
    }
  }
)