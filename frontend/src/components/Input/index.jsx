import { forwardRef } from "react";

export const Input = forwardRef(({ label, error, onChange, maxLength, ...rest }, ref) => {
    return (
        <div>
            <label>{label}</label>
            <input ref={ref} onChange={onChange} maxLength={maxLength} {...rest} />
            {error ? <p>{error.message}</p> : null}
        </div>
    );
});