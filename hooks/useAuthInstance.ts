import getAuthedInstance from "../utils/getAuthedInstance";
import { useTokenData } from "../context/TokenContext";

const useAuthInstance = () => {
  const tokenData = useTokenData();
  const accessToken = tokenData?.accessToken;
  const instance = getAuthedInstance(accessToken);
  return instance;
};

export default useAuthInstance;
