export enum SECTIONS {
  fruitsAndVeg = 'Fruits & Vegetables',
  meatAndSeafood = 'Meat & Seafood',
  dairy = 'Dairy',
  frozenFood = 'Frozen food',
  breadAndPasta = 'Bread & Pasta',
  snaks = 'Snaks',
  cleaning = 'Cleaning',
  other = 'Other'
};

export interface Product {
  name: string,
  quantity: number
};

//export const SECTIONS = ['Fruits & Vegetables', 'Meat & Seafood', 'Dairy', 'Frozen food', 'Bread & Pasta', 'Snaks', 'Cleaning', 'Other'];