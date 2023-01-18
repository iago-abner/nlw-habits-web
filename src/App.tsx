import { Habit } from "./components/Habits";
import "./styles/main.css";

export default function App() {
  return (
    <>
      <Habit completed="3" />
      <Habit completed="10" />
      <Habit completed="12" />
    </>
  );
}
