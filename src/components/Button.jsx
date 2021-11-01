import React, {useState, useEffect, useRef} from "react";
import './style.css';

export default function Button(props){
    const ref = useRef();
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [offsetLeft, setoffsetLeft] = useState(0);
    const [offsetTop, setoffsetTop] = useState(0);
    const [left, setLeft] = useState(0);
    const [top, setTop] = useState(0);
    const [radius, setRadius] = useState(0);

    const [isShow, setIsShow] = useState(0);

    // 처음 html 등록됐을 때 실행
    useEffect( ()=> {
        if (ref.current){
            // console.log(ref.current);    // 버튼 (이 출력됨)
            setWidth(ref.current.clientWidth);
            setHeight(ref.current.clientHeight);
            setoffsetLeft(ref.current.offsetLeft);
            setoffsetTop(ref.current.offsetTop);
        }
    }, [ref]);

    useEffect( ()=>{
        setRadius(Math.max(width, height)/2);
    }, [width, height])

    const clickHandler = (event) => {
        setLeft(event.clientX - offsetLeft - radius);
        setTop(event.clientY - offsetTop - radius);
        setIsShow(true);
        setTimeout(()=>{
            setIsShow(false);
        }, 600)
        props.onClick();
    }

    return(
        <button style={{width:'100px', height:'60px'}} ref={ref} onClick = {clickHandler}>
            {props.title}
            {isShow && <span className="ripple"
            style={{width: radius*2, height:radius*2, left, top}} />}
        </button>
    )
}