import { loginRequest } from "configs/authconfig";

export async function callMsGraph(msalInstance: any) {
  const account = msalInstance.getActiveAccount();

  if (!account) {
    throw Error(
      "No active account! Verify a user has been signed in and setActiveAccount has been called."
    );
  }

  const response = await msalInstance.acquireTokenSilent({
    ...loginRequest,
    account: account,
  });

  const headers = new Headers();
  const bearer = `Bearer ${response.accessToken}`;

  headers.append("Authorization", bearer);

  const options = {
    method: "GET",
    headers: headers,
  };

  console.log(`API CALL now to our server with ${JSON.stringify(options)} `);

  // return fetch(graphConfig.graphMeEndpoint, options)
  //   .then((response) => response.json())
  //   .catch((error) => console.log(error));
}

export default callMsGraph;
