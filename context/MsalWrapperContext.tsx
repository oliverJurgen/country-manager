import React from "react";
import { useRouter } from "next/router";
import { MsalProvider } from "@azure/msal-react";

import authorities from "constants/authorities";
import { CustomNavigationClient } from "utils/navigationclient";
import useMsalInstance from "hooks/useMsalInstance";
import useIsBrowser from "hooks/useIsBrowser";

const MsalWrapperProvider: React.FC = ({ children }) => {
  const isBrowser = useIsBrowser();

  const storedAuthority = isBrowser
    ? localStorage.getItem("storedAuthority")
    : null;

  const initialAuthority = storedAuthority || authorities.SIGNIN;

  const router = useRouter();

  const navigationClient = new CustomNavigationClient(router);

  const msalInstance = useMsalInstance(initialAuthority);
  msalInstance.setNavigationClient(navigationClient);

  // set to proper authority type to access tokenData that matches the correct authority
  return <MsalProvider instance={msalInstance}>{children}</MsalProvider>;
};

export default MsalWrapperProvider;
