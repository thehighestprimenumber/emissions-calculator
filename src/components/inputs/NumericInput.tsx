import React, {useState} from "react";
import {TextField, TextFieldProps} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

interface NumericTextField {
    label: string;
    value?: number;
    setValue: (e: number) => void;
    validation: (e: number) => string | null;
    InputProps?: TextFieldProps['InputProps'];
}

export function NumericInput({setValue, value, label, validation, InputProps}: NumericTextField) {
    const [error, setError] = useState<string | null>(null);


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = Number(e.target.value);
        const error = validation(inputValue)
        setError(error)
        setValue(inputValue);
    };

    return <Grid xs={12} md={3}>
        <TextField
            label={label}
            type="number"
            value={value || ''}
            error={!!error}
            helperText={error}
            onChange={handleChange}
            InputProps={InputProps}
        />
    </Grid>;
}