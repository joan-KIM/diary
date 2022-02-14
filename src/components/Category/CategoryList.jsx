import React, { useContext } from "react";
import { CategoryContext } from "../../store/CategoryStore";
import CategoryLabel from "./CategoryLabel";

export default function CategoryList() {
    const {labels} = useContext(CategoryContext)
    const labelList = labels.map( label => {
            return (
                <CategoryLabel name={label.name} bulletColor={label.color} isShown={labels.length > 1} />
            )
    });

    return(
        <ul className='category-list' >
            {labelList}
        </ul>
    )
}
