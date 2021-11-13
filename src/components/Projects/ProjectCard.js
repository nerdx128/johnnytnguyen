import React, { useState } from "react";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const OpenMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    margin: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.complex,
    }),
}));

export default function ProjectCard({project}) {
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card className="w-full">
            <CardContent className="w-full h-52" style={{padding: '0px'}}>
                <CardHeader
                    titleTypographyProps={{variant:'headline'}}
                    title={project.name}
                    subheader={project.company + " " +project.year}
                />
                <CardContent className="h-16 w-full">
                    <Typography paragraph>What is this?</Typography>
                </CardContent>
                <CardActions style={{margin: '15px 0 0', borderTop: '1px solid lightgray' }} disableSpacing className="text-center p-0">
                    <OpenMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon/>
                    </OpenMore>
                </CardActions>
            </CardContent>
        </Card>

    );
}
