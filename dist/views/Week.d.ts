/// <reference types="react" />
import { CellRenderedProps, DayHours } from "../types";
import { WeekDays } from "./Month";
export interface WeekProps {
    weekDays: WeekDays[];
    weekStartOn: WeekDays;
    startHour: DayHours;
    endHour: DayHours;
    step: number;
    cellRenderer?(props: CellRenderedProps): JSX.Element;
    navigation?: boolean;
    disableGoToDay?: boolean;
}
declare const Week: () => JSX.Element;
export { Week };
