import React, { useEffect, useRef } from 'react';

const useEffectIf = (func, dep, value) => {
    const firstRun = useRef(false);

    useEffect(() => {
        if (firstRun.current && dep === value) func();
        else firstRun.current = true;
    }, [dep]);
}

export default useEffectIf;