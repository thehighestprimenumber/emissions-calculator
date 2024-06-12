import {NumericInputProps} from "./NumericInputProps.tsx";
import {NumericInput} from "./NumericInput.tsx";


export function YearInput(props: NumericInputProps) {
    const validateYearIsInFuture = (year: number) => {
        const currentYear = new Date().getFullYear();
        if (year < currentYear) {
            return (`Year cannot be before ${currentYear}`);
        } else {
            return null;
        }
    }
    return <NumericInput
        validation={validateYearIsInFuture}
        {...props}
    />;
}




