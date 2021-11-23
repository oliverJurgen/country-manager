const useIsBrowser = (): boolean => {
  // to check if component is being rendered in client
  return typeof window !== "undefined";
};

export default useIsBrowser;
