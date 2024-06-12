export interface Action {
    title: string;
    startYear: number;
    reduction: number;
    cost: number;
}

export interface DataByYear {
    cost: number;
    year: number;
    emissions: number;
}