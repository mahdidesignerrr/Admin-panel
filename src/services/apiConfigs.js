export const apiUrl = "https://ma-api.liara.run";
export const version = `/v2`;

export async function handleErrorApis (response, message = "خطایی رخ داده است") {
  if (!response.ok) {
    const errorData = await response.json();
    const errorMessage = Object.entries(errorData)[0][1]
    throw new Error(errorMessage || message);
  }
}