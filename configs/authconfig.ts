const clientId = process.env.clientId as string;

const authority = process.env.authority as string;
const rootUrl = process.env.rootUrl;

// Config object to be passed to Msal on creation
export const defaultMsalConfig = {
  auth: {
    clientId,
    authority,
    knownAuthorities: ["SwapooLabsDEV.b2clogin.com"],
    redirectUri: `${rootUrl}/redirect`,
    navigateToLoginRequestUrl: false,
    postLogoutRedirectUri: `/`,
  },
  cache: {
    cacheLocation: "localStorage",
    //   storeAuthStateInCookie: false, // If you wish to store cache items in cookies as well as browser cache, set this to "true".
  },
};

// **Added clientId in scopes to recieve accessToken see: https://github.com/AzureAD/microsoft-authentication-library-for-js/issues/2315
export const loginRequest = {
  scopes: ["openid", "offline_access", clientId],
};
