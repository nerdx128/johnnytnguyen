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
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {makeStyles} from "@mui/styles";
import {EducationData} from "./Education-data";

const SchoolMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(270deg)' : 'rotate(90deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.complex,
    }),
}));

const SchoolExpander = styled((props) => {
    const {expand, ...other} = props;
    return <div {...other}/>;
})(({ expand }) => ({
        maxWidth: !expand ? '325px' : '',
        padding: '6px'
}));

export default function EducationCard({school}) {
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <SchoolExpander expand={expanded}>
        <Card className="flex flex-row" >
            <CardContent style={{minWidth: '313px', maxWidth: '313px', padding: '0px'}}>
                <CardHeader
                    titleTypographyProps={{variant:'headline'}}
                    title={school.name}
                    subheader={school.year.finish}
                />
                <CardMedia
                    className="h-30 bg-gray-100"
                    component="img"
                    src={school.banner.url}
                    alt={school.name}
                />
                <CardContent className="p-4">
                    <Typography style={{fontWeight: '200', fontFamily: 'LemonMilk', lineHeight: '1.25'}} className="p-0 font-bold font-sans">
                        {school.degree.type}
                    </Typography>
                    <Typography style={{fontWeight: '100', fontSize: '.75rem', lineHeight: '1.25'}} className="p-0">
                        {school.degree.focus}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <SchoolMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon/>
                    </SchoolMore>
                </CardActions>
            </CardContent>
            <Collapse in={expanded} orientation={"vertical"}  timeout={{
                appear: 500,
                enter: 500,
                exit: 0,
            }} unmountOnExit>
                <CardContent>
                    <Typography style={{fontWeight: 'bold'}}>Courses:</Typography>
                    <Typography style={{fontSize: '.9rem'}}>
                        {school.courses.join(", ")}
                    </Typography>
                    <Typography style={{fontWeight: 'bold', paddingTop: '5px'}}>Projects:</Typography>
                    {school.projects.map(project =>
                        <>
                            <Typography style={{fontSize: '.9rem', fontWeight: 'bold', fontStyle: 'italic'}}>{project.name} - {project.description}</Typography>
                            <CardContent style={{padding: '5px 10px'}}>
                                <Typography style={{fontSize: '.9rem'}}></Typography>
                                <Typography style={{fontSize: '.9rem'}}>{project.purpose}</Typography>
                                <Typography style={{fontSize: '.9rem'}}><span className="font-bold">Responsibilities: </span>{project.responsibilities}</Typography>
                            </CardContent>
                        </>
                    )}

                </CardContent>
            </Collapse>
        </Card>
        </SchoolExpander>
    );
}
