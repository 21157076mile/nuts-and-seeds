export const setLocalStorage = <T>(key: string, value: T, ttl?: number) => {
  // TTL : Time to live
  if (typeof window === "undefined" || !key || !value) return;

  const now = new Date();
  const item = ttl ? {
    value,
    expiry: now.getTime() + ttl,
  } : value;

  return window.localStorage.setItem(key, JSON.stringify(item));
};

export const getLocalStorage = <T>(key: string): T | null => {
  if (typeof window === "undefined" || !key) return null;

  const result = window.localStorage.getItem(key);
  if (!result) return null;
  return JSON.parse(result);
};

export const getLocalStorageWithExpiry = <T>(key: string): T | null => {
  if (typeof window === "undefined" || !key) return null;

  const itemStr = localStorage.getItem(key);
  if (!itemStr) {
    return null;
  }
  const item = JSON.parse(itemStr);
  const now = new Date();
  if (now.getTime() > item.expiry) {
    localStorage.removeItem(key);
    return null;
  }
  return item.value;
};

export const deleteLocalStorage = (key: string) => {
  if (typeof window === "undefined") return;

  return window.localStorage.removeItem(key);
};

export const setSessionStorage = <T>(key: string, value: T) => {
  if (typeof window === "undefined" || !key || !value) return;

  return window.sessionStorage.setItem(key, JSON.stringify(value));
};

export const getSessionStorage = <T>(key: string): T | null => {
  if (typeof window === "undefined" || !key) return null;
  const result = window.sessionStorage.getItem(key);
  if (!result) return null;
  return JSON.parse(result);
};

export const deleteSessionStorage = (key: string) => {
  if (typeof window === "undefined") return;

  return window.sessionStorage.removeItem(key);
};
