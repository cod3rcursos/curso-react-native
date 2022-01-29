import React, { useEffect, useRef } from 'react';

const useEffectIfNot = (func, deps, values) => {
    const firstRun = useRef(false);

    useEffect(() => {
        let shouldRun = true
        if (firstRun.current) {
            if(deps.length === values.length) {
                deps.forEach((value, index) => {
                    if(value === values[index]) shouldRun = false
                })
            }
            if(shouldRun) func()
        } else firstRun.current = true;
    }, deps);
}

export default useEffectIfNot;