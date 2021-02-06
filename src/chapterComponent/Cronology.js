import React, {Component} from 'react';

import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import Typography from '@material-ui/core/Typography';

class Cronology extends Component
{
    constructor(props)
    {
        super(props);
    }
    
    render()
    {
        return(
            <div>
                    <TimelineItem>
                    <TimelineOppositeContent>
                        <Typography color="textSecondary">{this.props.crono.time}</Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography>{this.props.crono.activity}</Typography>
                    </TimelineContent>
                    </TimelineItem>
            </div>
        );
    }
}

export default Cronology;