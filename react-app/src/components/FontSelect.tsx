import classNames from "classnames";
import { RefObject, useEffect, useMemo, useState } from "react";
import { useOutsideClick } from "../hooks/useOutsideClick";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const fonts = [
  { id: "sans-serif", label: "Sans Serif", font: "font-sans-serif" },
  { id: "serif", label: "Serif", font: "font-serif" },
  { id: "mono", label: "Mono", font: "font-mono" },
]

export const FontSelect = () => {
  const [show, setShow] = useState(false);
  const [active, setActive] = useState(() => localStorage.getItem("font") ?? "sans-serif");

  const selected = useMemo(() => fonts.find(font => font.id === active), [active]);

  const toggle = () => setShow(s => !s);

  const ref = useOutsideClick<HTMLUListElement>(() => setShow(false));

  useEffect(() => {
    document.documentElement.classList.remove("font-sans-serif", "font-serif", "font-mono");
    document.documentElement.classList.add(selected?.font ?? "font-sans-serif");

    if (localStorage.getItem("font") === active) return;

    localStorage.setItem("font", active);
  }, [selected])

  return (
    <div role="combobox" className={"relative w-[9.75rem] z-50 mr-3"}>
      <button onClick={toggle} className="w-full flex justify-between items-center \
         gap-x-4 p-4 group/fontToggle rounded-2xl">
        <span className={classNames(selected?.font, "text-start text-body-m font-bold transition-colors duration-300 \
         ease-out group-hover/fontToggle:text-primary")}>
          {selected?.label ?? "Unknown"}
        </span>
        <ChevronDownIcon className="w-4 h-4 text-primary" />
      </button>

      <ul role="listbox" className={
        classNames(
          "absolute top-16 right-0 p-6 rounded-2xl bg-white dark:bg-gray-600\
         shadow-[0_0_30px_0] shadow-primary list-none w-[11.4375rem] \
         flex flex-col gap-y-4", 
         { "hidden": !show,}
        )} ref={ref}>
        {fonts.map((font) => (
          <li key={font.id} className="p-0 group/font">
            <button
              aria-selected={font.id === active}
              onClick={() => setActive(font.id)}
              className={classNames(font.font, "w-full text-start font-bold text-body-m \
                transition-colors duration-300 ease-out \
                group-hover/font:text-primary")}
            >
              {font.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
