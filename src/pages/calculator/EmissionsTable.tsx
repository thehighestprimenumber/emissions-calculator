import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {DataByYear} from "../../types.ts";
import {formatCurrency} from "../../helpers.ts";

interface EmissionsTableProps {
    dataByYear: DataByYear[],
}


function EmissionsTable({dataByYear}: EmissionsTableProps) {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align="right">Year</TableCell>
                        <TableCell align="center">Emissions (TN)</TableCell>
                        <TableCell align="left">Cost (USD)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {dataByYear.map(({year, cost, emissions}) => (
                        <TableRow
                            key={year}
                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                        >
                            <TableCell align="right">{year}</TableCell>
                            <TableCell align="center"
                                       sx={{color: emissions > 0 ? 'rgba(255,35,35,0.84)' : '#56ff00'}}>{emissions}</TableCell>
                            <TableCell align="left">{formatCurrency(cost)}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default EmissionsTable;