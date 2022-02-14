import { useEffect } from "react";

export default function useStorage(data, setData) {
    useEffect(() => {
        // 최초접속했을때
        setData(
            //getItem 안에는 문자열만 저장가능
            //자바스크립트로 바꿔줌
            JSON.parse(localStorage.getItem('data'))
        );
    }, [])

    useEffect(() => {
        // 객체를 문자열로 바꾸는거임
        localStorage.setItem('data', JSON.stringify(data));
    }, [data])
}