import { useEffect, useMemo } from "react";
import { PublicClientApplication, EventType } from "@azure/msal-browser";
import { defaultMsalConfig } from "configs/authconfig";

const useMsalInstance = (authority: any) => {
  const newMsalConfig = useMemo(
    () => ({
      ...defaultMsalConfig,

      auth: {
        ...defaultMsalConfig.auth,
        authority: authority,
      },
    }),
    [authority]
  );

  const msalInstance = useMemo(
    () => new PublicClientApplication(newMsalConfig),
    [newMsalConfig]
  );

  // Account selection logic is app dependent. Adjust as needed for different use cases.

  useEffect(() => {
    const accounts = msalInstance.getAllAccounts();
    if (accounts.length > 0) {
      msalInstance.setActiveAccount(accounts[0]);
    }

    msalInstance.addEventCallback((event: any) => {
      // console.log({ eventType: event.eventType, event });
      if (
        event.eventType === EventType.LOGIN_SUCCESS &&
        event.payload.account
      ) {
        const { account } = event.payload;
        msalInstance.setActiveAccount(account);
      }
    });
  }, [msalInstance]);

  return msalInstance;
};

export default useMsalInstance;
