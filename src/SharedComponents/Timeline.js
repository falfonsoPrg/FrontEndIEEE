import React from 'react';
import {Timeline,TimelineItem,TimelineSeparator,TimelineConnector,TimelineContent,TimelineDot}  from '@material-ui/lab/';


export default function sharedTimeline(props) {
    

    const item = props.content.map((event,index) => {
        return (
            <TimelineItem key ={index}>
                <TimelineSeparator>
                    <TimelineDot style={{cursor:"pointer"}}onClick={()=>{props.changeFunction(event)}} />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent style={{cursor:"pointer"}} onClick={()=>{props.changeFunction(event)}} >{event.title}</TimelineContent>
            </TimelineItem>
        )
    })
    return (
        <div>
            <Timeline align={props.align}>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent></TimelineContent>
                </TimelineItem>
                   {item}
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot />
                    </TimelineSeparator>
                    <TimelineContent></TimelineContent>
                </TimelineItem>
            </Timeline>
        </div>
    );
}
