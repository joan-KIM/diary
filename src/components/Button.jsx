import React, {useState, useEffect, useRef} from "react";

export default function Button(props){
    const ref = useRef();
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [offsetLeft, setoffsetLeft] = useState(0);
    const [offsetTop, setoffsetTop] = useState(0);
    const [left, setLeft] = useState(0);
    const [top, setTop] = useState(0);
    const [radius, setRadius] = useState(0);

    const [isShow, setIsShow] = useState(false);

    // 처음 html 등록됐을 때 실행
    useEffect( ()=> {
        if (ref.current){
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
    }

    const mouseOverHandler = (event) => {
        event.target.style.boxShadow = "0 3px 10px rgb(234, 84, 85, 0.5)";
    }

    const removeShadow = (event) => {
        event.target.style.boxShadow = "none";
    }

    return(
        <button 
            className="add-task-btn"
            ref={ref}
            onClick = {clickHandler} onMouseOver={mouseOverHandler} 
            onMouseOut={removeShadow} onMouseDown={removeShadow}
        >
            {props.title}
            {isShow && <span className="ripple"
            style={{width: radius*2, height:radius*2, left, top}} />}
        </button>
    )
}