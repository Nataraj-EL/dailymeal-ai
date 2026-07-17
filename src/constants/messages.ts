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
  preferences: {
    title: string;
    subtitle: string;
    dietLabel: string;
    dietDesc: string;
    avoidLabel: string;
    avoidDesc: string;
    spiceLabel: string;
    spiceDesc: string;
    timeLabel: string;
    timeDesc: string;
    familyLabel: string;
    familyDesc: string;
    historyLabel: string;
    historyDesc: string;
    addMeal: string;
    continueCTA: string;
    summaryHeader: string;
    noHistory: string;
    summaryDiet: string;
    summarySpice: string;
    summaryTime: string;
    summarySize: string;
    summaryAvoid: string;
    none: string;
  };
  dialog: {
    titleAdd: string;
    titleEdit: string;
    dishLabel: string;
    dishPlaceholder: string;
    typeLabel: string;
    dateLabel: string;
    ratingLabel: string;
    save: string;
    cancel: string;
    errName: string;
    errDate: string;
    errFuture: string;
  };
  mealTypes: {
    breakfast: string;
    lunch: string;
    dinner: string;
  };
  spices: {
    low: string;
    medium: string;
    high: string;
  };
  diets: {
    veg: string;
    nonveg: string;
  };
  recommendations: {
    title: string;
    subtitle: string;
    matchScore: string;
    confidenceLabel: string;
    confidenceHigh: string;
    confidenceMedium: string;
    confidenceLow: string;
    requiredIngredients: string;
    whyRecommended: string;
    noRecommendationsTitle: string;
    noRecommendationsDesc: string;
    alternativeMatches: string;
    matchesTitle: string;
    missingTitle: string;
    backToPlanner: string;
  };
  reasons: {
    dietMatch: string;
    timeMatch: string;
    highIngredientMatch: string;
    noHistoryConflict: string;
  };
  insights: {
    utilizationTitle: string;
    utilizationDesc: string;
    diversityTitle: string;
    diversityDesc: string;
    diversityLevelHigh: string;
    diversityLevelMedium: string;
    diversityLevelLow: string;
    expiringTitle: string;
    expiringDesc: string;
    leftoversTitle: string;
    substitutionsTitle: string;
    substitutionsDesc: string;
    substituteNote: string;
    leftoverBoiledRice: string;
    leftoverIdli: string;
    leftoverSambar: string;
  };
  assistant: {
    title: string;
    subtitle: string;
    inputPlaceholder: string;
    send: string;
    clearHistory: string;
    loading: string;
    error: string;
    insightsHeader: string;
    insightsIntro: string;
    insightsMeal: string;
    insightsScore: string;
    insightsAvoid: string;
    insightsMissing: string;
    welcome: string;
  };
  weekly: {
    title: string;
    subtitle: string;
    calendarHeader: string;
    summaryHeader: string;
    groceryHeader: string;
    regenerateTooltip: string;
    diversityScore: string;
    utilizationRate: string;
    totalGroceries: string;
    days: {
      monday: string;
      tuesday: string;
      wednesday: string;
      thursday: string;
      friday: string;
      saturday: string;
      sunday: string;
    };
    breakfastSlot: string;
    lunchSlot: string;
    dinnerSlot: string;
    clearPlan: string;
    emptyGrocery: string;
    generateBtn: string;
    diversityHigh: string;
    diversityMedium: string;
    diversityLow: string;
  };
  inventory: {
    title: string;
    subtitle: string;
    totalLabel: string;
    lowStockLabel: string;
    expiringLabel: string;
    recentLabel: string;
    searchPlaceholder: string;
    filterCategory: string;
    filterStock: string;
    stockAll: string;
    stockIn: string;
    stockOut: string;
    addIngredientBtn: string;
    tableIngredient: string;
    tableQuantity: string;
    tableExpiry: string;
    tableStock: string;
    tableActions: string;
    outOfStockBadge: string;
    inStockBadge: string;
    deleteConfirm: string;
    editTitle: string;
    addTitle: string;
    dialogIngredientSelect: string;
    dialogQuantityPlaceholder: string;
    dialogSave: string;
    dialogCancel: string;
    errSelect: string;
    errQty: string;
    priorityLow: string;
    priorityMedium: string;
    priorityHigh: string;
    noItems: string;
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
      rights: "© 2026 NATARAJ EL. ALL RIGHTS RESERVED.",
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
    preferences: {
      title: "Household Preferences",
      subtitle: "Customize dietary preferences, spice settings, and update what you have recently cooked.",
      dietLabel: "Dietary Preference",
      dietDesc: "Select your household diet type.",
      avoidLabel: "Avoided Ingredients",
      avoidDesc: "Toggle ingredients to exclude from planned recommendations.",
      spiceLabel: "Spice Tolerance Level",
      spiceDesc: "Configure seasoning thresholds for curry recipes.",
      timeLabel: "Maximum Cooking Duration",
      timeDesc: "Preferred preparation time window.",
      familyLabel: "Household Size",
      familyDesc: "Specify total dinner portions to scale ingredients.",
      historyLabel: "Recently Cooked Log",
      historyDesc: "Keep track of recently prepared meals to avoid menu repetitions.",
      addMeal: "Add Cooked Meal",
      continueCTA: "Generate Recommendation",
      summaryHeader: "Preference Summary",
      noHistory: "No meals logged recently. Add a dish to get started.",
      summaryDiet: "Diet",
      summarySpice: "Spice Level",
      summaryTime: "Prep Duration",
      summarySize: "Family Members",
      summaryAvoid: "Avoided Ingredients",
      none: "None",
    },
    dialog: {
      titleAdd: "Add Cooked Meal",
      titleEdit: "Edit Cooked Meal",
      dishLabel: "Dish Name",
      dishPlaceholder: "e.g. Tomato Sambar, Idli",
      typeLabel: "Meal Type",
      dateLabel: "Date Cooked",
      ratingLabel: "Rating",
      save: "Save Details",
      cancel: "Cancel",
      errName: "Dish name is required",
      errDate: "Date cooked is required",
      errFuture: "Date cannot be in the future",
    },
    mealTypes: {
      breakfast: "Breakfast",
      lunch: "Lunch",
      dinner: "Dinner",
    },
    spices: {
      low: "Low",
      medium: "Medium",
      high: "High",
    },
    diets: {
      veg: "Vegetarian",
      nonveg: "Non-Vegetarian",
    },
    recommendations: {
      title: "Recommended Kitchen Menu",
      subtitle: "Rule-based South Indian recommendations based on your selected ingredients and preferences.",
      matchScore: "Match Score",
      confidenceLabel: "Confidence",
      confidenceHigh: "High Match",
      confidenceMedium: "Medium Match",
      confidenceLow: "Low Match",
      requiredIngredients: "Required Ingredients Checklist",
      whyRecommended: "Why this recommendation?",
      noRecommendationsTitle: "Not Enough Ingredients Selected",
      noRecommendationsDesc: "We could not find any South Indian recipes matching your selected ingredients. Go back and select more items (such as rice, lentils, or vegetables).",
      alternativeMatches: "Alternative Recommendations",
      matchesTitle: "Available",
      missingTitle: "Missing",
      backToPlanner: "Change Ingredients",
    },
    reasons: {
      dietMatch: "Matches your dietary preference",
      timeMatch: "Fits within your maximum cooking time limit",
      highIngredientMatch: "Uses a high percentage of your selected ingredients",
      noHistoryConflict: "Prevents repetition (not cooked recently)",
    },
    insights: {
      utilizationTitle: "Selected Ingredients Utilization",
      utilizationDesc: "Percentage of your active selected ingredients used in this recipe.",
      diversityTitle: "Weekly Meal Diversity Index",
      diversityDesc: "Measures recipe variety based on your cooked meal logs.",
      diversityLevelHigh: "High Diversity",
      diversityLevelMedium: "Moderate Diversity",
      diversityLevelLow: "Repetitive (Needs Variety)",
      expiringTitle: "Highly Perishable Alerts",
      expiringDesc: "These items are expiring soon and are NOT utilized in this meal. Consider adding them as sides:",
      leftoversTitle: "Leftover Smart Repurposing",
      substitutionsTitle: "Ingredient Substitution Tips",
      substitutionsDesc: "You can swap missing items in this recipe with available ingredients:",
      substituteNote: "Substitute note",
      leftoverBoiledRice: "Repurposing: You have cooked rice in logs. Great opportunity to make Curd Rice or Lemon Rice!",
      leftoverIdli: "Repurposing: Leftover idlis can be crumbled to make Quick Idli Upma!",
      leftoverSambar: "Repurposing: Leftover lunch sambar can be served alongside dinner dosas to save prep time!",
    },
    assistant: {
      title: "AI Kitchen Assistant",
      subtitle: "Bilingual culinary expert explaining recommendations, substitutions, and cooking tips.",
      inputPlaceholder: "Ask about your recipes or ingredients...",
      send: "Send",
      clearHistory: "Clear Chat",
      loading: "Assistant is typing...",
      error: "Failed to connect to assistant. Please retry.",
      insightsHeader: "Shared Context Panel",
      insightsIntro: "The following structured data is provided to help the AI enhance your recommendations:",
      insightsMeal: "Target Recipe",
      insightsScore: "Rule Match Score",
      insightsAvoid: "Avoid List",
      insightsMissing: "Missing Ingredients",
      welcome: "Hello! I am your South Indian Kitchen Assistant. I have analyzed your selected ingredients and preferences. Ask me anything about today's meal recommendations!",
    },
    weekly: {
      title: "Weekly Meal Planner",
      subtitle: "Generate and customize a 7-day Breakfast, Lunch, and Dinner plan with a smart missing grocery checklist.",
      calendarHeader: "Weekly Calendar",
      summaryHeader: "Weekly Curation Summary",
      groceryHeader: "Required Missing Groceries",
      regenerateTooltip: "Regenerate this meal slot",
      diversityScore: "Recipe Diversity Index",
      utilizationRate: "Kitchen Ingredients Reuse",
      totalGroceries: "Total Grocery Items Needed",
      days: {
        monday: "Monday",
        tuesday: "Tuesday",
        wednesday: "Wednesday",
        thursday: "Thursday",
        friday: "Friday",
        saturday: "Saturday",
        sunday: "Sunday",
      },
      breakfastSlot: "Breakfast",
      lunchSlot: "Lunch",
      dinnerSlot: "Dinner",
      clearPlan: "Clear Plan",
      emptyGrocery: "No missing groceries! Your kitchen has all needed ingredients.",
      generateBtn: "Generate Weekly Plan",
      diversityHigh: "High Variety",
      diversityMedium: "Moderate Variety",
      diversityLow: "Repetitive (Needs Variety)",
    },
    inventory: {
      title: "Kitchen Inventory",
      subtitle: "Track ingredient stock levels, expiration times, and mark items out of stock.",
      totalLabel: "Total Ingredients",
      lowStockLabel: "Low Stock",
      expiringLabel: "Expiring Soon",
      recentLabel: "Recently Updated",
      searchPlaceholder: "Search inventory (e.g. Tomato)...",
      filterCategory: "All Categories",
      filterStock: "All Stock",
      stockAll: "All Items",
      stockIn: "In Stock Only",
      stockOut: "Out of Stock Only",
      addIngredientBtn: "Add Ingredient",
      tableIngredient: "Ingredient",
      tableQuantity: "Quantity",
      tableExpiry: "Expiry Priority",
      tableStock: "Stock Status",
      tableActions: "Actions",
      outOfStockBadge: "Out of Stock",
      inStockBadge: "In Stock",
      deleteConfirm: "Are you sure you want to delete this ingredient?",
      editTitle: "Edit Inventory Item",
      addTitle: "Add Inventory Item",
      dialogIngredientSelect: "Select Ingredient",
      dialogQuantityPlaceholder: "e.g. 500g, 1 kg, 2 bunches",
      dialogSave: "Save Item",
      dialogCancel: "Cancel",
      errSelect: "Please select an ingredient",
      errQty: "Quantity is required",
      priorityLow: "Low Priority",
      priorityMedium: "Medium Priority",
      priorityHigh: "High Priority",
      noItems: "No ingredients found in inventory matching your filters.",
    },
  },
  ta: {
    nav: {
      brand: "டெய்லிமீல் AI",
      planner: "உணவுத் திட்டம்",
      history: "சமையல் வரலாறு",
      preferences: "விருப்பத்தேர்வுகள்",
    },
    common: {
      ctaStart: "திட்டமிடத் தொடங்குங்கள்",
      ctaBackHome: "முகப்புப் பக்கத்திற்குத் திரும்பு",
      loading: "உங்கள் சமையல் பட்டியலைத் தயார் செய்கிறது...",
      notFoundTitle: "பக்கம் கண்டறியப்படவில்லை",
      notFoundDesc: "நீங்கள் தேடும் பக்கம் கண்டறியப்படவில்லை.",
      langToggle: "English",
    },
    hero: {
      title: "தென்னிந்திய உணவுத் திட்டமிடல், இனி மிக எளிது!",
      subtitle: "உங்கள் குடும்பத்தினரின் விருப்பத்திற்கேற்ப உணவு அட்டவணையைத் திட்டமிடுங்கள்.",
      tagline: "வீட்டுச் சமையலை எளிதாக்கும் உணவுத் திட்டம்",
    },
    intro: {
      title: "தினசரி சமையல் குழப்பங்களுக்கு முற்றுப்புள்ளி!",
      description: "தினமும் மூன்று வேளையும் என்ன சமைப்பது என்று முடிவெடுப்பது பெரிய சவாலாகும். டெய்லிமீல் AI பாரம்பரிய தென்னிந்திய உணவு முறைகளைப் பின்பற்றி பருப்பு, காயகறிகள் மற்றும் தானியங்களைச் சமச்சீராகத் திட்டமிட உதவுகிறது. இதனால் நீங்கள் யோசிக்கும் நேரத்தைக் குறைத்து, ஆரோக்கியமாகச் சமைக்கலாம்.",
    },
    features: {
      title: "தென்னிந்திய குடும்பங்களுக்காக வடிவமைக்கப்பட்டது",
      subtitle: "ஊட்டச்சத்து சமநிலை மற்றும் குடும்பத்தினரின் விருப்பத்திற்கேற்ப உணவுகளைத் திட்டமிடுதல்.",
      card1Title: "பாரம்பரிய சமச்சீர் உணவுப் பட்டியல்",
      card1Desc: "சாம்பார், ரசம், கூட்டு மற்றும் பொரியல் போன்ற உணவுகளைச் சுழற்சி முறையில் சமைப்பதன் மூலம் சலிப்பில்லாத, சத்தான உணவு.",
      card2Title: "பிரத்தியேக உணவு விருப்பங்கள்",
      card2Desc: "வெங்காயம்-பூண்டு தவிர்த்த உணவுகள், சமண உணவு முறைகள், சர்க்கரை நோயாளிகளுக்கான உணவுகள் மற்றும் விரத நாட்களுக்கான சிறப்பு உணவுத் திட்டம்.",
      card3Title: "சமையல் நேரத்தைச் சேமிக்கலாம்",
      card3Desc: "மதிய உணவிற்குப் பயன்படுத்திய காயகறிகள் மற்றும் மீதமுள்ள பொருட்களைக் கொண்டு இரவு உணவைத் திட்டமிடுவதன் மூலம் சமையல் நேரத்தைச் சேமிக்கலாம்.",
      card4Title: "மளிகைப் பொருட்கள் பட்டியல்",
      card4Desc: "தேவையான காய்கறிகள், மசாலாக்கள் மற்றும் மளிகைப் பொருட்களை வகைப்படுத்தி எளிய கொள்முதல் பட்டியலை வழங்குகிறது.",
    },
    howItWorks: {
      title: "இது எவ்வாறு செயல்படுகிறது?",
      subtitle: "சில நிமிடங்களில் முழுமையான வாராந்திர உணவுப் பட்டியலை உருவாக்குவதற்கான எளிய வழிமுறைகள்.",
      step1Title: "1. விருப்பத்தேர்வுகளை அமைக்கவும்",
      step1Desc: "காரத்தின் அளவு, சர்க்கரை நோய் தேர்வுகள் மற்றும் விரத நாட்களைக் குறிப்பிடவும்.",
      step2Title: "2. உணவுப் பரிந்துரைகளைப் பெறுங்கள்",
      step2Desc: "பாரம்பரிய தென்னிந்திய முறைப்படி காலை, மதியம், இரவு உணவிற்கான ஆலோசனைகளைப் பெறுங்கள்.",
      step3Title: "3. மாற்றித் திருத்தவும்",
      step3Desc: "பரிந்துரைக்கப்பட்ட உணவுகளை உங்கள் சமையலறையில் உள்ள காய்கறிகளுக்கு ஏற்ப எளிதாக மாற்றிக்கொள்ளுங்கள்.",
      step4Title: "4. மளிகைப் பட்டியலைப் பெறுங்கள்",
      step4Desc: "தேவைப்படும் பொருட்களை மட்டும் வாங்க மளிகைப் பட்டியலைப் பெறுங்கள்.",
    },
    ctaSection: {
      title: "தினசரி சமையல் முறையை மாற்றத் தயாராக இருக்கிறீர்களா?",
      subtitle: "இன்றே உங்கள் தென்னிந்திய சமையல் திட்டத்தைத் தொடங்குங்கள்.",
    },
    footer: {
      text: "டெய்லிமீல் AI - தென்னிந்திய சமையல் ஒருங்கிணைப்பு.",
      rights: "© 2026 NATARAJ EL. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",
      privacy: "தனியுரிமைக் கொள்கை",
      terms: "சேவை விதிமுறைகள்",
    },
    plannerPlaceholder: {
      title: "வார உணவுத் திட்டமிடுபவர்",
      desc: "எங்கள் சமையல் திட்டமிடல் பக்கம் விரைவில் இங்கு இடம்பெறும். இதன் மூலம் நீங்கள் அட்டவணைகளைத் தனிப்பயனாக்கவும், காரத்தின் அளவைச் சரிசெய்யவும், பட்டியல்களை உருவாக்கவும் முடியும்.",
    },
    historyPlaceholder: {
      title: "சமையல் வரலாறு",
      desc: "உங்கள் முந்தைய வாராந்திர மற்றும் தினசரி சமையல் பதிவுகளை இங்கு பார்க்க முடியும். இதன் மூலம் முந்தைய உணவுப் பட்டியல்களை மீண்டும் எளிதாகப் பயன்படுத்தலாம்.",
    },
    preferencesPlaceholder: {
      title: "விருப்பத்தேர்வுகள்",
      desc: "காரத்தின் அளவு, விரத நாட்கள், வெங்காயம்-பூண்டு தவிர்ப்பு மற்றும் மளிகைக் கடை விருப்பங்களை இந்தப் பக்கத்தில் நிர்வகிக்கலாம்.",
    },
    planner: {
      title: "உங்களிடம் உள்ள சமையல் பொருட்களைத் தேர்ந்தெடுக்கவும்",
      subtitle: "அதற்கேற்ற உணவுப் பட்டியலைத் தயாரிக்க, உங்கள் சமையலறையில் இருக்கும் காய்கறிகள் மற்றும் மளிகைப் பொருட்களைத் தேர்வு செய்யுங்கள்.",
      searchPlaceholder: "தேடுக (உதாரணம்: தக்காளி, கடுகு)...",
      noIngredientsFound: "தேடலுக்குப் பொருத்தமான பொருட்கள் எதுவும் கிடைக்கவில்லை.",
      clearAll: "அனைத்தையும் ரத்துசெய்",
      selectedCount: "தேர்ந்தெடுக்கப்பட்டவை",
      selectedHeader: "தேர்ந்தெடுக்கப்பட்ட சமையல் பொருட்கள்",
      continueCTA: "உணவுத் திட்டமிடலுக்குச் செல்க",
    },
    categories: {
      vegetables: "காய்கறிகள்",
      grains: "தானியங்கள்",
      dairy: "பால் பொருட்கள்",
      protein: "பருப்பு மற்றும் புரதங்கள்",
      spices_pantry: "மசாலா மற்றும் மளிகைப் பொருட்கள்",
    },
    preferences: {
      title: "உணவு விருப்பத்தேர்வுகள்",
      subtitle: "காரத்தின் அளவு, சமையல் நேரம் மற்றும் சமீபத்தில் சமைத்த உணவு வகைகளைத் தனிப்பயனாக்குங்கள்.",
      dietLabel: "உணவுப் பழக்கம்",
      dietDesc: "உங்கள் குடும்பத்தின் உணவுப் பழக்கத்தைத் தேர்ந்தெடுக்கவும்.",
      avoidLabel: "தவிர்க்க விரும்பும் பொருட்கள்",
      avoidDesc: "உணவுப் பரிந்துரைகளில் நீங்கள் சேர்க்க விரும்பாத பொருட்களைத் தேர்ந்தெடுக்கவும்.",
      spiceLabel: "காரத்தின் அளவு",
      spiceDesc: "உணவுகளுக்கான காரத்தின் அளவை அமைக்கவும்.",
      timeLabel: "அதிகபட்ச சமையல் நேரம்",
      timeDesc: "சமையல் செய்ய எடுத்துக்கொள்ளும் அதிகபட்ச நேரம்.",
      familyLabel: "குடும்ப உறுப்பினர்கள்",
      familyDesc: "தேவையான பொருட்களின் அளவைக் கணக்கிட உதவும்.",
      historyLabel: "சமீபத்தில் சமைத்தவை",
      historyDesc: "ஒரே உணவைத் திரும்பத் திரும்ப சமைப்பதைத் தவிர்க்க, சமீபத்தில் சமைத்தவற்றை இங்கு பதிவிடுங்கள்.",
      addMeal: "சமைத்த உணவைச் சேர்க்கவும்",
      continueCTA: "உணவுப் பரிந்துரைகளை உருவாக்கு",
      summaryHeader: "விருப்பத்தேர்வுகளின் சுருக்கம்",
      noHistory: "சமீபத்தில் சமைத்த உணவுகள் எதுவும் இல்லை. ஒரு உணவைச் சேர்த்துத் தொடங்குங்கள்.",
      summaryDiet: "உணவு முறை",
      summarySpice: "கார அளவு",
      summaryTime: "சமையல் நேரம்",
      summarySize: "உறுப்பினர்களின் எண்ணிக்கை",
      summaryAvoid: "தவிர்க்க வேண்டியவை",
      none: "எதுவுமில்லை",
    },
    dialog: {
      titleAdd: "சமைத்த உணவைச் சேர்க்கவும்",
      titleEdit: "பதிவைத் திருத்தவும்",
      dishLabel: "உணவின் பெயர்",
      dishPlaceholder: "உதாரணம்: தக்காளி சாம்பார், இட்லி",
      typeLabel: "உணவு வேளை",
      dateLabel: "சமைத்த தேதி",
      ratingLabel: "மதிப்பீடு",
      save: "பதிவு செய்",
      cancel: "ரத்து செய்க",
      errName: "உணவின் பெயர் கட்டாயம்",
      errDate: "சமைத்த தேதி கட்டாயம்",
      errFuture: "தேதி எதிர்காலத் தேதியாக இருக்கக்கூடாது",
    },
    mealTypes: {
      breakfast: "காலை உணவு",
      lunch: "மதிய உணவு",
      dinner: "இரவு உணவு",
    },
    spices: {
      low: "குறைவு",
      medium: "நடுத்தரம்",
      high: "அதிகம்",
    },
    diets: {
      veg: "சைவம்",
      nonveg: "அசைவம்",
    },
    recommendations: {
      title: "இன்றைய உணவுப் பரிந்துரைகள்",
      subtitle: "நீங்கள் தேர்ந்தெடுத்த பொருட்கள் மற்றும் குடும்ப விருப்பத்தேர்வுகளின் அடிப்படையில் தென்னிந்திய உணவுப் பரிந்துரைகள்.",
      matchScore: "பொருத்த விகிதம்",
      confidenceLabel: "பொருத்த நிலை",
      confidenceHigh: "அதிகப் பொருத்தம்",
      confidenceMedium: "மிதமான பொருத்தம்",
      confidenceLow: "குறைந்த பொருத்தம்",
      requiredIngredients: "தேவையான பொருட்கள்",
      whyRecommended: "இந்தப் பரிந்துரைக்கான காரணங்கள்:",
      noRecommendationsTitle: "தேவையான பொருட்கள் போதுமானதாக இல்லை",
      noRecommendationsDesc: "நீங்கள் தேர்ந்தெடுத்த சமையல் பொருட்களுக்குப் பொருத்தமான பாரம்பரிய தென்னிந்திய உணவு வகைகள் எதுவும் கிடைக்கவில்லை. தயவுசெய்து கூடுதல் பொருட்களைத் தேர்ந்தெடுக்கவும்.",
      alternativeMatches: "பிற மாற்றுப் பரிந்துரைகள்",
      matchesTitle: "உள்ளவை",
      missingTitle: "தேவைப்படுபவை",
      backToPlanner: "பொருட்களை மாற்றுக",
    },
    reasons: {
      dietMatch: "உங்கள் உணவுப் பழக்கத்தோடு பொருந்துகிறது",
      timeMatch: "குறிப்பிட்ட சமையல் நேரத்திற்குள் சமைக்க முடியும்",
      highIngredientMatch: "உங்களிடம் உள்ள பெரும்பாலான பொருட்களைப் பயன்படுத்துகிறது",
      noHistoryConflict: "சமீபத்தில் சமைக்கப்படவில்லை (உணவுச் சுழற்சிப் பொருத்தம்)",
    },
    insights: {
      utilizationTitle: "தேர்ந்தெடுத்த சமையல் பொருட்கள் பயன்பாடு",
      utilizationDesc: "நீங்கள் தேர்ந்தெடுத்த பொருட்களில் இந்த உணவுக்குப் பயன்படுத்தப்படும் அளவு.",
      diversityTitle: "வாராந்திர உணவுப் பல்வகைமை",
      diversityDesc: "நீங்கள் சமைத்த உணவுகளின் பதிவைக் கொண்டு சமையல் சுழற்சியை அளவிடுகிறது.",
      diversityLevelHigh: "அதிகப் பல்வகைமை (சிறந்தது)",
      diversityLevelMedium: "மிதமான பல்வகைமை (நன்று)",
      diversityLevelLow: "ஒரே வகையான உணவு (மாற்றம் தேவை)",
      expiringTitle: "விரைவில் காலாவதியாகும் பொருட்கள்",
      expiringDesc: "சமையலறையில் உள்ள இந்த பொருட்கள் விரைவில் கெடக்கூடியவை, ஆனால் இந்த உணவில் பயன்படுத்தப்படவில்லை. இவற்றையும் சேர்த்துச் சமைக்கலாம்:",
      leftoversTitle: "மீதமுள்ள உணவுகளின் மறுபயன்பாடு",
      substitutionsTitle: "மாற்றுப் பொருட்களுக்கான குறிப்புகள்",
      substitutionsDesc: "தேவைப்படும் சில பொருட்களுக்குப் பதிலாக உங்களிடம் இருக்கும் இந்த மாற்றுப் பொருட்களைப் பயன்படுத்தலாம்:",
      substituteNote: "குறிப்பு",
      leftoverBoiledRice: "மறுபயன்பாடு: உங்களிடம் மீதமுள்ள சாதத்தைக் கொண்டு எலுமிச்சை சாதம் அல்லது தயிர் சாதம் செய்யலாம்!",
      leftoverIdli: "மறுபயன்பாடு: மீதமுள்ள இட்லிகளைக் கொண்டு இட்லி உப்புமா செய்யலாம்!",
      leftoverSambar: "மறுபயன்பாடு: மதிய உணவு சாம்பாரை இரவு தோசையோடு தொட்டுக்கொண்டு நேரத்தைச் சேமிக்கலாம்!",
    },
    assistant: {
      title: "AI சமையலறை உதவியாளர்",
      subtitle: "இருமொழியில் உணவுப் பரிந்துரைகள், மாற்றுப் பொருட்கள் மற்றும் சமையல் குறிப்புகளை வழங்கும் சமையல் நிபுணர்.",
      inputPlaceholder: "உணவுகள் அல்லது சமையல் பொருட்கள் பற்றிப் பேசுங்கள்...",
      send: "அனுப்புக",
      clearHistory: "அரட்டையை அழிக்கவும்",
      loading: "உதவியாளர் பதிலளிக்கிறார்...",
      error: "இணைக்க முடியவில்லை. மீண்டும் முயற்சிக்கவும்.",
      insightsHeader: "உதவியாளருடன் பகிரப்பட்ட விவரங்கள்",
      insightsIntro: "உங்களுக்குச் சிறந்த பரிந்துரைகளை வழங்க, உதவியாளருடன் பகிரப்பட்டுள்ள விவரங்கள்:",
      insightsMeal: "பரிந்துரைக்கப்பட்ட உணவு",
      insightsScore: "பொருத்த விகிதம்",
      insightsAvoid: "தவிர்க்க விரும்பும் பொருட்கள்",
      insightsMissing: "தேவைப்படும் பொருட்கள்",
      welcome: "வணக்கம்! நான் உங்கள் தென்னிந்திய சமையல் உதவியாளர். உங்களிடம் உள்ள பொருட்கள் மற்றும் விருப்பத்தேர்வுகளை ஆராய்ந்துள்ளேன். இன்றைய உணவுப் பரிந்துரைகள் பற்றி உங்களிடம் உள்ள கேள்விகளைக் கேளுங்கள்!",
    },
    weekly: {
      title: "வாராந்திர உணவுத் திட்டம்",
      subtitle: "7 நாட்களுக்கான காலை, மதியம், இரவு உணவுத் திட்டத்தையும் தேவையான மளிகைப் பட்டியலையும் பெறுங்கள்.",
      calendarHeader: "வாராந்திர அட்டவணை",
      summaryHeader: "வாராந்திர உணவுச் சுருக்கம்",
      groceryHeader: "தேவைப்படும் மளிகைப் பொருட்கள்",
      regenerateTooltip: "இந்த உணவு வேளையை மாற்றுக",
      diversityScore: "வாராந்திர உணவுப் பல்வகைமை",
      utilizationRate: "பொருட்களின் பயன்பாட்டுத் திறன்",
      totalGroceries: "தேவைப்படும் மளிகைப் பொருட்களின் எண்ணிக்கை",
      days: {
        monday: "திங்கள்",
        tuesday: "செவ்வாய்",
        wednesday: "புதன்",
        thursday: "வியாழன்",
        friday: "வெள்ளி",
        saturday: "சனி",
        sunday: "ஞாயிறு",
      },
      breakfastSlot: "காலை உணவு",
      lunchSlot: "மதிய உணவு",
      dinnerSlot: "இரவு உணவு",
      clearPlan: "திட்டத்தை நீக்குக",
      emptyGrocery: "மளிகைப் பட்டியல் காலியாக உள்ளது! சமையலறையில் தேவையான அனைத்துப் பொருட்களும் உள்ளன.",
      generateBtn: "வாராந்திர உணவுத் திட்டம் உருவாக்கு",
      diversityHigh: "அதிகப் பல்வகைமை",
      diversityMedium: "மிதமான பல்வகைமை",
      diversityLow: "ஒரே வகையான உணவு (மாற்றம் தேவை)",
    },
    inventory: {
      title: "சமையலறை இருப்பு மேலாண்மை",
      subtitle: "சமையல் பொருட்களின் அளவுகள், காலாவதியாகும் காலம் மற்றும் இருப்பு நிலைகளை நிர்வகியுங்கள்.",
      totalLabel: "மொத்த பொருட்கள்",
      lowStockLabel: "குறைந்த இருப்பு",
      expiringLabel: "விரைவில் காலாவதியாகும்",
      recentLabel: "சமீபத்தில் புதுப்பிக்கப்பட்டவை",
      searchPlaceholder: "இருப்பில் தேடுக (உதாரணம்: தக்காளி)...",
      filterCategory: "அனைத்துப் பிரிவுகள்",
      filterStock: "இருப்பு நிலை",
      stockAll: "அனைத்துப் பொருட்கள்",
      stockIn: "இருப்பில் உள்ளவை மட்டும்",
      stockOut: "இருப்பு இல்லாதவை மட்டும்",
      addIngredientBtn: "புதிய பொருளைச் சேர்",
      tableIngredient: "சமையல் பொருள்",
      tableQuantity: "அளவு",
      tableExpiry: "காலாவதி முன்னுரிமை",
      tableStock: "இருப்பு நிலை",
      tableActions: "செயல்கள்",
      outOfStockBadge: "இருப்பில் இல்லை",
      inStockBadge: "இருப்பில் உள்ளது",
      deleteConfirm: "இந்தப் பொருளை இருப்பிலிருந்து நீக்க விரும்புகிறீர்களா?",
      editTitle: "இருப்பு விவரங்களைத் திருத்துக",
      addTitle: "இருப்பில் புதிய பொருளைச் சேர்",
      dialogIngredientSelect: "சமையல் பொருளைத் தேர்ந்தெடுக்கவும்",
      dialogQuantityPlaceholder: "உதாரணம்: 500g, 1 kg, 2 கட்டுகள்",
      dialogSave: "விவரங்களைச் சேமி",
      dialogCancel: "ரத்து செய்க",
      errSelect: "தயவுசெய்து ஒரு பொருளைத் தேர்ந்தெடுக்கவும்",
      errQty: "பொருளின் அளவு கட்டாயம்",
      priorityLow: "குறைந்த முன்னுரிமை",
      priorityMedium: "நடுத்தர முன்னுரிமை",
      priorityHigh: "உயர் முன்னுரிமை",
      noItems: "உங்கள் வடிகட்டலுக்குப் பொருத்தமான பொருட்கள் இருப்பில் எதுவும் இல்லை.",
    },
  },
};
