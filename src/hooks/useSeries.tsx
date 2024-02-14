import {useCallback, useEffect, useState} from "react";
import {Character} from "../components/Character/Character.type";
import {Credentials} from "../config/credentials";
import {Serie} from "../components/Serie/Serie.type";

export const useSeries= ()=>{
    const [series,setSeries]= useState<Array<Serie>>([]);
    const handlerFetchSeries = useCallback(()=>{
        fetch(Credentials.DOMAIN+'/series'+Credentials.HEADERS)
            .then((res)=>res.json())
            .then((response)=>setSeries(response.data.results))
            .catch((error) => console.error('Error fetching data:', error));
    },[])

    return {
        handlerFetchSeries,
        series
    }
}