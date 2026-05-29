(function () {
  "use strict";

  const STORAGE_KEY = "preferred-language";
  const DEFAULT_LANG = "kk";

  const translations = {
    kk: {
      // NAV
      navBrand: "Маратов Б.Ж.",
      navProblem: "Мәселе",
      navGoals: "Мақсат",
      navNovelty: "Жаңалық",
      navAttacks: "Шабуылдар",
      navVulns: "Осалдықтар",
      navArch: "Архитектура",
      navPlatform: "Платформа",
      navResults: "Нәтижелер",
      navDepts: "Бөлімшелер",
      navRisk: "Тәуекел",
      navCompare: "Салыстыру",
      navConclusion: "Қорытынды",
      langKk: "ҚАЗ",
      langRu: "RU",

      // HERO
      heroEyebrow: "Л.Н. Гумилев атындағы ЕҰУ · 7M06306 · 2026",
      heroTitle:
        "Әлеуметтік инженерия қауіпсіздікке қатер ретінде: қызметкерлерді қорғау және оқыту әдістері",
      heroLead:
        "Магистрлік диссертация. Кешенді әдістеме және ашық бастапқы кодты оқыту платформасы. 106 қызметкер, 7 бөлімше, 15 күндік оқыту кезеңі.",
      heroAuthorLabel: "Магистрант",
      heroAuthor: "Маратов Бауыржан Жанатович",
      heroSupervisorLabel: "Ғылыми жетекші",
      heroSupervisor: "Сагиндыков К.М.",
      heroDegreeLabel: "Мамандық",
      heroDegree: "Ақпараттық қауіпсіздік жүйелері",
      heroPlaceLabel: "Орны",
      heroPlace: "Астана, 2026",

      // PROBLEM (slide 2)
      problemEyebrow: "Зерттеудің өзектілігі",
      problemTitle: "Ең осал буын. Адам.",
      problemLead:
        "Брандмауэрлер, антивирустар мен IDS жүйелері қолданылса да, қауіпсіздік тізбегіндегі ең осал буын адамның өзі. Шабуылдаушылар техникалық емес, психологиялық тәсілдерді пайдаланады.",
      problemStat1Label: "АҚ инциденттерінде адам факторы",
      problemStat1Source: "2022",
      problemStat2Label: "Фишингтен жылдық залал",
      problemStat2Source: "FBI IC3, 2022",
      problemStat3Label: "Бұзудың негізгі себебі. Адам.",
      problemStat3Source: "Verizon DBIR, 2024",

      // GOALS (slide 3)
      goalsEyebrow: "Зерттеудің мақсаты мен міндеттері",
      goalsTitle: "Не істелді.",
      goalsMain:
        "Кәсіпорынның автоматтандырылған жүйесінде ақпаратты қорғауға арналған әдістемені әзірлеу. Әлеуметтік инженерия шабуылдарына қарсы тұруға бағытталған кешенді қорғаныс стратегиясын құрастыру.",
      goalsTask1: "Тұтас қауіпсіздік саясатын жасау және тәжірибеге енгізу",
      goalsTask2: "Ағымдағы қауіпсіздік осалдықтарын анықтау және талдау",
      goalsTask3: "Қызметкерлерге қауіпсіз ақпаратпен жұмыс дағдыларын үйрету",
      goalsTask4: "Фишинг, вишинг шабуылдарынан техникалық қорғау механизмдерін енгізу",
      goalsTask5: "Оқиғаларға жедел әрекет ету жоспарларын әзірлеу",
      goalsTasksLabel: "5 міндет",
      goalsMainLabel: "Жалпы мақсат",

      // NOVELTY (slide 4)
      noveltyEyebrow: "Ғылыми жаңалығы",
      noveltyTitle: "Жаңа не ұсынылды.",
      novelty1Title: "Кешенді әдістеме",
      novelty1Body:
        "Заманауи шабуыл түрлеріне қарсы тұра алатын, психологиялық, ұйымдастырушылық және техникалық аспектілерді біріктіретін қорғаныс әдістемесі.",
      novelty2Title: "Оқыту платформасы",
      novelty2Body:
        "Фишинг симуляциясы мен оқыту нәтижелерін ортақ платформада біріктіретін бағдарламалық шешім. Атауы: Social Engineering Training Platform.",
      novelty3Title: "Дейін / кейін талдау",
      novelty3Body:
        "Оқу нәтижелілігін 15 күндік кесу нүктесі негізінде сандық тұрғыдан бағалайтын дейін-кейін салыстырмалы талдау жүйесі.",
      novelty4Title: "Қазақ тілінде",
      novelty4Body:
        "Қазақ тілін толықтай қолдайтын, отандық кәсіпорындарға арналған алғашқы ашық кодты SE-оқыту платформасы.",

      // ATTACKS (slide 5)
      attacksEyebrow: "1-тарау",
      attacksTitle: "Әлеуметтік инженерия түрлері.",
      attacksLead:
        "Бар-жоғы алты тип негізгі шабуылдардың 90 пайыздан астамын құрайды. Әрқайсысының өзіндік сценарийі және психологиялық тұтқасы бар.",
      attacksColType: "Шабуыл түрі",
      attacksColDesc: "Сипаттамасы",
      attacksColRisk: "Қауіп",
      attacksRow1Name: "Фишинг",
      attacksRow1Desc: "Жалған электрондық хаттар арқылы құпия деректерді алу",
      attacksRow1Risk: "Жоғары",
      attacksRow2Name: "Вишинг",
      attacksRow2Desc: "Телефон қоңырауы арқылы алдау",
      attacksRow2Risk: "Жоғары",
      attacksRow3Name: "Претекстинг",
      attacksRow3Desc: "Жалған сылтау құру арқылы сенім орнату",
      attacksRow3Risk: "Орта",
      attacksRow4Name: "Бейтинг",
      attacksRow4Desc: "Жемді пайдалану. USB, тегін бағдарлама",
      attacksRow4Risk: "Орта",
      attacksRow5Name: "Тейлгейтинг",
      attacksRow5Desc: "Рұқсатсыз аумаққа физикалық кіру",
      attacksRow5Risk: "Төмен",
      attacksRow6Name: "Смишинг",
      attacksRow6Desc: "SMS хабарлама арқылы фишинг",
      attacksRow6Risk: "Жоғары",
      attacksPrinciplesTitle: "Адамға ықпал ету принциптері",
      attacksPrinciples:
        "сенімді пайдалану · психологиялық қысым · билік аргументі · тапшылық сезімі · ашық дереккөздерді барлау",

      // VULNS (slide 6)
      vulnsEyebrow: "2-тарау",
      vulnsTitle: "АБЖ осалдықтары.",
      vulnsLead:
        "Осалдықтар үш қабатта. Бірін жабу басқасын ашпайды. Сондықтан қорғаныс үш қабатта да бір мезгілде болуы керек.",
      vulnsCol1Title: "Адам факторы",
      vulnsCol1Item1: "Қызметкер қателіктері",
      vulnsCol1Item2: "Әлсіз парольдер",
      vulnsCol1Item3: "Құпия деректі қорғамау",
      vulnsCol2Title: "Ұйымдастырушылық",
      vulnsCol2Item1: "Рөлдердің дұрыс үлестірілмеуі",
      vulnsCol2Item2: "Бақылау жеткіліксіздігі",
      vulnsCol2Item3: "Қауіпсіздік стандарттарының жоқтығы",
      vulnsCol3Title: "Техникалық",
      vulnsCol3Item1: "АБЖ ашықтығы",
      vulnsCol3Item2: "TCP/IP хаттамалары",
      vulnsCol3Item3: "Сыртқы интеграциялар",
      vulnsWeakTitle: "Қолданыстағы қорғаудың кемшіліктері",
      vulnsWeak1Name: "Антивирустар",
      vulnsWeak1Body: "Нөлдік күн осалдықтарына қарсы шарасыз.",
      vulnsWeak2Name: "2FA",
      vulnsWeak2Body: "Фишинг арқылы SIM ауыстыру мүмкін.",
      vulnsWeak3Name: "Шифрлау",
      vulnsWeak3Body: "Дұрыс енгізілмесе, әлсіз кілттер қауіп тудырады.",

      // ARCHITECTURE (slide 7)
      archEyebrow: "3-тарау",
      archTitle: "Жүйенің архитектурасы.",
      archLead:
        "Бес қабатты Spring-стек. Әр қабат бір ғана міндет атқарады. Сондықтан өзгертіп, тестілеуге және масштабтауға оңай.",
      archLayer1Name: "Presentation",
      archLayer1Tech: "Thymeleaf + HTML / CSS",
      archLayer2Name: "Controller",
      archLayer2Tech: "Spring MVC, REST",
      archLayer3Name: "Service",
      archLayer3Tech: "Бизнес-логика, транзакциялар",
      archLayer4Name: "Repository",
      archLayer4Tech: "Spring Data JPA, JPQL",
      archLayer5Name: "Database",
      archLayer5Tech: "H2 / MySQL / PostgreSQL",
      archStackTitle: "Технологиялар",
      archStack1Name: "Java 17 LTS",
      archStack1Role: "Бағдарламалау тілі",
      archStack2Name: "Spring Boot 3.2",
      archStack2Role: "Микросервистік фреймворк",
      archStack3Name: "Spring Security 6.2",
      archStack3Role: "Аутентификация, CSRF",
      archStack4Name: "Chart.js 4.4",
      archStack4Role: "Диаграммалар",
      archStack5Name: "BCrypt",
      archStack5Role: "Құпия сөздерді хэштеу",
      archStack6Name: "Docker",
      archStack6Role: "Контейнерлеу",

      // PLATFORM (slides 8-13)
      platformEyebrow: "Жүзеге асыру",
      platformTitle: "Платформа не істейді.",
      platformLead:
        "Әкімші тақтасынан фишинг симуляциясына дейін, бәрі бір платформада. Қызметкер хатты ашудан хабарлауға дейін барлық қадамды осы жерде жасайды.",
      platformF1Title: "Әкімші тақтасы",
      platformF1Body: "Барлық қызметкер, тест, симуляция нәтижесін бір тақтадан басқару.",
      platformF2Title: "Оқу модульдері",
      platformF2Body: "Фишинг, вишинг, парольдер, инциденттер. Қазақ тілінде, бөлек тарауларға бөлінген.",
      platformF3Title: "Тестілеу",
      platformF3Body: "4 тест × 20 сұрақ = 80 сұрақ. Өту шегі 70% (әкімші баптайды). Нәтижелер JSON форматында сақталады.",
      platformF4Title: "Фишинг симуляциясы",
      platformF4Body: "5 үлгі, EASY → HARD. Хат ашу → сілтеме басу → деректер жіберу → хабарлау. UUID токенмен әр қызметкер жеке бақыланады.",
      platformF5Title: "Ішкі пошта жәшігі",
      platformF5Body: "Қызметкерлер фишинг хаттарын платформа ішінде ашады, талдайды, хабарлайды. Нақты e-mail клиентіне ұқсас.",
      platformF6Title: "106 пайдаланушы, 7 бөлімше",
      platformF6Body: "Қазақ тіліндегі шынайы аттар мен лауазымдар. Симуляция нақты ұйым моделінде өтеді.",
      platformSecTitle: "Қауіпсіздік архитектурасы",
      platformSecLead: "Spring Security 6.x негізінде. Principle of Least Privilege қағидаты.",
      platformSec1Name: "BCrypt",
      platformSec1Body: "Salt + 1024 итерация хэштеу.",
      platformSec2Name: "CSRF",
      platformSec2Body: "Токен негізінде қорғау.",
      platformSec3Name: "Рөлдер",
      platformSec3Body: "ADMIN / EMPLOYEE.",
      platformSec4Name: "SQL injection",
      platformSec4Body: "Параметрленген сұраулар.",
      platformSec5Name: "XSS",
      platformSec5Body: "Thymeleaf автоэкрандау.",
      platformSec6Name: "Defense-in-Depth",
      platformSec6Body: "Көп қабатты қорғаныс.",
      platformCertTitle: "Сертификат алу шарты",
      platformCertBody: "Барлық модульдерді аяқтау + барлық тесттерді сәтті тапсыру.",

      // RESULTS (slide 14)
      resultsEyebrow: "Енгізу нәтижелері",
      resultsTitle: "Дейін. Кейін.",
      resultsLead:
        "Платформа 7 бөлімшеде 15 күн ішінде сыналды. Әр көрсеткіш фишинг симуляциясы мен оқыту циклінен кейін қайта өлшенді.",
      resultsContext: "105 қызметкер · 7 бөлімше · 15 күн",
      resultsMetric1: "Хат ашу",
      resultsMetric1Delta: "-33.2",
      resultsMetric2: "Сілтеме басу",
      resultsMetric2Delta: "-29.3",
      resultsMetric3: "Деректер енгізу",
      resultsMetric3Delta: "-23.4",
      resultsMetric4: "Фишинг туралы хабарлау",
      resultsMetric4Delta: "+48.3",
      resultsMetric5: "Тест балы",
      resultsMetric5Delta: "+32.5",
      resultsCaption: "SANS Security Awareness Maturity Model: 2-деңгей → 3-деңгей",

      // DEPARTMENTS (slide 15)
      deptsEyebrow: "Бөлімшелер бойынша",
      deptsTitle: "Кім жақсы ұстады.",
      deptsLead: "IT бөлімі ең жоғары нәтиже көрсетті. HR бөліміне қосымша оқыту бағдарламасы қажет.",
      deptsCol1: "Бөлімше",
      deptsCol2: "Тест балы",
      deptsCol3: "Сілтеме басу",
      deptsCol4: "Хабарлау",
      deptsRow1: "IT бөлімі",
      deptsRow2: "Қаржы бөлімі",
      deptsRow3: "Құқықтық бөлім",
      deptsRow4: "Сатып алу бөлімі",
      deptsRow5: "Басқарма",
      deptsRow6: "Маркетинг бөлімі",
      deptsRow7: "HR бөлімі",

      // RISK (slide 16)
      riskEyebrow: "Тәуекелдер картасы",
      riskTitle: "Тәуекел деңгейінің өзгеруі.",
      riskLead: "SANS Security Awareness Maturity Model бойынша: 2-деңгейден 3-деңгейге өту.",
      riskRow1Name: "Сілтеме басу",
      riskRow1FromLabel: "КРИТИКАЛЫҚ",
      riskRow1ToLabel: "ОРТА",
      riskRow2Name: "Деректер енгізу",
      riskRow2FromLabel: "ЖОҒАРЫ",
      riskRow2ToLabel: "ТӨМЕН",
      riskRow3Name: "Хабарлау",
      riskRow3FromLabel: "КРИТИКАЛЫҚ",
      riskRow3ToLabel: "ЖОҒАРЫ",
      riskRow4Name: "Тест балы",
      riskRow4FromLabel: "ОРТА",
      riskRow4ToLabel: "ТӨМЕН ТӘУЕКЕЛ",
      riskFromHead: "Дейін",
      riskToHead: "Кейін",

      // COMPARE (slide 17)
      compareEyebrow: "Нарықтағы орны",
      compareTitle: "Біздің vs Коммерциялық.",
      compareLead: "Тегін, ашық кодты, қазақ тілінде. ROI: бірінші жылдың соңында 180 - 220%. Коммерциялық баламалардан 3 - 4 есе үнемді.",
      compareColCriterion: "Критерий",
      compareColOurs: "Біздің платформа",
      compareColKnow: "KnowBe4",
      compareColCof: "Cofense",
      compareColProof: "Proofpoint",
      compareR1: "Бағасы",
      compareR1Ours: "Тегін (ашық код)",
      compareR1Know: "Ақылы (жоғары)",
      compareR1Cof: "Ақылы (орта)",
      compareR1Proof: "Ақылы (жоғары)",
      compareR2: "Қазақ тілі",
      compareR2Ours: "Толық қолдау",
      compareR2Know: "Жоқ",
      compareR2Cof: "Жоқ",
      compareR2Proof: "Жоқ",
      compareR3: "Фишинг симуляция",
      compareR3Ours: "5 үлгі",
      compareR3Know: "1000+",
      compareR3Cof: "100+",
      compareR3Proof: "100+",
      compareR4: "Дейін / кейін талдау",
      compareR4Ours: "Бар",
      compareR4Know: "Бар",
      compareR4Cof: "Жоқ",
      compareR4Proof: "Жоқ",
      compareR5: "Сұрақтар талдауы",
      compareR5Ours: "Бар",
      compareR5Know: "Жоқ",
      compareR5Cof: "Жоқ",
      compareR5Proof: "Жоқ",
      compareR6: "Кеңейту",
      compareR6Ours: "Оңай (Spring)",
      compareR6Know: "Шектеулі",
      compareR6Cof: "Шектеулі",
      compareR6Proof: "Шектеулі",

      // CONCLUSION (slide 18)
      conclusionEyebrow: "Қорытынды",
      conclusionTitle: "Алты тұжырым.",
      conclusionPoint1:
        "Әлеуметтік инженерия заманауи киберқауіптердің ең қауіптілерінің бірі, адам факторына негізделген.",
      conclusionPoint2:
        "Кешенді әдістеме әзірленді: ұйымдастырушылық, техникалық, психологиялық қорғаныс.",
      conclusionPoint3:
        "Social Engineering Training Platform веб-платформасы іске асырылды (Spring Boot, Java 17).",
      conclusionPoint4:
        "Оқыту нәтижелері: фишинг басу -29.3%, деректер енгізу -23.4%, хабарлау +48.3%.",
      conclusionPoint5: "Тәуекел деңгейі Критикалық деңгейден Орта деңгейге түсті.",
      conclusionPoint6: "Платформа отандық кәсіпорындарға қазақ тілінде толық қолжетімді, ашық бастапқы код.",

      // THANKS (slide 19)
      thanksEyebrow: "Назарларыңызға",
      thanksTitle: "Рахмет.",
      thanksBody: "Сұрақтарыңызға дайынмын.",

      // FOOTER
      footerByline: "Маратов Бауыржан Жанатович",
      footerDegree: "7M06306 · Ақпараттық қауіпсіздік жүйелері",
      footerSupervisor: "Ғылыми жетекші: Сагиндыков К.М.",
      footerPlace: "Астана, 2026",
      footerNote: "Магистрлік диссертация. Толық жұмыс PDF форматында ұсынылады.",
      footerUni: "Л.Н. Гумилев атындағы Еуразия ұлттық университеті",

      // CHOOSER
      chooserEyebrow: "Дизайн бағыттары",
      chooserTitle: "Сайттың үш визуалды нұсқасы",
      chooserLead:
        "Әрбір нұсқада бірдей мазмұн, бірақ басқа типографика, палитра және ырғақ. Cyber-Noir нұсқасы таңдалды және толық сайтқа дамытылды.",
      chooserVariant1Name: "Cyber-Noir",
      chooserVariant1Desc:
        "Қара фон, моноширинная типографика, терминал ырғағы. Барлық 14 секция, қос тіл, тестпен жабылған.",
      chooserVariant2Name: "Academic",
      chooserVariant2Desc:
        "Сериф, қағаз түсі, тыныш ырғақ. Превью нұсқасы. Архивте сақталды.",
      chooserVariant3Name: "Editorial",
      chooserVariant3Desc:
        "Үлкен дисплей сериф, кеңістік, бір акцент. Превью нұсқасы. Архивте сақталды.",
      chooserOpen: "Толық нұсқа",
      chooserOpenPreview: "Превьюді ашу",
      chooserChosenTag: "ТАҢДАЛДЫ",
      chooserArchiveTag: "Архив",
    },

    ru: {
      // NAV
      navBrand: "Маратов Б.Ж.",
      navProblem: "Проблема",
      navGoals: "Цель",
      navNovelty: "Новизна",
      navAttacks: "Атаки",
      navVulns: "Уязвимости",
      navArch: "Архитектура",
      navPlatform: "Платформа",
      navResults: "Результаты",
      navDepts: "Подразделения",
      navRisk: "Риск",
      navCompare: "Сравнение",
      navConclusion: "Выводы",
      langKk: "ҚАЗ",
      langRu: "RU",

      // HERO
      heroEyebrow: "ЕНУ им. Л.Н. Гумилёва · 7M06306 · 2026",
      heroTitle:
        "Социальная инженерия как угроза безопасности: методы защиты и обучения сотрудников",
      heroLead:
        "Магистерская диссертация. Комплексная методика и open-source платформа обучения. 106 сотрудников, 7 подразделений, 15-дневный цикл.",
      heroAuthorLabel: "Магистрант",
      heroAuthor: "Маратов Бауыржан Жанатович",
      heroSupervisorLabel: "Научный руководитель",
      heroSupervisor: "Сагиндыков К.М.",
      heroDegreeLabel: "Специальность",
      heroDegree: "Системы информационной безопасности",
      heroPlaceLabel: "Место",
      heroPlace: "Астана, 2026",

      // PROBLEM
      problemEyebrow: "Актуальность исследования",
      problemTitle: "Самое слабое звено. Человек.",
      problemLead:
        "Несмотря на межсетевые экраны, антивирусы и IDS, самым уязвимым звеном остаётся человек. Атакующие используют не технические, а психологические приёмы.",
      problemStat1Label: "инцидентов ИБ связаны с человеческим фактором",
      problemStat1Source: "2022",
      problemStat2Label: "годовой ущерб от фишинга",
      problemStat2Source: "FBI IC3, 2022",
      problemStat3Label: "взломов начинаются с человека",
      problemStat3Source: "Verizon DBIR, 2024",

      // GOALS
      goalsEyebrow: "Цель и задачи исследования",
      goalsTitle: "Что было сделано.",
      goalsMain:
        "Разработка методики защиты информации в автоматизированной системе предприятия. Построение комплексной стратегии противодействия атакам социальной инженерии.",
      goalsTask1: "Создание целостной политики безопасности и внедрение её на практике",
      goalsTask2: "Выявление и анализ текущих уязвимостей безопасности",
      goalsTask3: "Обучение сотрудников навыкам безопасной работы с информацией",
      goalsTask4: "Внедрение технических механизмов защиты от фишинга и вишинга",
      goalsTask5: "Разработка планов оперативного реагирования на инциденты",
      goalsTasksLabel: "5 задач",
      goalsMainLabel: "Общая цель",

      // NOVELTY
      noveltyEyebrow: "Научная новизна",
      noveltyTitle: "Что нового предложено.",
      novelty1Title: "Комплексная методика",
      novelty1Body:
        "Методика защиты, объединяющая психологические, организационные и технические аспекты для противодействия современным типам атак.",
      novelty2Title: "Платформа обучения",
      novelty2Body:
        "Программное решение, объединяющее фишинг-симуляцию и результаты обучения на единой платформе. Название: Social Engineering Training Platform.",
      novelty3Title: "Анализ до / после",
      novelty3Body:
        "Система сравнительного анализа результативности обучения с количественной оценкой на основе 15-дневной контрольной точки.",
      novelty4Title: "На казахском языке",
      novelty4Body:
        "Первая open-source платформа SE-обучения, полностью поддерживающая казахский язык, для отечественных предприятий.",

      // ATTACKS
      attacksEyebrow: "Глава 1",
      attacksTitle: "Типы социальной инженерии.",
      attacksLead:
        "Всего шесть типов покрывают более 90% основных атак. У каждого свой сценарий и психологический рычаг.",
      attacksColType: "Тип атаки",
      attacksColDesc: "Описание",
      attacksColRisk: "Уровень",
      attacksRow1Name: "Фишинг",
      attacksRow1Desc: "Получение конфиденциальных данных через поддельные письма",
      attacksRow1Risk: "Высокий",
      attacksRow2Name: "Вишинг",
      attacksRow2Desc: "Обман через телефонный звонок",
      attacksRow2Risk: "Высокий",
      attacksRow3Name: "Претекстинг",
      attacksRow3Desc: "Построение доверия через ложный предлог",
      attacksRow3Risk: "Средний",
      attacksRow4Name: "Бейтинг",
      attacksRow4Desc: "Приманка. USB, бесплатная программа",
      attacksRow4Risk: "Средний",
      attacksRow5Name: "Тейлгейтинг",
      attacksRow5Desc: "Физический проход в зону без доступа",
      attacksRow5Risk: "Низкий",
      attacksRow6Name: "Смишинг",
      attacksRow6Desc: "Фишинг через SMS",
      attacksRow6Risk: "Высокий",
      attacksPrinciplesTitle: "Принципы воздействия на человека",
      attacksPrinciples:
        "использование доверия · психологическое давление · аргумент авторитета · чувство дефицита · разведка по открытым источникам",

      // VULNS
      vulnsEyebrow: "Глава 2",
      vulnsTitle: "Уязвимости АСУ.",
      vulnsLead:
        "Уязвимости в трёх слоях. Закрытие одного не закрывает другой. Поэтому защита должна работать во всех трёх слоях одновременно.",
      vulnsCol1Title: "Человеческий фактор",
      vulnsCol1Item1: "Ошибки сотрудников",
      vulnsCol1Item2: "Слабые пароли",
      vulnsCol1Item3: "Незащищённость конфиденциальных данных",
      vulnsCol2Title: "Организационные",
      vulnsCol2Item1: "Неправильное распределение ролей",
      vulnsCol2Item2: "Недостаточный контроль",
      vulnsCol2Item3: "Отсутствие стандартов безопасности",
      vulnsCol3Title: "Технические",
      vulnsCol3Item1: "Открытость АСУ",
      vulnsCol3Item2: "Протоколы TCP/IP",
      vulnsCol3Item3: "Внешние интеграции",
      vulnsWeakTitle: "Слабые места существующей защиты",
      vulnsWeak1Name: "Антивирусы",
      vulnsWeak1Body: "Бессильны против уязвимостей нулевого дня.",
      vulnsWeak2Name: "2FA",
      vulnsWeak2Body: "Возможна подмена SIM через фишинг.",
      vulnsWeak3Name: "Шифрование",
      vulnsWeak3Body: "При неверной реализации слабые ключи создают риск.",

      // ARCHITECTURE
      archEyebrow: "Глава 3",
      archTitle: "Архитектура системы.",
      archLead:
        "Пятислойный Spring-стек. Каждый слой делает одну вещь. Легко изменять, тестировать и масштабировать.",
      archLayer1Name: "Presentation",
      archLayer1Tech: "Thymeleaf + HTML / CSS",
      archLayer2Name: "Controller",
      archLayer2Tech: "Spring MVC, REST",
      archLayer3Name: "Service",
      archLayer3Tech: "Бизнес-логика, транзакции",
      archLayer4Name: "Repository",
      archLayer4Tech: "Spring Data JPA, JPQL",
      archLayer5Name: "Database",
      archLayer5Tech: "H2 / MySQL / PostgreSQL",
      archStackTitle: "Технологии",
      archStack1Name: "Java 17 LTS",
      archStack1Role: "Язык программирования",
      archStack2Name: "Spring Boot 3.2",
      archStack2Role: "Микросервисный фреймворк",
      archStack3Name: "Spring Security 6.2",
      archStack3Role: "Аутентификация, CSRF",
      archStack4Name: "Chart.js 4.4",
      archStack4Role: "Диаграммы",
      archStack5Name: "BCrypt",
      archStack5Role: "Хэширование паролей",
      archStack6Name: "Docker",
      archStack6Role: "Контейнеризация",

      // PLATFORM
      platformEyebrow: "Реализация",
      platformTitle: "Что делает платформа.",
      platformLead:
        "От панели администратора до фишинг-симуляции, всё в одной платформе. Сотрудник проходит весь путь от открытия письма до отчёта на одном месте.",
      platformF1Title: "Панель администратора",
      platformF1Body: "Управление сотрудниками, тестами и результатами симуляции с одной панели.",
      platformF2Title: "Учебные модули",
      platformF2Body: "Фишинг, вишинг, пароли, инциденты. На казахском, разделены на главы.",
      platformF3Title: "Тестирование",
      platformF3Body: "4 теста × 20 вопросов = 80 вопросов. Порог 70% (настраивается админом). Результаты сохраняются в JSON.",
      platformF4Title: "Фишинг-симуляция",
      platformF4Body: "5 шаблонов, EASY → HARD. Открытие → клик → отправка данных → отчёт. Учёт каждого сотрудника через UUID-токен.",
      platformF5Title: "Внутренний почтовый ящик",
      platformF5Body: "Сотрудники открывают, анализируют и отчитываются о фишинговых письмах внутри платформы. Похож на настоящий email-клиент.",
      platformF6Title: "106 пользователей, 7 подразделений",
      platformF6Body: "Настоящие казахские имена и должности. Симуляция идёт на модели реальной организации.",
      platformSecTitle: "Архитектура безопасности",
      platformSecLead: "На Spring Security 6.x. Принцип Least Privilege.",
      platformSec1Name: "BCrypt",
      platformSec1Body: "Salt + 1024 итерации хэширования.",
      platformSec2Name: "CSRF",
      platformSec2Body: "Защита на основе токенов.",
      platformSec3Name: "Роли",
      platformSec3Body: "ADMIN / EMPLOYEE.",
      platformSec4Name: "SQL injection",
      platformSec4Body: "Параметризованные запросы.",
      platformSec5Name: "XSS",
      platformSec5Body: "Thymeleaf авто-экранирование.",
      platformSec6Name: "Defense-in-Depth",
      platformSec6Body: "Многослойная защита.",
      platformCertTitle: "Условие выдачи сертификата",
      platformCertBody: "Завершение всех модулей + успешная сдача всех тестов.",

      // RESULTS
      resultsEyebrow: "Результаты внедрения",
      resultsTitle: "До. После.",
      resultsLead:
        "Платформа была развёрнута в 7 подразделениях на 15 дней. Каждая метрика измерена до и после цикла фишинг-симуляций и обучения.",
      resultsContext: "105 сотрудников · 7 подразделений · 15 дней",
      resultsMetric1: "Открытие письма",
      resultsMetric1Delta: "-33.2",
      resultsMetric2: "Клик по ссылке",
      resultsMetric2Delta: "-29.3",
      resultsMetric3: "Ввод данных",
      resultsMetric3Delta: "-23.4",
      resultsMetric4: "Сообщение о фишинге",
      resultsMetric4Delta: "+48.3",
      resultsMetric5: "Балл по тесту",
      resultsMetric5Delta: "+32.5",
      resultsCaption: "SANS Security Awareness Maturity Model: уровень 2 → уровень 3",

      // DEPARTMENTS
      deptsEyebrow: "По подразделениям",
      deptsTitle: "Кто держал лучше.",
      deptsLead: "IT-отдел показал самый высокий результат. HR требует дополнительной программы обучения.",
      deptsCol1: "Подразделение",
      deptsCol2: "Балл по тесту",
      deptsCol3: "Клик по ссылке",
      deptsCol4: "Сообщение",
      deptsRow1: "IT-отдел",
      deptsRow2: "Финансовый отдел",
      deptsRow3: "Юридический отдел",
      deptsRow4: "Отдел закупок",
      deptsRow5: "Руководство",
      deptsRow6: "Отдел маркетинга",
      deptsRow7: "HR-отдел",

      // RISK
      riskEyebrow: "Карта риска",
      riskTitle: "Изменение уровня риска.",
      riskLead: "По SANS Security Awareness Maturity Model: переход с уровня 2 на уровень 3.",
      riskRow1Name: "Клик по ссылке",
      riskRow1FromLabel: "КРИТИЧЕСКИЙ",
      riskRow1ToLabel: "СРЕДНИЙ",
      riskRow2Name: "Ввод данных",
      riskRow2FromLabel: "ВЫСОКИЙ",
      riskRow2ToLabel: "НИЗКИЙ",
      riskRow3Name: "Сообщение",
      riskRow3FromLabel: "КРИТИЧЕСКИЙ",
      riskRow3ToLabel: "ВЫСОКИЙ",
      riskRow4Name: "Балл по тесту",
      riskRow4FromLabel: "СРЕДНИЙ",
      riskRow4ToLabel: "НИЗКИЙ РИСК",
      riskFromHead: "До",
      riskToHead: "После",

      // COMPARE
      compareEyebrow: "Место на рынке",
      compareTitle: "Наша vs Коммерческие.",
      compareLead: "Бесплатно, open-source, на казахском. ROI: 180 - 220% в конце первого года. В 3 - 4 раза экономичнее коммерческих альтернатив.",
      compareColCriterion: "Критерий",
      compareColOurs: "Наша платформа",
      compareColKnow: "KnowBe4",
      compareColCof: "Cofense",
      compareColProof: "Proofpoint",
      compareR1: "Стоимость",
      compareR1Ours: "Бесплатно (open source)",
      compareR1Know: "Платно (высокая)",
      compareR1Cof: "Платно (средняя)",
      compareR1Proof: "Платно (высокая)",
      compareR2: "Казахский язык",
      compareR2Ours: "Полная поддержка",
      compareR2Know: "Нет",
      compareR2Cof: "Нет",
      compareR2Proof: "Нет",
      compareR3: "Фишинг-симуляция",
      compareR3Ours: "5 шаблонов",
      compareR3Know: "1000+",
      compareR3Cof: "100+",
      compareR3Proof: "100+",
      compareR4: "Анализ до / после",
      compareR4Ours: "Есть",
      compareR4Know: "Есть",
      compareR4Cof: "Нет",
      compareR4Proof: "Нет",
      compareR5: "Разбор вопросов",
      compareR5Ours: "Есть",
      compareR5Know: "Нет",
      compareR5Cof: "Нет",
      compareR5Proof: "Нет",
      compareR6: "Расширение",
      compareR6Ours: "Легко (Spring)",
      compareR6Know: "Ограничено",
      compareR6Cof: "Ограничено",
      compareR6Proof: "Ограничено",

      // CONCLUSION
      conclusionEyebrow: "Выводы",
      conclusionTitle: "Шесть тезисов.",
      conclusionPoint1:
        "Социальная инженерия одна из самых опасных современных киберугроз, основана на человеческом факторе.",
      conclusionPoint2:
        "Разработана комплексная методика: организационная, техническая, психологическая защита.",
      conclusionPoint3:
        "Веб-платформа Social Engineering Training Platform реализована (Spring Boot, Java 17).",
      conclusionPoint4:
        "Результаты обучения: клики по фишингу -29.3%, ввод данных -23.4%, сообщения +48.3%.",
      conclusionPoint5: "Уровень риска снижен с Критического до Среднего.",
      conclusionPoint6: "Платформа полностью доступна отечественным предприятиям на казахском, исходный код открыт.",

      // THANKS
      thanksEyebrow: "Вашему вниманию",
      thanksTitle: "Спасибо.",
      thanksBody: "Готов к вашим вопросам.",

      // FOOTER
      footerByline: "Маратов Бауыржан Жанатович",
      footerDegree: "7M06306 · Системы информационной безопасности",
      footerSupervisor: "Научный руководитель: Сагиндыков К.М.",
      footerPlace: "Астана, 2026",
      footerNote: "Магистерская диссертация. Полный текст доступен в PDF.",
      footerUni: "Евразийский национальный университет имени Л.Н. Гумилёва",

      // CHOOSER
      chooserEyebrow: "Дизайн-направления",
      chooserTitle: "Три визуальных варианта сайта",
      chooserLead:
        "В каждом варианте одинаковое содержание, но другая типографика, палитра и ритм. Cyber-Noir выбран и развёрнут до полного сайта.",
      chooserVariant1Name: "Cyber-Noir",
      chooserVariant1Desc:
        "Тёмный фон, моноширинная типографика, ритм терминала. Все 14 секций, оба языка, покрыт тестами.",
      chooserVariant2Name: "Academic",
      chooserVariant2Desc:
        "Сериф, бумажный фон, тихий ритм. Превью-вариант. Сохранён в архиве.",
      chooserVariant3Name: "Editorial",
      chooserVariant3Desc:
        "Крупный display-сериф, воздух, один акцент. Превью-вариант. Сохранён в архиве.",
      chooserOpen: "Полная версия",
      chooserOpenPreview: "Открыть превью",
      chooserChosenTag: "ВЫБРАН",
      chooserArchiveTag: "Архив",
    },
  };

  function readStored() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return null;
    }
  }

  function writeStored(lang) {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      /* ignore */
    }
  }

  function setLanguage(lang) {
    const dict = translations[lang] || translations[DEFAULT_LANG];
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(function (node) {
      const key = node.getAttribute("data-i18n");
      if (dict[key] !== undefined) {
        node.textContent = dict[key];
      }
    });
    document.querySelectorAll("[data-lang]").forEach(function (btn) {
      const isActive = btn.getAttribute("data-lang") === lang;
      btn.classList.toggle("active", isActive);
      btn.setAttribute("aria-pressed", isActive ? "true" : "false");
    });
    writeStored(lang);
  }

  function init() {
    const stored = readStored();
    const initial = translations[stored] ? stored : DEFAULT_LANG;
    setLanguage(initial);
    document.querySelectorAll("[data-lang]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        setLanguage(btn.getAttribute("data-lang"));
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  window.__i18n = { setLanguage: setLanguage, translations: translations };
})();
