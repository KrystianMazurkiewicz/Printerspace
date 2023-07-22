import { token } from "data/constants";
import { baseURL } from "data/constants";

export default function login(email, password, abortController) {
  const options = {
    signal: abortController?.signal,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  };

  return fetch(
    `${baseURL}User/LogIn?inUserName=${email.split("@")[0]}&inPassword=${
      password || undefined
    }`,
    options
  )
    .then((response) => {
      if (!response.ok)
        throw new Error(`HTTP error, status = ${response.status}`);
      return response.json();
    })
    .then((data) => data.message)
    .catch((error) => console.error(error));
}
