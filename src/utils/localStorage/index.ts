const STORAGE_KEY = "@pickpallet:";

export function setItemStorage(
  key: string = "favorites",
  value: string | any[]
) {
  localStorage.setItem(`${STORAGE_KEY}${key}`, JSON.stringify(value));
}

export function getItemStorage(key: string = "favorites") {
  if (typeof window === "undefined") return;
  const item = localStorage.getItem(`${STORAGE_KEY}${key}`);

  if (!item) return null;
  return JSON.parse(item);
}
