// icons
import { XMarkIcon, CheckIcon } from "@heroicons/react/24/solid";

// radix
import * as Dialog from "@radix-ui/react-dialog";

// types
import { EduModelProps } from "@/types";

export default function EduModle({
  supTitle1,
  supTitle2,
  supDesc1,
  supDesc2,
  btn,
}: EduModelProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="px-6 py-3 font-semibold text-center text-white rounded-full shadow-sm outline-none bg-secondary text-md hover:bg-yellowHover">
        {btn}
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[100] DialogOverlay bg-black/50" />
        <Dialog.Content className="DialogContent fixed z-[120] sm:w-full w-[90%] max-w-md p-4 -translate-x-1/2 -translate-y-1/2 bg-white rounded-md shadow sm:p-8 change__dir top-1/2 left-1/2">
          <Dialog.Close className="float-right">
            <XMarkIcon className="w-7 h-7 text-secondary" />
          </Dialog.Close>
          <h2 className="text-xl font-semibold text-secondary mb-[0.4em]">
            {supTitle1}
          </h2>
          {supDesc1.map((desc) => (
            <p
              key={desc[0]}
              className="font-medium sm:text-[0.9rem] text-[0.8rem] text-mainBlack flex items-center justify-start pb-[0.2em] gap-3"
            >
              <CheckIcon className="w-5 h-5 text-secondary" /> {desc}
            </p>
          ))}
          <div className="w-[80%] mx-auto h-[2px] bg-mainGray my-[0.5em]" />
          <h2 className="text-xl font-semibold text-secondary mb-[0.4em]">
            {supTitle2}
          </h2>
          {supDesc2.map((desc) => (
            <p
              key={desc[0]}
              className="font-medium sm:text-[0.9rem] text-[0.8rem] text-mainBlack flex items-center justify-start pb-[0.2em] gap-3"
            >
              <CheckIcon className="w-5 h-5 text-secondary" /> {desc}
            </p>
          ))}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
