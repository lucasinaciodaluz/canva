import TssxEntity, {Cause, Step} from "../json/TssxEntity.tsx";
import Guide, {CauseGuide, StepGuide} from "../json/Guide.tsx";

export const transform = async (object: TssxEntity): Promise<Guide> => {
    try {
        const guide: Guide = {
            id: "",
            guideId: "",
            name: "",
            explanation: "",
            causes: []
        };

        guide.name = object.tss.name;
        guide.id = object.tss.extraFields.attributes.guid;
        guide.guideId = object.tss.extraFields.attributes.guideid;
        guide.explanation = object.tss.explanation;

        object.tss.model.causes.cause.map((causeObject: Cause) => {
            const cause: CauseGuide = {
                id: "",
                name: "",
                explanation: "",
                steps: []
            };

            cause.id = causeObject.attributes.id;
            cause.name = causeObject.name;
            cause.explanation = causeObject.explanation;

            object.tss.model.steps.step.map((stepObject: Step) => {
                const step: StepGuide = {
                    id: "",
                    name: "",
                    explanation: "",
                    cost: "",
                    time: "",
                    probability: ""
                };

                if (cause.id === stepObject.causes_solved.cause_solved.attributes.id) {
                    step.id = stepObject.attributes.id
                    step.name = stepObject.name;
                    step.explanation = stepObject.explanation;
                    step.time = stepObject.attributes.web_author_time_cost_in_seconds;
                    step.cost = stepObject.attributes.web_author_total_cost_in_money;
                    step.probability = causeObject.attributes.prob;
                    cause.steps.push(step);
                }
            });
            guide.causes.push(cause);
        });
        return guide;
    } catch (error) {
        console.error('Failed to transform object:', error);
        throw error;
    }
};
