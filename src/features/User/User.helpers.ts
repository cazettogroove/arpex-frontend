import { Auth, Cache } from 'aws-amplify';

export function setLocalStorageCache(): void {
  const localStorageCache = Cache.createInstance({
    keyPrefix: 'localStorageAuthCache',
    storage: window.localStorage,
  });

  Auth.configure({
    storage: localStorageCache,
  });
}

export function setSessionStorageCache(): void {
  const sessionStorageCache = Cache.createInstance({
    keyPrefix: 'sessionAuthCache',
    storage: window.sessionStorage,
  });

  Auth.configure({
    storage: sessionStorageCache,
  });
}

export async function checkAuth(): Promise<boolean> {
  try {
    await Auth.currentAuthenticatedUser();
    return true;
  } catch {
    return false;
  }
}
