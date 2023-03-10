import * as Popover from '@radix-ui/react-popover';
import clsx from 'clsx';
import { ProgressBar } from './ProgressBar';

interface HabitDayProps {
  completed: number
  amount: number
}
export function HabitDay({ completed, amount }: HabitDayProps) {
  const completedPercentage = Math.round((completed / amount) * 100)
  console.log(completedPercentage)
  return (
    <Popover.Root>
      <Popover.Trigger className={clsx("bg-zinc-900 border-2 border-zinc-700 w-10 h-10 rounded flex items-center justify-center", {
        "bg-violet-900 border-violet-800": completedPercentage > 0 && completedPercentage < 20,
        "bg-violet-800 border-violet-700": completedPercentage >= 20 && completedPercentage < 40,
        "bg-violet-700 border-violet-600": completedPercentage >= 40 && completedPercentage < 60,
        "bg-violet-600 border-violet-500": completedPercentage >= 60 && completedPercentage < 80,
        "bg-violet-500 border-violet-400": completedPercentage >= 80
      })} />
      <Popover.Portal>
        <Popover.Content className='flex flex-col min-w-[320px] p-6 rounded-xl bg-zinc-900 '>
          <span className="font-semibold text-zinc-400">Terça-feira</span>
          <span className="mt-1 font-extrabold leading-tight text-3xl">17/01</span>

          <ProgressBar progress={completedPercentage} />
          <Popover.Arrow width={20} height={16} className="fill-zinc-900" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
