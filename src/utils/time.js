export function toTimeValue(str) {
    const [hour, minutes] = str.split(':');

    return Number(hour) * 60 + Number(minutes);
}

export function toTimeLabel(value) {
    const hour = Math.floor(value / 60);
    const minutes = value % 60;

    return (hour<10 ? `0${hour}` : hour) + ':' + (minutes<10 ? `0${minutes}` : minutes);
}