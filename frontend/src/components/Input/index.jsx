import { forwardRef } from "react";

export const Input = forwardRef(({ label, error, ...rest }, ref) => {
    return (
        <div>
            <label>{label}</label>
            <input ref={ref} {...rest} />
            {error ? <p>{error.message}</p> : null}
        </div>
    );
});