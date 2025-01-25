import { useState } from "react";
import "./Gallery.scss";
import newFotoOne from "../../shared/img/newFotoOne.png";
import newFotoTwo from "../../shared/img/newFotoTwo.png";
import newFotoThree from "../../shared/img/newFotoThree.png";
import threeD from "../../shared/img/threeD.png";
import archivedOne from "../../shared/img/archivedOne.png";
import archivedTwo from "../../shared/img/archivedTwo.png";
import archivedThree from "../../shared/img/archivedThree.png";
import archivedFour from "../../shared/img/archivedFour.png";
import archivedFive from "../../shared/img/archivedFive.png";
import archivedSix from "../../shared/img/archivedSix.png";
import btn3d from "../../shared/img/btn3d.svg"
import { useTranslation } from "react-i18next";

const newFoto = [
    { img: newFotoOne },
    { img: newFotoTwo },
    { img: newFotoThree },
    { img: newFotoTwo },
    { img: newFotoThree },
    { img: newFotoOne },
];
const threeDd = [
    {
        img: threeD,
        name: "Кара-Кой ",
        mapUrl: "https://www.google.com/maps/embed?pb=!4v1737569549476!6m8!1m7!1sCAoSLEFGMVFpcE1EOWE3Sktzb2haRTNUT3MwNWkzT2tOWHdWa2wwQ1liTVJ1UG9P!2m2!1d40.44229808485902!2d72.80227582119277!3f343.2831737063165!4f3.076413581579601!5f0.7820865974627469",
    },
    {
        img: threeD,
        name: "Кара-Кой ",
        mapUrl: "https://www.google.com/maps/embed?pb=!4v1737576699639!6m8!1m7!1sCAoSLEFGMVFpcE1sb3A3MHp3OHVNak9PY3duRS1PRFRMc0RheHZTNEdEMDZnYUw1!2m2!1d40.21560613273215!2d72.52980868869783!3f138.221612158031!4f10.538033710649898!5f0.7820865974627469",
    },
    {
        img: archivedTwo,
        name: "Кызыл-Туу",
        mapUrl: "https://www.google.com/maps/embed?pb=!4v1737576783597!6m8!1m7!1sCAoSLEFGMVFpcFBiOHJHX09Td2dKbjh1eDdFNWRyaFltV0V3SHlBVlo0R3FCTW5O!2m2!1d40.05013048335451!2d72.6513416941521!3f25.186073673269856!4f-4.059059455096445!5f0.7820865974627469",
    },
    {
        img: threeD,
        name: "Он-Эки-Бел",
        mapUrl: "https://www.google.com/maps/embed?pb=!4v1737576898945!6m8!1m7!1sCAoSLEFGMVFpcFB2RDZjVVhCbzVvU3E2QWdwSnNvVjdfWUNjRzN1N1Y5d1ExT01Q!2m2!1d40.09252169824526!2d72.34839629148958!3f87.32349507858045!4f8.356824413136124!5f0.7820865974627469",
    },
    {
        img: threeD,
        name: "Кара-Кой ",
        mapUrl: "https://www.google.com/maps/embed?pb=!4v1737569549476!6m8!1m7!1sCAoSLEFGMVFpcE1EOWE3Sktzb2haRTNUT3MwNWkzT2tOWHdWa2wwQ1liTVJ1UG9P!2m2!1d40.44229808485902!2d72.80227582119277!3f343.2831737063165!4f3.076413581579601!5f0.7820865974627469",
    },
    {
        img: threeD,
        name: "Кара-Кой ",
        mapUrl: "https://www.google.com/maps/embed?pb=!4v1737576699639!6m8!1m7!1sCAoSLEFGMVFpcE1sb3A3MHp3OHVNak9PY3duRS1PRFRMc0RheHZTNEdEMDZnYUw1!2m2!1d40.21560613273215!2d72.52980868869783!3f138.221612158031!4f10.538033710649898!5f0.7820865974627469",
    },
    {
        img: threeD,
        name: "Кызыл-Туу",
        mapUrl: "https://www.google.com/maps/embed?pb=!4v1737576783597!6m8!1m7!1sCAoSLEFGMVFpcFBiOHJHX09Td2dKbjh1eDdFNWRyaFltV0V3SHlBVlo0R3FCTW5O!2m2!1d40.05013048335451!2d72.6513416941521!3f25.186073673269856!4f-4.059059455096445!5f0.7820865974627469",
    },
    {
        img: threeD,
        name: "Он-Эки-Бел",
        mapUrl: "https://www.google.com/maps/embed?pb=!4v1737576898945!6m8!1m7!1sCAoSLEFGMVFpcFB2RDZjVVhCbzVvU3E2QWdwSnNvVjdfWUNjRzN1N1Y5d1ExT01Q!2m2!1d40.09252169824526!2d72.34839629148958!3f87.32349507858045!4f8.356824413136124!5f0.7820865974627469",
    },
    {
        img: threeD,
        name: "Кара-Кой ",
        mapUrl: "https://www.google.com/maps/embed?pb=!4v1737569549476!6m8!1m7!1sCAoSLEFGMVFpcE1EOWE3Sktzb2haRTNUT3MwNWkzT2tOWHdWa2wwQ1liTVJ1UG9P!2m2!1d40.44229808485902!2d72.80227582119277!3f343.2831737063165!4f3.076413581579601!5f0.7820865974627469",
    },
 
];

const archived = [
    { img: archivedOne },
    { img: archivedTwo },
    { img: archivedThree },
    { img: archivedFour },
    { img: archivedFive },
    { img: archivedSix },
];

const buttons = [
    { name: "НОВЫЕ ФОТОГРАФИИ" },
    { name: "3D ТУР" },
    { name: "АРХИВНЫЕ ФОТОГРАФИИ" },
];

const Gallery = () => {
    const [activeButton, setActiveButton] = useState(buttons[0].name);
    const [currentMapUrl, setCurrentMapUrl] = useState("");
    const { t } = useTranslation(); 

    const handleOnClick = (name) => {
        setActiveButton(name);
    };

    const openModalWithMap = (mapUrl) => {
        setCurrentMapUrl(mapUrl);
    };

    const closeModal = () => {
        setCurrentMapUrl("");
    };

    return (
        <div className="gallery">
            <div className="container">

                <h1>{t("Kyrgyzstan")}</h1>
                <div className="gallery_menu">
                    {buttons.map((el) => (
                        <button
                            onClick={() => handleOnClick(el.name)}
                            className={`gallery_menu_btn ${el.name === activeButton ? "active" : ""}`}
                            key={el.name}
                        >
                            {el.name}
                        </button>
                    ))}
                </div>

                <div className="gallery_content">
                    {activeButton === "НОВЫЕ ФОТОГРАФИИ" && (
                        <div className="photo_gallery">
                            {newFoto.map((el, index) => (
                                <div key={index} className="photo_card">
                                    <img src={el.img} alt={`new-foto-${index}`} />
                                </div>
                            ))}
                        </div>
                    )}

                    {activeButton === "3D ТУР" && (
                        <div className="photo3d_gallery">
                            {threeDd.map((el, index) => (
                                <div
                                    // style={{
                                    //     backgroundImage: `url(${el.img})`,
                                    // }}
                                    key={index}
                                    className="photo3_card">
                                        <img src={el.img} alt="" />
                                        <div>
                                        <h4>{el.name}</h4>
                                        <button
                                            className="threeD"
                                            onClick={() => openModalWithMap(el.mapUrl)}>
                                            <img src={btn3d} alt="" />
                                        </button>
                                    </div>

                                </div>
                            ))}
                        </div>
                    )}

                    {activeButton === "АРХИВНЫЕ ФОТОГРАФИИ" && (
                        <div className="photo_gallery">
                            {archived.map((el, index) => (
                                <div key={index} className="photo_card">
                                    <img src={el.img} alt={`archived-foto-${index}`} />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {currentMapUrl && (
                <div
                    className="modal"
                    onClick={closeModal}
                >
                    <iframe
                        src={currentMapUrl}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Map"
                    ></iframe>
                </div>
            )}
        </div>
    );
};

export default Gallery;
