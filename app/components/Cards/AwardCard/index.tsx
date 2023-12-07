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
      <div className="rounded-md p-3 ring-1 ring-neutral flex flex-row my-6 gap-3">
        <div className="rounded-md w-14 h-10 ring-1 ring-neutral w-15 flex flex-col justify-center items-center">
          <p className="text-sm font-bold text-primary">{honor}</p>
        </div>
        <div className="flex flex-col justify-between">
          <div className="text-sm">{place}</div>
          <div className="text-xs">
            <span className="text-primary">{getHonorText(honor)}</span> • {date}
          </div>
        </div>
      </div>
    </>
  );
};

export default AwardCard;
