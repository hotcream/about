export type ExperienceType = {
  type: 'job' | 'learn'
  period: string,
  сompany: string
  title: string
  responsibilities?: string[]
  results?: string[]
  tags?: string[]
  links?: {
    to:string,
    text: string
  }[]
}
export type ContactType = {
  title: string
  icon: string
  link: string
}
export type ConfigType = {
  start: Date
  name: string
  jobtitle: string
  description: string
  experience: ExperienceType[]
  contacts: ContactType[],
  hobbies: ContactType[]
}
export default {
  start: new Date(2020,5,1),
  name: 'Рожков Илья Александрович',
  jobtitle: 'Специалист по тестированию',
  description: 'Начиная с 2020 года я занимаюсь тестированием веб-приложений, анализом и внедрением бизнес-процессов. ' +
      'Участвую в международных конференциях, обучаюсь на платных курсах. Продолжаю развиваться в сфере тестирования.',
  experience: [
    {
      "type": "job",
      "period": "Май 2023 - по н.в.",
      "сompany": "Альфа Банк (анкета кредитных карт)",
      "title": "Ведущий специалист по тестированию",
      "responsibilities": [
        "Планирование и декомпозиция задач",
        "Регулярная работа над изменением процессов",
        "Анализ логов и аномалий на продуктиве",
        "Функциональное и регресс тестирование",
        "Участие в интеграциях с множеством команд (микросервисы)",
        "Автоматизация UI и API (Java)"
      ],
      "results": [
        "Переезд на kubernetes",
        "Переезд с длинной на короткую анкету",
        "Внедрение ключевого функционала (коммуникации, RPP)",
        "Создание тестовой модели и расширение UI и API автотестов",
        "Значительное увеличение конверсии"
      ],
      "tags": ["Java","cucumber","Postgres", "DBeaver", "Kubernetes", "Akita", "gradle", "kibana", "Marathon", "Swagger",
      "RestAssured"],
      "links": [{to: 'https://alfabank.ru/', text: 'Альфа Банк'}]
    },
    {
      "type": "learn",
      "period": "Январь 2022 - Май 2022",
      "сompany": "Яндекс Практикум",
      "title": "Автоматизация тестирования на Java",
      "responsibilities": [
        "Изучение Java core",
        "Автоматизация UI, юнит и API тестов",
        "Установка jenkins в облако яндекса"
      ],
      "tags": ["Java", "git", "Selenide", "junit", "maven", "jenkins", "CI/CD", "sql", "Allure", "RestAssured",
        "IDEA", "Selenium WebDriver"],
        "links": [{to: 'https://practicum.yandex.ru/profile/qa-automation-engineer-java/', text: 'Описание курса'}]
    },
    {
      "type": "job",
      "period": "Июнь 2021 - Май 2023",
      "сompany": "Лига цифровой экономики (проект ShoppingLive)",
      "title": "Специалист по тестированию",
      "responsibilities": [
        "Работа с продуктами SAP e-commerce (Hybris)",
        "Функциональное и интеграционное тестирование",
        "Автотесты Java/Selenide/junit",
        "Установка ночных релизов",
        "Обучение новых сотрудников",
        "Написание тестовой документации",
        "Анализ фич и написание требований"
      ],
      "results": [
        "Переезд на kubernetes",
        "Переезд с 1C на SAP-ecommerce",
        "Создание собственного колл-центра",
        "Создание с нуля фреймворка для UI автотестов",
        "Успешные интеграции с множеством внешних систем (коллцентры, azure, 1С, фиды для маркетплейсов)"
      ],
      "tags": ["SAP", "Jenkins", "Hybris", "kibana", "Kubernetes", "Postman", "SQL", "Java", "Selenide", "Allure", "Azure", "Swagger"],
      "links": [{to: 'https://www.digitalleague.ru/', text: 'Лига цифровой экономики'}]
    },
    {
      "type": "learn",
      "period": "Февраль 2021 - Апрель 2021",
      "сompany": "Тагес",
      "title": "Специалист по тестированию (стажировка)",
      "responsibilities": [
        "Функциональное тестирование",
        "Автоматизация UI на pytest",
        "Участие в scrum мероприятиях",
        "Контроль исправления дефектов (YouTrack)",
        "Интеграционное тестирование"
      ],
      "results": [
        "Полностью написана проектная документация с нуля",
        "Автоматизированы основные проверки UI"
      ],
      "tags": ["Selenium", "pytest", "Postman", "Postgres", "Gitlab", "SQL"],
      "links": [{to: 'https://tages.ru/', text: 'Тагес'}]
    },
    {
      "type": "job",
      "period": "Август 2020 - Февраль 2021",
      "сompany": "Диалком (стартап)",
      "title": "Специалист по тестированию",
      "responsibilities": [
        "Функциональное тестирование web-приложения для закупки стройматериалов",
        "Создание тестовой документации",
        "Контроль исправления дефектов"
      ],
      "results": [
        "Получил первый коммерческий опыт в тестировании",
        "Значительно расширен функционал сайта, исправлено множество дефектов"
      ],
      "tags": ["DevTools","Postman","SQL", "Git"]
    },
    {
      "type": "learn",
      "period": "2015 - 2019",
      "сompany": "УГАТУ",
      "title": "Факультет информатики и робототехники",
      "responsibilities":[
        "Анализ бизнес-процессов",
        "Разработка проектов автоматизации процессов",
        "Создание информационных систем в прикладных областях",
        "Управление проектами информатизации"
      ],
      "tags": ["09.03.03 Прикладная информатика", "Анализ данных", "C#", "Java", "ООП", "Базы данных"],
      "links": [{to: 'https://ugatu.su/', text: 'УГАТУ'}]
    }
  ],
  contacts: [{
    title: 'Илья Рожков',
    icon: '/about/hh.png',
    link: 'https://hh.ru/resume/65f5acc6ff0869a6470039ed1f424d46664f61'
  },{
    title: 'Email',
    icon: '/about/email.png',
    link: 'mailto:twentyny@yandex.ru'
  },{
    title: '@hotcream',
    icon: '/about/github.png',
    link: 'https://github.com/hotcream'
  },{
    title: '@twentyny',
    icon: '/about/tg.png',
    link: 'https://t.me/twentyny'
  }],
  hobbies: [{
    title: 'Babylon JS - Web GL фреймворк, для веб. Можно создавать гибкие приложения, начиная с простой визуализации 3D, заканчивая онлайн играми.',
    icon: '/about/babylon.png',
    link: 'https://www.babylonjs.com/'
  },{
    title: 'Blender - Средство 3D моделирования, анимации, тестурирования и т.д. Мощный инструмент, позволяет создать объекты или персонажей.',
    icon: '/about/blender.png',
    link: 'https://www.blender.org/'
  },{
    title: 'Kdenlive - Мощный инструмент обработки и монтажа видео, аналог Adobe Premiere Pro',
    icon: '/about/kdenlive.png',
    link: 'https://kdenlive.org/'
  }]
} as ConfigType
