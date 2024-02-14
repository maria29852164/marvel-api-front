import {useCallback, useEffect, useState} from "react";
import {Character} from "../components/Character/Character.type";
import {Credentials} from "../config/credentials";

export const useCharacter= ()=>{
    const [characters,setCharacters]= useState<Array<Character>>([]);
    const handlerFetchCharacter = useCallback(()=>{
        fetch(Credentials.DOMAIN+'/characters'+Credentials.HEADERS)
            .then((res)=>res.json())
            .then((response)=>setCharacters(response.data.results))
            .catch((error) => console.error('Error fetching data:', error));
    },[])

    return {
        handlerFetchCharacter,
        characters
    }
}