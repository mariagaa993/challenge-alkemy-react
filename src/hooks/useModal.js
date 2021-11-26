import { useState, useEffect } from 'react';

export const useModal = (obj) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        if(obj.length > 0) {
            setShow(true)
        } else {
            setShow(false)
        }
    }, [obj])

    return [show, setShow];
}
