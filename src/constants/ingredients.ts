export interface Ingredient {
  id: string;
  en: string;
  ta: string;
  category: 'vegetables' | 'grains' | 'dairy' | 'protein' | 'spices_pantry';
  emoji: string;
  available: boolean;
}

export const ingredients: Ingredient[] = [
  // Vegetables (16)
  { id: 'tomato', en: 'Tomato', ta: 'தக்காளி', category: 'vegetables', emoji: '🍅', available: true },
  { id: 'onion', en: 'Onion', ta: 'வெங்காயம்', category: 'vegetables', emoji: '🧅', available: true },
  { id: 'potato', en: 'Potato', ta: 'உருளைக்கிழங்கு', category: 'vegetables', emoji: '🥔', available: true },
  { id: 'carrot', en: 'Carrot', ta: 'கேரட்', category: 'vegetables', emoji: '🥕', available: true },
  { id: 'drumstick', en: 'Drumstick', ta: 'முருங்கைக்காய்', category: 'vegetables', emoji: '🌿', available: true },
  { id: 'brinjal', en: 'Brinjal (Eggplant)', ta: 'கத்தரிக்காய்', category: 'vegetables', emoji: '🍆', available: true },
  { id: 'okra', en: 'Okra / Lady Finger', ta: 'வெண்டைக்காய்', category: 'vegetables', emoji: '🥬', available: true },
  { id: 'cabbage', en: 'Cabbage', ta: 'முட்டைக்கோஸ்', category: 'vegetables', emoji: '🥬', available: true },
  { id: 'curry_leaves', en: 'Curry Leaves', ta: 'கறிவேப்பிலை', category: 'vegetables', emoji: '🍃', available: true },
  { id: 'coriander_leaves', en: 'Coriander Leaves', ta: 'கொத்தமல்லி தழை', category: 'vegetables', emoji: '🌿', available: true },
  { id: 'green_chilli', en: 'Green Chilli', ta: 'பச்சை மிளகாய்', category: 'vegetables', emoji: '🌶️', available: true },
  { id: 'ginger', en: 'Ginger', ta: 'இஞ்சி', category: 'vegetables', emoji: '🫚', available: true },
  { id: 'garlic', en: 'Garlic', ta: 'பூண்டு', category: 'vegetables', emoji: '🧄', available: true },
  { id: 'bottle_gourd', en: 'Bottle Gourd', ta: 'சுரைக்காய்', category: 'vegetables', emoji: '🥒', available: true },
  { id: 'bitter_gourd', en: 'Bitter Gourd', ta: 'பாகற்காய்', category: 'vegetables', emoji: '🥒', available: true },
  { id: 'pumpkin', en: 'Pumpkin', ta: 'பரங்கிக்காய்', category: 'vegetables', emoji: '🎃', available: true },

  // Grains (7)
  { id: 'raw_rice', en: 'Raw Rice', ta: 'பச்சரிசி', category: 'grains', emoji: '🍚', available: true },
  { id: 'boiled_rice', en: 'Boiled Rice', ta: 'புழுங்கலரிசி', category: 'grains', emoji: '🍚', available: true },
  { id: 'basmati_rice', en: 'Basmati Rice', ta: 'பாசுமதி அரிசி', category: 'grains', emoji: '🌾', available: true },
  { id: 'wheat_flour', en: 'Wheat Flour / Atta', ta: 'கோதுமை மாவு', category: 'grains', emoji: '🌾', available: true },
  { id: 'ragi', en: 'Ragi (Finger Millet)', ta: 'ராகி (கேழ்வரகு)', category: 'grains', emoji: '🌾', available: true },
  { id: 'rava', en: 'Rava / Semolina', ta: 'ரவை', category: 'grains', emoji: '🌾', available: true },
  { id: 'vermicelli', en: 'Vermicelli', ta: 'சேமியா', category: 'grains', emoji: '🍝', available: true },

  // Dairy (6)
  { id: 'milk', en: 'Milk', ta: 'பால்', category: 'dairy', emoji: '🥛', available: true },
  { id: 'curd', en: 'Curd', ta: 'தயிர்', category: 'dairy', emoji: '🥛', available: true },
  { id: 'ghee', en: 'Ghee', ta: 'நெய்', category: 'dairy', emoji: '🧈', available: true },
  { id: 'butter', en: 'Butter', ta: 'வெண்ணெய்', category: 'dairy', emoji: '🧈', available: true },
  { id: 'paneer', en: 'Paneer', ta: 'பனீர்', category: 'dairy', emoji: '🧀', available: true },
  { id: 'buttermilk', en: 'Buttermilk', ta: 'மோர்', category: 'dairy', emoji: '🥛', available: true },

  // Protein & Lentils (8)
  { id: 'toor_dal', en: 'Toor Dal', ta: 'துவரம் பருப்பு', category: 'protein', emoji: '🫘', available: true },
  { id: 'chana_dal', en: 'Chana Dal', ta: 'கடலைப் பருப்பு', category: 'protein', emoji: '🫘', available: true },
  { id: 'urad_dal', en: 'Urad Dal', ta: 'உளுத்தம் பருப்பு', category: 'protein', emoji: '🫘', available: true },
  { id: 'moong_dal', en: 'Moong Dal', ta: 'பாசிப் பருப்பு', category: 'protein', emoji: '🫘', available: true },
  { id: 'green_gram', en: 'Green Gram (Whole Moong)', ta: 'பச்சை பயறு', category: 'protein', emoji: '🫘', available: true },
  { id: 'chickpeas', en: 'Chickpeas (Kondakadalai)', ta: 'கொண்டைக்கடலை', category: 'protein', emoji: '🫘', available: true },
  { id: 'horse_gram', en: 'Horse Gram', ta: 'கொள்ளு', category: 'protein', emoji: '🫘', available: true },
  { id: 'peanuts', en: 'Peanuts', ta: 'வேர்க்கடலை', category: 'protein', emoji: '🥜', available: true },

  // Spices & Pantry (13)
  { id: 'mustard_seeds', en: 'Mustard Seeds', ta: 'கடுகு', category: 'spices_pantry', emoji: '🟤', available: true },
  { id: 'cumin_seeds', en: 'Cumin Seeds (Jeeragam)', ta: 'சீரகம்', category: 'spices_pantry', emoji: '🌾', available: true },
  { id: 'turmeric_powder', en: 'Turmeric Powder', ta: 'மஞ்சள் தூள்', category: 'spices_pantry', emoji: '🟡', available: true },
  { id: 'tamarind', en: 'Tamarind', ta: 'புளி', category: 'spices_pantry', emoji: '🫚', available: true },
  { id: 'sambar_powder', en: 'Sambar Powder', ta: 'சாம்பார் பொடி', category: 'spices_pantry', emoji: '🌶️', available: true },
  { id: 'asafoetida', en: 'Asafoetida (Hing)', ta: 'பெருங்காயம்', category: 'spices_pantry', emoji: '🧂', available: true },
  { id: 'fenugreek_seeds', en: 'Fenugreek Seeds', ta: 'வெந்தயம்', category: 'spices_pantry', emoji: '🟤', available: true },
  { id: 'dry_red_chilli', en: 'Dry Red Chilli', ta: 'காய்ந்த மிளகாய்', category: 'spices_pantry', emoji: '🌶️', available: true },
  { id: 'black_pepper', en: 'Black Pepper', ta: 'மிளகு', category: 'spices_pantry', emoji: '🟤', available: true },
  { id: 'coriander_seeds', en: 'Coriander Seeds (Dhana)', ta: 'தனியா / கொத்தமல்லி விதை', category: 'spices_pantry', emoji: '🟤', available: true },
  { id: 'salt', en: 'Salt', ta: 'உப்பு', category: 'spices_pantry', emoji: '🧂', available: true },
  { id: 'cooking_oil', en: 'Cooking Oil', ta: 'சமையல் எண்ணெய்', category: 'spices_pantry', emoji: '🫙', available: true },
  { id: 'coconut', en: 'Coconut', ta: 'தேங்காய்', category: 'spices_pantry', emoji: '🥥', available: true },
];
