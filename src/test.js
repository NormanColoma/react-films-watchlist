// const input = [-1,-2,-5,-6,2,5,7,1];

// const isNegativeNumber = (number) => number < 0;
// const doesNotOcurrInGivenCollection = (number) => !input.includes(number);

// const result = input.reduce((prev, current) => {
//     if (isNegativeNumber(current) || doesNotOcurrInGivenCollection(prev)) {
//         return prev;
//     }
//     return prev+1; 
//  }, 1);
//  console.log(result);

// Primero
// const A = -2;
// const B = 647;
// let index = A;
// let numberOfSquares = 0;

// const isInteger = number => Number.isInteger(number);


// while (index <= B) {
//     const squareRoot = Math.sqrt(index);
//     if (isInteger(squareRoot)) {
//         numberOfSquares++;
//     }
//     index++;
// }
// console.log(numberOfSquares);

const S = "Sun 10:00-20:00\nFri 05:00-10:00\nFri 16:30-23:50\nSat 10:00-24:00\nSun 01:00-04:00\nSat 02:00-06:00\nTue 03:30-18:15\nTue 19:00-20:00\nWed 04:25-15:14\nWed 15:14-22:40\nThu 00:00-23:59\nMon 05:00-13:00\nMon 15:00-21:00";
const dayOfWeeks = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const meetings = S.split("\n");


const isMeetingScheduledForDay = (meeting, day) => meeting.substring(0,3) === day;
const minutesFromHourString = (hourString) => {
    const fullHour = hourString.split(":");
    return parseInt(fullHour[0]) * 60 + parseInt(fullHour[1]);
}
const getMeetingsForGivenDay = day => meetings.filter(meeting => isMeetingScheduledForDay(meeting, day));
const buildMeetingsWithTimesInMinutesForDay = (meetings, day) => {
    return meetings.map(meeting => {
        const BLANK_SPACE = " ";
        const NO_CHARACTER = "";
        const HYPHEN_CHARACTER = "-";

        const meetingHoursString = meeting.replace(day+BLANK_SPACE, NO_CHARACTER);
        const meetingHours = meetingHoursString.split(HYPHEN_CHARACTER);


        return {
            day,
            start: minutesFromHourString(meetingHours[0]),
            end: minutesFromHourString(meetingHours[1])
        };
    });
}

const meetingsOrderedByDayOfWeek = dayOfWeeks.reduce((meetingsOrdered, dayOfWeek) => {
    const meetingsForDay = getMeetingsForGivenDay(dayOfWeek);
    return [...meetingsOrdered, ...meetingsForDay];
}, []);

const meetingsOrderedByDayOfWeeekWithTimesInMinutes = dayOfWeeks.reduce((meetingsOrdered, dayOfWeek) => {
    const meetingsForDay = buildMeetingsWithTimesInMinutesForDay(getMeetingsForGivenDay(dayOfWeek), dayOfWeek);
    return [...meetingsOrdered, ...meetingsForDay];
}, []);

const differenceBetweenMeetings = [];
meetingsOrderedByDayOfWeeekWithTimesInMinutes.reduce((prev, current, index) => {

    const { day: dayOfFirstMeeting, start: startOfFirstMeeting } = current;
    const { day: dayOfSecondMeeting, end: endOfSecondMeeting } = prev;
    let differenceBeetweenMeetingsInMinutes = 0;
    if (dayOfFirstMeeting !== dayOfSecondMeeting) {
        differenceBeetweenMeetingsInMinutes = 1440 - Math.abs(startOfFirstMeeting - endOfSecondMeeting);
    } else {
        differenceBeetweenMeetingsInMinutes = Math.abs(startOfFirstMeeting - endOfSecondMeeting);
    }
    const difference = {
        firstMeeting: meetingsOrderedByDayOfWeek[index-1],
        secondMeetings: meetingsOrderedByDayOfWeek[index],
        differenceInMinutes: differenceBeetweenMeetingsInMinutes
    }
    differenceBetweenMeetings.push(difference);
    return current;
})

// console.log(meetings);
console.log(meetingsOrderedByDayOfWeek);
console.log(meetingsOrderedByDayOfWeeekWithTimesInMinutes);
console.log(differenceBetweenMeetings);