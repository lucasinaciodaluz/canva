export default interface Guide {
    id: string
    guideId: string
    name: string
    explanation: string
    causes: CauseGuide[]
}

export interface CauseGuide {
    id: string
    name: string
    explanation: string
    steps: StepGuide[]
}

export interface StepGuide {
    id: string
    name: string
    explanation: string
    cost: string
    time: string
    probability: string
}
