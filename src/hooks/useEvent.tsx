import {useCallback, useEffect, useState} from "react";
import {Character} from "../components/Character/Character.type";
import {Credentials} from "../config/credentials";

export const useEvent= ()=>{
    const [events,setEvents]= useState<Array<Character>>([]);
    const handlerFetchEvent = useCallback(()=>{
        fetch(Credentials.DOMAIN+'/events'+Credentials.HEADERS)
            .then((res)=>res.json())
            .then((response)=>setEvents(response.data.results))
            .catch((error) => console.error('Error fetching data:', error));
    },[])

    return {
        handlerFetchEvent,
        events
    }
}