export default interface TssxEntity {
    tss: Tss
}

export interface Tss {
    attributes: Attributes
    name: string
    explanation: string
    note: string
    dataflow: Dataflow
    model: Model
    engine_tags: string
    adaptation_set: AdaptationSet
    messages: Messages
    extraFields: ExtraFields
    quicklinks: string
}

export interface Attributes {
    time: string
    version: string
}

export interface Dataflow {
    attributes: Attributes2
}

export interface Attributes2 {
    dataflowVersion: string
}

export interface Model {
    attributes: Attributes3
    costfactors: Costfactors
    cost_conversions: CostConversions
    causes: Causes
    steps: Steps
    questions: Questions
}

export interface Attributes3 {
    allquestions: string
    cause_prob_threshold: string
    costofcallservice: string
    m_leav: string
    m_switch: string
    min_eff: string
    minimumprob: string
    suggest_actions_threshold: string
    use_all_questions_first: string
    use_as_classifier: string
    willingness: string
}

export interface Costfactors {
    attributes: Attributes4
    costfactor: Costfactor[]
}

export interface Attributes4 {
    size: string
}

export interface Costfactor {
    attributes: Attributes5
}

export interface Attributes5 {
    weight: string
}

export interface CostConversions {
    factors: Factor[]
}

export interface Factor {
    factor: Factor2[]
}

export interface Factor2 {
    attributes: Attributes6
}

export interface Attributes6 {
    cost_conversion: string
    idx: string
}

export interface Causes {
    attributes: Attributes7
    cause: Cause[]
}

export interface Attributes7 {
    size: string
}

export interface Cause {
    attributes: Attributes8
    name: string
    explanation: string
    customer_name: string
}

export interface Attributes8 {
    consumable: string
    criticality: string
    fix_by_power_cycling_PC: string
    fix_by_power_cycling_printer: string
    guid: string
    id: string
    match_level: string
    not_customer_use: string
    prob: string
    programmatic_data: string
    refkeyword: string
}

export interface Steps {
    attributes: Attributes9
    step: Step[]
}

export interface Attributes9 {
    size: string
}

export interface Step {
    attributes: Attributes10
    name: string
    explanation: string
    causes_solved: CausesSolved
    only_after_actions: OnlyAfterActions
    mutex_actions: MutexActions
    only_after_questions: OnlyAfterQuestions
    not_after_questions: NotAfterQuestions
    fix_questions: FixQuestions
    endmessage: string
    stepAnswerText: string
    custName: string
}

export interface Attributes10 {
    and_or: string
    cannot_be_deferred: string
    cause_prob_threshold: string
    cost_enter: string
    cost_leave: string
    dataflow_type: string
    displayID: string
    evidenceStep: string
    first: string
    forceFollowStepId: string
    guid: string
    id: string
    irreversible: string
    labels: string
    last_action: string
    mandatory: string
    match_level: string
    move_comp: string
    multifault: string
    nlinks: string
    no_move_back: string
    not_customer_use: string
    number: string
    power_cycles_pc: string
    power_cycles_printer: string
    prob_given_none: string
    prob_requirements_fulfilled: string
    programmatic_data: string
    refkeyword: string
    reverse: string
    singleAnswerStep: string
    supermodel: string
    terminal_action: string
    type: string
    web_author_time_cost_in_seconds: string
    web_author_total_cost_in_money: string
    workaround: string
}

export interface CausesSolved {
    attributes: Attributes11
    cause_solved: CauseSolved
}

export interface Attributes11 {
    size: string
}

export interface CauseSolved {
    attributes: Attributes12
}

export interface Attributes12 {
    id: string
    prob: string
}

export interface OnlyAfterActions {
    attributes: Attributes13
}

export interface Attributes13 {
    size: string
}

export interface MutexActions {
    attributes: Attributes14
}

export interface Attributes14 {
    size: string
}

export interface OnlyAfterQuestions {
    attributes: Attributes15
}

export interface Attributes15 {
    size: string
}

export interface NotAfterQuestions {
    attributes: Attributes16
}

export interface Attributes16 {
    size: string
}

export interface FixQuestions {
    attributes: Attributes17
}

export interface Attributes17 {
    size: string
}

export interface Questions {
    attributes: Attributes18
    question: Question
}

export interface Attributes18 {
    size: string
}

export interface Question {
    attributes: Attributes19
    name: string
    state_names: StateNames
    answerids: Answerids
    explanation: string
    only_after_questions: OnlyAfterQuestions2
    not_after_questions: NotAfterQuestions2
    fix_questions: FixQuestions2
    prob_dists: ProbDists
    prob_given_none: ProbGivenNone
    custName: string
    labels: string
    forcenextsteps: Forcenextsteps
}

export interface Attributes19 {
    and_or: string
    cannot_be_deferred: string
    dataflow_type: string
    displayID: string
    end_question: string
    evidenceStep: string
    first: string
    guid: string
    id: string
    irreversible: string
    mandatory: string
    match_level: string
    not_customer_use: string
    number: string
    prob_requirements_fulfilled: string
    programmatic_data: string
    refkeyword: string
    state_names_size: string
    type: string
    type2: string
    web_author_time_cost_in_seconds: string
    web_author_total_cost_in_money: string
}

export interface StateNames {
    attributes: Attributes20
    state_name: StateName[]
}

export interface Attributes20 {
    size: string
}

export interface StateName {
    attributes: Attributes21
}

export interface Attributes21 {
    name: string
}

export interface Answerids {
    answerid: Answerid[]
}

export interface Answerid {
    attributes: Attributes22
}

export interface Attributes22 {
    id: string
}

export interface OnlyAfterQuestions2 {
    attributes: Attributes23
}

export interface Attributes23 {
    size: string
}

export interface NotAfterQuestions2 {
    attributes: Attributes24
}

export interface Attributes24 {
    size: string
}

export interface FixQuestions2 {
    attributes: Attributes25
}

export interface Attributes25 {
    size: string
}

export interface ProbDists {
    attributes: Attributes26
    prob_dist: ProbDist
}

export interface Attributes26 {
    size: string
}

export interface ProbDist {
    attributes: Attributes27
    probs: Prob[]
}

export interface Attributes27 {
    c_id: string
}

export interface Prob {
    attributes: Attributes28
}

export interface Attributes28 {
    value: string
}

export interface ProbGivenNone {
    prob: Prob2[]
}

export interface Prob2 {
    attributes: Attributes29
}

export interface Attributes29 {
    value: string
}

export interface Forcenextsteps {
    forcenextstep: Forcenextstep[]
}

export interface Forcenextstep {
    attributes: Attributes30
}

export interface Attributes30 {
    answer: string
    stepid: string
}

export interface AdaptationSet {
    attributes: Attributes31
}

export interface Attributes31 {
    adaptation_bOptIncludeOutdatedCases: string
    adaptation_dOptMLEThreshold: string
    adaptation_dOptOutlierDirichlet: string
    adaptation_dOptPriorDirichlet: string
    adaptation_nOptMaxIterations: string
    adaptation_nOptPriorCounts: string
}

export interface Messages {
    attributes: Attributes32
    endTextSuccess: string
    endTextFailure: string
}

export interface Attributes32 {
    endTextAsWeb: string
}

export interface ExtraFields {
    attributes: Attributes33
    fontState: FontState
}

export interface Attributes33 {
    guid: string
    guideid: string
    keywords: string
    modelPicturePath: string
    modelVersion: string
    publishVersion: string
}

export interface FontState {
    attributes: Attributes34
}

export interface Attributes34 {
    font: string
    keepSize: string
    options: string
    size: string
}
