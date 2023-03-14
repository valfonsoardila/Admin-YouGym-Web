import {
  AiOutlineApartment,
  AiOutlineSetting,
} from "react-icons/ai";
import { MdLogout } from "react-icons/md";
import { logoSVG } from "./../../../../resources/Resources";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp, faBottleWater, faCalendar, faCashRegister, faDashboard, faDumbbell, faTasks, faUser, faUsers, faUserTie } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

export const linksArray = [
  {
      label: "Menu Dash",
      icon: <FontAwesomeIcon icon={faDashboard} />,
      to: "/menudash",
      iconClosed: <FontAwesomeIcon icon={faAngleDown} />,
      iconOpened:<FontAwesomeIcon icon={faAngleUp} />,
      notification: 0,
      subNav: [
        {
          title: 'DashYouGym',
          path: '/menudash/das-yougym',
          icon: <img src={logoSVG} alt="logo" />,
        },
        {
          title: 'DashCatchTweets',
          path: '/menudash/dash-catch-tweets',
          icon: <FontAwesomeIcon icon={faTwitter} />
        }
      ]
  },
  {
      label: "Caja Registradora",
      icon: <FontAwesomeIcon icon={faCashRegister} />,
      to: "/caja-registradora",
      notification: 3,
  },
  {
      label: "Usuarios",
      icon: <FontAwesomeIcon icon={faUsers} />,
      to: "/usuarios",
      iconClosed: <FontAwesomeIcon icon={faAngleDown} />,
      iconOpened:<FontAwesomeIcon icon={faAngleUp} />,
      notification: 0,
      subNav: [
        {
          title: 'Entrenador',
          path: '/usuarios/entrenador',
          icon: <FontAwesomeIcon icon={faUser} />,
        },
        {
          title: 'Cliente',
          path: '/usuarios/cliente',
          icon: <FontAwesomeIcon icon={faUserTie} />
        }
      ]
  },
  {
      label: "Body Center",
      icon: <FontAwesomeIcon icon={faDumbbell} />,
      to: "/body-center",
      iconClosed: <FontAwesomeIcon icon={faAngleDown} />,
      iconOpened:<FontAwesomeIcon icon={faAngleUp} />,
      notification: 1,
      subNav: [
        {
          title: 'Progreso',
          path: '/body-center/progreso',
          icon: <FontAwesomeIcon icon={faCalendar} />,
        },
        {
          title: 'Tareas',
          path: '/body-center/tareas',
          icon: <FontAwesomeIcon icon={faTasks} />
        }
      ]
  },
  {
    label: "Servicio",
    icon: <FontAwesomeIcon icon={faBottleWater} />,
    to: "/servicio",
    iconClosed: <FontAwesomeIcon icon={faAngleDown} />,
    iconOpened:<FontAwesomeIcon icon={faAngleUp} />,
    notification: 1,
},
];

export const secondaryLinksArray = [
  {
      label: "Settings",
      icon: <AiOutlineSetting />,
  },
  {
      label: "Logout",
      icon: <MdLogout />,
  },
];