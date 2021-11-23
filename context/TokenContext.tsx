import React from "react";
import createContext from "utils/createContext";
import useTokenResponse from "hooks/useTokenResponse";

const [useTokenContext, TokenContextProvider] = createContext<any>();

const TokenProvider: React.FC = ({ children }) => {
  const tokenData = useTokenResponse();

  return (
    <TokenContextProvider value={tokenData}>{children}</TokenContextProvider>
  );
};

export default TokenProvider;
export const useTokenData = () => useTokenContext();
