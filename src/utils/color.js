const labelColorList = ['#28c76f', '#ff9f43','#ea5455','#00cfe8','#ffc107', '#7367f0'];
// const labelColorList = ['red', 'orange','yellow', 'blue', 'green'];

export const pickColor = (labelList) => {
    const colorsInList = labelList.map( label => label.color );

    let bulletColor = '';

    for(let i=0; i<labelColorList.length; i++){
        if( !colorsInList.includes(labelColorList[i]) ){
            bulletColor = labelColorList[i];
            break;
        }
    }
    
    return bulletColor;
}