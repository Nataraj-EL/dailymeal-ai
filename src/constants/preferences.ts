export interface PreferenceOption<T> {
  value: T;
  enLabel: string;
  taLabel: string;
}

export type DietType = 'veg' | 'non-veg';
export type SpiceLevel = 'low' | 'medium' | 'high';
export type CookingTime = '15m' | '30m' | '60m';
export type MealType = 'breakfast' | 'lunch' | 'dinner';

export const dietOptions: PreferenceOption<DietType>[] = [
  { value: 'veg', enLabel: 'Vegetarian', taLabel: 'சைவம்' },
  { value: 'non-veg', enLabel: 'Non-Vegetarian', taLabel: 'அசைவம்' },
];

export const spiceOptions: PreferenceOption<SpiceLevel>[] = [
  { value: 'low', enLabel: 'Low Spice', taLabel: 'குறைந்த காரம்' },
  { value: 'medium', enLabel: 'Medium Spice', taLabel: 'மிதமான காரம்' },
  { value: 'high', enLabel: 'High Spice', taLabel: 'அதிக காரம்' },
];

export const cookingTimeOptions: PreferenceOption<CookingTime>[] = [
  { value: '15m', enLabel: 'Quick (~15 mins)', taLabel: 'விரைவாக (~15 நிமி)' },
  { value: '30m', enLabel: 'Standard (~30 mins)', taLabel: 'சாதாரண (~30 நிமி)' },
  { value: '60m', enLabel: 'Elaborate (~60 mins)', taLabel: 'விரிவான (~60 நிமி)' },
];

export const mealTypeOptions: PreferenceOption<MealType>[] = [
  { value: 'breakfast', enLabel: 'Breakfast', taLabel: 'காலை உணவு' },
  { value: 'lunch', enLabel: 'Lunch', taLabel: 'மதிய உணவு' },
  { value: 'dinner', enLabel: 'Dinner', taLabel: 'இரவு உணவு' },
];
