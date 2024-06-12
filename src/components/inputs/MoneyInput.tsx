import {NumericInputProps} from "./NumericInputProps.tsx";
import {InputAdornment} from "@mui/material";

import {NumericInput} from "./NumericInput.tsx";

export function MoneyInput(props: NumericInputProps) {

    const validateIsNotNeg = (input: number) => {
        if (input < 0) {
            return (`Value cannot be negative`);
        } else {
            return null;
        }
    }

    return <NumericInput
        validation={validateIsNotNeg}
        InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>
        }}
        {...props}
    />;
}