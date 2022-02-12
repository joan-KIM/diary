// 00:00 형태 ---> 숫자값으로 표현
export function toTimeValue(str) {
    const [hour, minutes] = str.split(':');

    return Number(hour) * 60 + Number(minutes);
}

// 숫자값 ---> 00:00 형태로 표현
export function toTimeLabel(value) {
    const hour = Math.floor(value / 60);
    const minutes = value % 60;

    if(value === undefined){
        return '00:00';
    }

    return (hour<10 ? `0${hour}` : hour) + ':' + (minutes<10 ? `0${minutes}` : minutes);
}