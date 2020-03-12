import getTime from './getTime';

export default function getDuration(endTime,startTime){
    console.log(getTime(endTime),"et");
    console.log(getTime(startTime),"st");
    if(getTime(endTime)>getTime(startTime)){
        return `duration is :${(getTime(endTime)-getTime(startTime))/60} hrs and ${(getTime(endTime)-getTime(startTime))%60} min`;
    }
    else
        return "end time should be greater than start time "
}