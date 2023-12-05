import { tapHere } from "@/app/constants/labels";

interface IButton {
  onClick: () => void;
}

const Button = ({ onClick }: IButton) => {
  return (
    <>
      <div
        className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-neutral text-neutral-content px-3 py-2 text-sm font-semibold shadow-sm ring-1 ring-inset ring-neutral hover:bg-neutral-content hover:text-neutral cursor-pointer"
        onClick={onClick}
      >
        {tapHere}
      </div>
    </>
  );
};

export default Button;
