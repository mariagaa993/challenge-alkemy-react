import { useState, useEffect } from 'react';

export const useModal = (obj) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        obj.length > 0 ? setShow(true) : setShow(false)
    }, [obj])

    return [show, setShow];
}
