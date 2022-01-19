const COLOR_LIST = ['#28c76f', '#ff9f43','#ea5455','#00cfe8','#ffc107', '#7367f0'];
// const labelCOLORLIST = ['red', 'orange','yellow', 'blue', 'green'];

export const pickColor = (labelList) => {
    // labelList에 있는 컬러를 뽑아
    const colorList = labelList.map( label => label.color );
    
    //labelList에 없는 컬러 중에 첫번째
    const [color] = COLOR_LIST.filter(color => !colorList.includes(color));

    return color;
}