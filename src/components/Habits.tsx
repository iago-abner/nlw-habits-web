interface HabitProps {
  completed: string;
}

export function Habit(props: HabitProps) {
  return (
    <div className="bg-orange-600 w-10 h-10 rounded m-2 flex items-center justify-center">
      {props.completed}
    </div>
  );
}
