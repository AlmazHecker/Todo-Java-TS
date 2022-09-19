import { useState } from "react";

interface Param {
  [key: string]: string | number;
}

const getUrlParams = (location: string) => {
  const url = new URL(location);

  return { ...Object.fromEntries(url.searchParams.entries()) };
};

export function useSearchParams(): [Param, (p: Param) => void] {
  let params: Param = getUrlParams(window.location.href);
  const [, updateState] = useState(0);

  function setParams(searchParams: Param) {
    const url = new URL(window.location.href);

    for (let i in params) {
      url.searchParams.delete(i);
    }

    for (let i in searchParams) {
      url.searchParams.set(i, `${searchParams[i]}`);
    }

    window.history.pushState({}, "", url);
    params = Object.fromEntries(url.searchParams.entries());
    updateState((prev) => prev + 1);
  }

  return [params, setParams];
}
