import { useEffect, useState } from "react";
import { useIsAuthenticated } from "@azure/msal-react";
import { useRouter } from "next/router";

const useAuthGuard = () => {
  const router = useRouter();

  const [authCount, setAuthCount] = useState(0);
  const attemptLimit = 4;
  const isAuthed = useIsAuthenticated();

  useEffect(() => {
    if (authCount > attemptLimit && !isAuthed) {
      router.push("/404");
      return;
    }

    if (!isAuthed) {
      setAuthCount((prev) => prev + 1);
    }

    console.log({ authCount });
  }, [authCount, isAuthed, router]);
};

export default useAuthGuard;
