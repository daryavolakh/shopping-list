import './App.scss';
import { useState } from 'react';
import AddForm from './components/AddForm/AddForm';
import ShoppingList from './components/ShoppingList/ShoppingList';
import { SECTIONS, Product } from './constants';

const initialProducts = new Map();
Object.values(SECTIONS).forEach((sectionValue) => {
  initialProducts.set(sectionValue, []);
});

function App() {
  const [products, setProducts] = useState<Map<SECTIONS, Product[]>>(initialProducts);

  const getSectionByKey = (sectionKey: SECTIONS) => products.get(sectionKey);

  const addProducts = (sectionKey: SECTIONS, newProduct: Product) => {
    const currentSectionProducts = getSectionByKey(sectionKey);
    if (currentSectionProducts) {
      setProducts(currentProducts => {
        currentProducts.set(sectionKey, [
          ...currentSectionProducts,
          newProduct
        ]);

        return new Map(currentProducts);
      });
    }
  };

  const deleteProduct = (sectionKey: SECTIONS, productName: string) => {
    const currentSectionProducts = getSectionByKey(sectionKey);
    if (currentSectionProducts) {
      setProducts(currentProducts => {
        currentProducts.set(sectionKey, [
          ...currentSectionProducts.filter((product) => product.name !== productName)
        ]);

        return new Map(currentProducts);
      });
    }
  };

  return (
    <div className="App">
      <AddForm onSubmit={addProducts} />
      <ShoppingList productsSections={products} deleteProduct={(section: SECTIONS, productName: string) => { deleteProduct(section, productName) }} />
    </div>
  );
}

export default App;
