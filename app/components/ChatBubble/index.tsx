import { ChatBubble as ChatBubbleType } from "@/app/constants/types";

const ChatBubble = ({
  text,
  position,
  lastBubble,
  size = "normal",
  type = "normal",
}: ChatBubbleType) => {
  const stylesBg = position === "end" ? "bg-neutral" : "";
  const stylesPoss = position === "end" ? "justify-end" : "justify-start";
  const stylesLast = lastBubble ? "mb-4" : "";
  const stylesTextColor = position === "end" ? "text-neutral-content" : "";
  const stylesBorder = position === "end" ? "border-neutral" : "border-neutral";

  return (
    <>
      <div className={`flex flex-row ${stylesPoss} ${stylesLast}`}>
        <div className="max-w-[90%]">
          <div>
            <div
              className={`inline-block rounded-[16px] border px-4 py-2 text-sm ${stylesBorder} ${stylesBg} ${stylesTextColor}`}
            >
              {type === "quote" && (
                <p className="text-[10px] text-primary italic">
                  Quote of the day
                </p>
              )}
              <p>{text}</p>
              {type === "quote" && (
                <p className="text-[10px] text-primary italic text-end">
                  wisungyo.com
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatBubble;
