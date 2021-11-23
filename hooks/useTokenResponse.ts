import { useEffect, useState } from "react";
import { useMsal, useIsAuthenticated } from "@azure/msal-react";
import { InteractionStatus } from "@azure/msal-browser";
import fetchToken from "utils/fetchToken";

const useTokenResponse = () => {
  const msalObj = useMsal();

  const { inProgress, instance } = msalObj;
  const [tokenResponse, setTokenResponse] = useState(null);
  const [count, setCount] = useState(0);
  const attemptLimit = 5;

  useEffect(() => {
    // console.log({ tokenResponse, inProgress });

    if (
      !tokenResponse &&
      inProgress === InteractionStatus.None &&
      count < attemptLimit
    ) {
      try {
        setCount((prev) => prev + 1);
        fetchToken(instance).then((response: any) => {
          setTokenResponse(response);
        });
      } catch (err) {
        console.log("ERROR HERE", err);
      }
    }
  }, [inProgress, tokenResponse, count, instance]);

  return tokenResponse;
};

export default useTokenResponse;
