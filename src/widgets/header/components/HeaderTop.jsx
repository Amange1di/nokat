import { useState, useEffect, useCallback } from 'react';
import logo from "../../../shared/img/logo.png";
import locationIcon from "../../../shared/img/locationIcon.svg";
import languageIcon from "../../../shared/img/languageIcon.svg";
import phoneIcon from "../../../shared/img/phoneIcon.svg";
import instagramIcon from "../../../shared/img/instagramIcon.svg";
import telegramIcon from "../../../shared/img/telegramIcon.svg";
import whatsappIcon from "../../../shared/img/whatsappIcon.svg";
import youtubeIcon from "../../../shared/img/youtubeIcon.svg";
import HeaderMenu from './HeaderMenu';
import { useTranslation } from 'react-i18next';

const HeaderTop = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = useCallback(() => {
        setIsScrolled(window.scrollY > 100);
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    const { t, i18n } = useTranslation();
    const handleChangeLang = ({ target: { value } }) => {
        i18n.changeLanguage(value);
    };
    return (
        <div className="headerTop">
            <div className="headerTop_right">
                <img src={logo} alt="Logo" />
                <h1>НООКАТСКАЯ АДМИНИСТРАЦИЯ</h1>
            </div>
            {/* {!isScrolled && ( */}
                <div className="headerTop_left">
                    <img src={locationIcon} alt="Location" />
                    <p>ул. Центральная, 45, г. Ноокат</p>
                    <img src={languageIcon} alt="Language" />
                    <button onClick={() => handleChangeLang({ target: { value: 'ru' } })}>RU</button>
                    <span>/</span>
                    <button onClick={() => handleChangeLang({ target: { value: 'kg' } })}>KG</button>

                    <img src={phoneIcon} alt="Phone" />
                    <p>+996 995 898 977</p>
                </div>
            {/* )} */}
            {/* {isScrolled && <HeaderMenu />} */}
            <div className="socials">
                <a href=""><div>
                    <img src={instagramIcon} alt="Instagram" />
                </div></a>
                <div>
                    <a href=""> <img src={telegramIcon} alt="Telegram" /></a>
                </div>
                <div>
                    <a href=""> <img src={whatsappIcon} alt="WhatsApp" /></a>
                </div>
                <div>
                    <a href=""> <img src={youtubeIcon} alt="YouTube" /></a>
                </div>
            </div>
        </div>
    );
};

export default HeaderTop;
