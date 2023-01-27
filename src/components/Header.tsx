import * as Dialog from '@radix-ui/react-dialog';
import { Plus, X } from "phosphor-react";
import logoImage from "../assets/logo.svg";
import { NewFormHabit } from './NewFormHabit';

export function Header() {
  return (
    <div className="w-full max-w-3xl mx-auto flex items-center justify-between">
      <img src={logoImage} alt="logo habits" />
      <Dialog.Root>
        {/* Trigger para desencadear o chamado do modal */}
        <Dialog.Trigger
          type="button"
          className="border border-violet-500 font-semibold rounded-lg px-6 py-4 flex items-center gap-3 hover:border-violet-400"
        >
          <Plus className="text-violet-500" size={20} />
          Novo hábito
        </Dialog.Trigger>

        {/* Portal para não exibir o modal no header, e sim, leva-lo a ser exibido no body */}
        <Dialog.Portal>
          {/* Overlay para aplicar opacidade ao bg */}
          <Dialog.Overlay className="w-screen h-screen fixed bg-black/80 inset-0 " />
          <Dialog.Content className="absolute p-10 rounded-2xl bg-zinc-900 w-full max-w-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Dialog.Close className="absolute right-6 top-6 text-zinc-400 hover:text-zinc-200">
              <X size={24} aria-label="Fechar" />
            </Dialog.Close>
            <Dialog.Title className="text-3xl leading-tight font-extrabold">
              Criar hábito
            </Dialog.Title>
            <NewFormHabit />
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>


    </div>
  );
}
