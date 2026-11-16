// Facts only from veon/client.json and audit/chrome/* (snapshot 16.11.2026). Nothing invented.

export const FUTURE_NOTE = "Розділ у розробці";

export const contacts = {
  sales: { href: "tel:+380732366471", text: "+38 073 236 64 71" },
  service: { href: "tel:+380634779310", text: "+38 063 477 93 10" },
  messenger: { text: "+38 097 361 39 69" },
  viber: "viber://chat?number=%2B380973613969",
  telegram: "https://t.me/+380973613969",
  telegramChannel: "https://t.me/rodolit_company",
  email: "tender.rodolit@gmail.com",
  instagram: "https://www.instagram.com/rodolit.company/",
  youtube: "https://www.youtube.com/channel/UC92VCt13gPnkMohJzTHbs0A",
  hours: "Пн–пт, 9:00–18:00",
  address: "79035, м. Львів, вул. Зелена, 115Б, к. 310",
  legalName: "ТОВ «РОДОЛІТ КОМПАНІ»",
  edrpou: "21746488",
} as const;

const BODY_LINES = [
  "Заклад, код ЄДРПОУ:",
  "Що потрібно (модель або назва, кількість):",
  "Тип закупівлі (тендер, Ukraine Facility, прямий рахунок):",
  "Бажані строки поставки:",
  "Контактна особа і телефон:",
];

export const letterLines = BODY_LINES;

/** mailto: with a ready subject and a field template in the body. */
export function mailto(subject: string, intro?: string): string {
  const body = [intro ?? "Добрий день!", "", ...BODY_LINES.map((l) => `${l} `), ""].join("\r\n");
  return `mailto:${contacts.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

/** Catalogue sections with item counts from the category sidebar (audit/chrome/category-uzd.txt). */
export const directions = [
  { count: 219, name: "Меблі медичні" },
  { count: 171, name: "Фізіотерапія та реабілітація" },
  { count: 76, name: "Діагностичне обладнання" },
  { count: 68, name: "Хірургія" },
  { count: 45, name: "Навчальні манекени" },
  { count: 21, name: "Реанімація" },
  { count: 10, name: "Автомобілі швидкої" },
  { count: 7, name: "Нефрологія" },
] as const;

export const SNAPSHOT_DATE = "16.11.2026";
