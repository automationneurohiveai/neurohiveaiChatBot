export const translations = {
  en: {
    // IntroForm translations
    title: "Meet your AI Agent",
    description: "Your AI Agent is more than a tool — it's a team member. It learns your processes, talks to clients, and executes tasks — so you can focus on what really matters.",
    instruction: "Just paste your link below",
    placeholder: "Paste your website here...",
    buttonText: "Start analysing",
    
    // IntroLoading translations
    loadingTitle: "Analysing your website...",
    tasks: [
      "Scanning pages and structure",
      "Detecting key call-to-actions", 
      "Understanding user journeys",
      "Learning your tone of voice",
      "Preparing to become your assistant"
    ],
    
    // ChatInfo translations
    headerTitle: "NeuroHive AI Agent",
    initialMessage: "Hi there! I'm your personal assistant here to help you explore our ice cream selection and services.\nLet me know what you'd like to know!",
    placeholder: "Ask me anything...",
    loadingText: "AI is thinking..."
  },
  
  uk: {
    // IntroForm translations
    title: "Зустрічайте свого AI Агента",
    description: "Ваш AI Агент - це більше ніж інструмент — це член команди. Він вивчає ваші процеси, спілкується з клієнтами та виконує завдання — щоб ви могли зосередитися на дійсно важливому.",
    instruction: "Просто вставте своє посилання нижче",
    placeholder: "Вставте ваш веб-сайт тут...",
    buttonText: "Почати аналіз",
    
    // IntroLoading translations
    loadingTitle: "Аналізуємо ваш веб-сайт...",
    tasks: [
      "Сканування сторінок та структури",
      "Виявлення ключових призовів до дії",
      "Розуміння шляхів користувачів",
      "Вивчення вашого тону спілкування",
      "Підготовка до роботи в якості вашого асистента"
    ],
    
    // ChatInfo translations
    headerTitle: "NeuroHive AI Агент",
    initialMessage: "Привіт! Я ваш персональний асистент, готовий допомогти вам дослідити наш асортимент морозива та послуги.\nПовідомте мені, що ви хотіли б дізнатися!",
    placeholder: "Запитайте мене про що завгодно...",
    loadingText: "AI думає..."
  },
  
  pl: {
    // IntroForm translations
    title: "Poznaj swojego AI Agenta",
    description: "Twój AI Agent to więcej niż narzędzie — to członek zespołu. Uczy się Twoich procesów, rozmawia z klientami i wykonuje zadania — abyś mógł skupić się na tym, co naprawdę ważne.",
    instruction: "Po prostu wklej swój link poniżej",
    placeholder: "Wklej tutaj swoją stronę internetową...",
    buttonText: "Rozpocznij analizę",
    
    // IntroLoading translations
    loadingTitle: "Analizuję Twoją stronę internetową...",
    tasks: [
      "Skanowanie stron i struktury",
      "Wykrywanie kluczowych wezwań do działania",
      "Rozumienie ścieżek użytkownika",
      "Uczenie się Twojego tonu komunikacji",
      "Przygotowywanie się do pracy jako Twój asystent"
    ],
    
    // ChatInfo translations
    headerTitle: "NeuroHive AI Agent",
    initialMessage: "Cześć! Jestem Twoim osobistym asystentem, gotowym pomóc Ci poznać naszą ofertę lodów i usług.\nDaj mi znać, co chciałbyś wiedzieć!",
    placeholder: "Zapytaj mnie o cokolwiek...",
    loadingText: "AI myśli..."
  }
};

export const getTranslation = (lang, key) => {
  const supportedLangs = ['en', 'uk', 'pl'];
  const currentLang = supportedLangs.includes(lang) ? lang : 'en';
  
  const keys = key.split('.');
  let translation = translations[currentLang];
  
  for (const k of keys) {
    if (translation && translation[k]) {
      translation = translation[k];
    } else {
      // Fallback to English if translation not found
      translation = translations.en;
      for (const fallbackKey of keys) {
        if (translation && translation[fallbackKey]) {
          translation = translation[fallbackKey];
        } else {
          return key; // Return key if no translation found
        }
      }
      break;
    }
  }
  
  return translation;
}; 