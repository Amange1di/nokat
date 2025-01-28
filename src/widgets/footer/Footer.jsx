import logo from "../../shared/img/logo.png";
import HeaderMenu from "../header/components/HeaderMenu";
import instagramIcon from "../../shared/img/instagramIcon.svg";
import ffff from "../../shared/img/ffff.svg";
import koz from "../../shared/img/koz.svg";
import "./Footer.scss";
import { NavLink } from "react-router-dom";

const statistics = [
  { label: "Просмотры", value: 124 },
  { label: "Посетители", value: 124 },
  { label: "Визиты", value: 124 },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer_group">
          {/* Логотип и название */}
          <div className="footer_group_logo">
            <img src={logo} alt="Logo" />
            <h1>НООКАТСКАЯ АДМИНИСТРАЦИЯ</h1>
          </div>

          {/* Навигация */}
          <div className="footer_group_nav">
            <h2>Навигация</h2>
            <nav>
              <HeaderMenu />
              <NavLink to="/aboutsmm" className="link">
                СМИ о нас
              </NavLink>
            </nav>
          </div>

          {/* Статистика */}
          <div className="footer_group_statistic">
            <h2>Статистика</h2>
            {statistics.map((stat, index) => (
              <div key={index}>
                <h4>{stat.label}</h4>
                <p>
                  <img src={koz} alt={stat.label} />
                  {stat.value}
                </p>
              </div>
            ))}
          </div>

          {/* Информация */}
          <div className="footer_group_info">
            <h2>Информация</h2>
            <nav>
              <NavLink to="/" className="link">
                FAQ
              </NavLink>
              <NavLink to="/" className="link">
                Условия
              </NavLink>
              <NavLink to="/" className="link">
                Конфиденциальность
              </NavLink>
            </nav>
          </div>

          {/* Соцсети */}
          <div className="footer_group_socials">
            <h2>Соц сети</h2>
            <div className="socials">
              <div>
                <img src={instagramIcon} alt="Instagram" />
              </div>
              <div>
                <img src={ffff} alt="Facebook" />
              </div>
            </div>
          </div>
        </div>
        <div className="footer_end">
          <p>© 2025 Ноокатская районная государственная администрация. Все права защищены.</p>
          <p>Made by GeeksPro</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
