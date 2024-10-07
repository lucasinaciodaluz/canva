import DOMPurify from 'dompurify';
import EditIcon from '../assets/EditIcon.svg';
import CostIcon from '../assets/CostIcon.svg';
import TimeIcon from '../assets/TimeIcon.svg';
import ProbabilityIcon from '../assets/ProbabilityIcon.svg';
import { StepGuide } from '../json/Guide.tsx';

interface CardProps {
    id: number;
    stepsData: StepGuide[];
}

const CardSteps: React.FC<CardProps> = ({ stepsData }) => {
    const sanitizeAndFixHTML = (htmlContent: string) => {
        return DOMPurify.sanitize(htmlContent, {FORBID_ATTR: ['style']});;
    };

    const renderedSteps = stepsData.map((step) => {
        const sanitizedExplanation = sanitizeAndFixHTML(step.explanation);

        return (
            <div key={step.name} className="rounded-lg mb-6">
                <div className="py-[30px] px-[24px]">
                    <h2 className="text-2xl leading-6 text-black font-bold mb-8">
                        <div>
                            <div className="flex gap-4 items-center">
                                {step.name}
                                <img
                                    src={EditIcon}
                                    className="w-[16px] h-[16px]"
                                    alt="EditIcon"
                                />
                            </div>
                        </div>
                    </h2>
                    <p
                        className="text-base text-[#1E1E1E]"
                        dangerouslySetInnerHTML={{ __html: sanitizedExplanation }}
                    ></p>
                </div>
                <div className="flex justify-end gap-4 px-4 py-2">
                    <div className="flex gap-2 text-[#696969]">
                        <img className="" src={CostIcon} alt="CostIcon" />
                        R$ {step.cost}
                    </div>
                    <div className="flex gap-2 text-[#696969]">
                        <img className="" src={TimeIcon} alt="TimeIcon" />
                        {step.time}
                    </div>
                    <div className="flex gap-1 text-[#696969]">
                        <img className="" src={ProbabilityIcon} alt="ProbabilityIcon" />
                        {step.probability ? parseFloat(step.probability).toFixed(2) : '0.00'}%
                    </div>
                </div>
            </div>
        );
    });

    return <>{renderedSteps}</>;
};

export default CardSteps;
