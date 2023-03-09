import { Scheduler as SchedulerProps } from "./types";
import { useScheduler } from "./hooks/useScheduler";
declare const Scheduler: (props: SchedulerProps) => JSX.Element;
export { Scheduler, useScheduler };
