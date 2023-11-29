import { forwardRef } from "react";
import { FontLabel, FontParagraph } from "../../styles/typograph";

export const Input = forwardRef(({ label, error, onChange, maxLength, ...rest }, ref) => {
    return (
        <div>
            <FontLabel font="big">{label}</FontLabel>
            <input ref={ref} onChange={onChange} maxLength={maxLength} {...rest} />
            {error ? <FontParagraph>{error.message}</FontParagraph> : null}
        </div>
    );
});