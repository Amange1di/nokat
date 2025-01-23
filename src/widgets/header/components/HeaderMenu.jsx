import { useState, useCallback } from "react";
import { NavLink } from "react-router-dom";

export const headerMenu = [
  { name: "ГЛАВНАЯ", path: "/home" },
  { name: "О РАЙОНЕ", path: "/about" },
  {
    name: "АДМИНИСТРАЦИЯ", path: "/administration",
    subMenu: [
      { name: "руководители", path: "/" },
      { name: "структура администрации", path: "/" },
      { name: "вакансии", path: "/" },
    ],
  },
  { name: "НОВОСТИ", path: "/news" },
  {
    name: "ОБРАЩЕНИЯ ГРАЖДАН", path: "/requests",
    subMenu: [
      { name: "Авторизоваться", path: "/" },
      { name: "Продолжить без авторизации", path: "/" },
      { name: "администрация", path: "/" },
    ],
  },
  { name: "ПРОЕКТЫ", path: "/projects" },
  {
    name: "АНТИКОРРУПЦИОННЫЕ МЕРОПРИЯТИЯ", path: "/events"
  },
  { name: "ГАЛЕРЕЯ", path: "/gallery" },
];

const HeaderMenu = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [timeoutId, setTimeoutId] = useState(null);

  const handleMouseEnter = useCallback((name) => {
    if (timeoutId) {
      clearTimeout(timeoutId); 
    }
    setActiveMenu(name);
  }, [timeoutId]);

  const handleMouseLeave = useCallback(() => {
    const id = setTimeout(() => {
      setActiveMenu(null);
    }, 300); 
    setTimeoutId(id);
  }, []);

  return (
    <div className="header_menu">
      {headerMenu.map((page) => (
        <div
          key={page.name}
          className="menu_item"
          onMouseEnter={() => page.subMenu && handleMouseEnter(page.name)}
          onMouseLeave={handleMouseLeave}
        >
          <NavLink to={page.path} className="link">
            {page.name}
          </NavLink>
          {page.subMenu && activeMenu === page.name && (
            <div className="dropdown_menu">
              {page.subMenu.map((subPage) => (
                <NavLink key={subPage.name} to={subPage.path} className="dropdown_link">
                  {subPage.name}
                </NavLink>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default HeaderMenu;
