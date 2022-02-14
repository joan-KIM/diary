import React, {createContext, useState} from "react";
import {pickColor} from "../utils/color";

const initialLabels = [
    {
        'name':'Personal',
        'color':'#7367f0'
    },
    {
        'name':'Family',
        'color':'#28c76f'
    }, 
    {
        'name':'Business',
        'color': '#ff9f43'
    }
]

export const CategoryContext = createContext();

export default function CategoryStore({children}){
    const [labels, setLabels] = useState(initialLabels);

    const addNewLabel = (text) => {
        setLabels([
            ...labels,
            {
                'name' : text,
                'color' : pickColor(labels)
            }
        ]);
    }

    const removeLabel = (color) => {
        const removedLabels = labels.filter(label => label.color !== color);
        setLabels(removedLabels);
    }

    return(
        <CategoryContext.Provider value={{labels, addNewLabel, removeLabel}}>
            {children}
        </CategoryContext.Provider>
    )

}
