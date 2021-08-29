const STORAGE_KEY = "@pickpallet:favorites";

export function setItemStorage(value: string | any[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
}

export function getItemStorage() {
  if (typeof window === "undefined") return;
  const item = localStorage.getItem(STORAGE_KEY);

  if (!item) return [];
  return JSON.parse(item);
}
