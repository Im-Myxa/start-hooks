import React, { useState, useEffect, useRef, useCallback } from "react";

import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const UseCallBackExample = () => {
    const [data, setData] = useState({});
    const withOutCallback = useRef(0);
    const withCallback = useRef(0);

    const handleChange = ({ target }) => {
        setData((prev) => ({ ...prev, [target.name]: target.value }));
    };
    // withOut Callback
    const validateWithOutCallback = (data) => {
        console.log(data);
    };
    useEffect(() => {
        withOutCallback.current++;
    }, [validateWithOutCallback]);

    // with Callback
    const validateWithCallback = useCallback((data) => {
        console.log(data);
    }, []);
    useEffect(() => {
        withCallback.current++;
    }, [validateWithCallback]);

    useEffect(() => {
        validateWithCallback(data);
        validateWithOutCallback(data);
    }, [data]);

    return (
        <CardWrapper>
            <SmallTitle>Example</SmallTitle>
            <p>Render withOutCallback:{withOutCallback.current}</p>
            <p>Render withCallback:{withCallback.current}</p>

            <label htmlFor="email" className="form-label">
                Email
            </label>
            <input
                onChange={handleChange}
                name="email"
                value={data.email || ""}
                type="email"
                className="form-control"
                id="email"
            />
        </CardWrapper>
    );
};

export default UseCallBackExample;
