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
          <span key={index} className="flex">
            <div
              className="group flex flex-row items-center gap-3 hover:cursor-pointer"
              onClick={() => handleScroll(data.url)}
            >
              <div
                className={`h-[1px] ${
                  data.url === active
                    ? "w-20 bg-primary"
                    : "w-8 bg-neutral-content"
                } transition-all duration-200 group-hover:w-20 group-hover:bg-primary`}
              />
              <div
                className={`text-xs uppercase py-1 ${
                  data.url === active && "text-primary"
                } group-hover:text-primary transition-all duration-200`}
              >
                {data.name}
              </div>
            </div>
          </span>
        ))}
      </div>
    </>
  );
};

export default Navigation;
