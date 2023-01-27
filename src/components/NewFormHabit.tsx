import { Check } from "phosphor-react";

export function NewFormHabit() {
  return (
    <form className="w-full flex flex-col mt-6">
      <label htmlFor="title" className="font-semibold leading-tight">
        Qual seu comprometimento?
      </label>
      <input
        type="text"
        id="title"
        placeholder="Digite seu novo hábito"
        className="p-4 mt-3 rounded-lg bg-zinc-800 text-white placeholder:text-zinc-400"
        autoFocus
      />

      <label htmlFor="" className="font-semibold leading-tight mt-4">
        Qual recorrência?
      </label>

      <button type="submit" className="flex items-center justify-center gap-3 mt-6 rounded-lg p-4 font-semibold bg-green-600 hover:bg-green-500">
        <Check size={20} weight="bold" />
        Confirmar
      </button>
    </form>
  )
}
