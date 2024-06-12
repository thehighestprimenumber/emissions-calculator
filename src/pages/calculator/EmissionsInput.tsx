import Grid from "@mui/material/Unstable_Grid2";
import {YearInput} from "../../components/inputs/YearInput.tsx";
import {NonNegInput} from "../../components/inputs/NonNegInput.tsx";

interface EmissionsInputProps {
    annualEmissions?: number;
    setAnnualEmissions: (value: number) => void;
    targetYear: number;
    setTargetYear: (value: number) => void;
}

function EmissionsInput({annualEmissions, setAnnualEmissions, targetYear, setTargetYear}: EmissionsInputProps) {
    return (
        <Grid container spacing={2}>
            <NonNegInput
                label="Current Annual CO2 Emissions (tons)"
                value={annualEmissions}
                setValue={setAnnualEmissions}
            />

            <YearInput value={targetYear} setValue={setTargetYear} label={"Target Year"}/>

        </Grid>
    );
}

export default EmissionsInput;
