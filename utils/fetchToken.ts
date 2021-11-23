import { loginRequest } from "configs/authconfig";

export async function fetchToken(msalInstance: any) {
  const account = msalInstance.getActiveAccount();

  const response = account
    ? await msalInstance.acquireTokenSilent({
        ...loginRequest,
        account: account,
      })
    : null;

  return response;
}

export default fetchToken;
