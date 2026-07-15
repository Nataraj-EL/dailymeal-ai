export type Language = 'en' | 'ta';

export interface TranslationMessages {
  nav: {
    brand: string;
    planner: string;
    history: string;
    preferences: string;
  };
  common: {
    ctaStart: string;
    ctaBackHome: string;
    loading: string;
    notFoundTitle: string;
    notFoundDesc: string;
    langToggle: string;
  };
  hero: {
    title: string;
    subtitle: string;
    tagline: string;
  };
  intro: {
    title: string;
    description: string;
  };
  features: {
    title: string;
    subtitle: string;
    card1Title: string;
    card1Desc: string;
    card2Title: string;
    card2Desc: string;
    card3Title: string;
    card3Desc: string;
    card4Title: string;
    card4Desc: string;
  };
  howItWorks: {
    title: string;
    subtitle: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
    step4Title: string;
    step4Desc: string;
  };
  ctaSection: {
    title: string;
    subtitle: string;
  };
  footer: {
    text: string;
    rights: string;
    privacy: string;
    terms: string;
  };
  plannerPlaceholder: {
    title: string;
    desc: string;
  };
  historyPlaceholder: {
    title: string;
    desc: string;
  };
  preferencesPlaceholder: {
    title: string;
    desc: string;
  };
  planner: {
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    noIngredientsFound: string;
    clearAll: string;
    selectedCount: string;
    selectedHeader: string;
    continueCTA: string;
  };
  categories: {
    vegetables: string;
    grains: string;
    dairy: string;
    protein: string;
    spices_pantry: string;
  };
}

export const messages: Record<Language, TranslationMessages> = {
  en: {
    nav: {
      brand: "DailyMeal AI",
      planner: "Meal Planner",
      history: "Plan History",
      preferences: "Preferences",
    },
    common: {
      ctaStart: "Start Planning",
      ctaBackHome: "Back to Home",
      loading: "Preparing your kitchen menu...",
      notFoundTitle: "Page Not Found",
      notFoundDesc: "The page you are looking for does not exist in our kitchen list.",
      langToggle: "தமிழ்",
    },
    hero: {
      title: "South Indian Meal Planning, Simplified",
      subtitle: "Plan nutritious, traditional Sambar, Rasam, Kootu, and Poriyal schedules customized for your family's preferences.",
      tagline: "Smarter planning for healthy home kitchens",
    },
    intro: {
      title: "Eliminate the Daily Kitchen Fatigue",
      description: "Deciding what to cook for breakfast, lunch, and dinner every single day is stressful. DailyMeal AI respects traditional South Indian dietary wisdom, balancing lentils, vegetables, and grains, so you can spend less time guessing and more time cooking healthy meals.",
    },
    features: {
      title: "Crafted for South Indian Homes",
      subtitle: "Standardizing meal patterns with nutritional balance and family preferences.",
      card1Title: "Traditional Balanced Menus",
      card1Desc: "Perfect rotation of Kuzhambu, Rasam, Kootu, and dry Poriyals, avoiding flavor fatigue and balancing nutrition.",
      card2Title: "Custom Dietary Layouts",
      card2Desc: "Easily plan around strict preferences: No Onion/Garlic, Jain, diabetic-friendly, or specific traditional fasting days (Vratham).",
      card3Title: "Smart Leftover Optimization",
      card3Desc: "Intelligently schedules dinner items around lunch ingredients, reducing kitchen prep time and food waste.",
      card4Title: "Compact Grocery Overview",
      card4Desc: "Consolidates all ingredients into a neat shopping list organized by vegetables, spices, and provisions.",
    },
    howItWorks: {
      title: "How It Works",
      subtitle: "Simple workflow to curate a complete weekly menu in minutes.",
      step1Title: "1. Specify Preferences",
      step1Desc: "Choose spice levels, diabetic preferences, and specify custom fasting days.",
      step2Title: "2. Generate AI Curation",
      step2Desc: "Receive a structured breakfast, lunch, and dinner recommendation matching traditional South Indian menus.",
      step3Title: "3. Customize & Swap",
      step3Desc: "Review the plan and swap any dish with alternatives based on what is available in your refrigerator.",
      step4Title: "4. Get Shopping List",
      step4Desc: "Get a comprehensive grocery checklist to buy only what is necessary, saving time and money.",
    },
    ctaSection: {
      title: "Ready to transform your daily meals?",
      subtitle: "Start organizing your South Indian kitchen schedules today.",
    },
    footer: {
      text: "DailyMeal AI - Standardizing South Indian meal coordination.",
      rights: "© 2026 DailyMeal AI. All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
    },
    plannerPlaceholder: {
      title: "Daily Meal Planner",
      desc: "Our interactive planning interface will live here in the next Sprint. Soon, you will be able to customize schedules, balance spice levels, and generate lists.",
    },
    historyPlaceholder: {
      title: "Plan History",
      desc: "Your historical weekly and daily meal logs will be accessible here, allowing you to quickly reload prior favorites and reuse grocery lists.",
    },
    preferencesPlaceholder: {
      title: "Dietary Preferences",
      desc: "Manage spice defaults, Vratham options, onion/garlic exclusions, and preferred grocery outlets in this centralized panel.",
    },
    planner: {
      title: "Select Your Ingredients",
      subtitle: "Select the ingredients you have available in your kitchen today to curate a balanced traditional menu.",
      searchPlaceholder: "Search ingredients (e.g. Tomato, கடுகு)...",
      noIngredientsFound: "No ingredients found matching your search.",
      clearAll: "Clear All",
      selectedCount: "selected",
      selectedHeader: "Selected Ingredients",
      continueCTA: "Continue to Meal Planning",
    },
    categories: {
      vegetables: "Vegetables",
      grains: "Grains",
      dairy: "Dairy",
      protein: "Protein & Lentils",
      spices_pantry: "Spices & Pantry",
    },
  },
  ta: {
    nav: {
      brand: "டெய்லிமீல் AI",
      planner: "உணவுத் திட்டம்",
      history: "திட்ட வரலாறு",
      preferences: "விருப்பங்கள்",
    },
    common: {
      ctaStart: "திட்டமிடத் தொடங்குங்கள்",
      ctaBackHome: "முகப்புப் பக்கத்திற்குச் செல்லவும்",
      loading: "உங்கள் சமையலறை மெனுவைத் தயார் செய்கிறது...",
      notFoundTitle: "பக்கம் கண்டறியப்படவில்லை",
      notFoundDesc: "நீங்கள் தேடும் பக்கம் எங்கள் சமையலறை பட்டியலில் இல்லை.",
      langToggle: "English",
    },
    hero: {
      title: "தென்னிந்திய உணவுத் திட்டமிடல், இனி மிக எளிது",
      subtitle: "உங்கள் குடும்பத்தின் விருப்பத்திற்கேற்ப உணவு அட்டவணைகளைத் திட்டமிடுங்கள்.",
      tagline: "சமையலறைகளுக்கான உணவுத் திட்டம்",
    },
    intro: {
      title: "தினசரி சமையலறை குழப்பங்களுக்கு முற்றுப்புள்ளி",
      description: "தினமும் காலை, மதியம் மற்றும் இரவு உணவிற்கு என்ன சமைப்பது என்று முடிவெடுப்பது ஒரு பெரிய சவாலாகும். டெய்லிமீல் AI பாரம்பரிய தென்னிந்திய உணவு முறைகளை மதித்து சமையலை எளிதாக்குகிறது.",
    },
    features: {
      title: "தென்னிந்திய குடும்பங்களுக்காக வடிவமைக்கப்பட்டது",
      subtitle: "ஊட்டச்சத்து சமநிலை மற்றும் குடும்ப விருப்பங்களுடன் உணவு முறைகளை ஒழுங்குபடுத்துதல்.",
      card1Title: "பாரம்பரிய சமச்சீர் மெனுக்கள்",
      card1Desc: "குழம்பு, ரசம், கூட்டு, மற்றும் பொரியல் ஆகியவற்றின் சரியான சுழற்சி மூலம் சலிப்பில்லாத சமையல் மற்றும் சிறந்த ஊட்டச்சத்து.",
      card2Title: "பிரத்தியேக உணவு முறைகள்",
      card2Desc: "வெங்காயம்/பூண்டு இல்லாத உணவு, சமண உணவு, சர்க்கரை நோய் உணவு மற்றும் விரத நாட்களுக்கான சிறப்பு அட்டவணைகள்.",
      card3Title: "சமையல் நேரக் குறைப்பு",
      card3Desc: "மதிய உணவின் காய்கறிகள் மற்றும் தயாரிப்புகளை அடிப்படையாகக் கொண்டு இரவு உணவைத் திட்டமிட்டு சமையல் நேரத்தைச் சேமிக்கிறது.",
      card4Title: "மளிகைப் பொருட்களின் பட்டியல்",
      card4Desc: "தேவையான காய்கறிகள், மசாலாக்கள் மற்றும் மளிகைப் பொருட்களை வகைப்படுத்தி எளிமையான கொள்முதல் பட்டியலை வழங்குகிறது.",
    },
    howItWorks: {
      title: "செயல்படும் முறை",
      subtitle: "சில நிமிடங்களில் முழுமையான வாராந்திர மெனுவை உருவாக்குவதற்கான எளிய வழிமுறைகள்.",
      step1Title: "1. விருப்பங்களைத் தேர்வு செய்யவும்",
      step1Desc: "காரத்தின் அளவு, சர்க்கரை நோய்க்கான தேர்வுகள் மற்றும் விரத நாட்களைக் குறிப்பிடவும்.",
      step2Title: "2. தானியங்கி உணவுப் பரிந்துரை",
      step2Desc: "பாரம்பரிய தென்னிந்திய முறைப்படி காலை, மதியம் மற்றும் இரவுக்கான உணவு ஆலோசனைகளைப் பெறுங்கள்.",
      step3Title: "3. மாற்றம் மற்றும் திருத்தம்",
      step3Desc: "பரிந்துரைக்கப்பட்ட உணவுகளை உங்கள் வீட்டில் உள்ள காய்கறிகளுக்கு ஏற்ப எளிதாக மாற்றிக்கொள்ளுங்கள்.",
      step4Title: "4. மளிகைப் பட்டியல் பெறுதல்",
      step4Desc: "தேவைப்படும் பொருட்களை மட்டும் வாங்க தேவையான மளிகைப் பொருட்களின் பட்டியலைப் பெறுங்கள்.",
    },
    ctaSection: {
      title: "தினசரி உணவை மாற்றத் தயாராக இருக்கிறீர்களா?",
      subtitle: "இன்றே உங்கள் தென்னிந்திய சமையலறை உணவு முறைகளைத் திட்டமிடத் தொடங்குங்கள்.",
    },
    footer: {
      text: "டெய்லிமீல் AI - தென்னிந்திய சமையல் உணவு ஒருங்கிணைப்பு.",
      rights: "© 2026 டெய்லிமீல் AI. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",
      privacy: "தனியுரிமைக் கொள்கை",
      terms: "சேவை விதிமுறைகள்",
    },
    plannerPlaceholder: {
      title: "உணவுத் திட்டமிடுபவர்",
      desc: "எங்கள் உணவு திட்டமிடல் இடைமுகம் அடுத்த பிரிண்டில் இங்கு அமையும். விரைவில், நீங்கள் அட்டவணைகளைத் தனிப்பயனாக்கவும், காரத்தின் அளவைச் சமநிலைப்படுத்தவும், பட்டியல்களை உருவாக்கவும் முடியும்.",
    },
    historyPlaceholder: {
      title: "திட்ட வரலாறு",
      desc: "உங்கள் முந்தைய வாராந்திர மற்றும் தினசரி உணவுப் பதிவுகளை இங்கு பார்க்க முடியும். இதன் மூலம் முந்தைய உணவுப் பட்டியல்களை மீண்டும் எளிதாகப் பயன்படுத்தலாம்.",
    },
    preferencesPlaceholder: {
      title: "உணவு விருப்பங்கள்",
      desc: "காரத்தின் அளவு, விரத நாட்கள், வெங்காயம்/பூண்டு தவிர்ப்பு மற்றும் மளிகைக் கடை விருப்பங்களை இந்த மத்திய கட்டுப்பாட்டுப் பலகத்தில் நிர்வகிக்கலாம்.",
    },
    planner: {
      title: "தேவையான பொருட்களைத் தேர்ந்தெடுக்கவும்",
      subtitle: "வழக்கமான சமையல் மெனுவைத் தயாரிக்க உங்கள் சமையலறையில் உள்ள காய்கறிகள் மற்றும் மளிகைப் பொருட்களைத் தேர்வு செய்யவும்.",
      searchPlaceholder: "தேடுங்கள் (உதாரணம்: தக்காளி, கடுகு)...",
      noIngredientsFound: "நீங்கள் தேடிய வார்த்தைக்குப் பொருட்கள் எதுவும் கிடைக்கவில்லை.",
      clearAll: "அனைத்தையும் நீக்கு",
      selectedCount: "தேர்ந்தெடுக்கப்பட்டது",
      selectedHeader: "தேர்ந்தெடுக்கப்பட்ட பொருட்கள்",
      continueCTA: "திட்டமிடலைத் தொடரவும்",
    },
    categories: {
      vegetables: "காய்கறிகள்",
      grains: "தானியங்கள்",
      dairy: "பால் பொருட்கள்",
      protein: "பருப்பு & புரதங்கள்",
      spices_pantry: "மசாலா & மளிகை",
    },
  },
};
