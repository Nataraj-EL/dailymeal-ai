export interface Substitution {
  originalIngredientId: string;
  substituteIngredientId: string;
  enNote: string;
  taNote: string;
}

export const substitutions: Substitution[] = [
  {
    originalIngredientId: 'tomato',
    substituteIngredientId: 'tamarind',
    enNote: 'Tamarind paste can replace tomato for sourness.',
    taNote: 'புளிப்புச் சுவைக்குத் தக்காளிக்குப் பதிலாகப் புளியைப் பயன்படுத்தலாம்.'
  },
  {
    originalIngredientId: 'tamarind',
    substituteIngredientId: 'tomato',
    enNote: 'Tomato can be used if tamarind is unavailable.',
    taNote: 'புளி இல்லாதபோது தக்காளியைப் பயன்படுத்தலாம்.'
  },
  {
    originalIngredientId: 'raw_rice',
    substituteIngredientId: 'boiled_rice',
    enNote: 'Boiled rice can be substituted in a pinch.',
    taNote: 'அவசரத்திற்குப் பச்சரிசிக்குப் பதிலாகப் புழுங்கலரிசியைப் பயன்படுத்தலாம்.'
  },
  {
    originalIngredientId: 'boiled_rice',
    substituteIngredientId: 'raw_rice',
    enNote: 'Raw rice can replace boiled rice with adjusted cooking time.',
    taNote: 'புழுங்கலரிசிக்குப் பதிலாகப் பச்சரிசியைப் பயன்படுத்தலாம்.'
  },
  {
    originalIngredientId: 'moong_dal',
    substituteIngredientId: 'toor_dal',
    enNote: 'Toor dal can replace moong dal in dal fry recipes.',
    taNote: 'பருப்பு கடைசலில் பாசிப்பருப்புக்குப் பதிலாகத் துவரம்பருப்பைப் பயன்படுத்தலாம்.'
  },
  {
    originalIngredientId: 'toor_dal',
    substituteIngredientId: 'moong_dal',
    enNote: 'Moong dal can replace toor dal for a lighter texture.',
    taNote: 'துவரம்பருப்புக்குப் பதிலாகப் பாசிப்பருப்பைப் பயன்படுத்தலாம்.'
  },
  {
    originalIngredientId: 'rava',
    substituteIngredientId: 'vermicelli',
    enNote: 'Vermicelli can be used instead of rava for upma.',
    taNote: 'உப்புமாவிற்கு ரவைக்குப் பதிலாகச் சேமியாவைப் பயன்படுத்தலாம்.'
  },
  {
    originalIngredientId: 'vermicelli',
    substituteIngredientId: 'rava',
    enNote: 'Rava can replace vermicelli for upma recipes.',
    taNote: 'சேமியாவுக்குப் பதிலாக ரவையைப் பயன்படுத்தலாம்.'
  },
  {
    originalIngredientId: 'butter',
    substituteIngredientId: 'ghee',
    enNote: 'Ghee can be used as a flavorful replacement for butter.',
    taNote: 'வெண்ணெய்க்குப் பதிலாக நெய்யைப் பயன்படுத்தலாம்.'
  },
  {
    originalIngredientId: 'ghee',
    substituteIngredientId: 'butter',
    enNote: 'Butter can substitute ghee in roast or base spreads.',
    taNote: 'நெய்க்குப் பதிலாக வெண்ணெயைப் பயன்படுத்தலாம்.'
  }
];

export const getSubstitution = (originalId: string, availableIds: string[]): Substitution | undefined => {
  return substitutions.find(
    (sub) => sub.originalIngredientId === originalId && availableIds.includes(sub.substituteIngredientId)
  );
};
