import { useState } from 'react';
import {
    Button,
    Box,
    // Typography,
    Dialog,
    // DialogActions,
    // DialogContent,
    // DialogContentText,
    // DialogTitle,

    Theme,
    useTheme
} from '@mui/material';
import ContactForm from 'src/components/contact-form';
import { PhoneEnabledSharp } from '@mui/icons-material';
import { indigo } from '@mui/material/colors';


interface ContactButtonProps {
    btnStyle?: object;
}

export default function ContactDialog({ btnStyle }: ContactButtonProps) {

    const theme: Theme = useTheme()

    const [openDialog, setOpenDialog] = useState(false);

    const [ form, setForm ] = useState(<>Form goes here</>)

    const handleCloseDialog = () => setOpenDialog(false);
    
    const handleOpenDialog = (e) => {
        setForm(<ContactForm closeModal={ handleCloseDialog } />)
        setOpenDialog(true);
    };

    return (
        <>
            <Button
                name='contact-dialog-open'
                color="inherit"
                // variant='contained'
                size='small'
                sx={{
                    ...btnStyle
                }}
                onClick={ handleOpenDialog }
            >
                Contact
                <PhoneEnabledSharp />
            </Button>

            <Dialog 
                open={ openDialog }
                onClose={ handleCloseDialog }
                sx={{
                    '& > * > *': {
                        borderRadius: '0',
                        minWidth: 250,
                        width: 400,
                        maxWidth: 400
                    }
                }}
            >
                <Box 
                    sx={{
                        bgcolor: 'primary.main',
                        border: '8px solid black',
                        borderColor: theme.palette.mode === 'dark' ? 'primary.dark' : indigo[300],
                        boxShadow: 24,
                        p: 4,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    { form }
                </Box>
            </Dialog>
        </>
    );
}