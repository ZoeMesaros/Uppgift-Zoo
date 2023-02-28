export const useLocalStorage = () => {
  const get = (url: any) =>
    JSON.parse(localStorage.getItem(url) as any) || null;
  const set = (url: any, data: any) =>
    localStorage.setItem(url, JSON.stringify(data));
  return {
    get,
    set,
  };
};
