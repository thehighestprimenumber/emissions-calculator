import {Box, Typography} from '@mui/material';
import {EmissionsGraph} from "./EmissionsGraph.tsx";
import EmissionsTable from "./EmissionsTable.tsx";
import {Action, DataByYear} from "../../types.ts";

interface ProjectionProps {
    annualEmissions: number;
    targetYear: number;
    actions: Action[];
}


function Projection({annualEmissions, targetYear, actions}: ProjectionProps) {
    const currentYear = new Date().getFullYear();
    const years = targetYear > currentYear ? Array.from({length: targetYear - currentYear + 1}, (_, i) => currentYear + i) : [];
    const actionImpact = (year: number) => {
        let emissions = annualEmissions
        let cost = 0;

        actions.forEach(action => {
            if (year >= action.startYear) {
                const yearsOfReduction = year - action.startYear + 1;
                emissions -= action.reduction * yearsOfReduction;
                cost += action.cost;
            }
        });

        return {emissions, cost};
    };

    const dataByYear: DataByYear[] = years.map(y => {
        const {emissions, cost} = actionImpact(y);
        return ({year: y, emissions, cost});
    })

    return (
        <Box>
            <Typography variant="h6">Emissions Projection</Typography>
            <Box style={{height: '100vh', width: '95vw', minWidth: '300px'}}>
                <EmissionsGraph dataByYear={dataByYear}/>
            </Box>
            <Box style={{marginTop: '10px'}}>
                <EmissionsTable dataByYear={dataByYear}/>
            </Box>
        </Box>
    )
}

export default Projection;
