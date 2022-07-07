import { useState, useEffect, Dispatch, SetStateAction } from "react";

type IResponse<T> = [T, Dispatch<SetStateAction<T>>];

export default function usePersistedState<T>(key: string, initialState: T): IResponse<T> {
    const getInitialValue = () => {
        const storedValue = localStorage?.getItem(key);
        if (storedValue) {
          return JSON.parse(storedValue);
        }
        return initialState;
    };
    const initalValue = getInitialValue();
    
    const [state, setState] = useState(initalValue);
    
    useEffect(() => {
      localStorage.setItem(key, JSON.stringify(state));
    }, [key, state]);
    
    return [state, setState];
}
