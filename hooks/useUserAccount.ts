import React from "react";
import useSWR from "swr";
import create, { State } from "zustand";
import axios from "axios";
import { useTokenData } from "context/TokenContext";

const backendUrl = process.env.backendUrl as string;

type MeType = Record<string, any> | null;

interface UserState extends State {
  me: MeType;
  setUser: (payload: MeType) => void;
}

const useAccountStore = create<UserState>((set) => ({
  me: null,
  setUser: (payload: MeType) =>
    set((state: any) => (payload ? { ...state, me: payload } : null)),
}));

const profileFetcher = async (accessToken: string) => {
  // console.log({ backendUrl, accessToken });
  const instance = axios.create({
    baseURL: `${backendUrl}/api`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const response = (await instance.get("/profile")) as any;
  const { profile } = response.data;

  return profile;
};

const detFetch = (me: any, accessToken: string) => {
  if (me) return false;
  if (accessToken) return true;
  return false;
};

const useUserAccount = () => {
  const me = useAccountStore((state) => state.me);
  const setUser = useAccountStore((state) => state.setUser);

  const tokenData = useTokenData();
  const accessToken = tokenData?.accessToken;

  const { data, error } = useSWR(
    detFetch(me, accessToken) ? accessToken : null,
    profileFetcher
  );
  React.useEffect(() => {
    if (data) {
      setUser(data);
    }
  }, [data, setUser]);

  return {
    me: data || me,
    error,
  };
};

export default useUserAccount;
