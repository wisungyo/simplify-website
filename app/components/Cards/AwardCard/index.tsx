interface IAwardCard {
  title: string;
  place: string;
  honor: string;
  date: string;
}

const AwardCard = ({ title, place, honor, date }: IAwardCard) => {
  const getHonorText = (text: string): string => {
    switch (text) {
      case "1st":
        return "Winner";
        break;
      case "2nd":
        return "Runner Up";
        break;
      case "3rd":
        return "Third Place";
        break;
      default:
        return "";
        break;
    }
  };

  return (
    <>
      <div className="rounded-md p-3 ring-1 ring-neutral flex flex-row my-6 gap-3 hover:bg-[#2F313F] md:hover:cursor-default group">
        <div className="rounded-md w-14 h-10 ring-1 ring-neutral w-15 flex flex-col justify-center items-center group-hover:ring-0 group-hover:bg-primary/10">
          <p className="text-sm font-bold text-primary">{honor}</p>
        </div>
        <div className="flex flex-col justify-between">
          <h3 className="text-sm">{place}</h3>
          <div className="flex flex-row gap-2 text-xs">
            <span className="text-primary">{getHonorText(honor)}</span>
            <span>•</span>
            <span>{date}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default AwardCard;
