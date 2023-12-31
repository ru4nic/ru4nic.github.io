import pokerface from '../../../assets/img/pokerface.jpg';
import samoletova from '../../../assets/img/samoletova.jpg';
import recastman from '../../../assets/img/recastman.jpg';
import logoPokerface from '../../../assets/img/PokerFace_logo.jpg';
import logoRecastman from '../../../assets/img/recastman_logo.png';
import logoSamoletova from '../../../assets/img/s_samoletova_logo1.png';

interface LinkProps {
  rel: string;
  target: string;
}
const linkProps: LinkProps = {
  rel: 'noreferrer',
  target: '_blank',
};

interface Card {
  image: string;
  techs: string[];
  codeLink: string;
  pageLink: string;
  logo: string;
}
const card_1: Card = {
  image: pokerface,
  techs: [
    'React',
    'TypeScript',
    'Redux Toolkit',
    'styled-components',
    'MUI',
    'Swiper',
    'Vite',
    'localStorage',
  ],
  codeLink: 'https://github.com/ru4nic/pokerface',
  pageLink: 'https://pokerfaceband.ru/',
  logo: logoPokerface,
};
const card_2: Card = {
  image: samoletova,
  techs: ['React', 'TypeScript', 'MUI', 'Swiper', 'styled-components', 'Vite'],
  codeLink: 'https://github.com/ru4nic/s_samoletova',
  pageLink: 'https://ru4nic.github.io/s_samoletova/',
  logo: logoSamoletova,
};
const card_3: Card = {
  image: recastman,
  techs: [
    'React',
    'TypeScript',
    'Redux Toolkit',
    'MUI',
    'Swiper',
    'styled-components',
    'Vite',
    'localStorage',
  ],
  codeLink: 'https://github.com/ru4nic/recastman-studio',
  pageLink: 'https://ru4nic.github.io/recastman-studio/',
  logo: logoRecastman,
};

interface CardWithDetails extends Card {
  year: string;
  category: string;
  desc: string[];
}
type Texts = {
  [key: string]: {
    title: string;
    cards: CardWithDetails[];
  };
};
export const texts: Texts = {
  ru: {
    title: 'Портфолио',
    cards: [
      {
        ...card_1,
        year: '2023',
        category: 'Корпоративный сайт',
        desc: [
          'Музыкальный коллектив, который украсит любой праздник под ключ: свадьба, корпоратив, день рождения и пр.',
          'На сайте реализована функция добавления песен из репертуара группы в корзину для формирования сет-листа на мероприятие. С помощью встроенного аудиоплеера можно воспроизвести каждую песню.',
        ],
      },
      {
        ...card_2,
        year: '2023',
        category: 'Сайт визитка',
        desc: [
          'Фотограф Светлана Самолётова. Интересный сайт с горизонтальной прокруткой в десктопной версии.',
        ],
      },
      {
        ...card_3,
        year: '2023',
        category: 'Сайт визитка',
        desc: ['Студия звукозаписи и съемки видео клипов.'],
      },
    ],
  },
  en: {
    title: 'Portfolio',
    cards: [
      {
        ...card_1,
        year: '2023',
        category: 'Corporate website',
        desc: [
          'A musical group from Moscow that will decorate any event on a turn-key basis: wedding, corporate event, birthday, etc.',
          "The site has a function of adding songs from the band's repertoire to the cart to form a set list for the event. You can play each song using the built-in audio player.",
        ],
      },
      {
        ...card_2,
        year: '2023',
        category: 'Business card site',
        desc: [
          'Photographer Svetlana Samolyotova. Interesting site with horizontal scrolling in the desktop version.',
        ],
      },
      {
        ...card_3,
        year: '2023',
        category: 'Business card site',
        desc: ['Recording studio and video clip shooting.'],
      },
    ],
  },
};
export { linkProps };
export type { Card };
