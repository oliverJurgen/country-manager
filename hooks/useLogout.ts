import { useIsAuthenticated, useMsal } from "@azure/msal-react";

const useLogout = () => {
  const isAuthed = useIsAuthenticated();
  const { instance } = useMsal();

  const handleLogout = () => {
    if (isAuthed) {
      localStorage.removeItem("storedAuthority");
      instance.logoutRedirect();
    }
  };

  return handleLogout;
};

export default useLogout;
