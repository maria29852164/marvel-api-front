import React, { FC } from "react";
import { CustomModalProps } from "./CustomModal.type";
import { Character } from "../Character/Character";
import { Serie } from "../Serie/Serie";
import { Event } from "../Event/Event";
import "./CustomModal.css";

export const CustomModal: FC<CustomModalProps> = ({
                                                      showModal,
                                                      handlerChangeStatus,
                                                      data
                                                  }) => {
    const { characters, events, series } = data;

    return (
        <>
            {showModal ? (
                <>
                    <div className="modal-overlay">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h3 className="text-3xl font-semibold">Characters</h3>
                            </div>
                            <div className="modal-body">
                                <div className="flex flex-wrap">
                                    {characters.map((character, index) => (
                                        <Character character={character} key={index} />
                                    ))}
                                </div>
                            </div>
                            <div className="modal-header">
                                <h3 className="text-3xl font-semibold">Events</h3>
                            </div>
                            <div className="modal-body">
                                <div className="flex flex-wrap">
                                    {series.map((serie, index) => (
                                        <Serie serie={serie} key={index} />
                                    ))}
                                </div>
                            </div>
                            <div className="modal-header">
                                <h3 className="text-3xl font-semibold">Series</h3>
                            </div>
                            <div className="modal-body">
                                <div className="flex flex-wrap">
                                    {events.map((event, index) => (
                                        <Event event={event} key={index} />
                                    ))}
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button
                                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={() => handlerChangeStatus(false)}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            ) : null}
        </>
    );
};
