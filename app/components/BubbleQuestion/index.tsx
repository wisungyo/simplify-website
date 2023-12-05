interface IBubbleQuestion {
  text: string;
  onClick: () => void;
}

const BubbleQuestion = ({ text, onClick }: IBubbleQuestion) => {
  return (
    <>
      <div
        className="py-2 px-3 rounded-xl text-xs whitespace-nowrap mr-2 mb-2 cursor-pointer shadow-sm ring-1 ring-inset ring-neutral hover:bg-neutral-content hover:text-neutral"
        onClick={onClick}
      >
        {text}
      </div>
    </>
  );
};

export default BubbleQuestion;
