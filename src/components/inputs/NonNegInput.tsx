import {NumericInputProps} from "./NumericInputProps.tsx";

import {NumericInput} from "./NumericInput.tsx";

export function NonNegInput(props: NumericInputProps) {

    const validateIsNotNeg = (input: number) => {
        if (input < 0) {
            return (`Value cannot be negative`);
        } else {
            return null;
        }
    }

    return <NumericInput
        validation={validateIsNotNeg}
        {...props}
    />;
}