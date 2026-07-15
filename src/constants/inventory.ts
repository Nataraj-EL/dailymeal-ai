export interface InventoryItem {
  ingredientId: string;
  quantity?: string;
  expiryPriority?: 'low' | 'medium' | 'high';
}

export const kitchenInventory: InventoryItem[] = [
  // High Expiry Priority (Highly Perishable)
  { ingredientId: 'tomato', quantity: '500g', expiryPriority: 'high' },
  { ingredientId: 'coriander_leaves', quantity: '1 bunch', expiryPriority: 'high' },
  { ingredientId: 'curry_leaves', quantity: '1 bunch', expiryPriority: 'high' },
  { ingredientId: 'milk', quantity: '1 Litre', expiryPriority: 'high' },
  { ingredientId: 'curd', quantity: '500ml', expiryPriority: 'high' },
  { ingredientId: 'paneer', quantity: '200g', expiryPriority: 'high' },

  // Medium Expiry Priority (Perishable)
  { ingredientId: 'onion', quantity: '1 kg', expiryPriority: 'medium' },
  { ingredientId: 'green_chilli', quantity: '150g', expiryPriority: 'medium' },
  { ingredientId: 'ginger', quantity: '100g', expiryPriority: 'medium' },
  { ingredientId: 'garlic', quantity: '100g', expiryPriority: 'medium' },
  { ingredientId: 'potato', quantity: '2 kg', expiryPriority: 'medium' },
  { ingredientId: 'brinjal', quantity: '500g', expiryPriority: 'medium' },
  { ingredientId: 'okra', quantity: '400g', expiryPriority: 'medium' },
  { ingredientId: 'carrot', quantity: '300g', expiryPriority: 'medium' },
  { ingredientId: 'bottle_gourd', quantity: '1 piece', expiryPriority: 'medium' },
  { ingredientId: 'ash_gourd', quantity: '1 piece', expiryPriority: 'medium' },
  { ingredientId: 'cabbage', quantity: '500g', expiryPriority: 'medium' },
  { ingredientId: 'beetroot', quantity: '500g', expiryPriority: 'medium' },

  // Low Expiry Priority (Pantry & Grains)
  { ingredientId: 'raw_rice', quantity: '5 kg', expiryPriority: 'low' },
  { ingredientId: 'boiled_rice', quantity: '5 kg', expiryPriority: 'low' },
  { ingredientId: 'basmati_rice', quantity: '2 kg', expiryPriority: 'low' },
  { ingredientId: 'rava', quantity: '1 kg', expiryPriority: 'low' },
  { ingredientId: 'vermicelli', quantity: '1 kg', expiryPriority: 'low' },
  { ingredientId: 'wheat_flour', quantity: '2 kg', expiryPriority: 'low' },
  { ingredientId: 'ragi', quantity: '1 kg', expiryPriority: 'low' },

  { ingredientId: 'ghee', quantity: '200ml', expiryPriority: 'low' },
  { ingredientId: 'butter', quantity: '100g', expiryPriority: 'low' },

  { ingredientId: 'toor_dal', quantity: '1 kg', expiryPriority: 'low' },
  { ingredientId: 'chana_dal', quantity: '1 kg', expiryPriority: 'low' },
  { ingredientId: 'urad_dal', quantity: '1 kg', expiryPriority: 'low' },
  { ingredientId: 'moong_dal', quantity: '1 kg', expiryPriority: 'low' },
  { ingredientId: 'green_gram', quantity: '500g', expiryPriority: 'low' },
  { ingredientId: 'chickpeas', quantity: '1 kg', expiryPriority: 'low' },
  { ingredientId: 'peanuts', quantity: '500g', expiryPriority: 'low' },

  { ingredientId: 'salt', quantity: '1 kg', expiryPriority: 'low' },
  { ingredientId: 'turmeric_powder', quantity: '100g', expiryPriority: 'low' },
  { ingredientId: 'sambar_powder', quantity: '250g', expiryPriority: 'low' },
  { ingredientId: 'mustard_seeds', quantity: '200g', expiryPriority: 'low' },
  { ingredientId: 'cumin_seeds', quantity: '200g', expiryPriority: 'low' },
  { ingredientId: 'black_pepper', quantity: '100g', expiryPriority: 'low' },
  { ingredientId: 'dry_red_chilli', quantity: '100g', expiryPriority: 'low' },
  { ingredientId: 'cooking_oil', quantity: '1 Litre', expiryPriority: 'low' },
  { ingredientId: 'tamarind', quantity: '250g', expiryPriority: 'low' }
];

export const getInventoryItem = (ingredientId: string): InventoryItem | undefined => {
  return kitchenInventory.find((item) => item.ingredientId === ingredientId);
};
