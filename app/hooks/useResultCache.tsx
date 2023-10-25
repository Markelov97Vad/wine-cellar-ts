import { useCallback} from "react";

type Result = {
  [index: string]: unknown
}

function useResultCache() {
  const setResultCache = useCallback((key : string, value: Result) => {
    const current = JSON.parse(sessionStorage.getItem(key) as string);
    sessionStorage.setItem(key, JSON.stringify({...current, ...value}))
  }, [])

  const getResultCache = useCallback((key : string) => {
    return JSON.parse(sessionStorage.getItem(key) as string)
  }, [])

  return {setResultCache, getResultCache}
}

export default useResultCache;
