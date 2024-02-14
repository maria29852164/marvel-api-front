import {FC} from "react";
import {EventProps} from "./Event.type";

export const Event:FC<EventProps> = ({event})=>{
      return <div className={"bg-gray-200, border-2 border-gray-400 rounded w-44 px-3"}>
        <div>
            <h1>Event id  {
                event.id
            }</h1>
            <span>
                {event.title}
            </span>
        </div>
    </div>
}