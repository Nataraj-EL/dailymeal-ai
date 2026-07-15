export interface Meal {
  id: string;
  en: string;
  ta: string;
  mealTypes: ('breakfast' | 'lunch' | 'dinner')[];
  diet: 'veg' | 'non-veg';
  cookingTime: '15m' | '30m' | '60m';
  requiredIngredientIds: string[];
}

export const meals: Meal[] = [
  // BREAKFAST DISHES (15)
  {
    id: 'idli_sambar',
    en: 'Idli with Sambar',
    ta: 'சாம்பார் இட்லி',
    mealTypes: ['breakfast'],
    diet: 'veg',
    cookingTime: '30m',
    requiredIngredientIds: ['raw_rice', 'urad_dal', 'tomato', 'mustard_seeds', 'sambar_powder', 'salt']
  },
  {
    id: 'plain_dosa',
    en: 'Plain Dosa with Coconut Chutney',
    ta: 'தேங்காய் சட்னியுடன் கூடிய தோசை',
    mealTypes: ['breakfast', 'dinner'],
    diet: 'veg',
    cookingTime: '15m',
    requiredIngredientIds: ['raw_rice', 'urad_dal', 'coconut', 'mustard_seeds', 'green_chilli', 'salt']
  },
  {
    id: 'rava_upma',
    en: 'Rava Upma',
    ta: 'ரவை உப்புமா',
    mealTypes: ['breakfast'],
    diet: 'veg',
    cookingTime: '15m',
    requiredIngredientIds: ['rava', 'onion', 'green_chilli', 'mustard_seeds', 'ginger', 'curry_leaves', 'cooking_oil', 'salt']
  },
  {
    id: 'tomato_upma',
    en: 'Tomato Bath / Tomato Upma',
    ta: 'தக்காளி பாத் / தக்காளி உப்புமா',
    mealTypes: ['breakfast'],
    diet: 'veg',
    cookingTime: '30m',
    requiredIngredientIds: ['rava', 'tomato', 'onion', 'green_chilli', 'mustard_seeds', 'turmeric_powder', 'salt', 'cooking_oil']
  },
  {
    id: 'ven_pongal',
    en: 'Ven Pongal',
    ta: 'வெண் பொங்கல்',
    mealTypes: ['breakfast'],
    diet: 'veg',
    cookingTime: '30m',
    requiredIngredientIds: ['raw_rice', 'moong_dal', 'cumin_seeds', 'black_pepper', 'ghee', 'ginger', 'salt']
  },
  {
    id: 'semiya_upma',
    en: 'Semiya Upma',
    ta: 'சேமியா உப்புமா',
    mealTypes: ['breakfast'],
    diet: 'veg',
    cookingTime: '15m',
    requiredIngredientIds: ['vermicelli', 'onion', 'mustard_seeds', 'green_chilli', 'curry_leaves', 'salt', 'cooking_oil']
  },
  {
    id: 'ragi_roti',
    en: 'Ragi Roti',
    ta: 'ராகி ரொட்டி',
    mealTypes: ['breakfast', 'dinner'],
    diet: 'veg',
    cookingTime: '30m',
    requiredIngredientIds: ['ragi', 'onion', 'green_chilli', 'curry_leaves', 'salt', 'cooking_oil']
  },
  {
    id: 'wheat_dosa',
    en: 'Instant Wheat Dosa',
    ta: 'கோதுமை தோசை',
    mealTypes: ['breakfast', 'dinner'],
    diet: 'veg',
    cookingTime: '15m',
    requiredIngredientIds: ['wheat_flour', 'cumin_seeds', 'green_chilli', 'ginger', 'salt']
  },
  {
    id: 'poori_masala',
    en: 'Poori with Potato Masala',
    ta: 'பூரி உருளைக்கிழங்கு மசாலா',
    mealTypes: ['breakfast', 'dinner'],
    diet: 'veg',
    cookingTime: '60m',
    requiredIngredientIds: ['wheat_flour', 'potato', 'onion', 'green_chilli', 'turmeric_powder', 'mustard_seeds', 'ginger', 'salt', 'cooking_oil']
  },
  {
    id: 'rava_dosa',
    en: 'Rava Dosa',
    ta: 'ரவா தோசை',
    mealTypes: ['breakfast', 'dinner'],
    diet: 'veg',
    cookingTime: '30m',
    requiredIngredientIds: ['rava', 'raw_rice', 'cumin_seeds', 'black_pepper', 'green_chilli', 'ginger', 'salt', 'cooking_oil']
  },
  {
    id: 'chappathi_kurma',
    en: 'Chapati with Veg Kurma',
    ta: 'சப்பாத்தி வெஜிடபிள் குருமா',
    mealTypes: ['breakfast', 'dinner'],
    diet: 'veg',
    cookingTime: '60m',
    requiredIngredientIds: ['wheat_flour', 'potato', 'carrot', 'onion', 'coconut', 'ginger', 'garlic', 'salt']
  },
  {
    id: 'appam_തേങ്ങാപাল',
    en: 'Appam with Sweet Coconut Milk',
    ta: 'ஆப்பம் தேங்காய்ப்பால்',
    mealTypes: ['breakfast', 'dinner'],
    diet: 'veg',
    cookingTime: '30m',
    requiredIngredientIds: ['raw_rice', 'coconut', 'milk', 'salt']
  },
  {
    id: 'rava_kitchadi',
    en: 'Rava Kitchadi',
    ta: 'ரவா கிச்சடி',
    mealTypes: ['breakfast'],
    diet: 'veg',
    cookingTime: '30m',
    requiredIngredientIds: ['rava', 'carrot', 'onion', 'green_chilli', 'mustard_seeds', 'turmeric_powder', 'ghee', 'salt']
  },
  {
    id: 'poha',
    en: 'Aval Upma / Poha',
    ta: 'அவல் உப்புமா',
    mealTypes: ['breakfast'],
    diet: 'veg',
    cookingTime: '15m',
    requiredIngredientIds: ['onion', 'green_chilli', 'mustard_seeds', 'peanuts', 'turmeric_powder', 'salt', 'cooking_oil']
  },
  {
    id: 'ragi_koozh',
    en: 'Ragi Koozh / Porridge',
    ta: 'ராகி கூழ்',
    mealTypes: ['breakfast'],
    diet: 'veg',
    cookingTime: '30m',
    requiredIngredientIds: ['ragi', 'buttermilk', 'onion', 'salt']
  },

  // LUNCH DISHES (15)
  {
    id: 'sambar_sadham',
    en: 'Sambar Sadham / Sambar Rice',
    ta: 'சாம்பார் சாதம்',
    mealTypes: ['lunch'],
    diet: 'veg',
    cookingTime: '60m',
    requiredIngredientIds: ['boiled_rice', 'toor_dal', 'carrot', 'drumstick', 'tomato', 'sambar_powder', 'tamarind', 'mustard_seeds', 'ghee', 'salt']
  },
  {
    id: 'rasam_sadham',
    en: 'Rasam Sadham / Rasam Rice',
    ta: 'ரசம் சாதம்',
    mealTypes: ['lunch'],
    diet: 'veg',
    cookingTime: '30m',
    requiredIngredientIds: ['boiled_rice', 'tomato', 'tamarind', 'cumin_seeds', 'black_pepper', 'mustard_seeds', 'garlic', 'salt']
  },
  {
    id: 'curd_rice',
    en: 'Curd Rice',
    ta: 'தயிர் சாதம்',
    mealTypes: ['lunch', 'dinner'],
    diet: 'veg',
    cookingTime: '15m',
    requiredIngredientIds: ['boiled_rice', 'curd', 'milk', 'ginger', 'green_chilli', 'mustard_seeds', 'curry_leaves', 'salt']
  },
  {
    id: 'lemon_rice',
    en: 'Lemon Rice',
    ta: 'எலுமிச்சை சாதம்',
    mealTypes: ['lunch'],
    diet: 'veg',
    cookingTime: '15m',
    requiredIngredientIds: ['boiled_rice', 'mustard_seeds', 'chana_dal', 'peanuts', 'turmeric_powder', 'green_chilli', 'cooking_oil', 'salt']
  },
  {
    id: 'coconut_rice',
    en: 'Coconut Rice',
    ta: 'தேங்காய் சாதம்',
    mealTypes: ['lunch'],
    diet: 'veg',
    cookingTime: '15m',
    requiredIngredientIds: ['boiled_rice', 'coconut', 'mustard_seeds', 'urad_dal', 'dry_red_chilli', 'curry_leaves', 'cooking_oil', 'salt']
  },
  {
    id: 'egg_curry_sadham',
    en: 'Egg Curry with Boiled Rice',
    ta: 'முட்டை குழம்பு சாதம்',
    mealTypes: ['lunch', 'dinner'],
    diet: 'non-veg',
    cookingTime: '30m',
    requiredIngredientIds: ['boiled_rice', 'butter', 'onion', 'tomato', 'ginger', 'garlic', 'cumin_seeds', 'cooking_oil', 'salt'] // Eggs assumed from dairy/pantry
  },
  {
    id: 'chicken_curry_sadham',
    en: 'Chicken Curry with Rice',
    ta: 'சிக்கன் குழம்பு சாதம்',
    mealTypes: ['lunch', 'dinner'],
    diet: 'non-veg',
    cookingTime: '60m',
    requiredIngredientIds: ['boiled_rice', 'onion', 'tomato', 'ginger', 'garlic', 'cumin_seeds', 'black_pepper', 'cooking_oil', 'salt'] // Chicken assumed
  },
  {
    id: 'drumstick_kuzhambu_sadham',
    en: 'Drumstick Kuzhambu with Rice',
    ta: 'முருங்கைக்காய் குழம்பு சாதம்',
    mealTypes: ['lunch'],
    diet: 'veg',
    cookingTime: '30m',
    requiredIngredientIds: ['boiled_rice', 'drumstick', 'onion', 'tomato', 'tamarind', 'sambar_powder', 'mustard_seeds', 'cooking_oil', 'salt']
  },
  {
    id: 'brinjal_kara_kuzhambu',
    en: 'Brinjal Kara Kuzhambu with Rice',
    ta: 'கத்தரிக்காய் காரக்குழம்பு சாதம்',
    mealTypes: ['lunch', 'dinner'],
    diet: 'veg',
    cookingTime: '60m',
    requiredIngredientIds: ['boiled_rice', 'brinjal', 'onion', 'tomato', 'garlic', 'tamarind', 'sambar_powder', 'mustard_seeds', 'cooking_oil', 'salt']
  },
  {
    id: 'mor_kuzhambu_sadham',
    en: 'Ash Gourd Mor Kuzhambu with Rice',
    ta: 'சாம்பல் பூசணி மோர் குழம்பு சாதம்',
    mealTypes: ['lunch'],
    diet: 'veg',
    cookingTime: '30m',
    requiredIngredientIds: ['boiled_rice', 'bottle_gourd', 'buttermilk', 'coconut', 'cumin_seeds', 'mustard_seeds', 'ginger', 'green_chilli', 'salt']
  },
  {
    id: 'vegetable_biryani',
    en: 'Vegetable Biryani',
    ta: 'வெஜிடபிள் பிரியாணி',
    mealTypes: ['lunch', 'dinner'],
    diet: 'veg',
    cookingTime: '60m',
    requiredIngredientIds: ['basmati_rice', 'potato', 'carrot', 'onion', 'ginger', 'garlic', 'ghee', 'cooking_oil', 'salt']
  },
  {
    id: 'tomato_pappu_sadham',
    en: 'Tomato Pappu (Dal) with Rice',
    ta: 'தக்காளி பருப்பு சாதம்',
    mealTypes: ['lunch'],
    diet: 'veg',
    cookingTime: '30m',
    requiredIngredientIds: ['boiled_rice', 'toor_dal', 'tomato', 'onion', 'green_chilli', 'mustard_seeds', 'cumin_seeds', 'turmeric_powder', 'salt']
  },
  {
    id: 'puliyodharai',
    en: 'Puliyodharai / Tamarind Rice',
    ta: 'புளியோதரை / புளி சாதம்',
    mealTypes: ['lunch'],
    diet: 'veg',
    cookingTime: '30m',
    requiredIngredientIds: ['boiled_rice', 'tamarind', 'mustard_seeds', 'peanuts', 'chana_dal', 'turmeric_powder', 'dry_red_chilli', 'salt', 'cooking_oil']
  },
  {
    id: 'chana_masala_chapati',
    en: 'Chana Masala with Chapati',
    ta: 'கொண்டைக்கடலை மசாலா மற்றும் சப்பாத்தி',
    mealTypes: ['lunch', 'dinner'],
    diet: 'veg',
    cookingTime: '60m',
    requiredIngredientIds: ['wheat_flour', 'chickpeas', 'onion', 'tomato', 'ginger', 'garlic', 'turmeric_powder', 'cooking_oil', 'salt']
  },
  {
    id: 'kootu_sadham',
    en: 'Carrot Beans Kootu with Rice',
    ta: 'கூட்டு சாதம்',
    mealTypes: ['lunch'],
    diet: 'veg',
    cookingTime: '30m',
    requiredIngredientIds: ['boiled_rice', 'carrot', 'moong_dal', 'coconut', 'cumin_seeds', 'mustard_seeds', 'turmeric_powder', 'salt']
  },

  // DINNER DISHES (15)
  {
    id: 'wheat_upma',
    en: 'Wheat Rava Upma',
    ta: 'கோதுமை ரவை உப்புமா',
    mealTypes: ['dinner'],
    diet: 'veg',
    cookingTime: '30m',
    requiredIngredientIds: ['wheat_flour', 'onion', 'green_chilli', 'mustard_seeds', 'ginger', 'curry_leaves', 'cooking_oil', 'salt']
  },
  {
    id: 'paneer_butter_chapati',
    en: 'Paneer Butter Masala with Chapati',
    ta: 'பனீர் பட்டர் மசாலா மற்றும் சப்பாத்தி',
    mealTypes: ['dinner'],
    diet: 'veg',
    cookingTime: '30m',
    requiredIngredientIds: ['wheat_flour', 'paneer', 'butter', 'onion', 'tomato', 'ginger', 'garlic', 'salt']
  },
  {
    id: 'tomato_roti',
    en: 'Tomato Kurma with Chapati',
    ta: 'தக்காளி குருமா மற்றும் சப்பாத்தி',
    mealTypes: ['dinner'],
    diet: 'veg',
    cookingTime: '30m',
    requiredIngredientIds: ['wheat_flour', 'tomato', 'onion', 'coconut', 'cumin_seeds', 'ginger', 'garlic', 'salt', 'cooking_oil']
  },
  {
    id: 'dal_khichdi',
    en: 'Moong Dal Khichdi',
    ta: 'பாசிப்பருப்பு கிச்சடி',
    mealTypes: ['dinner', 'breakfast'],
    diet: 'veg',
    cookingTime: '30m',
    requiredIngredientIds: ['raw_rice', 'moong_dal', 'turmeric_powder', 'cumin_seeds', 'ginger', 'ghee', 'salt']
  },
  {
    id: 'potato_fry_chapati',
    en: 'Potato Poriyal with Chapati',
    ta: 'உருளைக்கிழங்கு பொறியல் மற்றும் சப்பாத்தி',
    mealTypes: ['dinner'],
    diet: 'veg',
    cookingTime: '30m',
    requiredIngredientIds: ['wheat_flour', 'potato', 'onion', 'mustard_seeds', 'turmeric_powder', 'cooking_oil', 'salt']
  },
  {
    id: 'cabbage_upma',
    en: 'Cabbage Semiya Upma',
    ta: 'முட்டைக்கோஸ் சேமியா உப்புமா',
    mealTypes: ['dinner'],
    diet: 'veg',
    cookingTime: '30m',
    requiredIngredientIds: ['vermicelli', 'cabbage', 'onion', 'mustard_seeds', 'green_chilli', 'curry_leaves', 'salt', 'cooking_oil']
  },
  {
    id: 'ragi_puttu',
    en: 'Ragi Puttu',
    ta: 'ராகி புட்டு',
    mealTypes: ['dinner', 'breakfast'],
    diet: 'veg',
    cookingTime: '30m',
    requiredIngredientIds: ['ragi', 'coconut', 'salt']
  },
  {
    id: 'coconut_sevai',
    en: 'Coconut Sevai',
    ta: 'தேங்காய் சேவை',
    mealTypes: ['dinner'],
    diet: 'veg',
    cookingTime: '30m',
    requiredIngredientIds: ['raw_rice', 'coconut', 'mustard_seeds', 'urad_dal', 'dry_red_chilli', 'cooking_oil', 'salt']
  },
  {
    id: 'lemon_sevai',
    en: 'Lemon Sevai',
    ta: 'எலுமிச்சை சேவை',
    mealTypes: ['dinner'],
    diet: 'veg',
    cookingTime: '30m',
    requiredIngredientIds: ['raw_rice', 'mustard_seeds', 'green_chilli', 'turmeric_powder', 'cooking_oil', 'salt']
  },
  {
    id: 'vegetable_kurma_parotta',
    en: 'Veg Kurma with Parotta',
    ta: 'வெஜிடபிள் குருமா மற்றும் பரோட்டா',
    mealTypes: ['dinner'],
    diet: 'veg',
    cookingTime: '60m',
    requiredIngredientIds: ['wheat_flour', 'carrot', 'potato', 'onion', 'coconut', 'ginger', 'garlic', 'cooking_oil', 'salt'] // Parotta assumed wheat
  },
  {
    id: 'chana_dal_roti',
    en: 'Dal Fry with Chapati',
    ta: 'பருப்பு கடைசல் மற்றும் சப்பாத்தி',
    mealTypes: ['dinner'],
    diet: 'veg',
    cookingTime: '30m',
    requiredIngredientIds: ['wheat_flour', 'toor_dal', 'onion', 'tomato', 'mustard_seeds', 'cumin_seeds', 'cooking_oil', 'salt']
  },
  {
    id: 'mor_kuzhambu_sevai',
    en: 'Mor Kuzhambu Sevai',
    ta: 'மோர் குழம்பு சேவை',
    mealTypes: ['dinner'],
    diet: 'veg',
    cookingTime: '30m',
    requiredIngredientIds: ['raw_rice', 'buttermilk', 'coconut', 'cumin_seeds', 'ginger', 'green_chilli', 'salt']
  },
  {
    id: 'egg_bhurji_chapati',
    en: 'Egg Bhurji with Chapati',
    ta: 'முட்டை பொரியல் மற்றும் சப்பாத்தி',
    mealTypes: ['dinner'],
    diet: 'non-veg',
    cookingTime: '30m',
    requiredIngredientIds: ['wheat_flour', 'onion', 'tomato', 'green_chilli', 'turmeric_powder', 'cooking_oil', 'salt'] // Eggs assumed
  },
  {
    id: 'black_pepper_chicken_roti',
    en: 'Pepper Chicken with Chapati',
    ta: 'மிளகு சிக்கன் மற்றும் சப்பாத்தி',
    mealTypes: ['dinner'],
    diet: 'non-veg',
    cookingTime: '60m',
    requiredIngredientIds: ['wheat_flour', 'onion', 'black_pepper', 'ginger', 'garlic', 'curry_leaves', 'cooking_oil', 'salt'] // Chicken assumed
  },
  {
    id: 'jeera_rice_dal',
    en: 'Jeera Rice with Dal Fry',
    ta: 'சீரக சாதம் மற்றும் பருப்பு கடைசல்',
    mealTypes: ['dinner'],
    diet: 'veg',
    cookingTime: '30m',
    requiredIngredientIds: ['basmati_rice', 'toor_dal', 'cumin_seeds', 'ghee', 'onion', 'tomato', 'salt']
  }
];
