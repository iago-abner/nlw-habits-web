import { generateDates } from "../utils/generate-dates";
import { HabitDay } from "./HabitDay";

const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];

const summaryDates = generateDates();

const minimumSummaryDates = 18 * 7;
const amountOfDaysToFill = minimumSummaryDates - summaryDates.length;

export function SummaryTable() {
  return (
    <div className="w-full flex">
      <div className="grid grid-rows-7 grid-flow-row gap-3">
        {weekDays.map((day, index) => {
          return (
            <div
              key={`${day} - ${index} `}
              className="text-zinc-400 text-xl h-10 w-10 font-bold flex justify-center items-center"
            >
              {day}
            </div>
          );
        })}
      </div>

      <div className="grid grid-rows-7 grid-flow-col gap-3">
        {summaryDates.map((date) => {
          return <HabitDay key={date.toString()} />;
        })}

        {amountOfDaysToFill > 0 &&
          Array.from({ length: amountOfDaysToFill }).map((_, i) => {
            return (
              <div
                key={i}
                className="bg-zinc-900 border-2 border-zinc-700 w-10 h-10 rounded flex items-center justify-center opacity-40"
              />
            );
          })}
      </div>
    </div>
  );
}
