import {FC} from "react";
import {SerieProps} from "./Serie.type";

export const Serie:FC<SerieProps>= ({serie})=>{
     return <div className={"bg-gray-200, border-2 border-gray-400 rounded w-44 px-3"}>
        <div>
            <h1>Serie id  {
                serie.id
            }</h1>
            <span>
                {serie.title}
            </span>
        </div>
    </div>
}