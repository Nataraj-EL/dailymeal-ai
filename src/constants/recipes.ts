export interface RecipeIngredient {
  ingredientId: string;
  quantity: {
    en: string;
    ta: string;
  };
  optional?: boolean;
}

export interface RecipeStep {
  stepNumber: number;
  en: string;
  ta: string;
}

export interface Recipe {
  id: string; // Matches meal id
  enName: string;
  taName: string;
  prepTime: string;
  cookingTime: string;
  servings: number;
  difficulty: 'easy' | 'medium' | 'hard';
  ingredients: RecipeIngredient[];
  steps: RecipeStep[];
  nutrition: {
    calories: number;
    protein: string;
    carbs: string;
    fat: string;
  };
  chefTips: {
    en: string;
    ta: string;
  }[];
  storageLeftoverTips: {
    en: string;
    ta: string;
  };
}

export const recipes: Recipe[] = [
  // BREAKFAST (15 Recipes)
  {
    id: 'idli_sambar',
    enName: 'Idli with Sambar',
    taName: 'இட்லி மற்றும் சாம்பார்',
    prepTime: '15 mins',
    cookingTime: '30 mins',
    servings: 4,
    difficulty: 'medium',
    ingredients: [
      { ingredientId: 'raw_rice', quantity: { en: '3 cups', ta: '3 கப்' } },
      { ingredientId: 'urad_dal', quantity: { en: '1 cup', ta: '1 கப்' } },
      { ingredientId: 'tomato', quantity: { en: '2 medium', ta: '2 நடுத்தரம்' } },
      { ingredientId: 'mustard_seeds', quantity: { en: '1 tsp', ta: '1 தேக்கரண்டி' } },
      { ingredientId: 'sambar_powder', quantity: { en: '2 tbsp', ta: '2 மேஜைக்கரண்டி' } },
      { ingredientId: 'salt', quantity: { en: 'to taste', ta: 'தேவையான அளவு' } }
    ],
    steps: [
      { stepNumber: 1, en: 'Soak rice and urad dal separately for 4 hours, then grind to a smooth batter. Ferment overnight.', ta: 'அரிசி மற்றும் உளுந்தை தனித்தனியாக 4 மணிநேரம் ஊறவைத்து, மிருதுவாக அரைக்கவும். இரவு முழுவதும் புளிக்க விடவும்.' },
      { stepNumber: 2, en: 'Pour the batter into idli moulds and steam for 10-12 minutes until soft.', ta: 'இட்லி தட்டுகளில் எண்ணெயைத் தடவி மாவை ஊற்றி 10-12 நிமிடங்கள் வேகவைக்கவும்.' },
      { stepNumber: 3, en: 'For sambar, boil lentils and tomatoes. Temper with mustard seeds, curry leaves, sambar powder, and salt.', ta: 'சாம்பார் செய்ய, பருப்பு மற்றும் தக்காளியை வேகவைக்கவும். கடுகு, கறிவேப்பிலை, சாம்பார் பொடி மற்றும் உப்பு சேர்த்துத் தாளிக்கவும்.' }
    ],
    nutrition: { calories: 320, protein: '10g', carbs: '58g', fat: '2g' },
    chefTips: [
      { en: 'For fluffier idlis, grind the urad dal until it is light, airy, and floats on water.', ta: 'இட்லி மிருதுவாக வர, உளுந்தை வெண்ணெய் போல் நன்றாக அரைக்க வேண்டும்.' }
    ],
    storageLeftoverTips: {
      en: 'Leftover idlis can be cut and made into Idli Upma next morning.',
      ta: 'மீதமுள்ள இட்லிகளை மறுநாள் காலையில் உதிர்த்து இட்லி உப்புமாவாகச் செய்யலாம்.'
    }
  },
  {
    id: 'plain_dosa',
    enName: 'Plain Dosa with Coconut Chutney',
    taName: 'தேங்காய் சட்னியுடன் தோசை',
    prepTime: '10 mins',
    cookingTime: '15 mins',
    servings: 3,
    difficulty: 'easy',
    ingredients: [
      { ingredientId: 'raw_rice', quantity: { en: '3 cups', ta: '3 கப்' } },
      { ingredientId: 'urad_dal', quantity: { en: '1 cup', ta: '1 கப்' } },
      { ingredientId: 'coconut', quantity: { en: '1 cup grated', ta: '1 கப் துருவிய தேங்காய்' } },
      { ingredientId: 'mustard_seeds', quantity: { en: '1 tsp', ta: '1 தேக்கரண்டி' } },
      { ingredientId: 'green_chilli', quantity: { en: '2', ta: '2' } },
      { ingredientId: 'salt', quantity: { en: 'to taste', ta: 'தேவையான அளவு' } }
    ],
    steps: [
      { stepNumber: 1, en: 'Spread dosa batter on a hot tawa in a circular motion. Drizzle ghee/oil around the edges.', ta: 'சூடான தோசைக் கல்லில் மாவை வட்ட வடிவில் பரப்பவும். ஓரங்களில் நெய் அல்லது எண்ணெய் ஊற்றவும்.' },
      { stepNumber: 2, en: 'Cook until crisp and golden brown. Flip if necessary, though not traditional.', ta: 'தோசை பொன்னிறமாகவும் மொறுமொறுப்பாகவும் வரும் வரை வேகவிடவும்.' },
      { stepNumber: 3, en: 'Blend coconut, green chillies, ginger, and salt into chutney. Temper with mustard seeds.', ta: 'துருவிய தேங்காய், பச்சை மிளகாய், இஞ்சி மற்றும் உப்பு சேர்த்து அரைக்கவும். கடுகு சேர்த்துத் தாளிக்கவும்.' }
    ],
    nutrition: { calories: 280, protein: '8g', carbs: '45g', fat: '6g' },
    chefTips: [
      { en: 'Rub the hot tawa with half an onion before making dosa for non-stick results.', ta: 'தோசை ஒட்டாமல் வர, கல்லில் மாவை ஊற்றுவதற்கு முன் வெங்காயத் துண்டால் தேய்க்கவும்.' }
    ],
    storageLeftoverTips: {
      en: 'Dosa batter can be stored in the refrigerator for up to a week.',
      ta: 'தோசை மாவை குளிர்சாதனப் பெட்டியில் ஒரு வாரம் வரை சேமித்து வைக்கலாம்.'
    }
  },
  {
    id: 'rava_upma',
    enName: 'Rava Upma',
    taName: 'ரவை உப்புமா',
    prepTime: '5 mins',
    cookingTime: '15 mins',
    servings: 2,
    difficulty: 'easy',
    ingredients: [
      { ingredientId: 'rava', quantity: { en: '1 cup', ta: '1 கப்' } },
      { ingredientId: 'onion', quantity: { en: '1 medium', ta: '1 நடுத்தரம்' } },
      { ingredientId: 'green_chilli', quantity: { en: '2 slit', ta: '2 கீறியது' } },
      { ingredientId: 'mustard_seeds', quantity: { en: '1 tsp', ta: '1 தேக்கரண்டி' } },
      { ingredientId: 'ginger', quantity: { en: '1 tsp finely chopped', ta: '1 தேக்கரண்டி நறுக்கியது' } },
      { ingredientId: 'curry_leaves', quantity: { en: 'a sprig', ta: 'ஒரு இணுக்கு' } },
      { ingredientId: 'cooking_oil', quantity: { en: '2 tbsp', ta: '2 மேஜைக்கரண்டி' } },
      { ingredientId: 'salt', quantity: { en: 'to taste', ta: 'தேவையான அளவு' } }
    ],
    steps: [
      { stepNumber: 1, en: 'Dry roast rava on low flame until fragrant, then keep aside.', ta: 'ரவையை குறைந்த தீயில் வாசம் வரும் வரை வறுத்து தனியாக வைக்கவும்.' },
      { stepNumber: 2, en: 'Heat oil, temper with mustard seeds, onion, ginger, chillies, and curry leaves.', ta: 'எண்ணெய் சூடாக்கி கடுகு, வெங்காயம், இஞ்சி, மிளகாய் மற்றும் கறிவேப்பிலை சேர்த்துத் தாளிக்கவும்.' },
      { stepNumber: 3, en: 'Add 2.5 cups of water and salt. Once boiling, add roasted rava gradually while stirring. Cook covered for 5 mins.', ta: '2.5 கப் தண்ணீர் மற்றும் உப்பு சேர்க்கவும். தண்ணீர் கொதித்ததும், வறுத்த ரவையைத் தூவிக்கொண்டே கிளறவும். மூடி வைத்து 5 நிமிடங்கள் வேகவிடவும்.' }
    ],
    nutrition: { calories: 310, protein: '6g', carbs: '52g', fat: '9g' },
    chefTips: [
      { en: 'Stir constantly while adding rava to prevent any lump formation.', ta: 'ரவையைச் சேர்க்கும்போது கட்டிகள் தட்டாமல் இருக்க தொடர்ந்து கிளறிக்கொண்டே இருக்கவும்.' }
    ],
    storageLeftoverTips: {
      en: 'Consume immediately while hot. Leftovers can be reheated with a sprinkle of water.',
      ta: 'சூடாக உடனே சாப்பிடவும். மீதமிருப்பதை சிறிது தண்ணீர் தெளித்து மீண்டும் சூடாக்கி சாப்பிடலாம்.'
    }
  },
  {
    id: 'tomato_upma',
    enName: 'Tomato Bath / Tomato Upma',
    taName: 'தக்காளி பாத் / தக்காளி உப்புமா',
    prepTime: '10 mins',
    cookingTime: '20 mins',
    servings: 2,
    difficulty: 'easy',
    ingredients: [
      { ingredientId: 'rava', quantity: { en: '1 cup', ta: '1 கப்' } },
      { ingredientId: 'tomato', quantity: { en: '2 chopped', ta: '2 நறுக்கியது' } },
      { ingredientId: 'onion', quantity: { en: '1 medium', ta: '1 நடுத்தரம்' } },
      { ingredientId: 'green_chilli', quantity: { en: '2', ta: '2' } },
      { ingredientId: 'mustard_seeds', quantity: { en: '1 tsp', ta: '1 தேக்கரண்டி' } },
      { ingredientId: 'turmeric_powder', quantity: { en: '1/2 tsp', ta: '1/2 தேக்கரண்டி' } },
      { ingredientId: 'cooking_oil', quantity: { en: '2 tbsp', ta: '2 மேஜைக்கரண்டி' } },
      { ingredientId: 'salt', quantity: { en: 'to taste', ta: 'தேவையான அளவு' } }
    ],
    steps: [
      { stepNumber: 1, en: 'Roast rava and keep aside. Saute onions, chillies, and tomatoes with turmeric until mushy.', ta: 'ரவையை வறுத்து தனியாக வைக்கவும். வெங்காயம், மிளகாய் மற்றும் தக்காளியை மஞ்சள் தூளுடன் சேர்த்து வதக்கவும்.' },
      { stepNumber: 2, en: 'Add water and salt. Boil, then slowly add rava while stirring.', ta: 'தண்ணீர் மற்றும் உப்பு சேர்க்கவும். கொதித்ததும் ரவையை மெதுவாகச் சேர்த்து கிளறவும்.' },
      { stepNumber: 3, en: 'Simmer on low flame for 5 minutes until fully cooked and fluffy.', ta: 'குறைந்த தீயில் 5 நிமிடங்கள் வேகவைக்க மென்மையான தக்காளி உப்புமா தயார்.' }
    ],
    nutrition: { calories: 340, protein: '7g', carbs: '55g', fat: '10g' },
    chefTips: [
      { en: 'Add a teaspoon of ghee at the end for enhanced aroma.', ta: 'இறுதியில் ஒரு தேக்கரண்டி நெய் சேர்த்தால் சுவையும் மணமும் கூடும்.' }
    ],
    storageLeftoverTips: {
      en: 'Tastes best when fresh. Store in airtight container if leftover.',
      ta: 'சூடாக இருக்கும் போதே ருசி அதிகம். மீதமிருப்பின் காற்றில்லாத டப்பாவில் அடைத்து வைக்கவும்.'
    }
  },
  {
    id: 'ven_pongal',
    enName: 'Ven Pongal',
    taName: 'வெண் பொங்கல்',
    prepTime: '10 mins',
    cookingTime: '30 mins',
    servings: 3,
    difficulty: 'easy',
    ingredients: [
      { ingredientId: 'raw_rice', quantity: { en: '1 cup', ta: '1 கப்' } },
      { ingredientId: 'moong_dal', quantity: { en: '1/3 cup', ta: '1/3 கப்' } },
      { ingredientId: 'cumin_seeds', quantity: { en: '1 tsp', ta: '1 தேக்கரண்டி' } },
      { ingredientId: 'black_pepper', quantity: { en: '1 tsp whole', ta: '1 தேக்கரண்டி மிளகு' } },
      { ingredientId: 'ghee', quantity: { en: '3 tbsp', ta: '3 மேஜைக்கரண்டி' } },
      { ingredientId: 'ginger', quantity: { en: '1 tsp grated', ta: '1 தேக்கரண்டி நறுக்கிய இஞ்சி' } },
      { ingredientId: 'salt', quantity: { en: 'to taste', ta: 'தேவையான அளவு' } }
    ],
    steps: [
      { stepNumber: 1, en: 'Pressure cook rice and moong dal together with 4.5 cups of water and salt for 4-5 whistles.', ta: 'அரிசி மற்றும் பாசிப்பருப்பை 4.5 கப் தண்ணீர் மற்றும் உப்பு சேர்த்து குக்கரில் 4-5 விசில் வரும் வரை குழைய வேகவைக்கவும்.' },
      { stepNumber: 2, en: 'Mash the cooked rice and dal mixture slightly while it is hot.', ta: 'வெந்த சாதம் மற்றும் பருப்புக் கலவை சூடாக இருக்கும் போதே லேசாக மசிக்கவும்.' },
      { stepNumber: 3, en: 'Heat ghee, temper with cumin seeds, pepper, curry leaves, and ginger. Mix into the mashed pongal.', ta: 'நெய்யைச் சூடாக்கி சீரகம், மிளகு, முந்திரி, கறிவேப்பிலை, இஞ்சி சேர்த்துத் தாளித்து பொங்கலில் கொட்டிக் கிளறவும்.' }
    ],
    nutrition: { calories: 380, protein: '9g', carbs: '60g', fat: '12g' },
    chefTips: [
      { en: 'Dry roasting the moong dal slightly before cooking adds a rich nutty aroma.', ta: 'பாசிப்பருப்பை சமைப்பதற்கு முன் லேசாக வறுத்தால் பொங்கல் மணக்கும்.' }
    ],
    storageLeftoverTips: {
      en: 'Tends to thicken as it cools. Stir in a little hot water before serving leftovers.',
      ta: 'ஆறும்போது பொங்கல் கெட்டியாகும். மீண்டும் பயன்படுத்தும்போது சிறிதளவு சுடுதண்ணீர் சேர்த்து கிளறவும்.'
    }
  },
  {
    id: 'semiya_upma',
    enName: 'Semiya Upma',
    taName: 'சேமியா உப்புமா',
    prepTime: '5 mins',
    cookingTime: '15 mins',
    servings: 2,
    difficulty: 'easy',
    ingredients: [
      { ingredientId: 'vermicelli', quantity: { en: '1.5 cups', ta: '1.5 கப்' } },
      { ingredientId: 'onion', quantity: { en: '1 chopped', ta: '1 நறுக்கியது' } },
      { ingredientId: 'mustard_seeds', quantity: { en: '1 tsp', ta: '1 தேக்கரண்டி' } },
      { ingredientId: 'green_chilli', quantity: { en: '2', ta: '2' } },
      { ingredientId: 'curry_leaves', quantity: { en: 'a sprig', ta: 'ஒரு இணுக்கு' } },
      { ingredientId: 'cooking_oil', quantity: { en: '1.5 tbsp', ta: '1.5 மேஜைக்கரண்டி' } },
      { ingredientId: 'salt', quantity: { en: 'to taste', ta: 'தேவையான அளவு' } }
    ],
    steps: [
      { stepNumber: 1, en: 'Roast vermicelli until light golden if not pre-roasted.', ta: 'சேமியா வறுக்காததாக இருந்தால் லேசான பொன்னிறமாக வறுக்கவும்.' },
      { stepNumber: 2, en: 'Saute mustard seeds, onions, curry leaves, and green chillies in oil.', ta: 'எண்ணெயில் கடுகு, உளுத்தம்பருப்பு, வெங்காயம், கறிவேப்பிலை, பச்சை மிளகாய் சேர்த்து வதக்கவும்.' },
      { stepNumber: 3, en: 'Add water (ratio 1:1.25), salt and boil. Add vermicelli, cook covered on low flame until done.', ta: 'சேமியாவுக்கு ஏற்றவாறு தண்ணீர் மற்றும் உப்பு சேர்த்து கொதிக்கவிடவும். சேமியாவைச் சேர்த்து மூடி வைத்து வேகவிடவும்.' }
    ],
    nutrition: { calories: 290, protein: '5g', carbs: '48g', fat: '7g' },
    chefTips: [
      { en: 'Do not add too much water; vermicelli cooks fast and can turn mushy easily.', ta: 'தண்ணீர் அளவைக் கவனமாகச் சேர்க்கவும்; கூடுதல் தண்ணீர் சேமியாவை குழைவாக்கிவிடும்.' }
    ],
    storageLeftoverTips: {
      en: 'Consume fresh. Leftovers can be reheated in a steamer.',
      ta: 'செய்தவுடன் சாப்பிடவும். மீதமிருப்பதை இட்லி பாத்திரத்தில் வைத்து ஆவியில் சூடாக்கலாம்.'
    }
  },
  {
    id: 'ragi_roti',
    enName: 'Ragi Roti',
    taName: 'ராகி ரொட்டி',
    prepTime: '15 mins',
    cookingTime: '15 mins',
    servings: 2,
    difficulty: 'medium',
    ingredients: [
      { ingredientId: 'ragi', quantity: { en: '1.5 cups ragi flour', ta: '1.5 கப் கேழ்வரகு மாவு' } },
      { ingredientId: 'onion', quantity: { en: '1 finely chopped', ta: '1 பொடியாக நறுக்கிய வெங்காயம்' } },
      { ingredientId: 'green_chilli', quantity: { en: '2 finely chopped', ta: '2 பொடியாக நறுக்கிய பச்சை மிளகாய்' } },
      { ingredientId: 'curry_leaves', quantity: { en: 'chopped', ta: 'நறுக்கிய கறிவேப்பிலை' } },
      { ingredientId: 'salt', quantity: { en: '1/2 tsp', ta: '1/2 தேக்கரண்டி' } },
      { ingredientId: 'cooking_oil', quantity: { en: 'to roast', ta: 'சுடத் தேவையான அளவு' } }
    ],
    steps: [
      { stepNumber: 1, en: 'Mix ragi flour, onions, chillies, curry leaves, salt and warm water to form a soft dough.', ta: 'கேழ்வரகு மாவு, வெங்காயம், பச்சை மிளகாய், கறிவேப்பிலை, உப்பு மற்றும் வெதுவெதுப்பான தண்ணீர் சேர்த்து மென்மையான மாவாகப் பிசையவும்.' },
      { stepNumber: 2, en: 'Flatten portions of dough directly on a greaseproof paper or wet cloth.', ta: 'மாவைச் சிறு உருண்டைகளாக்கி, ஈரத்துணியில் அல்லது இலை மீது தட்டையாகத் தட்டவும்.' },
      { stepNumber: 3, en: 'Transfer to a hot griddle, drizzle oil and cook both sides on medium flame until done.', ta: 'தோசைக் கல்லில் போட்டு, சுற்றிலும் எண்ணெய் ஊற்றி இருபுறமும் வேகும் வரை மிதமான தீயில் சுட்டெடுக்கவும்.' }
    ],
    nutrition: { calories: 340, protein: '8g', carbs: '64g', fat: '5g' },
    chefTips: [
      { en: 'Adding fresh grated coconut to the dough makes the rotis softer.', ta: 'கேழ்வரகு மாவுடன் துருவிய தேங்காய் சேர்த்தால் ரொட்டி இன்னும் மிருதுவாகும்.' }
    ],
    storageLeftoverTips: {
      en: 'Best eaten warm. Wrap in foil/hotbox to keep soft.',
      ta: 'சூடாகச் சாப்பிட உகந்தது. ரொட்டிகளை ஹாட்பாக்ஸில் மூடி வைத்தால் மென்மையாக இருக்கும்.'
    }
  },
  {
    id: 'wheat_dosa',
    enName: 'Instant Wheat Dosa',
    taName: 'கோதுமை தோசை',
    prepTime: '5 mins',
    cookingTime: '15 mins',
    servings: 2,
    difficulty: 'easy',
    ingredients: [
      { ingredientId: 'wheat_flour', quantity: { en: '1 cup', ta: '1 கப்' } },
      { ingredientId: 'cumin_seeds', quantity: { en: '1 tsp', ta: '1 தேக்கரண்டி' } },
      { ingredientId: 'green_chilli', quantity: { en: '1 chopped', ta: '1 நறுக்கிய பச்சை மிளகாய்' } },
      { ingredientId: 'ginger', quantity: { en: '1/2 tsp grated', ta: '1/2 தேக்கரண்டி இஞ்சி' } },
      { ingredientId: 'salt', quantity: { en: 'to taste', ta: 'தேவையான அளவு' } }
    ],
    steps: [
      { stepNumber: 1, en: 'Whisk wheat flour, salt, cumin seeds, green chillies, and ginger with water into a thin, lump-free batter.', ta: 'கோதுமை மாவு, உப்பு, சீரகம், பச்சை மிளகாய் மற்றும் இஞ்சியை தண்ணீர் சேர்த்து கட்டியில்லாமல் நீர்க்கக் கரைத்துக் கொள்ளவும்.' },
      { stepNumber: 2, en: 'Pour the thin batter on a hot tawa from outside to inside.', ta: 'சூடான கல்லில் மாவை ஓரங்களில் இருந்து தொடங்கி நடுப்பகுதி வரை விசிறிப் போல ஊற்றவும்.' },
      { stepNumber: 3, en: 'Drizzle oil, cook until golden and crisp. Flip and cook the other side.', ta: 'நெய் அல்லது எண்ணெய் தெளித்து மொறுமொறுப்பாக வெந்ததும் திருப்பிப் போட்டு எடுக்கவும்.' }
    ],
    nutrition: { calories: 260, protein: '8g', carbs: '50g', fat: '4g' },
    chefTips: [
      { en: 'Make the batter watery like rava dosa batter for crispier results.', ta: 'மாவை ரவா தோசை மாவு போலத் தண்ணீர் பதத்தில் கரைத்தால் தோசை மொறுமொறுப்பாக வரும்.' }
    ],
    storageLeftoverTips: {
      en: 'Consume immediately; instant dosas lose crispness as they cool down.',
      ta: 'உடனே பரிமாறவும்; சூடு ஆறினால் மொறுமொறுப்புத் தன்மை போய்விடும்.'
    }
  },
  {
    id: 'poori_masala',
    enName: 'Poori with Potato Masala',
    taName: 'பூரி உருளைக்கிழங்கு மசாலா',
    prepTime: '20 mins',
    cookingTime: '30 mins',
    servings: 3,
    difficulty: 'medium',
    ingredients: [
      { ingredientId: 'wheat_flour', quantity: { en: '2 cups', ta: '2 கப்' } },
      { ingredientId: 'potato', quantity: { en: '3 boiled and mashed', ta: '3 வேகவைத்து மசித்த உருளைக்கிழங்கு' } },
      { ingredientId: 'onion', quantity: { en: '1 sliced', ta: '1 நீளவாக்கில் நறுக்கிய வெங்காயம்' } },
      { ingredientId: 'green_chilli', quantity: { en: '3', ta: '3' } },
      { ingredientId: 'turmeric_powder', quantity: { en: '1/2 tsp', ta: '1/2 தேக்கரண்டி' } },
      { ingredientId: 'mustard_seeds', quantity: { en: '1 tsp', ta: '1 தேக்கரண்டி' } },
      { ingredientId: 'salt', quantity: { en: 'to taste', ta: 'தேவையான அளவு' } },
      { ingredientId: 'cooking_oil', quantity: { en: 'for deep frying', ta: 'பொரிக்கத் தேவையான எண்ணெய்' } }
    ],
    steps: [
      { stepNumber: 1, en: 'Mix wheat flour, salt, and water to form a stiff dough. Roll into small discs.', ta: 'கோதுமை மாவு, உப்பு, தண்ணீர் சேர்த்து கெட்டியாகப் பிசைந்து கொள்ளவும். சிறு வட்டங்களாகத் திரட்டவும்.' },
      { stepNumber: 2, en: 'Deep fry discs in piping hot oil until they puff up. Remove once golden.', ta: 'சூடான எண்ணெயில் இட்டு உப்பி வரும் வரை இருபுறமும் பொரித்து எடுக்கவும்.' },
      { stepNumber: 3, en: 'For masala, temper mustard seeds, saute onions, chillies, add mashed potato, turmeric, water, and simmer.', ta: 'மசாலாவிற்கு கடுகு தாளித்து வெங்காயம், மிளகாய் வதக்கி, வேகவைத்த உருளைக்கிழங்கு, மஞ்சள் தூள், தண்ணீர் சேர்த்து திக்காகக் கொதிக்க வைக்கவும்.' }
    ],
    nutrition: { calories: 450, protein: '9g', carbs: '65g', fat: '18g' },
    chefTips: [
      { en: 'Do not rest poori dough for long; it absorbs more oil if kept idle.', ta: 'பூரி மாவைப் பிசைந்தவுடன் சுட வேண்டும்; நீண்ட நேரம் வைத்தால் பூரி அதிக எண்ணெய் குடிக்கும்.' }
    ],
    storageLeftoverTips: {
      en: 'Pooris should be served hot. Potato masala can be refrigerated and used with dosas later.',
      ta: 'பூரி சூடாகச் சாப்பிடவும். மீதமுள்ள உருளைக்கிழங்கு மசாலாவை தோசைக்கு மசாலாவாகப் பயன்படுத்தலாம்.'
    }
  },
  {
    id: 'rava_dosa',
    enName: 'Rava Dosa',
    taName: 'ரவா தோசை',
    prepTime: '15 mins',
    cookingTime: '15 mins',
    servings: 3,
    difficulty: 'easy',
    ingredients: [
      { ingredientId: 'rava', quantity: { en: '1 cup', ta: '1 கப் ரவை' } },
      { ingredientId: 'raw_rice', quantity: { en: '1 cup rice flour', ta: '1 கப் அரிசி மாவு' } },
      { ingredientId: 'cumin_seeds', quantity: { en: '1 tsp', ta: '1 தேக்கரண்டி' } },
      { ingredientId: 'black_pepper', quantity: { en: '1 tsp crushed', ta: '1 தேக்கரண்டி மிளகுத் தூள்' } },
      { ingredientId: 'green_chilli', quantity: { en: '2 chopped', ta: '2 நறுக்கிய பச்சை மிளகாய்' } },
      { ingredientId: 'ginger', quantity: { en: '1 tsp finely chopped', ta: '1 தேக்கரண்டி இஞ்சி' } },
      { ingredientId: 'salt', quantity: { en: 'to taste', ta: 'தேவையான அளவு' } }
    ],
    steps: [
      { stepNumber: 1, en: 'Mix rava, rice flour, cumin, pepper, chillies, ginger, salt, and 3 cups of water into a thin watery batter.', ta: 'ரவை, அரிசி மாவு, சீரகம், மிளகு, பச்சை மிளகாய், இஞ்சி, உப்பு மற்றும் 3 கப் தண்ணீர் சேர்த்து மிக நீர்க்கக் கரைக்கவும்.' },
      { stepNumber: 2, en: 'Let the batter rest for 15-20 minutes. The rava will absorb some water.', ta: 'மாவை 15-20 நிமிடங்கள் ஊறவிடவும். ரவை தண்ணீரை உறிஞ்சித் தடிக்கும்.' },
      { stepNumber: 3, en: 'Pour batter onto a very hot tawa, drizzle oil, and cook until golden brown and crispy. Do not flip.', ta: 'நன்கு சூடான கல்லில் மாவைத் தெளித்து ஊற்றி, சுற்றிலும் எண்ணெய் ஊற்றி மொறுமொறுப்பாகச் சுட்டெடுக்கவும்.' }
    ],
    nutrition: { calories: 310, protein: '6g', carbs: '54g', fat: '8g' },
    chefTips: [
      { en: 'Ensure the tawa is piping hot, or the signature net-like holes will not form.', ta: 'தோசைக்கல்லும் எண்ணெயும் நன்றாகச் சூடாக இருக்க வேண்டும், இல்லையெனில் ஓட்டைகள் விழாது.' }
    ],
    storageLeftoverTips: {
      en: 'Batter must be stirred well from the bottom before making each dosa.',
      ta: 'ஒவ்வொரு முறை தோசை ஊற்றும் போதும் மாவை அடியிலிருந்து நன்கு கலக்க வேண்டும்.'
    }
  },
  {
    id: 'chappathi_kurma',
    enName: 'Chapati with Veg Kurma',
    taName: 'சப்பாத்தி காய்கறி குருமா',
    prepTime: '20 mins',
    cookingTime: '40 mins',
    servings: 3,
    difficulty: 'medium',
    ingredients: [
      { ingredientId: 'wheat_flour', quantity: { en: '2 cups', ta: '2 கப்' } },
      { ingredientId: 'potato', quantity: { en: '1 cubed', ta: '1 நறுக்கிய உருளைக்கிழங்கு' } },
      { ingredientId: 'carrot', quantity: { en: '1 cubed', ta: '1 நறுக்கிய கேரட்' } },
      { ingredientId: 'onion', quantity: { en: '1 chopped', ta: '1 நறுக்கிய வெங்காயம்' } },
      { ingredientId: 'coconut', quantity: { en: '1/2 cup grated for paste', ta: '1/2 கப் துருவிய தேங்காய்' } },
      { ingredientId: 'ginger', quantity: { en: '1 tsp paste', ta: '1 தேக்கரண்டி இஞ்சி பூண்டு விழுது' } },
      { ingredientId: 'salt', quantity: { en: 'to taste', ta: 'தேவையான அளவு' } }
    ],
    steps: [
      { stepNumber: 1, en: 'Knead wheat flour with warm water into soft dough. Roll out and cook on griddle.', ta: 'கோதுமை மாவுடன் வெதுவெதுப்பான தண்ணீர் சேர்த்து மென்மையாகப் பிசைந்து, சப்பாத்திகளாகத் திரட்டிச் சுடவும்.' },
      { stepNumber: 2, en: 'Grind coconut, cumin, and fennel seeds into a smooth masala paste.', ta: 'தேங்காய், சீரகம், சோம்பு சேர்த்து விழுதாக அரைத்துக் கொள்ளவும்.' },
      { stepNumber: 3, en: 'Saute onions, ginger garlic, veggies. Add water, salt, coconut paste, and simmer until cooked.', ta: 'வெங்காயம், இஞ்சி பூண்டு வதக்கி காய்கறிகளைச் சேர்க்கவும். தேங்காய் விழுது, தண்ணீர், உப்பு சேர்த்து காய்கறிகள் வேகும் வரை கொதிக்க விடவும்.' }
    ],
    nutrition: { calories: 390, protein: '11g', carbs: '58g', fat: '12g' },
    chefTips: [
      { en: 'Add a splash of milk or a few cashews to the coconut paste for a creamier kurma.', ta: 'குருமா இன்னும் திக்காகவும் சுவையாகவும் வர தேங்காயுடன் சில முந்திரி பருப்புகளைச் சேர்த்து அரைக்கவும்.' }
    ],
    storageLeftoverTips: {
      en: 'Keep chapatis wrapped in a soft cloth in a casserole to retain softness.',
      ta: 'சப்பாத்திகளை ஈரப்பதம் போகாமல் இருக்க ஒரு துணியில் சுற்றி ஹாட்பாக்ஸில் வைக்கவும்.'
    }
  },
  {
    id: 'appam_தேங்காமில்க்', // Handled fallback id mapping
    enName: 'Appam with Sweet Coconut Milk',
    taName: 'ஆப்பம் மற்றும் தேங்காய்ப்பால்',
    prepTime: '15 mins',
    cookingTime: '15 mins',
    servings: 3,
    difficulty: 'medium',
    ingredients: [
      { ingredientId: 'raw_rice', quantity: { en: '2 cups', ta: '2 கப்' } },
      { ingredientId: 'coconut', quantity: { en: '1 cup grated', ta: '1 கப் துருவிய தேங்காய்' } },
      { ingredientId: 'milk', quantity: { en: '1 cup (optional)', ta: '1 கப் பால்' } },
      { ingredientId: 'salt', quantity: { en: 'to taste', ta: 'தேவையான அளவு' } }
    ],
    steps: [
      { stepNumber: 1, en: 'Grind soaked rice and coconut with cooked rice. Ferment the batter overnight.', ta: 'ஊறவைத்த அரிசி, தேங்காய் மற்றும் சிறிதளவு சாதம் சேர்த்து அரைக்கவும். மாவை இரவு முழுவதும் புளிக்க வைக்கவும்.' },
      { stepNumber: 2, en: 'Pour batter into an appam kadai, swirl to coat the sides thinly, leave a thick center.', ta: 'ஆப்பச் சட்டியில் மாவை ஊற்றி, சட்டிப்பகுதியைச் சுழற்றி ஓரங்களில் மெலிதாகவும் நடுவில் தடிமனாகவும் இருக்குமாறு செய்யவும்.' },
      { stepNumber: 3, en: 'Cover and steam for 3 mins. Serve with warm sweetened coconut milk.', ta: 'மூடி போட்டு 3 நிமிடங்கள் வேக வைக்கவும். சர்க்கரை சேர்த்த தேங்காய்ப்பாலுடன் சூடாகப் பரிமாறவும்.' }
    ],
    nutrition: { calories: 330, protein: '5g', carbs: '52g', fat: '11g' },
    chefTips: [
      { en: 'A pinch of baking soda added just before making appams yields soft, spongy centers.', ta: 'ஆப்பம் சுடுவதற்குச் சற்று முன் ஒரு சிட்டிகை ஆப்ப சோடா சேர்த்தால் நடுப்பகுதி பஞ்சு போல் வரும்.' }
    ],
    storageLeftoverTips: {
      en: 'Appams must be eaten fresh. Coconut milk should be consumed within the same day.',
      ta: 'ஆப்பத்தை உடனே சூடாகச் சாப்பிட வேண்டும். தேங்காய்ப்பாலை அன்றே பயன்படுத்திவிட வேண்டும்.'
    }
  },
  {
    id: 'rava_kitchadi',
    enName: 'Rava Kitchadi',
    taName: 'ரவா கிச்சடி',
    prepTime: '10 mins',
    cookingTime: '20 mins',
    servings: 2,
    difficulty: 'easy',
    ingredients: [
      { ingredientId: 'rava', quantity: { en: '1 cup', ta: '1 கப்' } },
      { ingredientId: 'carrot', quantity: { en: '1/2 cup chopped', ta: '1/2 கப் நறுக்கிய கேரட்' } },
      { ingredientId: 'onion', quantity: { en: '1 chopped', ta: '1 நறுக்கிய வெங்காயம்' } },
      { ingredientId: 'green_chilli', quantity: { en: '2', ta: '2' } },
      { ingredientId: 'mustard_seeds', quantity: { en: '1 tsp', ta: '1 தேக்கரண்டி' } },
      { ingredientId: 'turmeric_powder', quantity: { en: '1/2 tsp', ta: '1/2 தேக்கரண்டி' } },
      { ingredientId: 'ghee', quantity: { en: '2 tbsp', ta: '2 மேஜைக்கரண்டி' } },
      { ingredientId: 'salt', quantity: { en: 'to taste', ta: 'தேவையான அளவு' } }
    ],
    steps: [
      { stepNumber: 1, en: 'Roast rava in ghee until aromatic and set aside.', ta: 'நெய்யில் ரவையை வாசம் வரும் வரை வறுத்து தனியே எடுத்து வைக்கவும்.' },
      { stepNumber: 2, en: 'Saute mustard seeds, onion, ginger, chillies, and carrot with turmeric powder.', ta: 'நெய்/எண்ணெயில் கடுகு, உளுந்து, வெங்காயம், இஞ்சி, மிளகாய், கேரட் மற்றும் மஞ்சள் தூள் சேர்த்து வதக்கவும்.' },
      { stepNumber: 3, en: 'Add water (ratio 1:3), boil, and add rava slowly. Stir well, cook covered on low heat.', ta: '3 கப் தண்ணீர் சேர்த்து கொதிக்கவிடவும். வறுத்த ரவையைச் சேர்த்துத் தொடர்ந்து கிளறி, மூடி வைத்து வேகவிடவும்.' }
    ],
    nutrition: { calories: 350, protein: '7g', carbs: '56g', fat: '11g' },
    chefTips: [
      { en: 'Add green peas or beans along with carrots for a colorful and nutritious kitchadi.', ta: 'கேரட்டுடன் பச்சை பட்டாணி அல்லது பீன்ஸ் சேர்த்தால் கிச்சடி இன்னும் சுவையாக இருக்கும்.' }
    ],
    storageLeftoverTips: {
      en: 'Tastes best when served warm. Add a teaspoon of warm water before reheating.',
      ta: 'மிதமான சூட்டில் பரிமாறவும். மீண்டும் சூடாக்கும் போது லேசாகத் தண்ணீர் தெளித்துக் கொள்ளவும்.'
    }
  },
  {
    id: 'poha',
    enName: 'Aval Upma / Poha',
    taName: 'அவல் உப்புமா',
    prepTime: '10 mins',
    cookingTime: '15 mins',
    servings: 2,
    difficulty: 'easy',
    ingredients: [
      { ingredientId: 'onion', quantity: { en: '1 chopped', ta: '1 நறுக்கிய வெங்காயம்' } },
      { ingredientId: 'green_chilli', quantity: { en: '2', ta: '2' } },
      { ingredientId: 'mustard_seeds', quantity: { en: '1 tsp', ta: '1 தேக்கரண்டி' } },
      { ingredientId: 'peanuts', quantity: { en: '2 tbsp', ta: '2 மேஜைக்கரண்டி வேர்க்கடலை' } },
      { ingredientId: 'turmeric_powder', quantity: { en: '1/2 tsp', ta: '1/2 தேக்கரண்டி' } },
      { ingredientId: 'salt', quantity: { en: 'to taste', ta: 'தேவையான அளவு' } },
      { ingredientId: 'cooking_oil', quantity: { en: '1.5 tbsp', ta: '1.5 மேஜைக்கரண்டி' } }
    ],
    steps: [
      { stepNumber: 1, en: 'Wash poha (flattened rice) and drain all water. Let it rest for 10 mins to soften.', ta: 'அவலை லேசாகக் கழுவி தண்ணீரை முழுமையாக வடிக்கவும். 10 நிமிடங்கள் அப்படியே வைக்க அவல் மென்மையாகும்.' },
      { stepNumber: 2, en: 'Saute peanuts, mustard seeds, onions, green chillies, and turmeric powder in oil.', ta: 'எண்ணெயில் வேர்க்கடலை, கடுகு, வெங்காயம், பச்சை மிளகாய் மற்றும் மஞ்சள் தூள் சேர்த்து வதக்கவும்.' },
      { stepNumber: 3, en: 'Add poha, sprinkle salt, toss gently on low heat for 3-5 mins. Garnish with coriander.', ta: 'அவல் மற்றும் உப்பு சேர்த்து மிதமான தீயில் 3-5 நிமிடங்கள் மெதுவாகக் கிளறவும். கொத்தமல்லித்தழை தூவி இறக்கவும்.' }
    ],
    nutrition: { calories: 290, protein: '6g', carbs: '44g', fat: '9g' },
    chefTips: [
      { en: 'Do not soak poha in water; a quick rinse is enough to make it soft.', ta: 'அவலைத் தண்ணீரில் ஊற வைக்கக் கூடாது; சல்லடையில் வைத்து லேசாக நனைத்தாலே போதும்.' }
    ],
    storageLeftoverTips: {
      en: 'Poha dries out quickly. Keep covered and eat within 4 hours.',
      ta: 'அவல் விரைவில் உலர்ந்துவிடும். மூடி வைத்து 4 மணிநேரத்திற்குள் சாப்பிடுவது நல்லது.'
    }
  },
  {
    id: 'ragi_koozh',
    enName: 'Ragi Koozh / Porridge',
    taName: 'ராகி கூழ்',
    prepTime: '10 mins',
    cookingTime: '20 mins',
    servings: 2,
    difficulty: 'easy',
    ingredients: [
      { ingredientId: 'ragi', quantity: { en: '1/2 cup ragi flour', ta: '1/2 கப் கேழ்வரகு மாவு' } },
      { ingredientId: 'buttermilk', quantity: { en: '1 cup', ta: '1 கப் மோர்' } },
      { ingredientId: 'onion', quantity: { en: '1/2 chopped', ta: '1/2 நறுக்கிய வெங்காயம்' } },
      { ingredientId: 'salt', quantity: { en: 'to taste', ta: 'தேவையான அளவு' } }
    ],
    steps: [
      { stepNumber: 1, en: 'Mix ragi flour with water to make a thin batter. Cook on low heat, stirring continuously until cooked.', ta: 'ராகி மாவைத் தண்ணீரில் கரைத்து, குறைந்த தீயில் கைவிடாமல் கிளறி திக்காக வேக வைக்கவும்.' },
      { stepNumber: 2, en: 'Let the cooked ragi mixture cool down completely (often kept overnight).', ta: 'வெந்த ராகி கூழ் முழுமையாக ஆறவிடவும் (பாரம்பரியமாக இரவு முழுவதும் வைப்பார்கள்).' },
      { stepNumber: 3, en: 'Mix with thick buttermilk, salt, and chopped onions. Serve cold.', ta: 'தேவையான அளவு மோர், உப்பு மற்றும் நறுக்கிய வெங்காயம் சேர்த்து நன்கு கரைத்து பரிமாறவும்.' }
    ],
    nutrition: { calories: 210, protein: '6g', carbs: '38g', fat: '3g' },
    chefTips: [
      { en: 'Serve with raw small onions and green chillies on the side for authentic taste.', ta: 'சின்ன வெங்காயம் மற்றும் மோர் மிளகாயைக் கடித்துக் கொண்டு குடித்தால் சுவை அருமையாக இருக்கும்.' }
    ],
    storageLeftoverTips: {
      en: 'Leftover cooked ragi paste can be kept in water and mixed with buttermilk when needed.',
      ta: 'வெந்த ராகி மாவை உருண்டையாகத் தண்ணீரில் போட்டு வைத்தால் மறுநாளும் கெடாமல் இருக்கும்.'
    }
  },
  {
  "id": "sambar_sadham",
  "enName": "Sambar Rice",
  "taName": "சாம்பார் சாதம்",
  "prepTime": "20 mins",
  "cookingTime": "40 mins",
  "servings": 4,
  "difficulty": "medium",
  "ingredients": [
    {
      "ingredientId": "boiled_rice",
      "quantity": {
        "en": "1 cup",
        "ta": "1 கப் புழுங்கலரிசி"
      }
    },
    {
      "ingredientId": "toor_dal",
      "quantity": {
        "en": "1/2 cup",
        "ta": "1/2 கப் துவரம்பருப்பு"
      }
    },
    {
      "ingredientId": "carrot",
      "quantity": {
        "en": "1 chopped",
        "ta": "1 நறுக்கிய கேரட்"
      }
    },
    {
      "ingredientId": "drumstick",
      "quantity": {
        "en": "1 cut into pieces",
        "ta": "1 முருங்கைக்காய்"
      }
    },
    {
      "ingredientId": "tomato",
      "quantity": {
        "en": "1 chopped",
        "ta": "1 தக்காளி"
      }
    },
    {
      "ingredientId": "sambar_powder",
      "quantity": {
        "en": "2 tbsp",
        "ta": "2 மேஜைக்கரண்டி"
      }
    },
    {
      "ingredientId": "tamarind",
      "quantity": {
        "en": "lemon sized ball",
        "ta": "எலுமிச்சை அளவு புளி"
      }
    }
  ],
  "steps": [
    {
      "stepNumber": 1,
      "en": "Cook rice and toor dal in a pressure cooker with 4 cups of water until soft and mushy.",
      "ta": "அரிசி மற்றும் துவரம்பருப்பை 4 கப் தண்ணீர் சேர்த்து குக்கரில் குழைய வேகவைக்கவும்."
    },
    {
      "stepNumber": 2,
      "en": "Boil vegetables in tamarind water with sambar powder, turmeric, and salt until cooked.",
      "ta": "புளித் தண்ணீரில் காய்கறிகள், சாம்பார் பொடி, மஞ்சள் தூள், உப்பு சேர்த்து வேகவைக்கவும்."
    },
    {
      "stepNumber": 3,
      "en": "Combine cooked rice-dal with vegetables. Temper with mustard seeds, asafoetida, and ghee.",
      "ta": "சாதம்-பருப்புக் கலவையைக் காய்கறிகளுடன் சேர்க்கவும். கடுகு, பெருங்காயம், நெய் சேர்த்துத் தாளித்துக் கிளறவும்."
    }
  ],
  "nutrition": {
    "calories": 410,
    "protein": "12g",
    "carbs": "72g",
    "fat": "7g"
  },
  "chefTips": [
    {
      "en": "Serve piping hot with a spoonful of ghee on top and potato fry on the side.",
      "ta": "உடன் நெய் மற்றும் உருளைக்கிழங்கு வறுவல் சேர்த்து சூடாகப் பரிமாறவும்."
    }
  ],
  "storageLeftoverTips": {
    "en": "Tends to dry out. Reheat by adding a splash of hot water and stirring.",
    "ta": "ஆறிய பின் சாதம் கெட்டியாகும். சிறிதளவு வெந்நீர் சேர்த்து கிளறி சூடாக்கவும்."
  }
},
  {
  "id": "rasam_sadham",
  "enName": "Rasam Rice",
  "taName": "ரசம் சாதம்",
  "prepTime": "10 mins",
  "cookingTime": "20 mins",
  "servings": 3,
  "difficulty": "easy",
  "ingredients": [
    {
      "ingredientId": "boiled_rice",
      "quantity": {
        "en": "2 cups cooked",
        "ta": "2 கப் வேகவைத்த சாதம்"
      }
    },
    {
      "ingredientId": "tomato",
      "quantity": {
        "en": "2 ripe mashed",
        "ta": "2 மசித்த தக்காளி"
      }
    },
    {
      "ingredientId": "tamarind",
      "quantity": {
        "en": "small lemon size",
        "ta": "சிறிய நெல்லிக்காய் அளவு புளி"
      }
    },
    {
      "ingredientId": "cumin_seeds",
      "quantity": {
        "en": "1 tsp",
        "ta": "1 தேக்கரண்டி சீரகம்"
      }
    },
    {
      "ingredientId": "black_pepper",
      "quantity": {
        "en": "1 tsp",
        "ta": "1 தேக்கரண்டி மிளகு"
      }
    },
    {
      "ingredientId": "garlic",
      "quantity": {
        "en": "4 cloves crushed",
        "ta": "4 தட்டிய பூண்டுப்பற்கள்"
      }
    }
  ],
  "steps": [
    {
      "stepNumber": 1,
      "en": "Extract tamarind juice. Mix crushed tomatoes, salt, and turmeric into it.",
      "ta": "புளித் தண்ணீர் கரைத்து, அதில் மசித்த தக்காளி, உப்பு மற்றும் மஞ்சள் தூள் சேர்க்கவும்."
    },
    {
      "stepNumber": 2,
      "en": "Crush cumin, pepper, and garlic. Temper in oil with mustard seeds, then add the tamarind mix.",
      "ta": "சீரகம், மிளகு மற்றும் பூண்டை தட்டவும். கடுகு தாளித்து, புளித் தண்ணீர் கலவையை ஊற்றவும்."
    },
    {
      "stepNumber": 3,
      "en": "Turn off heat once it froths. Mix with hot soft-cooked rice.",
      "ta": "ரசம் கொதிக்கக் கூடாது, லேசாக நுரைத்து வரும்போது இறக்கி சாதத்துடன் கலந்து பரிமாறவும்."
    }
  ],
  "nutrition": {
    "calories": 330,
    "protein": "6g",
    "carbs": "64g",
    "fat": "4g"
  },
  "chefTips": [
    {
      "en": "Do not boil rasam, just let it froth up to keep the aroma intact.",
      "ta": "ரசத்தைக் கொதிக்க விடக்கூடாது, நுரைத்து வரும்போதே இறக்கினால் மணம் குறையாது."
    }
  ],
  "storageLeftoverTips": {
    "en": "Rasam rice is light and best eaten immediately. Keep rasam separately if storing.",
    "ta": "உடனே சாப்பிட உகந்தது. சேமிக்க வேண்டுமானால் ரசத்தைத் தனியாக வைக்கவும்."
  }
},
  {
  "id": "curd_rice",
  "enName": "Curd Rice",
  "taName": "தயிர் சாதம்",
  "prepTime": "5 mins",
  "cookingTime": "10 mins",
  "servings": 2,
  "difficulty": "easy",
  "ingredients": [
    {
      "ingredientId": "boiled_rice",
      "quantity": {
        "en": "1 cup cooked",
        "ta": "1 கப் வேகவைத்த சாதம்"
      }
    },
    {
      "ingredientId": "curd",
      "quantity": {
        "en": "1 cup fresh",
        "ta": "1 கப் தயிர்"
      }
    },
    {
      "ingredientId": "milk",
      "quantity": {
        "en": "1/4 cup",
        "ta": "1/4 கப் பால்"
      }
    },
    {
      "ingredientId": "ginger",
      "quantity": {
        "en": "1/2 tsp grated",
        "ta": "1/2 தேக்கரண்டி இஞ்சி"
      }
    },
    {
      "ingredientId": "green_chilli",
      "quantity": {
        "en": "1 chopped",
        "ta": "1 நறுக்கிய பச்சை மிளகாய்"
      }
    },
    {
      "ingredientId": "mustard_seeds",
      "quantity": {
        "en": "1 tsp",
        "ta": "1 தேக்கரண்டி"
      }
    }
  ],
  "steps": [
    {
      "stepNumber": 1,
      "en": "Mash hot cooked rice very well. Let it cool down.",
      "ta": "வேகவைத்த சாதத்தைச் சூடாக இருக்கும் போதே நன்கு மசிக்கவும். பின்னர் ஆறவிடவும்."
    },
    {
      "stepNumber": 2,
      "en": "Add curd, milk, salt, grated ginger, and chopped green chillies. Mix well.",
      "ta": "மசித்த சாதத்துடன் தயிர், பால், உப்பு, இஞ்சி மற்றும் பச்சை மிளகாய் சேர்த்து நன்கு கலக்கவும்."
    },
    {
      "stepNumber": 3,
      "en": "Temper with mustard seeds and curry leaves in oil. Stir into the curd rice.",
      "ta": "எண்ணெயில் கடுகு, கறிவேப்பிலை தாளித்து தயிர் சாதத்தில் கொட்டிக் கிளறவும்."
    }
  ],
  "nutrition": {
    "calories": 290,
    "protein": "8g",
    "carbs": "50g",
    "fat": "6g"
  },
  "chefTips": [
    {
      "en": "Adding a splash of milk keeps the curd rice from turning sour over time.",
      "ta": "சாதத்துடன் சிறிது பால் சேர்த்தால் தயிர் சாதம் நீண்ட நேரம் புளிக்காமல் இருக்கும்."
    }
  ],
  "storageLeftoverTips": {
    "en": "Refrigerate. Serve cool. You can garnish with pomegranate seeds or grapes.",
    "ta": "குளிர்சாதனப் பெட்டியில் வைக்கவும். மாதுளை அல்லது திராட்சை தூவி பரிமாறலாம்."
  }
},
  {
  "id": "lemon_rice",
  "enName": "Lemon Rice",
  "taName": "எலுமிச்சை சாதம்",
  "prepTime": "10 mins",
  "cookingTime": "15 mins",
  "servings": 3,
  "difficulty": "easy",
  "ingredients": [
    {
      "ingredientId": "boiled_rice",
      "quantity": {
        "en": "2 cups cooked",
        "ta": "2 கப் வேகவைத்த சாதம்"
      }
    },
    {
      "ingredientId": "mustard_seeds",
      "quantity": {
        "en": "1 tsp",
        "ta": "1 தேக்கரண்டி"
      }
    },
    {
      "ingredientId": "chana_dal",
      "quantity": {
        "en": "1 tbsp",
        "ta": "1 மேஜைக்கரண்டி கடலைப்பருப்பு"
      }
    },
    {
      "ingredientId": "peanuts",
      "quantity": {
        "en": "2 tbsp",
        "ta": "2 மேஜைக்கரண்டி வேர்க்கடலை"
      }
    },
    {
      "ingredientId": "turmeric_powder",
      "quantity": {
        "en": "1/2 tsp",
        "ta": "1/2 தேக்கரண்டி"
      }
    },
    {
      "ingredientId": "green_chilli",
      "quantity": {
        "en": "2 slit",
        "ta": "2 பச்சை மிளகாய்"
      }
    }
  ],
  "steps": [
    {
      "stepNumber": 1,
      "en": "Spread cooked rice on a wide plate and let it cool. Drizzle a tsp of oil.",
      "ta": "வேகவைத்த சாதத்தை ஒரு அகலமான தட்டில் பரப்பி ஆறவிடவும். ஒரு ஸ்பூன் எண்ணெய் தெளிக்கவும்."
    },
    {
      "stepNumber": 2,
      "en": "Heat oil, roast peanuts and chana dal, temper mustard, ginger, chillies, and turmeric.",
      "ta": "எண்ணெய் சூடாக்கி வேர்க்கடலை, கடலைப்பருப்பு வறுத்து, கடுகு, இஞ்சி, மிளகாய், மஞ்சள் தூள் தாளிக்கவும்."
    },
    {
      "stepNumber": 3,
      "en": "Turn off flame. Squeeze lemon juice, mix, then fold in the cooled rice and salt.",
      "ta": "அடுப்பை அணைக்கவும். எலுமிச்சை சாறு பிழிந்து கலந்து, பின் ஆறிய சாதம் மற்றும் உப்பு சேர்த்து கிளறவும்."
    }
  ],
  "nutrition": {
    "calories": 350,
    "protein": "7g",
    "carbs": "62g",
    "fat": "8g"
  },
  "chefTips": [
    {
      "en": "Never add lemon juice when the pan is hot on active flame; it will turn the rice bitter.",
      "ta": "எலுமிச்சை சாறு சேர்க்கும்போது அடுப்பை அணைத்துவிட வேண்டும், இல்லையெனில் கசப்புத் தட்டிவிடும்."
    }
  ],
  "storageLeftoverTips": {
    "en": "Tastes great at room temperature, perfect for travel or lunchboxes.",
    "ta": "மதிய உணவுப் பெட்டிக்கும் பயணங்களுக்கும் எடுத்துச் செல்ல மிகவும் உகந்தது."
  }
},
  {
  "id": "coconut_rice",
  "enName": "Coconut Rice",
  "taName": "தேங்காய் சாதம்",
  "prepTime": "10 mins",
  "cookingTime": "15 mins",
  "servings": 3,
  "difficulty": "easy",
  "ingredients": [
    {
      "ingredientId": "boiled_rice",
      "quantity": {
        "en": "2 cups cooked",
        "ta": "2 கப் வேகவைத்த சாதம்"
      }
    },
    {
      "ingredientId": "coconut",
      "quantity": {
        "en": "1 cup grated fresh",
        "ta": "1 கப் துருவிய தேங்காய்"
      }
    },
    {
      "ingredientId": "mustard_seeds",
      "quantity": {
        "en": "1 tsp",
        "ta": "1 தேக்கரண்டி"
      }
    },
    {
      "ingredientId": "urad_dal",
      "quantity": {
        "en": "1 tsp",
        "ta": "1 தேக்கரண்டி உளுத்தம் பருப்பு"
      }
    },
    {
      "ingredientId": "dry_red_chilli",
      "quantity": {
        "en": "2",
        "ta": "2 காய்ந்த மிளகாய்"
      }
    }
  ],
  "steps": [
    {
      "stepNumber": 1,
      "en": "Heat coconut oil, temper mustard seeds, urad dal, chana dal, and red chillies.",
      "ta": "தேங்காய் எண்ணெய் சூடாக்கி கடுகு, உளுத்தம் பருப்பு, கடலைப்பருப்பு மற்றும் காய்ந்த மிளகாய் தாளிக்க முந்திரி வறுக்கவும்."
    },
    {
      "stepNumber": 2,
      "en": "Add grated coconut and curry leaves. Saute on low flame for 2 mins (do not brown).",
      "ta": "துருவிய தேங்காய், கறிவேப்பிலை சேர்த்து குறைந்த தீயில் 2 நிமிடங்கள் வதக்கவும் (நிறம் மாறக்கூடாது)."
    },
    {
      "stepNumber": 3,
      "en": "Fold in the cooked cooled rice and salt gently. Mix without breaking grains.",
      "ta": "வேகவைத்து ஆறிய சாதம் மற்றும் உப்பு சேர்த்து மெதுவாகக் கிளறி இறக்கவும்."
    }
  ],
  "nutrition": {
    "calories": 370,
    "protein": "6g",
    "carbs": "58g",
    "fat": "13g"
  },
  "chefTips": [
    {
      "en": "Using fresh coconut oil for tempering gives the authentic coastal flavor.",
      "ta": "சமைக்கத் தேங்காய் எண்ணெய் பயன்படுத்தினால் பாரம்பரிய மணமும் சுவையும் கிடைக்கும்."
    }
  ],
  "storageLeftoverTips": {
    "en": "Contains fresh coconut; eat within 6 hours or refrigerate immediately.",
    "ta": "தேங்காய் சேர்த்திருப்பதால் 6 மணிநேரத்திற்குள் சாப்பிடவும் அல்லது குளிர்சாதனப் பெட்டியில் வைக்கவும்."
  }
},
  {
  "id": "egg_curry_sadham",
  "enName": "Egg Curry with Boiled Rice",
  "taName": "முட்டைக் குழம்பு சாதம்",
  "prepTime": "15 mins",
  "cookingTime": "30 mins",
  "servings": 3,
  "difficulty": "medium",
  "ingredients": [
    {
      "ingredientId": "boiled_rice",
      "quantity": {
        "en": "3 cups cooked",
        "ta": "3 கப் வேகவைத்த சாதம்"
      }
    },
    {
      "ingredientId": "onion",
      "quantity": {
        "en": "1 chopped",
        "ta": "1 நறுக்கிய வெங்காயம்"
      }
    },
    {
      "ingredientId": "tomato",
      "quantity": {
        "en": "1 chopped",
        "ta": "1 நறுக்கிய தக்காளி"
      }
    },
    {
      "ingredientId": "ginger",
      "quantity": {
        "en": "1 tsp paste",
        "ta": "1 தேக்கரண்டி இஞ்சி பூண்டு விழுது"
      }
    },
    {
      "ingredientId": "garlic",
      "quantity": {
        "en": "4 cloves",
        "ta": "4 பூண்டுப்பற்கள்"
      }
    },
    {
      "ingredientId": "cooking_oil",
      "quantity": {
        "en": "2 tbsp",
        "ta": "2 மேஜைக்கரண்டி"
      }
    },
    {
      "ingredientId": "salt",
      "quantity": {
        "en": "to taste",
        "ta": "தேவையான அளவு"
      }
    }
  ],
  "steps": [
    {
      "stepNumber": 1,
      "en": "Boil eggs separately, peel, and make light slits on them.",
      "ta": "முட்டைகளைத் தனியாக வேகவைத்து, ஓடு நீக்கி, கீறி வைத்துக் கொள்ளவும்."
    },
    {
      "stepNumber": 2,
      "en": "Make curry base by sauteing onions, ginger garlic paste, tomatoes, and spices until oil separates.",
      "ta": "வெங்காயம், இஞ்சி பூண்டு விழுது, தக்காளி, மசாலா தூள்களை வதக்கி எண்ணெய் பிரியும் வரை குழம்பு தயார் செய்யவும்."
    },
    {
      "stepNumber": 3,
      "en": "Add eggs, simmer for 5 mins. Serve hot over boiled rice.",
      "ta": "வேகவைத்த முட்டைகளைச் சேர்த்து 5 நிமிடங்கள் கொதிக்க வைக்கவும். சாதத்துடன் சூடாகப் பரிமாறவும்."
    }
  ],
  "nutrition": {
    "calories": 480,
    "protein": "18g",
    "carbs": "68g",
    "fat": "14g"
  },
  "chefTips": [
    {
      "en": "Pan fry the boiled eggs with a pinch of turmeric and chilli powder before adding to curry.",
      "ta": "முட்டைகளைக் குழம்பில் சேர்க்கும் முன் லேசாக மஞ்சள், மிளகாய்த்தூள் சேர்த்து வறுத்துக் கொள்ளலாம்."
    }
  ],
  "storageLeftoverTips": {
    "en": "Store egg curry in refrigerator for up to 2 days. Reheat before eating.",
    "ta": "முட்டைக் குழம்பை குளிர்சாதனப் பெட்டியில் 2 நாட்கள் வரை சேமிக்கலாம். சாப்பிடும் முன் சூடாக்கவும்."
  }
},
  {
  "id": "chicken_curry_sadham",
  "enName": "Chicken Curry with Rice",
  "taName": "சிக்கன் குழம்பு சாதம்",
  "prepTime": "20 mins",
  "cookingTime": "40 mins",
  "servings": 4,
  "difficulty": "medium",
  "ingredients": [
    {
      "ingredientId": "boiled_rice",
      "quantity": {
        "en": "4 cups cooked",
        "ta": "4 கப் வேகவைத்த சாதம்"
      }
    },
    {
      "ingredientId": "onion",
      "quantity": {
        "en": "2 chopped",
        "ta": "2 நறுக்கிய வெங்காயம்"
      }
    },
    {
      "ingredientId": "tomato",
      "quantity": {
        "en": "2 chopped",
        "ta": "2 நறுக்கிய தக்காளி"
      }
    },
    {
      "ingredientId": "ginger",
      "quantity": {
        "en": "1 tbsp paste",
        "ta": "1 மேஜைக்கரண்டி இஞ்சி பூண்டு விழுது"
      }
    },
    {
      "ingredientId": "garlic",
      "quantity": {
        "en": "6 cloves",
        "ta": "6 பூண்டுப்பற்கள்"
      }
    },
    {
      "ingredientId": "black_pepper",
      "quantity": {
        "en": "1 tsp powdered",
        "ta": "1 தேக்கரண்டி மிளகுத் தூள்"
      }
    }
  ],
  "steps": [
    {
      "stepNumber": 1,
      "en": "Heat oil, saute fennel seeds, onions, curry leaves, and ginger-garlic paste.",
      "ta": "எண்ணெய் சூடாக்கி சோம்பு, வெங்காயம், கறிவேப்பிலை மற்றும் இஞ்சி பூண்டு விழுது வதக்கவும்."
    },
    {
      "stepNumber": 2,
      "en": "Add tomatoes and chicken/spice powders, cook until oil starts separating.",
      "ta": "தக்காளி மற்றும் சிக்கன்/மசாலா தூள் சேர்த்து வதக்கி, சிக்கன் துண்டுகள் வெந்து எண்ணெய் பிரியும் வரை சமைக்கவும்."
    },
    {
      "stepNumber": 3,
      "en": "Add water, simmer until chicken is tender. Garnish with pepper powder. Serve with rice.",
      "ta": "தேவையான தண்ணீர் சேர்த்து கொதிக்கவிடவும். மிளகுத்தூள் தூவி சாதத்துடன் பரிமாறவும்."
    }
  ],
  "nutrition": {
    "calories": 560,
    "protein": "28g",
    "carbs": "74g",
    "fat": "16g"
  },
  "chefTips": [
    {
      "en": "Adding fresh crushed pepper at the end enhances the typical Chettinad aroma.",
      "ta": "இறுதியில் நசுக்கிய மிளகு தூவினால் செட்டிநாடு சிக்கன் குழம்பு மணக்கும்."
    }
  ],
  "storageLeftoverTips": {
    "en": "Chicken curry tastes even better the next day. Refrigerate and consume within 2 days.",
    "ta": "மறுநாள் சாப்பிட்டால் சுவை கூடும். குளிர்சாதனப் பெட்டியில் 2 நாட்கள் வைக்கலாம்."
  }
},
  {
  "id": "drumstick_kuzhambu_sadham",
  "enName": "Drumstick Kuzhambu with Rice",
  "taName": "முருங்கைக்காய் குழம்பு சாதம்",
  "prepTime": "15 mins",
  "cookingTime": "30 mins",
  "servings": 3,
  "difficulty": "easy",
  "ingredients": [
    {
      "ingredientId": "boiled_rice",
      "quantity": {
        "en": "3 cups cooked",
        "ta": "3 கப் வேகவைத்த சாதம்"
      }
    },
    {
      "ingredientId": "drumstick",
      "quantity": {
        "en": "2 cut into 2-inch pieces",
        "ta": "2 முருங்கைக்காய் துண்டுகள்"
      }
    },
    {
      "ingredientId": "onion",
      "quantity": {
        "en": "1 chopped",
        "ta": "1 நறுக்கிய வெங்காயம்"
      }
    },
    {
      "ingredientId": "tomato",
      "quantity": {
        "en": "1 chopped",
        "ta": "1 நறுக்கிய தக்காளி"
      }
    },
    {
      "ingredientId": "tamarind",
      "quantity": {
        "en": "lemon size",
        "ta": "எலுமிச்சை அளவு புளி"
      }
    },
    {
      "ingredientId": "sambar_powder",
      "quantity": {
        "en": "2 tbsp",
        "ta": "2 மேஜைக்கரண்டி"
      }
    }
  ],
  "steps": [
    {
      "stepNumber": 1,
      "en": "Extract tamarind pulp. Heat oil, temper mustard, curry leaves, and saute onions and tomatoes.",
      "ta": "புளியைக் கரைத்துக் கொள்ளவும். கடுகு தாளித்து வெங்காயம், தக்காளி வதக்கவும்."
    },
    {
      "stepNumber": 2,
      "en": "Add drumsticks, sambar powder, turmeric, salt, and cook with tamarind water.",
      "ta": "முருங்கைக்காய், சாம்பார் பொடி, மஞ்சள் தூள், உப்பு மற்றும் புளித் தண்ணீர் சேர்த்து வேக வைக்கவும்."
    },
    {
      "stepNumber": 3,
      "en": "Simmer until drumsticks are tender and gravy thickens. Serve hot with rice.",
      "ta": "முருங்கைக்காய் வெந்து குழம்பு கெட்டியானதும் இறக்கி சாதத்துடன் பரிமாறவும்."
    }
  ],
  "nutrition": {
    "calories": 380,
    "protein": "8g",
    "carbs": "68g",
    "fat": "6g"
  },
  "chefTips": [
    {
      "en": "Add a small piece of jaggery at the end to balance the tanginess.",
      "ta": "இறுதியில் ஒரு சிறிய துண்டு வெல்லம் சேர்த்தால் புளிப்புச் சுவை சமப்படும்."
    }
  ],
  "storageLeftoverTips": {
    "en": "Gravy can be stored in the fridge for up to 3 days. Tastes great with idli too.",
    "ta": "குழம்பை குளிர்சாதனப் பெட்டியில் 3 நாட்கள் வரை வைக்கலாம். இட்லிக்கும் இது அருமையாக இருக்கும்."
  }
},
  {
  "id": "brinjal_kara_kuzhambu",
  "enName": "Brinjal Kara Kuzhambu with Rice",
  "taName": "கத்தரிக்காய் காரக்குழம்பு சாதம்",
  "prepTime": "15 mins",
  "cookingTime": "30 mins",
  "servings": 3,
  "difficulty": "medium",
  "ingredients": [
    {
      "ingredientId": "boiled_rice",
      "quantity": {
        "en": "3 cups cooked",
        "ta": "3 கப் வேகவைத்த சாதம்"
      }
    },
    {
      "ingredientId": "brinjal",
      "quantity": {
        "en": "4 sliced length-wise",
        "ta": "4 நீளமாக நறுக்கிய கத்தரிக்காய்"
      }
    },
    {
      "ingredientId": "onion",
      "quantity": {
        "en": "1 chopped",
        "ta": "1 நறுக்கிய வெங்காயம்"
      }
    },
    {
      "ingredientId": "tomato",
      "quantity": {
        "en": "1 chopped",
        "ta": "1 நறுக்கிய தக்காளி"
      }
    },
    {
      "ingredientId": "garlic",
      "quantity": {
        "en": "6 cloves",
        "ta": "6 பூண்டுப்பற்கள்"
      }
    },
    {
      "ingredientId": "tamarind",
      "quantity": {
        "en": "lemon size",
        "ta": "எலுமிச்சை அளவு புளி"
      }
    }
  ],
  "steps": [
    {
      "stepNumber": 1,
      "en": "Heat sesame oil, temper mustard, fenugreek, and saute garlic, onion, tomato, and brinjal.",
      "ta": "நல்லெண்ணெய் சூடாக்கி கடுகு, வெந்தயம் தாளித்து பூண்டு, வெங்காயம், தக்காளி, கத்தரிக்காய் வதக்கவும்."
    },
    {
      "stepNumber": 2,
      "en": "Add sambar powder, salt, and tamarind water. Cook until brinjals are soft.",
      "ta": "சாம்பார் பொடி, உப்பு மற்றும் புளித் தண்ணீர் சேர்த்து கத்தரிக்காய் மென்மையாகும் வரை வேகவைக்கவும்."
    },
    {
      "stepNumber": 3,
      "en": "Simmer on low flame until oil floats on top. Serve with hot rice.",
      "ta": "குறைந்த தீயில் குழம்பு கொதித்து எண்ணெய் மேலே மிதக்கும் போது இறக்கி சாதத்துடன் பரிமாறவும்."
    }
  ],
  "nutrition": {
    "calories": 395,
    "protein": "7g",
    "carbs": "70g",
    "fat": "8g"
  },
  "chefTips": [
    {
      "en": "Use gingelly/sesame oil for cooking kara kuzhambu for a rich traditional taste.",
      "ta": "காரக்குழம்பிற்கு நல்லெண்ணெய் பயன்படுத்தினால் தனித்துவமான சுவை கிடைக்கும்."
    }
  ],
  "storageLeftoverTips": {
    "en": "Tastes much better the next day as the brinjal absorbs the spices.",
    "ta": "மறுநாள் கத்தரிக்காயில் காரம் புளிப்பு இறங்கி சுவை இன்னும் அபாரமாக இருக்கும்."
  }
},
  {
  "id": "mor_kuzhambu_sadham",
  "enName": "Ash Gourd Mor Kuzhambu with Rice",
  "taName": "வெண்பூசணி மோர் குழம்பு சாதம்",
  "prepTime": "15 mins",
  "cookingTime": "20 mins",
  "servings": 3,
  "difficulty": "medium",
  "ingredients": [
    {
      "ingredientId": "boiled_rice",
      "quantity": {
        "en": "3 cups cooked",
        "ta": "3 கப் வேகவைத்த சாதம்"
      }
    },
    {
      "ingredientId": "bottle_gourd",
      "quantity": {
        "en": "1 cup cubed",
        "ta": "1 கப் நறுக்கிய பூசணி/சுரைக்காய்"
      }
    },
    {
      "ingredientId": "buttermilk",
      "quantity": {
        "en": "1.5 cups sour",
        "ta": "1.5 கப் புளித்த மோர்"
      }
    },
    {
      "ingredientId": "coconut",
      "quantity": {
        "en": "1/2 cup grated",
        "ta": "1/2 கப் துருவிய தேங்காய்"
      }
    },
    {
      "ingredientId": "cumin_seeds",
      "quantity": {
        "en": "1 tsp",
        "ta": "1 தேக்கரண்டி சீரகம்"
      }
    },
    {
      "ingredientId": "ginger",
      "quantity": {
        "en": "1 tsp",
        "ta": "1 தேக்கரண்டி இஞ்சி"
      }
    }
  ],
  "steps": [
    {
      "stepNumber": 1,
      "en": "Boil ash gourd/bottle gourd cubed pieces in water with turmeric and salt.",
      "ta": "பூசணிக்காய் அல்லது சுரைக்காய் துண்டுகளை மஞ்சள் தூள், உப்பு சேர்த்து வேகவைக்கவும்."
    },
    {
      "stepNumber": 2,
      "en": "Grind coconut, cumin, ginger, and green chillies into a smooth paste. Mix with sour buttermilk.",
      "ta": "தேங்காய், சீரகம், இஞ்சி, மிளகாய் அரைத்து விழுதாக்கவும். இதை மோர் கரைசலுடன் கலக்கவும்."
    },
    {
      "stepNumber": 3,
      "en": "Pour buttermilk mixture into boiled gourd. Simmer and turn off just when it froths. Temper with mustard and fenugreek.",
      "ta": "கரைசலை வெந்த பூசணியுடன் சேர்க்கவும். நுரைத்து வரும்போது இறக்கி, கடுகு, வெந்தயம் தாளிக்கவும்."
    }
  ],
  "nutrition": {
    "calories": 360,
    "protein": "8g",
    "carbs": "60g",
    "fat": "10g"
  },
  "chefTips": [
    {
      "en": "Never let mor kuzhambu boil after adding buttermilk, otherwise it will curdle.",
      "ta": "மோர் சேர்த்த பிறகு குழம்பை கொதிக்க விடக்கூடாது, இல்லையெனில் மோர் திரிந்துவிடும்."
    }
  ],
  "storageLeftoverTips": {
    "en": "Consume on the same day. Do not overheat directly; heat gently over warm water.",
    "ta": "அன்றே பயன்படுத்தவும். நேரடியாக அதிக தீயில் சூடுபடுத்தக் கூடாது, திரிந்துவிடும்."
  }
},
  {
  "id": "vegetable_biryani",
  "enName": "Vegetable Biryani",
  "taName": "வெஜிடபிள் பிரியாணி",
  "prepTime": "20 mins",
  "cookingTime": "30 mins",
  "servings": 4,
  "difficulty": "medium",
  "ingredients": [
    {
      "ingredientId": "basmati_rice",
      "quantity": {
        "en": "2 cups",
        "ta": "2 கப் பாசுமதி அரிசி"
      }
    },
    {
      "ingredientId": "potato",
      "quantity": {
        "en": "1 chopped",
        "ta": "1 நறுக்கிய உருளைக்கிழங்கு"
      }
    },
    {
      "ingredientId": "carrot",
      "quantity": {
        "en": "1 chopped",
        "ta": "1 நறுக்கிய கேரட்"
      }
    },
    {
      "ingredientId": "onion",
      "quantity": {
        "en": "1 sliced",
        "ta": "1 நீளவாக்கில் நறுக்கிய வெங்காயம்"
      }
    },
    {
      "ingredientId": "ginger",
      "quantity": {
        "en": "1 tbsp paste",
        "ta": "1 மேஜைக்கரண்டி இஞ்சி பூண்டு விழுது"
      }
    },
    {
      "ingredientId": "ghee",
      "quantity": {
        "en": "2 tbsp",
        "ta": "2 மேஜைக்கரண்டி நெய்"
      }
    },
    {
      "ingredientId": "salt",
      "quantity": {
        "en": "to taste",
        "ta": "தேவையான அளவு"
      }
    }
  ],
  "steps": [
    {
      "stepNumber": 1,
      "en": "Soak Basmati rice for 30 minutes. Heat ghee and oil in pressure cooker.",
      "ta": "அரிசியை 30 நிமிடங்கள் ஊறவைக்கவும். குக்கரில் நெய் மற்றும் எண்ணெய் சூடாக்கவும்."
    },
    {
      "stepNumber": 2,
      "en": "Saute whole spices, onions, ginger-garlic paste, tomatoes, and vegetables.",
      "ta": "பட்டை சோம்பு, வெங்காயம், இஞ்சி பூண்டு, தக்காளி மற்றும் காய்கறிகளை வதக்கவும்."
    },
    {
      "stepNumber": 3,
      "en": "Add 3 cups of water, mint, salt. Once boiling, add rice. Close cooker, cook for 2 whistles.",
      "ta": "3 கப் தண்ணீர், புதினா, உப்பு சேர்க்கவும். கொதித்ததும் அரிசி சேர்த்து, குக்கரை மூடி 2 விசில் விடவும்."
    }
  ],
  "nutrition": {
    "calories": 450,
    "protein": "8g",
    "carbs": "78g",
    "fat": "11g"
  },
  "chefTips": [
    {
      "en": "Add a squeeze of lemon juice while cooking to keep the rice grains separate.",
      "ta": "பிரியாணி உதிரி உதிரியாக வர அரிசி கொதிக்கும் போது சிறிது எலுமிச்சை சாறு சேர்க்கவும்."
    }
  ],
  "storageLeftoverTips": {
    "en": "Can be refrigerated for up to 2 days. Re-steam before serving.",
    "ta": "குளிர்சாதனப் பெட்டியில் 2 நாட்கள் வரை வைக்கலாம். ஆவியில் சூடாக்கி சாப்பிடவும்."
  }
},
  {
  "id": "tomato_pappu_sadham",
  "enName": "Tomato Pappu (Dal) with Rice",
  "taName": "தக்காளி பருப்பு சாதம்",
  "prepTime": "10 mins",
  "cookingTime": "25 mins",
  "servings": 3,
  "difficulty": "easy",
  "ingredients": [
    {
      "ingredientId": "boiled_rice",
      "quantity": {
        "en": "3 cups cooked",
        "ta": "3 கப் வேகவைத்த சாதம்"
      }
    },
    {
      "ingredientId": "toor_dal",
      "quantity": {
        "en": "1 cup",
        "ta": "1 கப் துவரம்பருப்பு"
      }
    },
    {
      "ingredientId": "tomato",
      "quantity": {
        "en": "3 chopped",
        "ta": "3 நறுக்கிய தக்காளி"
      }
    },
    {
      "ingredientId": "onion",
      "quantity": {
        "en": "1 chopped",
        "ta": "1 நறுக்கிய வெங்காயம்"
      }
    },
    {
      "ingredientId": "green_chilli",
      "quantity": {
        "en": "3",
        "ta": "3 பச்சை மிளகாய்"
      }
    },
    {
      "ingredientId": "mustard_seeds",
      "quantity": {
        "en": "1 tsp",
        "ta": "1 தேக்கரண்டி"
      }
    }
  ],
  "steps": [
    {
      "stepNumber": 1,
      "en": "Pressure cook toor dal, onions, tomatoes, and green chillies with turmeric and water.",
      "ta": "துவரம்பருப்பு, வெங்காயம், தக்காளி, மிளகாய், மஞ்சள் தூள் ஆகியவற்றை குக்கரில் வேகவைக்கவும்."
    },
    {
      "stepNumber": 2,
      "en": "Mash the cooked dal and tomato mixture gently with a wooden ladle. Add salt.",
      "ta": "வெந்த பருப்புக் கலவையை மத்து கொண்டு லேசாக மசித்து உப்பு சேர்க்கவும்."
    },
    {
      "stepNumber": 3,
      "en": "Temper with mustard seeds, cumin seeds, garlic, and red chillies. Mix with rice.",
      "ta": "நெய்யில் கடுகு, சீரகம், தட்டிய பூண்டு தாளித்துக் கொட்டி சாதத்துடன் சேர்த்துப் பரிமாறவும்."
    }
  ],
  "nutrition": {
    "calories": 390,
    "protein": "13g",
    "carbs": "65g",
    "fat": "5g"
  },
  "chefTips": [
    {
      "en": "Add a pinch of hing/asafoetida while cooking dal for digestion and flavor.",
      "ta": "பருப்பு வேக வைக்கும் போது சிறிது பெருங்காயம் சேர்த்தால் மணம் கூடும், சீரணத்திற்கும் நல்லது."
    }
  ],
  "storageLeftoverTips": {
    "en": "Leftover dal can be eaten with chapati or dosa next morning.",
    "ta": "மீதமுள்ள பருப்பைக் காலையில் சப்பாத்தி அல்லது தோசைக்குத் தொட்டுக் கொள்ளலாம்."
  }
},
  {
  "id": "puliyodharai",
  "enName": "Tamarind Rice",
  "taName": "புளியோதரை / புளி சாதம்",
  "prepTime": "15 mins",
  "cookingTime": "30 mins",
  "servings": 4,
  "difficulty": "medium",
  "ingredients": [
    {
      "ingredientId": "boiled_rice",
      "quantity": {
        "en": "2 cups cooked",
        "ta": "2 கப் வேகவைத்த சாதம்"
      }
    },
    {
      "ingredientId": "tamarind",
      "quantity": {
        "en": "large orange sized ball",
        "ta": "பெரிய எலுமிச்சை அளவு புளி"
      }
    },
    {
      "ingredientId": "mustard_seeds",
      "quantity": {
        "en": "1 tsp",
        "ta": "1 தேக்கரண்டி"
      }
    },
    {
      "ingredientId": "peanuts",
      "quantity": {
        "en": "3 tbsp",
        "ta": "3 மேஜைக்கரண்டி வேர்க்கடலை"
      }
    },
    {
      "ingredientId": "chana_dal",
      "quantity": {
        "en": "1 tbsp",
        "ta": "1 மேஜைக்கரண்டி கடலைப்பருப்பு"
      }
    },
    {
      "ingredientId": "salt",
      "quantity": {
        "en": "to taste",
        "ta": "தேவையான அளவு"
      }
    }
  ],
  "steps": [
    {
      "stepNumber": 1,
      "en": "Extract thick tamarind juice. Simmer it with turmeric, salt, and pulikachal spice powder until thick.",
      "ta": "புளியைக் கெட்டியாகக் கரைத்து, மஞ்சள் தூள், உப்பு மற்றும் புளியோதரை பொடி சேர்த்து கெட்டியாகும் வரை கொதிக்க வைக்கவும்."
    },
    {
      "stepNumber": 2,
      "en": "Temper mustard seeds, chana dal, peanuts, red chillies, and curry leaves in sesame oil.",
      "ta": "நல்லெண்ணெயில் கடுகு, கடலைப்பருப்பு, வேர்க்கடலை, காய்ந்த மிளகாய், கறிவேப்பிலை தாளிக்கவும்."
    },
    {
      "stepNumber": 3,
      "en": "Add the tamarind paste to cooled rice, drizzle sesame oil, and mix thoroughly.",
      "ta": "ஆறிய சாதத்தில் புளிக்காய்ச்சலை ஊற்றி, நல்லெண்ணெய் சேர்த்து நன்கு கிளறி வைக்கவும்."
    }
  ],
  "nutrition": {
    "calories": 420,
    "protein": "8g",
    "carbs": "70g",
    "fat": "12g"
  },
  "chefTips": [
    {
      "en": "Let the tamarind rice rest for 2-3 hours before eating so the rice absorbs the flavors.",
      "ta": "புளியோதரையைச் செய்த 2 மணிநேரம் கழித்துச் சாப்பிட்டால் சுவை இன்னும் அருமையாக இருக்கும்."
    }
  ],
  "storageLeftoverTips": {
    "en": "Keeps well for 2-3 days at room temperature. Perfect travel food.",
    "ta": "வெளியில் வைத்தாலே 2-3 நாட்கள் கெடாது. பயணங்களுக்கு ஏற்ற சிறந்த உணவு."
  }
},
  {
  "id": "chana_masala_chapati",
  "enName": "Chana Masala with Chapati",
  "taName": "சப்பாத்தி கொண்டைக்கடலை மசாலா",
  "prepTime": "20 mins",
  "cookingTime": "45 mins",
  "servings": 3,
  "difficulty": "medium",
  "ingredients": [
    {
      "ingredientId": "wheat_flour",
      "quantity": {
        "en": "2 cups",
        "ta": "2 கப் கோதுமை மாவு"
      }
    },
    {
      "ingredientId": "chickpeas",
      "quantity": {
        "en": "1 cup soaked overnight",
        "ta": "1 கப் ஊறவைத்த கொண்டைக்கடலை"
      }
    },
    {
      "ingredientId": "onion",
      "quantity": {
        "en": "1 chopped",
        "ta": "1 நறுக்கிய வெங்காயம்"
      }
    },
    {
      "ingredientId": "tomato",
      "quantity": {
        "en": "2 chopped",
        "ta": "2 நறுக்கிய தக்காளி"
      }
    },
    {
      "ingredientId": "ginger",
      "quantity": {
        "en": "1 tsp paste",
        "ta": "1 தேக்கரண்டி இஞ்சி பூண்டு விழுது"
      }
    },
    {
      "ingredientId": "cooking_oil",
      "quantity": {
        "en": "2 tbsp",
        "ta": "2 மேஜைக்கரண்டி"
      }
    }
  ],
  "steps": [
    {
      "stepNumber": 1,
      "en": "Boil soaked chickpeas with salt in a pressure cooker for 5-6 whistles.",
      "ta": "ஊறவைத்த கொண்டைக்கடலையை உப்பு சேர்த்து குக்கரில் 5-6 விசில் வேகவைக்கவும்."
    },
    {
      "stepNumber": 2,
      "en": "Saute onions, ginger-garlic paste, and tomatoes. Add chana masala powder, turmeric, and chilli powder.",
      "ta": "வெங்காயம், இஞ்சி பூண்டு விழுது, தக்காளி வதக்கி சன்னா மசாலா பொடி, மஞ்சள் தூள், மிளகாய்த்தூள் சேர்க்கவும்."
    },
    {
      "stepNumber": 3,
      "en": "Add boiled chickpeas and water. Cook until gravy thickens. Serve with warm chapatis.",
      "ta": "வெந்த கொண்டைக்கடலை மற்றும் தண்ணீர் சேர்த்து மசாலா திக்காகும் வரை கொதிக்க விட்டு சப்பாத்தியுடன் பரிமாறவும்."
    }
  ],
  "nutrition": {
    "calories": 410,
    "protein": "14g",
    "carbs": "66g",
    "fat": "10g"
  },
  "chefTips": [
    {
      "en": "Mash a handful of boiled chickpeas to thicken the gravy naturally.",
      "ta": "குழம்பு திக்காக வர வேகவைத்த கொண்டைக்கடலையில் சிலவற்றை மசித்து மசாலாவில் சேர்க்கவும்."
    }
  ],
  "storageLeftoverTips": {
    "en": "Chana masala can be stored in the fridge. Leftovers are delicious with dosa or puri.",
    "ta": "மசாலாவை பிரிட்ஜில் வைக்கலாம். மீதமுள்ளதை தோசை அல்லது பூரியுடன் தொட்டுச் சாப்பிடலாம்."
  }
},
  {
  "id": "kootu_sadham",
  "enName": "Carrot Beans Kootu with Rice",
  "taName": "கூட்டு சாதம்",
  "prepTime": "15 mins",
  "cookingTime": "25 mins",
  "servings": 3,
  "difficulty": "easy",
  "ingredients": [
    {
      "ingredientId": "boiled_rice",
      "quantity": {
        "en": "3 cups cooked",
        "ta": "3 கப் வேகவைத்த சாதம்"
      }
    },
    {
      "ingredientId": "carrot",
      "quantity": {
        "en": "1 chopped",
        "ta": "1 நறுக்கிய கேரட்"
      }
    },
    {
      "ingredientId": "moong_dal",
      "quantity": {
        "en": "1/2 cup",
        "ta": "1/2 கப் பாசிப்பருப்பு"
      }
    },
    {
      "ingredientId": "coconut",
      "quantity": {
        "en": "3 tbsp grated",
        "ta": "3 மேஜைக்கரண்டி துருவிய தேங்காய்"
      }
    },
    {
      "ingredientId": "cumin_seeds",
      "quantity": {
        "en": "1 tsp",
        "ta": "1 தேக்கரண்டி சீரகம்"
      }
    },
    {
      "ingredientId": "mustard_seeds",
      "quantity": {
        "en": "1 tsp",
        "ta": "1 தேக்கரண்டி"
      }
    }
  ],
  "steps": [
    {
      "stepNumber": 1,
      "en": "Boil carrots, beans, and moong dal in a pan with turmeric powder until soft.",
      "ta": "கேரட், பீன்ஸ் மற்றும் பாசிப்பருப்பை மஞ்சள் தூள் சேர்த்து வேக வைக்கவும்."
    },
    {
      "stepNumber": 2,
      "en": "Grind grated coconut and cumin seeds with water into a paste, add to the boiled mixture.",
      "ta": "துருவிய தேங்காய் மற்றும் சீரகத்தை அரைத்து வெந்த காய்கறி கலவையில் சேர்க்கவும்."
    },
    {
      "stepNumber": 3,
      "en": "Add salt and boil for 3 mins. Temper with mustard seeds, urad dal, and curry leaves. Mix with rice.",
      "ta": "உப்பு சேர்த்து 3 நிமிடங்கள் கொதிக்க வைத்து, கடுகு தாளித்துக் கொட்டி சாதத்துடன் பரிமாறவும்."
    }
  ],
  "nutrition": {
    "calories": 370,
    "protein": "11g",
    "carbs": "65g",
    "fat": "7g"
  },
  "chefTips": [
    {
      "en": "Add a pinch of asafoetida to the tempering for typical Tamil wedding style flavor.",
      "ta": "தாளிக்கும் போது ஒரு சிட்டிகை பெருங்காயத்தூள் சேர்த்தால் கல்யாண வீட்டு கூட்டு வாசம் வரும்."
    }
  ],
  "storageLeftoverTips": {
    "en": "Kootu can be stored in the fridge for 24 hours. Reheat before eating.",
    "ta": "கூட்டை பிரிட்ஜில் 24 மணிநேரம் வைக்கலாம். சாப்பிடும் முன் லேசாகச் சூடாக்கவும்."
  }
},
  {
  "id": "wheat_upma",
  "enName": "Wheat Rava Upma",
  "taName": "கோதுமை ரவை உப்புமா",
  "prepTime": "10 mins",
  "cookingTime": "25 mins",
  "servings": 2,
  "difficulty": "easy",
  "ingredients": [
    {
      "ingredientId": "wheat_flour",
      "quantity": {
        "en": "1 cup wheat rava",
        "ta": "1 கப் கோதுமை ரவை"
      }
    },
    {
      "ingredientId": "onion",
      "quantity": {
        "en": "1 chopped",
        "ta": "1 நறுக்கிய வெங்காயம்"
      }
    },
    {
      "ingredientId": "green_chilli",
      "quantity": {
        "en": "2",
        "ta": "2 பச்சை மிளகாய்"
      }
    },
    {
      "ingredientId": "mustard_seeds",
      "quantity": {
        "en": "1 tsp",
        "ta": "1 தேக்கரண்டி"
      }
    },
    {
      "ingredientId": "ginger",
      "quantity": {
        "en": "1/2 tsp finely chopped",
        "ta": "1/2 தேக்கரண்டி இஞ்சி"
      }
    }
  ],
  "steps": [
    {
      "stepNumber": 1,
      "en": "Dry roast wheat rava until warm and fragrant. Keep aside.",
      "ta": "கோதுமை ரவையை வாசம் வரும் வரை வறுத்து தனியே வைக்கவும்."
    },
    {
      "stepNumber": 2,
      "en": "Heat oil, temper mustard, urad dal, chana dal, saute onions, ginger, and green chillies.",
      "ta": "எண்ணெய் சூடாக்கி கடுகு, பருப்புகள் தாளித்து வெங்காயம், இஞ்சி, மிளகாய் வதக்கவும்."
    },
    {
      "stepNumber": 3,
      "en": "Add 2.5 cups of water and salt. Boil, add wheat rava. Cook covered on low flame for 10-12 mins.",
      "ta": "2.5 கப் தண்ணீர், உப்பு சேர்க்கவும். கொதித்ததும் ரவையைச் சேர்த்து மூடி 10-12 நிமிடங்கள் வேகவைக்கவும்."
    }
  ],
  "nutrition": {
    "calories": 290,
    "protein": "8g",
    "carbs": "54g",
    "fat": "5g"
  },
  "chefTips": [
    {
      "en": "Wheat rava takes longer to cook than white semolina. Ensure it is covered well.",
      "ta": "கோதுமை ரவை வேகச் சற்று கூடுதல் நேரமாகும், எனவே நன்கு மூடி வைக்கவும்."
    }
  ],
  "storageLeftoverTips": {
    "en": "Healthy dinner option. Reheat with a sprinkle of water if dry.",
    "ta": "ஆரோக்கியமான இரவு உணவு. உலர்வாக இருந்தால் லேசாகத் தண்ணீர் தெளித்துச் சூடாக்கவும்."
  }
},
  {
  "id": "paneer_butter_chapati",
  "enName": "Paneer Butter Masala with Chapati",
  "taName": "சப்பாத்தி பனீர் பட்டர் மசாலா",
  "prepTime": "15 mins",
  "cookingTime": "30 mins",
  "servings": 3,
  "difficulty": "medium",
  "ingredients": [
    {
      "ingredientId": "wheat_flour",
      "quantity": {
        "en": "2 cups",
        "ta": "2 கப் கோதுமை மாவு"
      }
    },
    {
      "ingredientId": "paneer",
      "quantity": {
        "en": "200g cubed",
        "ta": "200g பனீர் துண்டுகள்"
      }
    },
    {
      "ingredientId": "butter",
      "quantity": {
        "en": "2 tbsp",
        "ta": "2 மேஜைக்கரண்டி வெண்ணெய்"
      }
    },
    {
      "ingredientId": "onion",
      "quantity": {
        "en": "1 chopped",
        "ta": "1 நறுக்கிய வெங்காயம்"
      }
    },
    {
      "ingredientId": "tomato",
      "quantity": {
        "en": "2 chopped",
        "ta": "2 நறுக்கிய தக்காளி"
      }
    },
    {
      "ingredientId": "ginger",
      "quantity": {
        "en": "1 tsp paste",
        "ta": "1 தேக்கரண்டி இஞ்சி பூண்டு விழுது"
      }
    }
  ],
  "steps": [
    {
      "stepNumber": 1,
      "en": "Knead flour to soft dough, roll, and roast chapatis on tawa.",
      "ta": "கோதுமை மாவைப் பிசைந்து, சப்பாத்திகளாகத் திரட்டிச் சுட்டெடுக்கவும்."
    },
    {
      "stepNumber": 2,
      "en": "Saute onions, tomatoes, ginger-garlic paste, and blend into a smooth puree. Simmer with butter and spice powder.",
      "ta": "வெங்காயம், தக்காளி, இஞ்சி பூண்டு வதக்கி அரைத்துக் கொள்ளவும். வெண்ணெய், மசாலா தூள் சேர்த்து வதக்கி கொதிக்க விடவும்."
    },
    {
      "stepNumber": 3,
      "en": "Add paneer cubes and fresh cream. Cook for 3 mins. Serve with warm chapatis.",
      "ta": "பனீர் துண்டுகள் சேர்த்து 3 நிமிடங்கள் கொதிக்க வைக்கவும். சப்பாத்தியுடன் பரிமாறவும்."
    }
  ],
  "nutrition": {
    "calories": 440,
    "protein": "15g",
    "carbs": "55g",
    "fat": "16g"
  },
  "chefTips": [
    {
      "en": "Soak paneer cubes in warm water for 10 minutes before cooking to keep them soft.",
      "ta": "பனீர் சாஃப்ட்டாக இருக்க சமைப்பதற்கு முன் 10 நிமிடங்கள் வெதுவெதுப்பான நீரில் ஊற வைக்கவும்."
    }
  ],
  "storageLeftoverTips": {
    "en": "Eat fresh. Store leftover paneer gravy in a glass container in the fridge.",
    "ta": "மசாலாவைப் பிரிட்ஜில் கண்ணாடி பாத்திரத்தில் சேமிக்கவும்."
  }
},
  {
  "id": "tomato_roti",
  "enName": "Tomato Kurma with Chapati",
  "taName": "சப்பாத்தி தக்காளி குருமா",
  "prepTime": "15 mins",
  "cookingTime": "30 mins",
  "servings": 3,
  "difficulty": "easy",
  "ingredients": [
    {
      "ingredientId": "wheat_flour",
      "quantity": {
        "en": "2 cups",
        "ta": "2 கப்"
      }
    },
    {
      "ingredientId": "tomato",
      "quantity": {
        "en": "3 chopped",
        "ta": "3 நறுக்கிய தக்காளி"
      }
    },
    {
      "ingredientId": "onion",
      "quantity": {
        "en": "1 chopped",
        "ta": "1 நறுக்கிய வெங்காயம்"
      }
    },
    {
      "ingredientId": "coconut",
      "quantity": {
        "en": "1/2 cup grated",
        "ta": "1/2 கப் துருவிய தேங்காய்"
      }
    },
    {
      "ingredientId": "cumin_seeds",
      "quantity": {
        "en": "1 tsp",
        "ta": "1 தேக்கரண்டி"
      }
    },
    {
      "ingredientId": "ginger",
      "quantity": {
        "en": "1 tsp paste",
        "ta": "1 தேக்கரண்டி இஞ்சி பூண்டு விழுது"
      }
    }
  ],
  "steps": [
    {
      "stepNumber": 1,
      "en": "Make soft chapatis. Grind coconut and cumin seeds with fennel into a smooth masala paste.",
      "ta": "சப்பாத்திகள் சுடவும். தேங்காய், சீரகம், சோம்பு சேர்த்து விழுதாக அரைக்கவும்."
    },
    {
      "stepNumber": 2,
      "en": "Saute onion, ginger-garlic paste, tomatoes, and red chilli powder until tomatoes are soft.",
      "ta": "வெங்காயம், இஞ்சி பூண்டு விழுது, தக்காளி மற்றும் மிளகாய்த்தூள் சேர்த்து தக்காளி வதங்கும் வரை வதக்கவும்."
    },
    {
      "stepNumber": 3,
      "en": "Add coconut paste, water, and salt. Cook until raw smell disappears and kurma thickens.",
      "ta": "தேங்காய் விழுது, தண்ணீர், உப்பு சேர்த்துப் பச்சை வாசம் போகும் வரை கொதிக்க வைக்கவும்."
    }
  ],
  "nutrition": {
    "calories": 380,
    "protein": "10g",
    "carbs": "56g",
    "fat": "11g"
  },
  "chefTips": [
    {
      "en": "Ripe country tomatoes give the best tanginess to this curry.",
      "ta": "நாட்டுத் தக்காளியைப் பயன்படுத்தினால் குருமாவின் புளிப்புச் சுவை மிகச் சிறப்பாக இருக்கும்."
    }
  ],
  "storageLeftoverTips": {
    "en": "Leftovers can be stored for 24 hours. Reheat before serving.",
    "ta": "குருமாவை 24 மணிநேரம் பிரிட்ஜில் வைக்கலாம். சாப்பிடுவதற்கு முன் சூடாக்கவும்."
  }
},
  {
  "id": "dal_khichdi",
  "enName": "Moong Dal Khichdi",
  "taName": "பாசிப்பருப்பு கிச்சடி",
  "prepTime": "10 mins",
  "cookingTime": "25 mins",
  "servings": 3,
  "difficulty": "easy",
  "ingredients": [
    {
      "ingredientId": "raw_rice",
      "quantity": {
        "en": "1 cup",
        "ta": "1 கப் அரிசி"
      }
    },
    {
      "ingredientId": "moong_dal",
      "quantity": {
        "en": "1/2 cup",
        "ta": "1/2 கப் பாசிப்பருப்பு"
      }
    },
    {
      "ingredientId": "turmeric_powder",
      "quantity": {
        "en": "1/2 tsp",
        "ta": "1/2 தேக்கரண்டி"
      }
    },
    {
      "ingredientId": "cumin_seeds",
      "quantity": {
        "en": "1 tsp",
        "ta": "1 தேக்கரண்டி"
      }
    },
    {
      "ingredientId": "ginger",
      "quantity": {
        "en": "1/2 tsp finely chopped",
        "ta": "1/2 தேக்கரண்டி இஞ்சி"
      }
    },
    {
      "ingredientId": "ghee",
      "quantity": {
        "en": "2 tbsp",
        "ta": "2 மேஜைக்கரண்டி"
      }
    }
  ],
  "steps": [
    {
      "stepNumber": 1,
      "en": "Wash rice and moong dal. Dry roast dal slightly first for better flavor.",
      "ta": "அரிசி மற்றும் பாசிப்பருப்பைக் கழுவவும். பருப்பைச் சமைப்பதற்கு முன் லேசாக வறுத்துக் கொள்ளலாம்."
    },
    {
      "stepNumber": 2,
      "en": "Saute cumin seeds, ginger, turmeric, and hing in ghee inside a pressure cooker.",
      "ta": "குக்கரில் நெய் ஊற்றி சீரகம், இஞ்சி, மஞ்சள் தூள், பெருங்காயம் சேர்த்து வதக்கவும்."
    },
    {
      "stepNumber": 3,
      "en": "Add rice, dal, salt, and 4.5 cups of water. Pressure cook for 4 whistles until very soft.",
      "ta": "அரிசி, பருப்பு, உப்பு மற்றும் 4.5 கப் தண்ணீர் சேர்த்து 4 விசில் வரும் வரை வேகவைக்கவும்."
    }
  ],
  "nutrition": {
    "calories": 340,
    "protein": "11g",
    "carbs": "60g",
    "fat": "6g"
  },
  "chefTips": [
    {
      "en": "Drizzle a spoonful of hot ghee just before serving to double the taste.",
      "ta": "பரிமாறுவதற்கு முன் ஒரு ஸ்பூன் நெய் ஊற்றினால் சுவை பிரமாதமாக இருக்கும்."
    }
  ],
  "storageLeftoverTips": {
    "en": "Comfort food. Add hot water to adjust consistency if it thickens.",
    "ta": "ஆறும்போது தடிமனாகும் என்பதால் வெந்நீர் சேர்த்துச் சரிசெய்து பரிமாறவும்."
  }
},
  {
  "id": "potato_fry_chapati",
  "enName": "Potato Poriyal with Chapati",
  "taName": "சப்பாத்தி உருளைக்கிழங்கு பொரியல்",
  "prepTime": "15 mins",
  "cookingTime": "30 mins",
  "servings": 2,
  "difficulty": "easy",
  "ingredients": [
    {
      "ingredientId": "wheat_flour",
      "quantity": {
        "en": "1.5 cups",
        "ta": "1.5 கப்"
      }
    },
    {
      "ingredientId": "potato",
      "quantity": {
        "en": "2 boiled and cubed",
        "ta": "2 வேகவைத்து நறுக்கிய உருளைக்கிழங்கு"
      }
    },
    {
      "ingredientId": "onion",
      "quantity": {
        "en": "1 chopped",
        "ta": "1 நறுக்கிய வெங்காயம்"
      }
    },
    {
      "ingredientId": "mustard_seeds",
      "quantity": {
        "en": "1 tsp",
        "ta": "1 தேக்கரண்டி"
      }
    },
    {
      "ingredientId": "turmeric_powder",
      "quantity": {
        "en": "1/2 tsp",
        "ta": "1/2 தேக்கரண்டி"
      }
    },
    {
      "ingredientId": "cooking_oil",
      "quantity": {
        "en": "2 tbsp",
        "ta": "2 மேஜைக்கரண்டி"
      }
    }
  ],
  "steps": [
    {
      "stepNumber": 1,
      "en": "Knead and roll out chapatis, roast on a hot griddle.",
      "ta": "சப்பாத்தி மாவு பிசைந்து திரட்டி சுட்டெடுக்கவும்."
    },
    {
      "stepNumber": 2,
      "en": "Heat oil, add mustard seeds, onions, curry leaves, and saute until soft.",
      "ta": "எண்ணெய் சூடாக்கி கடுகு, வெங்காயம், கறிவேப்பிலை வதக்கவும்."
    },
    {
      "stepNumber": 3,
      "en": "Add boiled cubed potatoes, turmeric powder, chilli powder, salt, and fry on medium heat until crispy.",
      "ta": "வேகவைத்த உருளைக்கிழங்கு, மஞ்சள் தூள், மிளகாய்த்தூள், உப்பு சேர்த்து மொறுமொறுப்பாகும் வரை வறுக்கவும்."
    }
  ],
  "nutrition": {
    "calories": 385,
    "protein": "9g",
    "carbs": "58g",
    "fat": "11g"
  },
  "chefTips": [
    {
      "en": "Sauté potatoes on low flame for longer to get a golden crust.",
      "ta": "உருளைக்கிழங்கை குறைந்த தீயில் நீண்ட நேரம் வதக்கினால் நல்ல பொன்னிற மொறுமொறுப்பு கிடைக்கும்."
    }
  ],
  "storageLeftoverTips": {
    "en": "Tastes great inside a wrap. Chapatis should be stored in a hotbox.",
    "ta": "சப்பாத்தியை ரோலாகச் செய்து சாப்பிடலாம். சப்பாத்தியை ஹாட்பாக்ஸில் வைக்கவும்."
  }
},
  {
  "id": "cabbage_upma",
  "enName": "Cabbage Semiya Upma",
  "taName": "முட்டைக்கோஸ் சேமியா உப்புமா",
  "prepTime": "10 mins",
  "cookingTime": "20 mins",
  "servings": 2,
  "difficulty": "easy",
  "ingredients": [
    {
      "ingredientId": "vermicelli",
      "quantity": {
        "en": "1 cup",
        "ta": "1 கப் சேமியா"
      }
    },
    {
      "ingredientId": "cabbage",
      "quantity": {
        "en": "1 cup finely shredded",
        "ta": "1 கப் நறுக்கிய முட்டைக்கோஸ்"
      }
    },
    {
      "ingredientId": "onion",
      "quantity": {
        "en": "1 chopped",
        "ta": "1 நறுக்கிய வெங்காயம்"
      }
    },
    {
      "ingredientId": "mustard_seeds",
      "quantity": {
        "en": "1 tsp",
        "ta": "1 தேக்கரண்டி"
      }
    },
    {
      "ingredientId": "green_chilli",
      "quantity": {
        "en": "2",
        "ta": "2"
      }
    },
    {
      "ingredientId": "cooking_oil",
      "quantity": {
        "en": "1.5 tbsp",
        "ta": "1.5 மேஜைக்கரண்டி"
      }
    }
  ],
  "steps": [
    {
      "stepNumber": 1,
      "en": "Roast vermicelli and set aside. Saute mustard, onions, chillies, and curry leaves in oil.",
      "ta": "சேமியாவை வறுத்து வைக்கவும். எண்ணெயில் கடுகு, வெங்காயம், மிளகாய், கறிவேப்பிலை வதக்கவும்."
    },
    {
      "stepNumber": 2,
      "en": "Add shredded cabbage, saute for 3 mins until half cooked.",
      "ta": "முட்டைக்கோஸ் சேர்த்து 3 நிமிடங்கள் வதக்கவும் (முக்கால் பதம் வெந்தால் போதும்)."
    },
    {
      "stepNumber": 3,
      "en": "Add water and salt. Bring to boil, stir in vermicelli, cover and cook on low heat.",
      "ta": "தண்ணீர், உப்பு சேர்த்து கொதிக்க விடவும். சேமியாவைச் சேர்த்து மூடி வைத்து வேகவிடவும்."
    }
  ],
  "nutrition": {
    "calories": 320,
    "protein": "6g",
    "carbs": "50g",
    "fat": "8g"
  },
  "chefTips": [
    {
      "en": "Do not overcook cabbage; it should maintain a slight crunch.",
      "ta": "முட்டைக்கோஸை அதிகம் வேகவிடக் கூடாது; லேசான மொறுமொறுப்புடன் இருந்தால் நன்றாக இருக்கும்."
    }
  ],
  "storageLeftoverTips": {
    "en": "Best eaten warm right after cooking.",
    "ta": "சமைத்தவுடன் சூடாகச் சாப்பிடுவது சிறந்தது."
  }
},
  {
  "id": "ragi_puttu",
  "enName": "Ragi Puttu",
  "taName": "ராகி புட்டு",
  "prepTime": "15 mins",
  "cookingTime": "15 mins",
  "servings": 3,
  "difficulty": "medium",
  "ingredients": [
    {
      "ingredientId": "ragi",
      "quantity": {
        "en": "1.5 cups ragi flour",
        "ta": "1.5 கப் கேழ்வரகு மாவு"
      }
    },
    {
      "ingredientId": "coconut",
      "quantity": {
        "en": "1/2 cup grated",
        "ta": "1/2 கப் துருவிய தேங்காய்"
      }
    },
    {
      "ingredientId": "salt",
      "quantity": {
        "en": "a pinch",
        "ta": "ஒரு சிட்டிகை"
      }
    }
  ],
  "steps": [
    {
      "stepNumber": 1,
      "en": "Dry roast ragi flour for 3 mins. Let it cool. Sprinkle salted water gradually to get a breadcrumbs texture.",
      "ta": "மாவு வாசம் வரும் வரை வறுத்து ஆறவிடவும். உப்புத் தண்ணீரைத் தெளித்து உதிரிப் பதத்தில் ஈரமாக்கிப் பிசையவும்."
    },
    {
      "stepNumber": 2,
      "en": "Layer puttu maker with grated coconut followed by ragi flour mixture alternatively.",
      "ta": "புட்டுக்குழலில் தேங்காய் துருவல், பின் ஈரமாக்கிய மாவு என மாற்றி மாற்றி அடுக்கவும்."
    },
    {
      "stepNumber": 3,
      "en": "Steam for 8-10 minutes until steam vents from the top. Serve with banana and sugar.",
      "ta": "8-10 நிமிடங்கள் ஆவியில் வேகவைத்து எடுக்கவும். வாழைப்பழம், சர்க்கரை அல்லது பயறுடன் பரிமாறவும்."
    }
  ],
  "nutrition": {
    "calories": 290,
    "protein": "7g",
    "carbs": "58g",
    "fat": "4g"
  },
  "chefTips": [
    {
      "en": "Check dough texture: if you press it in your palm, it should hold shape, but crumble easily when tapped.",
      "ta": "மாவை கைப்பிடியில் பிடித்தால் பிடிக்க வர வேண்டும், தட்டினால் உதிர வேண்டும். இதுவே சரியான பதம்."
    }
  ],
  "storageLeftoverTips": {
    "en": "Re-steam left overs to restore softness.",
    "ta": "மீதமுள்ள புட்டை மீண்டும் ஆவியில் வேகவைத்தால் அதே சாஃப்ட்னஸ் கிடைக்கும்."
  }
},
  {
  "id": "coconut_sevai",
  "enName": "Coconut Sevai",
  "taName": "தேங்காய் சேவை",
  "prepTime": "10 mins",
  "cookingTime": "20 mins",
  "servings": 3,
  "difficulty": "medium",
  "ingredients": [
    {
      "ingredientId": "raw_rice",
      "quantity": {
        "en": "2 cups rice idli / sevai noodles",
        "ta": "2 கப் சேவை / அரிசி இடியாப்பம்"
      }
    },
    {
      "ingredientId": "coconut",
      "quantity": {
        "en": "1/2 cup grated",
        "ta": "1/2 கப் துருவிய தேங்காய்"
      }
    },
    {
      "ingredientId": "mustard_seeds",
      "quantity": {
        "en": "1 tsp",
        "ta": "1 தேக்கரண்டி"
      }
    },
    {
      "ingredientId": "urad_dal",
      "quantity": {
        "en": "1 tsp",
        "ta": "1 தேக்கரண்டி உளுத்தம் பருப்பு"
      }
    },
    {
      "ingredientId": "dry_red_chilli",
      "quantity": {
        "en": "2",
        "ta": "2 காய்ந்த மிளகாய்"
      }
    }
  ],
  "steps": [
    {
      "stepNumber": 1,
      "en": "Prepare rice sevai/idiyappam, cool it down completely and separate the strands.",
      "ta": "இடியாப்பம் அல்லது சேவையை வேகவைத்து ஆறிய பின் உதிர்த்துத் தனியாக வைக்கவும்."
    },
    {
      "stepNumber": 2,
      "en": "Heat coconut oil, temper mustard, urad dal, peanuts, and dry red chillies.",
      "ta": "தேங்காய் எண்ணெயில் கடுகு, உளுந்து, கடலைப்பருப்பு, காய்ந்த மிளகாய் தாளிக்கவும்."
    },
    {
      "stepNumber": 3,
      "en": "Add grated coconut, saute for 1 min. Mix the sevai gently with salt.",
      "ta": "துருவிய தேங்காய் சேர்த்து 1 நிமிடம் வதக்கி, உதிர்த்த சேவையைச் சேர்த்து உப்புடன் லேசாகக் கிளறவும்."
    }
  ],
  "nutrition": {
    "calories": 340,
    "protein": "5g",
    "carbs": "54g",
    "fat": "10g"
  },
  "chefTips": [
    {
      "en": "Cooling the sevai strands completely prevents them from breaking during mixing.",
      "ta": "சேவை உதிர்க்கும் முன் நன்றாக ஆறினால் கிளறும்போது உடையாமல் நீளமாக இருக்கும்."
    }
  ],
  "storageLeftoverTips": {
    "en": "Tastes great when fresh. Do not store for long.",
    "ta": "செய்தவுடன் பரிமாறவும், நீண்ட நேரம் வைக்கக் கூடாது."
  }
},
  {
  "id": "lemon_sevai",
  "enName": "Lemon Sevai",
  "taName": "எலுமிச்சை சேவை",
  "prepTime": "10 mins",
  "cookingTime": "20 mins",
  "servings": 3,
  "difficulty": "medium",
  "ingredients": [
    {
      "ingredientId": "raw_rice",
      "quantity": {
        "en": "2 cups cooked sevai strands",
        "ta": "2 கப் வேகவைத்த சேவை"
      }
    },
    {
      "ingredientId": "mustard_seeds",
      "quantity": {
        "en": "1 tsp",
        "ta": "1 தேக்கரண்டி"
      }
    },
    {
      "ingredientId": "green_chilli",
      "quantity": {
        "en": "2 chopped",
        "ta": "2 பச்சை மிளகாய்"
      }
    },
    {
      "ingredientId": "turmeric_powder",
      "quantity": {
        "en": "1/2 tsp",
        "ta": "1/2 தேக்கரண்டி"
      }
    },
    {
      "ingredientId": "salt",
      "quantity": {
        "en": "to taste",
        "ta": "தேவையான அளவு"
      }
    }
  ],
  "steps": [
    {
      "stepNumber": 1,
      "en": "Steam sevai and spread on a plate to cool.",
      "ta": "சேவையை வேகவைத்து ஆறிய பின் உதிர்த்துப் தட்டில் பரப்பி வைக்கவும்."
    },
    {
      "stepNumber": 2,
      "en": "Saute mustard seeds, ginger, green chillies, curry leaves, and turmeric powder in oil.",
      "ta": "எண்ணெயில் கடுகு, கடலைப்பருப்பு, இஞ்சி, மிளகாய், மஞ்சள் தூள் தாளிக்கவும்."
    },
    {
      "stepNumber": 3,
      "en": "Turn off stove, add lemon juice, mix, then gently fold in cooled sevai and salt.",
      "ta": "அடுப்பை அணைத்து எலுமிச்சை சாறு சேர்க்கவும். உதிர்த்த சேவை, உப்புடன் சேர்த்து மெதுவாகக் கிளறவும்."
    }
  ],
  "nutrition": {
    "calories": 310,
    "protein": "5g",
    "carbs": "52g",
    "fat": "8g"
  },
  "chefTips": [
    {
      "en": "Drizzle a tsp of sesame oil on the sevai strands before tempering to keep them separate.",
      "ta": "சேவையை உதிர்த்த பிறகு லேசாக நல்லெண்ணெய் தெளித்தால் ஒன்றோடொன்று ஒட்டாது."
    }
  ],
  "storageLeftoverTips": {
    "en": "Keep in airtight container. Good option for light dinner.",
    "ta": "காற்றோட்டமில்லாத பாத்திரத்தில் வைக்கவும். எளிய இரவு உணவாக உண்ணலாம்."
  }
},
  {
  "id": "vegetable_kurma_parotta",
  "enName": "Veg Kurma with Parotta",
  "taName": "பரோட்டா காய்கறி குருமா",
  "prepTime": "20 mins",
  "cookingTime": "45 mins",
  "servings": 3,
  "difficulty": "hard",
  "ingredients": [
    {
      "ingredientId": "wheat_flour",
      "quantity": {
        "en": "2 cups wheat flour",
        "ta": "2 கப் கோதுமை மாவு"
      }
    },
    {
      "ingredientId": "carrot",
      "quantity": {
        "en": "1 chopped",
        "ta": "1 நறுக்கிய கேரட்"
      }
    },
    {
      "ingredientId": "potato",
      "quantity": {
        "en": "1 cubed",
        "ta": "1 நறுக்கிய உருளைக்கிழங்கு"
      }
    },
    {
      "ingredientId": "onion",
      "quantity": {
        "en": "1 chopped",
        "ta": "1 நறுக்கிய வெங்காயம்"
      }
    },
    {
      "ingredientId": "coconut",
      "quantity": {
        "en": "1/2 cup grated",
        "ta": "1/2 கப் துருவிய தேங்காய்"
      }
    },
    {
      "ingredientId": "ginger",
      "quantity": {
        "en": "1 tsp paste",
        "ta": "1 தேக்கரண்டி இஞ்சி பூண்டு விழுது"
      }
    }
  ],
  "steps": [
    {
      "stepNumber": 1,
      "en": "Knead flour into layered parotta dough, roll out thin, pleat, and cook on hot tawa with oil.",
      "ta": "மாவை நன்கு பிசைந்து வீசி, மடிப்புப் போட்டு பரோட்டாக்களாகச் சுட்டெடுக்கவும்."
    },
    {
      "stepNumber": 2,
      "en": "Grind coconut, fennel seeds, and poppy seeds with spices into a paste.",
      "ta": "தேங்காய், சோம்பு, முந்திரி சேர்த்து விழுதாக அரைக்கவும்."
    },
    {
      "stepNumber": 3,
      "en": "Saute onion, tomato, veggies, spices. Add water, coconut paste, and boil until veggies are tender.",
      "ta": "வெங்காயம், தக்காளி, காய்கறிகளை வதக்கி மசாலா மற்றும் தேங்காய் விழுது சேர்த்து காய்கறிகள் வேகும் வரை கொதிக்க வைக்கவும்."
    }
  ],
  "nutrition": {
    "calories": 510,
    "protein": "12g",
    "carbs": "64g",
    "fat": "18g"
  },
  "chefTips": [
    {
      "en": "Beat the cooked parottas from the sides while hot to release the layers.",
      "ta": "பரோட்டா சுட்டவுடன் சூடாக இருக்கும்போதே பக்கவாட்டில் தட்டினால் லேயர்கள் அழகாகப் பிரியும்."
    }
  ],
  "storageLeftoverTips": {
    "en": "Leftover kurma tastes great next morning with dosa.",
    "ta": "மீதமுள்ள குருமாவை மறுநாள் காலையில் தோசை அல்லது இட்லியுடன் சாப்பிடலாம்."
  }
},
  {
  "id": "chana_dal_roti",
  "enName": "Dal Fry with Chapati",
  "taName": "சப்பாத்தி பருப்பு கடைசல்",
  "prepTime": "15 mins",
  "cookingTime": "30 mins",
  "servings": 3,
  "difficulty": "easy",
  "ingredients": [
    {
      "ingredientId": "wheat_flour",
      "quantity": {
        "en": "2 cups",
        "ta": "2 கப்"
      }
    },
    {
      "ingredientId": "toor_dal",
      "quantity": {
        "en": "1 cup",
        "ta": "1 கப் துவரம்பருப்பு"
      }
    },
    {
      "ingredientId": "onion",
      "quantity": {
        "en": "1 chopped",
        "ta": "1 நறுக்கிய வெங்காயம்"
      }
    },
    {
      "ingredientId": "tomato",
      "quantity": {
        "en": "1 chopped",
        "ta": "1 நறுக்கிய தக்காளி"
      }
    },
    {
      "ingredientId": "mustard_seeds",
      "quantity": {
        "en": "1 tsp",
        "ta": "1 தேக்கரண்டி"
      }
    },
    {
      "ingredientId": "cumin_seeds",
      "quantity": {
        "en": "1 tsp",
        "ta": "1 தேக்கரண்டி"
      }
    }
  ],
  "steps": [
    {
      "stepNumber": 1,
      "en": "Prepare chapatis. Cook toor dal with turmeric and water in cooker.",
      "ta": "சப்பாத்திகளைத் தயார் செய்யவும். துவரம்பருப்பை மஞ்சள் தூள் சேர்த்து குக்கரில் வேகவைக்கவும்."
    },
    {
      "stepNumber": 2,
      "en": "Saute mustard seeds, cumin seeds, onions, green chillies, and tomatoes in ghee.",
      "ta": "நெய்யில் கடுகு, சீரகம், வெங்காயம், மிளகாய், தக்காளி வதக்கவும்."
    },
    {
      "stepNumber": 3,
      "en": "Pour cooked dal, add salt, and simmer for 5 mins. Garnish with coriander.",
      "ta": "வெந்த பருப்பை வதக்கிய மசாலாவில் கொட்டி உப்பு சேர்த்து 5 நிமிடங்கள் கொதிக்க விட்டு இறக்கவும்."
    }
  ],
  "nutrition": {
    "calories": 380,
    "protein": "12g",
    "carbs": "56g",
    "fat": "8g"
  },
  "chefTips": [
    {
      "en": "Add a pinch of Kasuri Methi (dried fenugreek leaves) at the end for restaurant-style flavor.",
      "ta": "இறுதியில் சிறிதளவு கஸ்தூரி மேதி தூவினால் ஹோட்டல் ஸ்டைல் மணம் கிடைக்கும்."
    }
  ],
  "storageLeftoverTips": {
    "en": "Warm chapatis are best. Store dal in a closed steel bowl in the fridge.",
    "ta": "பருப்பைக் குளிர்சாதனப் பெட்டியில் மூடி வைக்கவும்."
  }
},
  {
  "id": "mor_kuzhambu_sevai",
  "enName": "Mor Kuzhambu Sevai",
  "taName": "மோர் குழம்பு சேவை",
  "prepTime": "15 mins",
  "cookingTime": "30 mins",
  "servings": 3,
  "difficulty": "medium",
  "ingredients": [
    {
      "ingredientId": "raw_rice",
      "quantity": {
        "en": "2 cups cooked sevai strands",
        "ta": "2 கப் வேகவைத்த சேவை"
      }
    },
    {
      "ingredientId": "buttermilk",
      "quantity": {
        "en": "1.5 cups",
        "ta": "1.5 கப் மோர்"
      }
    },
    {
      "ingredientId": "coconut",
      "quantity": {
        "en": "1/2 cup grated",
        "ta": "1/2 கப் துருவிய தேங்காய்"
      }
    },
    {
      "ingredientId": "cumin_seeds",
      "quantity": {
        "en": "1 tsp",
        "ta": "1 தேக்கரண்டி சீரகம்"
      }
    },
    {
      "ingredientId": "ginger",
      "quantity": {
        "en": "1 tsp",
        "ta": "1 தேக்கரண்டி இஞ்சி"
      }
    }
  ],
  "steps": [
    {
      "stepNumber": 1,
      "en": "Steam rice sevai strands and set aside. Blend coconut, ginger, and green chillies into paste.",
      "ta": "சேவையை வேகவைத்து உதிர்த்து வைக்கவும். தேங்காய், இஞ்சி, மிளகாய் அரைத்துக் கொள்ளவும்."
    },
    {
      "stepNumber": 2,
      "en": "Mix buttermilk, coconut paste, turmeric, and salt. Heat and turn off just when it froths up.",
      "ta": "மோருடன் தேங்காய் விழுது, மஞ்சள் தூள், உப்பு சேர்த்து லேசாக நுரைக்கும் வரை சூடாக்கி இறக்கவும் (கொதிக்கவிடக் கூடாது)."
    },
    {
      "stepNumber": 3,
      "en": "Pour the hot mor kuzhambu over cooled sevai. Temper with mustard and curry leaves.",
      "ta": "மோர் குழம்பை சேவையின் மீது ஊற்றி மெதுவாகக் கிளறவும். கடுகு, கருவேப்பிலை தாளிக்கவும்."
    }
  ],
  "nutrition": {
    "calories": 350,
    "protein": "7g",
    "carbs": "56g",
    "fat": "10g"
  },
  "chefTips": [
    {
      "en": "Ensure sevai strands are fully cool before combining, otherwise the dish can turn sticky.",
      "ta": "சேவை நன்கு ஆறிய பின் மோர் குழம்பில் சேர்த்தால் ஒட்டாமல் தனித்தனியாக இருக்கும்."
    }
  ],
  "storageLeftoverTips": {
    "en": "Serve cool or warm. Consume within 6 hours.",
    "ta": "செய்த சில மணிநேரத்திற்குள் சாப்பிட்டு விடவும், நீண்ட நேரம் வைக்கக் கூடாது."
  }
},
  {
  "id": "egg_bhurji_chapati",
  "enName": "Egg Bhurji with Chapati",
  "taName": "சப்பாத்தி முட்டை பொரியல்",
  "prepTime": "10 mins",
  "cookingTime": "20 mins",
  "servings": 2,
  "difficulty": "easy",
  "ingredients": [
    {
      "ingredientId": "wheat_flour",
      "quantity": {
        "en": "1.5 cups",
        "ta": "1.5 கப்"
      }
    },
    {
      "ingredientId": "onion",
      "quantity": {
        "en": "1 finely chopped",
        "ta": "1 பொடியாக நறுக்கிய வெங்காயம்"
      }
    },
    {
      "ingredientId": "tomato",
      "quantity": {
        "en": "1 chopped",
        "ta": "1 நறுக்கிய தக்காளி"
      }
    },
    {
      "ingredientId": "green_chilli",
      "quantity": {
        "en": "2 chopped",
        "ta": "2 நறுக்கிய பச்சை மிளகாய்"
      }
    },
    {
      "ingredientId": "turmeric_powder",
      "quantity": {
        "en": "1/4 tsp",
        "ta": "1/4 தேக்கரண்டி"
      }
    },
    {
      "ingredientId": "cooking_oil",
      "quantity": {
        "en": "1.5 tbsp",
        "ta": "1.5 மேஜைக்கரண்டி"
      }
    }
  ],
  "steps": [
    {
      "stepNumber": 1,
      "en": "Prepare chapatis. Heat oil, saute onions, green chillies, and ginger garlic paste.",
      "ta": "சப்பாத்திகளைத் தயார் செய்யவும். எண்ணெயில் வெங்காயம், மிளகாய், இஞ்சி பூண்டு வதக்கவும்."
    },
    {
      "stepNumber": 2,
      "en": "Add tomatoes and cook until soft. Whisk eggs with salt and pour into the pan.",
      "ta": "தக்காளி சேர்த்து வதக்கி, முட்டைகளை உப்பு சேர்த்து அடித்துக் கடாயில் ஊற்றவும்."
    },
    {
      "stepNumber": 3,
      "en": "Scramble the eggs on low heat until dry and fluffy. Serve wrapped inside chapatis.",
      "ta": "முட்டை நன்கு வெந்து உதிரியாக வரும் வரை கிளறி, சப்பாத்தியுடன் பரிமாறவும்."
    }
  ],
  "nutrition": {
    "calories": 410,
    "protein": "16g",
    "carbs": "52g",
    "fat": "12g"
  },
  "chefTips": [
    {
      "en": "Add a sprinkle of pepper powder and fresh coriander at the end for spice and aroma.",
      "ta": "இறுதியில் மிளகுத்தூள் மற்றும் கொத்தமல்லித்தழை தூவினால் முட்டை பொரியல் சுவையாக இருக்கும்."
    }
  ],
  "storageLeftoverTips": {
    "en": "Highly popular roll/wrap. Consume immediately for soft texture.",
    "ta": "ரோலாகச் செய்து கொடுத்தால் குழந்தைகள் விரும்பி உண்பார்கள். உடனே சாப்பிடவும்."
  }
},
  {
  "id": "black_pepper_chicken_roti",
  "enName": "Pepper Chicken with Chapati",
  "taName": "சப்பாத்தி மிளகு சிக்கன்",
  "prepTime": "15 mins",
  "cookingTime": "35 mins",
  "servings": 3,
  "difficulty": "medium",
  "ingredients": [
    {
      "ingredientId": "wheat_flour",
      "quantity": {
        "en": "2 cups",
        "ta": "2 கப்"
      }
    },
    {
      "ingredientId": "onion",
      "quantity": {
        "en": "1 sliced",
        "ta": "1 நறுக்கிய வெங்காயம்"
      }
    },
    {
      "ingredientId": "black_pepper",
      "quantity": {
        "en": "2 tsp freshly crushed",
        "ta": "2 தேக்கரண்டி நசுக்கிய மிளகு"
      }
    },
    {
      "ingredientId": "ginger",
      "quantity": {
        "en": "1 tsp paste",
        "ta": "1 தேக்கரண்டி இஞ்சி பூண்டு விழுது"
      }
    },
    {
      "ingredientId": "garlic",
      "quantity": {
        "en": "1 tsp chopped",
        "ta": "1 தேக்கரண்டி நறுக்கிய பூண்டு"
      }
    },
    {
      "ingredientId": "curry_leaves",
      "quantity": {
        "en": "2 sprigs",
        "ta": "2 இணுக்கு கறிவேப்பிலை"
      }
    }
  ],
  "steps": [
    {
      "stepNumber": 1,
      "en": "Knead and roll out chapatis. Saute onions, curry leaves, and ginger-garlic paste in hot oil.",
      "ta": "சப்பாத்திகளைத் திரட்டிச் சுடவும். கடாயில் வெங்காயம், கறிவேப்பிலை, இஞ்சி பூண்டு வதக்கவும்."
    },
    {
      "stepNumber": 2,
      "en": "Add chicken pieces, turmeric, salt, and cook covered on medium heat until chicken is tender.",
      "ta": "சிக்கன் துண்டுகள், மஞ்சள் தூள், உப்பு சேர்த்து மூடி வைத்து வேகவிடவும்."
    },
    {
      "stepNumber": 3,
      "en": "Add freshly crushed black pepper and roast on high heat for 3-5 mins until dry. Serve with roti.",
      "ta": "நசுக்கிய மிளகுத்தூள் சேர்த்து சிக்கனை 3-5 நிமிடங்கள் வதக்கி சப்பாத்தியுடன் பரிமாறவும்."
    }
  ],
  "nutrition": {
    "calories": 470,
    "protein": "24g",
    "carbs": "56g",
    "fat": "14g"
  },
  "chefTips": [
    {
      "en": "Freshly crushed pepper gives far better heat and flavor than store-bought ready pepper powder.",
      "ta": "கடையில் வாங்கும் மிளகுத்தூளை விட வீட்டில் அப்போதே நசுக்கிய மிளகு அதிக காரமும் வாசனையும் தரும்."
    }
  ],
  "storageLeftoverTips": {
    "en": "Refrigerate. Reheat on tawa with a drop of oil.",
    "ta": "மீதமிருப்பதை பிரிட்ஜில் வைக்கலாம். சாப்பிடும் முன் தோசைக்கல்லில் லேசாக வதக்கி சூடாக்கவும்."
  }
},
  {
  "id": "jeera_rice_dal",
  "enName": "Jeera Rice with Dal Fry",
  "taName": "சீரக சாதம் பருப்பு கடைசல்",
  "prepTime": "15 mins",
  "cookingTime": "30 mins",
  "servings": 3,
  "difficulty": "easy",
  "ingredients": [
    {
      "ingredientId": "basmati_rice",
      "quantity": {
        "en": "1.5 cups",
        "ta": "1.5 கப் பாசுமதி அரிசி"
      }
    },
    {
      "ingredientId": "toor_dal",
      "quantity": {
        "en": "1/2 cup",
        "ta": "1/2 கப் துவரம்பருப்பு"
      }
    },
    {
      "ingredientId": "cumin_seeds",
      "quantity": {
        "en": "1 tbsp",
        "ta": "1 மேஜைக்கரண்டி சீரகம்"
      }
    },
    {
      "ingredientId": "ghee",
      "quantity": {
        "en": "2 tbsp",
        "ta": "2 மேஜைக்கரண்டி நெய்"
      }
    },
    {
      "ingredientId": "onion",
      "quantity": {
        "en": "1 chopped",
        "ta": "1 நறுக்கிய வெங்காயம்"
      }
    },
    {
      "ingredientId": "tomato",
      "quantity": {
        "en": "1 chopped",
        "ta": "1 நறுக்கிய தக்காளி"
      }
    }
  ],
  "steps": [
    {
      "stepNumber": 1,
      "en": "Soak Basmati rice. Heat ghee, saute cumin seeds until they crackle, fold in rice, water, and salt. Cook.",
      "ta": "பாசுமதி அரிசியை ஊறவைக்கவும். நெய்யில் சீரகம் தாளித்து அரிசி, தண்ணீர், உப்பு சேர்த்து உதிரியாகச் சமைக்கவும்."
    },
    {
      "stepNumber": 2,
      "en": "Boil toor dal with turmeric. Saute onions, tomatoes, and garlic in ghee.",
      "ta": "துவரம்பருப்பை வேகவைக்கவும். நெய்யில் வெங்காயம், தக்காளி, பூண்டு வதக்கி வேகவைத்த பருப்பை ஊற்றவும்."
    },
    {
      "stepNumber": 3,
      "en": "Mix dal fry, garnish with coriander. Serve hot alongside jeera rice.",
      "ta": "பருப்பு கடைசலில் கொத்தமல்லி தூவி, சீரக சாதத்துடன் சூடாகப் பரிமாறவும்."
    }
  ],
  "nutrition": {
    "calories": 430,
    "protein": "11g",
    "carbs": "70g",
    "fat": "10g"
  },
  "chefTips": [
    {
      "en": "Sauté the soaked Basmati rice in ghee for a minute before adding water to prevent stickiness.",
      "ta": "அரிசி ஒட்டாமல் இருக்க தண்ணீர் ஊற்றும் முன் நெய்யில் ஒரு நிமிடம் வதக்கவும்."
    }
  ],
  "storageLeftoverTips": {
    "en": "Jeera rice retains its flavor well. Store dal and rice in separate containers.",
    "ta": "சீரக சாதம் மற்றும் பருப்பைத் தனித்தனி பாத்திரங்களில் அடைத்துச் சேமிக்கவும்."
  }
},];

// Combine appam ID handlings safely
const appamRecipe = recipes.find(r => r.id === 'appam_தேங்காமில்க்');
if (appamRecipe) {
  // ensure it maps correctly to both meals
  recipes.push({
    ...appamRecipe,
    id: 'appam_தேங்காய்பால்'
  });
}
