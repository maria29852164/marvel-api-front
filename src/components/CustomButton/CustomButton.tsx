import {FC} from "react";
import {CustomButtonProps} from "./CustomButton.type";
import {useCharacter} from "../../hooks/useCharacter";
import {useSeries} from "../../hooks/useSeries";
import {useEvent} from "../../hooks/useEvent";

export const CustomButton:FC<CustomButtonProps> = ({showCards,callback})=>{

    return <div>
        <button onClick={ async()=>{
            await callback()

            showCards()
        }} className={'bg-red-700 rounded text-white text-2xl p-2 border-2 border-red-900'}>fetch marvel api</button>
    </div>
}