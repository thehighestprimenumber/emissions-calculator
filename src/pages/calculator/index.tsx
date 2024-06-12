import {useState} from 'react';
import {Typography} from '@mui/material';
import Paper from "@mui/material/Paper";
import {Action} from "../../types.ts";
import EmissionsInput from "./EmissionsInput.tsx";
import ActionsList from "./ActionsList.tsx";
import Projection from "./Projection.tsx";

function Calculator() {
    const [annualEmissions, setAnnualEmissions] = useState<number>();
    const [targetYear, setTargetYear] = useState<number>(2030);
    const [actions, setActions] = useState<Action[]>([
   ]);

    const handleAddAction = (action: Action) => {
        setActions([...actions, action]);
    };

    const handleUpdateAction = (index: number, updatedAction: Action) => {
        setActions((prev) => {
            const newActions = [...prev];
            newActions[index] = updatedAction;
            return newActions
        });
    };

    const handleDeleteAction = (index: number) => {
        const newActions = actions.filter((_, i) => i !== index);
        setActions(newActions);
    };

    const isValidStartData = annualEmissions && targetYear && annualEmissions > 0 && targetYear >= 1900

    return (
        <Paper sx={{margin: '3vw', padding: '2vw',}} elevation={5}>
            <Typography variant="h4" gutterBottom>Climate Action Plan</Typography>
            <EmissionsInput
                annualEmissions={annualEmissions}
                setAnnualEmissions={setAnnualEmissions}
                targetYear={targetYear}
                setTargetYear={setTargetYear}
            />
            {isValidStartData ? <>
                <ActionsList
                    actions={actions}
                    addAction={handleAddAction}
                    updateAction={handleUpdateAction}
                    deleteAction={handleDeleteAction}
                />

                <Projection
                    annualEmissions={annualEmissions}
                    targetYear={targetYear}
                    actions={actions}
                />
            </> : null}
        </Paper>
    );
}

export default Calculator;
