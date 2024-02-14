import {FC} from "react";
import {CharacterProps} from "./Character.type";

export const Character:FC<CharacterProps>= ({character})=>{
    return <div className={"bg-gray-200, border-2 border-gray-400 rounded w-44 px-3"}>
        <div>
           <h1>Character id  {
               character.id
           }</h1>
            <span>
                {character.name}
            </span>
        </div>
    </div>
}