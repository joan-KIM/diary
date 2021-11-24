import {today, getDay ,enDay} from './date.js';

test("오늘 날짜 확인", () => {
   expect(today()).toBe('21/11/25');
})

test("요일 함수 확인", () => {
    const date = '21/11/26';
    expect(getDay(date)).toBe(5);
    expect(enDay(getDay(date))).toBe('Friday');
})
