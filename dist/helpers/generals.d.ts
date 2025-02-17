import { View } from "../components/nav/Navigation";
import { DefaultRecourse, FieldProps, ProcessedEvent, ResourceFields, SchedulerProps } from "../types";
import { StateEvent } from "../views/Editor";
export declare const getOneView: (state: Partial<SchedulerProps>) => View;
export declare const getAvailableViews: (state: SchedulerProps) => View[];
export declare const arraytizeFieldVal: (field: FieldProps, val: any, event?: StateEvent) => {
    value: any;
    validity: any;
};
export declare const getResourcedEvents: (events: ProcessedEvent[], resource: DefaultRecourse, resourceFields: ResourceFields, fields: FieldProps[]) => ProcessedEvent[];
export declare const traversCrossingEvents: (todayEvents: ProcessedEvent[], event: ProcessedEvent) => ProcessedEvent[];
export declare const calcMinuteHeight: (cellHeight: number, step: number) => number;
export declare const calcCellHeight: (tableHeight: number, hoursLength: number) => number;
export declare const differenceInDaysOmitTime: (start: Date, end: Date) => number;
export declare const filterTodayEvents: (events: ProcessedEvent[], today: Date, timeZone?: string) => ProcessedEvent[];
export declare const filterMultiDaySlot: (events: ProcessedEvent[], date: Date | Date[], timeZone?: string) => ProcessedEvent[];
export declare const convertEventTimeZone: (event: ProcessedEvent, timeZone?: string) => {
    start: Date;
    end: Date;
    event_id: string | number;
    title: string;
    disabled?: boolean | undefined;
    color?: string | undefined;
    editable?: boolean | undefined;
    deletable?: boolean | undefined;
    draggable?: boolean | undefined;
    allDay?: boolean | undefined;
};
export declare const getTimeZonedDate: (date: Date, timeZone?: string) => Date;
