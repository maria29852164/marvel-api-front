import {Character} from "../Character/Character.type";
import {Event} from "../Event/Event.type";
import {Serie} from "../Serie/Serie.type";

export interface CustomModalProps{
    showModal:boolean;
    handlerChangeStatus: (value: boolean)=>void
    data:{
        characters:Character[],
        events:Event[],
        series: Serie[]
    }
}