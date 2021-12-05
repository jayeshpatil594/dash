import { useEffect, useState } from "react";

const useDebounce = (value, timeout) => {
  const [state, setState] = useState(value);

  useEffect(() => {
    const timeoutId = setTimeout(() => setState(value), timeout);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [value, timeout]);

  return state;
};

export default useDebounce;
