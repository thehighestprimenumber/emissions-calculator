import React, {useState} from 'react';
import {Box, Button, TextField} from '@mui/material';
import Grid from "@mui/material/Unstable_Grid2";
import {Action} from "../../types.ts";
import {YearInput} from "../../components/inputs/YearInput.tsx";
import {MoneyInput} from "../../components/inputs/MoneyInput.tsx";
import {NonNegInput} from "../../components/inputs/NonNegInput.tsx";


interface ActionFormProps {
    addAction?: (action: Action) => void;
    action?: Action | Record<string, never>;
    onSave?: (action: Action) => void;
    onCancel?: () => void;
}

function ActionForm({
                        addAction,
                        action = {},
                        onSave,
                        onCancel
                    }: ActionFormProps) {

    const [title, setTitle] = useState(action.title);
    const [startYear, setStartYear] = useState(action.startYear);
    const [reduction, setReduction] = useState(action.reduction);
    const [cost, setCost] = useState(action.cost)
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newAction = {title, startYear, reduction, cost};
        if (onSave) {
            onSave(newAction)
        } else if (addAction) {
            addAction(newAction);
            setTitle('');
            setStartYear(new Date().getFullYear());
            setReduction(0);
        }
    };

    return (

        <Box component="form" onSubmit={handleSubmit} mt={2}>
            <Grid container spacing={2}>
                <Grid xs={12} md={6}>
                    <TextField
                        label="Action Title"
                        fullWidth
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        margin="normal"
                    />
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <YearInput
                    label={"Start Year"}
                    value={startYear}
                    setValue={setStartYear}/>

                <NonNegInput
                    label="Annual Emissions Reduction (tons)"
                    value={reduction}
                    setValue={setReduction}
                />
                <MoneyInput
                    label="Cost"
                    value={cost}
                    setValue={setCost}
                />
            </Grid>
            <Box mt={2}>
                <Button type="submit" variant="contained" color="primary">
                    Save
                </Button>
                {onCancel && (
                    <Button onClick={onCancel} variant="contained" color="secondary"
                            style={{marginLeft: '10px'}}>
                        Cancel
                    </Button>
                )}
            </Box>
        </Box>
    );
}


export default ActionForm;
