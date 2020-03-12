import React, { useState } from 'react';
import { DatePicker, TimePicker, Input, Button } from 'antd';
import moment from 'moment';
import dateString from './dateString';
import getTime from './getTime';
import getDuration from './getDuration';
import printActivity from './printActivity';

function Activity(props){
    const [date, setDate] = useState();
    const [startTime,setStartTime] = useState();
    const [endTime,setEndTime] = useState();
    const [activityTitle,setActivityTitle] = useState();
    const [msg, setMsg] = useState();
    const [activity,setActivity] = useState();

    return (
    <React.Fragment>
        <Input onChange={(event)=>setActivityTitle(event.target.value)} placeholder="Enter an activity" />
        <br/>
        
        <DatePicker onChange={
                        (date)=>{
                            setDate(date);
                        } 
                    }/>
        <br/>
        <TimePicker placeholder = "Start Time" onChange={
                        (time)=>{
                            setStartTime(time);
                        }
                    }defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} />
        <br/>
        <TimePicker placeholder = "End Time" min={startTime} max="24:00" onChange={
                        (time)=>{
                            setEndTime(time);
                            let duration = getDuration(endTime,startTime);
                            setMsg(duration);
                            
                        }
                    }defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} />

        <br/>
        <Button onClick={()=>{
                                setActivity({"startTime":getTime(startTime),
                                           "endTime":getTime(endTime),
                                           "date":dateString(date),
                                           "activity":activityTitle
                                });
                                printActivity(activity)
                            }
                                    }>Add Activity</Button>
        <span>{msg}</span>

    </React.Fragment>
    );
}

export default Activity;