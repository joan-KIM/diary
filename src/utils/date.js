export const toDate = (dateObj) => {
    const year = dateObj.getFullYear() % 100;
    const month = dateObj.getMonth() + 1;
    const date = dateObj.getDate();

    return `${year}/${month}/${date}`;
}

export const toDateObj = (dateStr) => {
    const [year, month, date] = dateStr.split('/');
    const fullyear = Number(year) + 2000;

    return new Date(fullyear, month-1, date);
}

export const today = () => {
    return toDate(new Date());
}

export const getDay = (dateStr) => {
    const date = toDateObj(dateStr)
    return date.getDay();
}

export const enDay = (day) => {
    const dayList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return dayList[day];
}
