import {CustomButton} from "./components/CustomButton/CustomButton";
import {useCallback, useState} from "react";
import {CustomModal} from "./components/CustomModal/CustomModal";
import {useCharacter} from "./hooks/useCharacter";
import {useSeries} from "./hooks/useSeries";
import {useEvent} from "./hooks/useEvent";

export default function App() {
    const [showModal,setShowModal]= useState(false);
    const handlerChangeStatus = useCallback((value: boolean)=>setShowModal(value),[])
    const {characters, handlerFetchCharacter}= useCharacter()

    const {series,handlerFetchSeries }= useSeries()
    const {events,handlerFetchEvent}= useEvent()
    const callbackCallInfo = useCallback(async()=>{
        await handlerFetchEvent();
        await handlerFetchCharacter();
        await handlerFetchSeries();
    },[])
  return (
      <div className="flex justify-center items-center">
        <CustomButton callback={callbackCallInfo} showCards={()=> setShowModal(true)}/>
          <CustomModal data={{
              characters,
              events,
              series
          }} showModal={showModal} handlerChangeStatus={handlerChangeStatus}/>
      </div>
  )
}