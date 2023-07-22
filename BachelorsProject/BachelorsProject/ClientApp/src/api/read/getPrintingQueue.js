import { token } from "data/constants";
import { baseURL } from "data/constants";

export default async function getPrintingQueue(abortController) {
  const options = {
    signal: abortController?.signal,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  return fetch(`${baseURL}Admin/GetPrintingQueue`, options)
    .then((response) => {
      if (!response.ok)
        throw new Error(`HTTP error, status = ${response.status}`);
      return response.json();
    })
    .then((data) => data)
    .catch((error) => console.error(error));
}
