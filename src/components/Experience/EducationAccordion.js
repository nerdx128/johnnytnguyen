import React, { useState } from "react";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {makeStyles} from "@mui/styles";
import {EducationData } from "./Education-data";
import { Container} from "@mui/material";
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';

const AccordionContainer = styled((props) => (
    <div {...props}/>
))(({ theme }) => ({
    marginRight: '20px',
}));

const Accordion = styled((props) => (
    <MuiAccordion elevation={5} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(0, 0, 0, .03)'
            : 'rgba(245, 100, 35, 1)',
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
    '&:first-of-type': {
        borderTopRightRadius: '7px',
        borderTopLeftRadius: '7px',
    },
    '&:last-of-type': {
        borderBottomRightRadius: '7px',
        borderBottomLeftRadius: '7px'
    },

}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ fontSize: '1.7rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {

    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(0),
        fontWeight: '600',
    },
}));

const AccordionDetails = styled((props) => (
    <MuiAccordionDetails {...props}/>
))(({ theme }) => ({
    backgroundColor: 'white',
}));

export default function EducationAccordion({schools}) {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        console.log(panel, event, isExpanded)
        setExpanded(isExpanded ? panel : false);
    };


    return (
        <AccordionContainer id='accordionContainer'>
            {schools.map(school => {
                return (
                    <Accordion id={school.id} expanded={expanded === school.id} onChange={handleChange(school.id)}>
                        <AccordionSummary sx={{}}
                            aria-controls={school.id + "bh-content"}
                            id={school.id + "bh-header"}
                        >
                            <Container sx={{width: '50%', display: 'flex', flexDirection: 'column', margin: '0px'}}>
                                <Typography sx={{ fontWeight: 'bold' }}>
                                    {school.name}
                                </Typography>
                                <Typography sx={{ fontWeight: '300', fontSize: '.9rem' }}>
                                    {school.degree.type} in {school.degree.plan}
                                </Typography>
                            </Container>                            <Typography sx={{ color: 'text.secondary',  width: '25%' }}>{school.year.finish}</Typography>
                            <Typography sx={{ color: 'text.secondary', textAlign: 'right' }}>
                                {school.location.city + ", " + school.location.state}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{display: 'flex', flexDirection: 'row', padding: 0}}>
                             <CardMedia
                                component="img"
                                src={school.banner.url}
                                alt={school.name}
                                sx={{height: '150px', width: '150px', backgroundColor: 'transparent'}}
                            />
                            <Container sx={{padding: '20px 0'}}>
                                <Typography>
                                    Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                                    Aliquam eget maximus est, id dignissim quam.
                                </Typography>
                                <Typography>
                                    Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                                    Aliquam eget maximus est, id dignissim quam.
                                </Typography>
                            </Container>
                        </AccordionDetails>
                    </Accordion>
                )
            })}
        </AccordionContainer>
    );
}
