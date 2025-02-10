import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function DesktopMenu({ menu }) {
  const [isHover, setIsHover] = useState(false);

  const subMenuVariants = {
    open: {
      opacity: 1,
      y: 0,
      display: "block",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    closed: {
      opacity: 0,
      y: -10,
      transition: { duration: 0.3, ease: "easeInOut" },
      transitionEnd: { display: "none" },
    },
  };

  const hasSubMenu = menu?.subMenu?.length > 0;

  return (
    <motion.li
      className="group relative"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <Link
        to={menu.path}
        className="flex items-center gap-1 hover:bg-white/5 px-3 py-1 rounded-xl transition duration-300"
      >
        {menu.name}
        {hasSubMenu && (
          <ChevronDown
            className={`transition-transform duration-300 ${
              isHover ? "rotate-180" : ""
            }`}
          />
        )}
      </Link>

      {hasSubMenu && (
        <motion.div
          className="absolute  left-0 mt-2 bg-white shadow-lg rounded-lg p-3 w-60"
          initial="closed"
          animate={isHover ? "open" : "closed"}
          variants={subMenuVariants}
        >
          <div className="grid gap-4 ">
            {menu.subMenu.map((submenu, i) => (
              <Link
                to={submenu.path}
                key={i}
                className="flex items-center gap-x-4 p-2 hover:bg-gray-100 rounded-lg transition"
                onClick={() => setIsHover(false)} // Close submenu on click
              >
                <div className="bg-gray-200  p-2 rounded-md">
                  {submenu.icon && <submenu.icon />}
                </div>
                <div>
                  <h6 className="font-semibold">{submenu.name}</h6>
                  <p className="text-sm text-gray-500">{submenu.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </motion.li>
  );
}
