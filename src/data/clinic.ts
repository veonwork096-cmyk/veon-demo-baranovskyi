// Facts only from veon/client.json (C-001…C-022, company.products_services) and design/concept.md.
// Nothing invented: no hours, reviews, counters or certificates.

export const FUTURE_NOTE = "Сторінка з'явиться в повній версії сайту";

export const contacts = {
  name: "Baranovskyi Dental Clinic",
  phoneDisplay: "099 124 1102",
  phoneHref: "tel:+380991241102",
  viber: "viber://chat/?number=%2B380991241102",
  telegram: "https://t.me/Baranovskyi_Dental",
  booking: "https://booking.iclinic.ua/baranovskyi",
  instagram: "https://www.instagram.com/baranovskyi_dental_clinic/",
  facebook: "https://www.facebook.com/BaranovskiClinic/",
  map: "https://goo.gl/maps/c6oUDa1sFNvQpKBR6",
  street: "вул. Ф. Тихого, 9",
  city: "Ужгород",
  district: "центр міста",
} as const;

export const nav = [
  { href: "#poslugy", label: "Послуги і ціни" },
  { href: "#roboty", label: "Роботи" },
  { href: "#pershyi-vizyt", label: "Перший візит" },
  { href: "#likari", label: "Лікарі" },
  { href: "#kontakty", label: "Контакти" },
] as const;

export interface PriceRow { name: string; price: string; }
export interface Direction {
  id: string;
  title: string;
  short: string;
  rows: PriceRow[];
  /** a photo that carries a fact, or a large price figure instead */
  photo?: { name: string; widths: number[]; w: number; h: number; alt: string; caption: string };
  figure?: { value: string; caption: string };
  page: string;
}

// Prices exactly as published in the clinic's price list (C-010, company.products_services).
export const directions: Direction[] = [
  {
    id: "estetyka",
    title: "Естетична стоматологія",
    short: "Вініри, коронки, художня реставрація, відбілювання",
    rows: [
      { name: "Композитний вінір (Asteria, Jaenial)", price: "5 900 грн" },
      { name: "Керамічний вінір, прес-кераміка EMax", price: "15 600 грн" },
      { name: "Цирконієва анатомічна коронка", price: "10 400 грн" },
      { name: "Відбілювання Beyond (USA), одна щелепа", price: "6 500 грн" },
    ],
    figure: { value: "5 900 грн", caption: "композитний вінір — один зуб" },
    page: "Естетична стоматологія",
  },
  {
    id: "mikroskop",
    title: "Лікування під мікроскопом",
    short: "Терапевтичне лікування і лікування каналів",
    rows: [
      { name: "Одноканальний зуб, вперше", price: "3 200 грн" },
      { name: "Чотириканальний зуб", price: "6 800 грн" },
      { name: "Повторне лікування каналів", price: "від 3 800 грн" },
      { name: "Комп'ютерна анестезія STA", price: "650 грн" },
    ],
    photo: {
      name: "service-microscope",
      widths: [480, 724],
      w: 724,
      h: 483,
      alt: "Лікар у масці працює під дентальним мікроскопом, поруч асистентка",
      caption: "Робота під мікроскопом у кабінеті клініки",
    },
    page: "Лікування під мікроскопом",
  },
  {
    id: "ortodontiya",
    title: "Ортодонтія",
    short: "Брекети й елайнери",
    rows: [
      { name: "Самолігуючі брекети EMPOWER, одна щелепа", price: "24 750 грн" },
      { name: "Брекети DAMON прозорі, одна щелепа", price: "40 500 грн" },
      { name: "Елайнери Reev's (Україна)", price: "105 000 грн" },
      { name: "Елайнери INVISALIGN (США)", price: "165 500 грн" },
    ],
    figure: { value: "24 750 грн", caption: "брекети EMPOWER — одна щелепа" },
    page: "Ортодонтія",
  },
  {
    id: "khirurhiya",
    title: "Хірургія та імплантація",
    short: "Імплантація, «зуби за один день», видалення",
    rows: [
      { name: "Імплантація, базове рішення", price: "18 200 грн" },
      { name: "Імплантація, оптимальне рішення", price: "28 600 грн" },
      { name: "«Зуби за один день»: повний ряд на 4-х імплантатах", price: "122 500 грн" },
      { name: "Видалення зуба", price: "від 1 300 грн" },
    ],
    figure: { value: "18 200 грн", caption: "імплантація — базове рішення" },
    page: "Імплантація",
  },
  {
    id: "parodontolohiya",
    title: "Пародонтологія та гігієна",
    short: "Професійне чищення, лікування ясен",
    rows: [
      { name: "Професійне чищення", price: "2 600–3 600 грн" },
      { name: "Закритий кюретаж, секстант", price: "2 500 грн" },
    ],
    figure: { value: "від 2 600 грн", caption: "професійне чищення" },
    page: "Пародонтологія",
  },
];

export const firstVisit = [
  { price: "800 грн", title: "Консультація", text: "Огляд, фотопротокол і попередній план лікування" },
  { price: "1 100 грн", title: "3D-сканування щелеп", text: "Окрема послуга з прайсу — за потреби" },
  { price: "2 500 грн", title: "Детальний план", text: "Зі скануванням і аналізом КТ" },
] as const;

export const sterilization = [
  { n: 1, name: "sterilization-1", text: "Ультразвукова мийка борів" },
  { n: 2, name: "sterilization-2", text: "Автоклав DAC Universal (Dentsply Sirona)" },
  { n: 3, name: "sterilization-3", text: "Мийно-дезінфекційна машина Melatherm 10 (Melag)" },
  { n: 4, name: "sterilization-4", text: "Пакування інструментів у крафт-пакети" },
  { n: 5, name: "sterilization-5", text: "Стерилізація в автоклаві" },
] as const;
