import {useState} from 'react';
import {Box, Button, IconButton, List, ListItem, ListItemText, Typography} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ActionForm from './ActionForm.tsx';
import {Action} from "../../types.ts";
import AddIcon from "@mui/icons-material/Add";
import {formatCurrency} from "../../helpers.ts";

interface ActionsListProps {
    actions: Action[],
    updateAction: (index: number, updatedAction: Action) => void,
    deleteAction: (index: number) => void,
    addAction: (action: Action) => void
}

function ActionsList({actions, updateAction, deleteAction, addAction}: ActionsListProps) {
    const [editIndex, setEditIndex] = useState<number | null>(null);
    const [isCreatingAction, setIsCreatingAction] = useState(false)

    function handleSave(action: Action) {
        addAction(action);
        setIsCreatingAction(false)
    }

    return (
        <Box mt={4}>
            <Typography variant="h6">Climate Actions</Typography>
            {isCreatingAction
                ? <ActionForm
                    action={{}}
                    onSave={handleSave}
                    onCancel={() => setEditIndex(null)}/>
                : <Button onClick={() => setIsCreatingAction(prev => !prev)}>
                    <AddIcon/> Add Action
                </Button>}
            <List>
                {actions.map((action, index) => (
                    <ListItem key={index}>
                        {editIndex === index ? (
                            <ActionForm
                                action={action}
                                onSave={(updatedAction: Action) => {
                                    updateAction(index, updatedAction);
                                    setEditIndex(null);
                                }}
                                onCancel={() => setEditIndex(null)}
                            />
                        ) : (
                            <>
                                <ListItemText
                                    primary={action.title}
                                    secondary={`Start Year: ${action.startYear}, Reduction: ${action.reduction} tons/year, Cost: ${formatCurrency(action.cost)}`}
                                />
                                <IconButton onClick={() => setEditIndex(index)}>
                                    <EditIcon/>
                                </IconButton>
                                <IconButton onClick={() => deleteAction(index)}>
                                    <DeleteIcon/>
                                </IconButton>
                            </>
                        )}
                    </ListItem>
                ))}
            </List>
        </Box>
    );
}


export default ActionsList;
