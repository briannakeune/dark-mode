import { useState } from 'react';

const useLocalStorage = (key, initialValue) => {
                    //^^^These are what args that will appear in the local storage
    const [storedValue, setStoredValue] = useState(() => {
        const storedItem = localStorage.getItem(key);
        //allows us to retrieve itm from local storage
        return storedItem ? JSON.parse(storedItem) : initialValue;
        //returns JSON item data back into it's original value if true
    });

    const setValue = value => {
        setStoredValue(value);
        localStorage.setItem(key, JSON.stringify(value));
        //this is what allows us to store in our local storage
    }

    return [storedValue, setValue];
};

export default useLocalStorage;