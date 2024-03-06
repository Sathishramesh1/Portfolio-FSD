import React, { useState, useEffect } from "react";

const NavigationDots = () => {
  const [active, setActive] = useState("home");
  const navList = ["home", "about", "skills", "work", "contact"];

  const handleClick = (item) => {
    setActive(item);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.clientHeight;
      const maxScroll = documentHeight - windowHeight;
      const pageHeight = maxScroll / navList.length;

      let currentPage = Math.floor(scrollPosition / pageHeight);
      currentPage = Math.max(0, Math.min(currentPage, navList.length - 1));

      setActive(navList[currentPage]);
      window.history.replaceState(null, "", `#${navList[currentPage]}`);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navList]);

  return (
    <div className="hidden lg:flex flex-col fixed z-40 right-0 bottom-0 lg:mb-20 mr-10">
      {navList.map((item, index) => (
        <a
          onClick={() => handleClick(item)}
          href={`#${item}`}
          key={item + index}
          className={` ${
            active === item
              ? "bg-green-500 dark:bg-dark-accent"
              : "bg-light-secondary/80 dark:bg-light-secondary hover:bg-light-secondary/50"
          } w-4 h-4 rounded-[50%] m-2 transition-colors cursor-pointer`}
        />
      ))}
    </div>
  );
};

export default NavigationDots;
