import React, { useState } from 'react';
import EditIcon from '../assets/EditIcon.svg';
import CardSteps from './CardSteps';
import { StepGuide } from "../json/Guide.tsx";

interface CardProps {
    id: string;
    problem: string;
    description: string;
    stepsData: StepGuide[];
}

const CardGuide: React.FC<CardProps> = ({ id, problem, description, stepsData }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleAccordion = () => {
        setIsExpanded(!isExpanded);
    };

    const renderedSteps = (
        <div key={id} className="border-2 m-6 shadow-md rounded-lg bg-white">
            <CardSteps stepsData={stepsData} id={1} />
        </div>
    );

    return (
        <div className="border rounded-lg">
            <div
                className="flex justify-between items-center cursor-pointer py-[30px] px-[24px] bg-white"
                onClick={toggleAccordion}
            >
                <div className="flex gap-4 items-center">
                    <h2 className="text-2xl leading-6 text-black font-bold">{problem}</h2>
                    <img
                        src={EditIcon}
                        className="w-[16px] h-[16px]"
                        alt="EditIcon"
                    />
                </div>

                <div className="text-orange-500">
                    {isExpanded ? (
                        <svg
                            data-accordion-icon
                            className="w-3 h-3 rotate-180 shrink-0 transform transition"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 10 6"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 5 5 1 1 5"
                            />
                        </svg>
                    ) : (
                        <svg
                            data-accordion-icon
                            className="w-3 h-3 shrink-0 transform transition"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 10 6"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 1 5 5 9 1"
                            />
                        </svg>
                    )}
                </div>
            </div>

            <p className="px-[24px] text-base text-[#1E1E1E]">{description}</p>
            <hr className="mb-[22px]" />

            {isExpanded && renderedSteps}
        </div>
    );
};

export default CardGuide;
