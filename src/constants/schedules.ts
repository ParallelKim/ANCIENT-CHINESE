import { scheduler } from "../utils";

type Schedule = {
  eventName: string;
  date: string;
};

const SCHEDULES: Schedule[] = [
  { eventName: "접수 시작", date: "202311060900" },
  { eventName: "접수 마감", date: "202311101600" },
  { eventName: "시험일", date: "202311191500" },
];

export const nearest = SCHEDULES[0];

SCHEDULES.forEach((SCHEDULE, idx) => {
  scheduler(SCHEDULE.date, () => {
    const next = SCHEDULES[idx + 1] ?? SCHEDULES[idx];

    nearest.date = next.date;
    nearest.eventName = next.eventName;
  });
});
