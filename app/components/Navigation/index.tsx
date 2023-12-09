"use client";

import { navigation } from "@/app/constants/values";
import { useAppContext } from "@/app/AppContext";

const Navigation = () => {
  const { active } = useAppContext();

  const handleScroll = (elementId: string) => {
    const targetElement = document.getElementById(elementId);

    if (targetElement) {
      // Adjust the offset to include the extra space at the top | 1000 -> to make it sure it's very top
      const offset = elementId === "aboutme" ? 1000 : 110;
      const targetPosition =
        targetElement.getBoundingClientRect().top + window.pageYOffset - offset;

      if (!targetElement.classList.contains("active")) {
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });

        document.querySelectorAll(".active").forEach((el) => {
          el.classList.remove("active");
        });

        targetElement.classList.add("active");
      }
    }
  };

  return (
    <>
      <div className="flex flex-col gap-3">
        {navigation.map((data, index) => (
          <div key={index} className="flex flex-row items-center gap-3">
            <div
              className={`h-[1px] ${
                data.url === active
                  ? "w-20 bg-primary"
                  : "w-8 bg-neutral-content"
              }`}
            />
            <div
              className={`text-xs uppercase hover:cursor-pointer py-1 ${
                data.url === active && "text-primary"
              }`}
              onClick={() => handleScroll(data.url)}
            >
              {data.name}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Navigation;
