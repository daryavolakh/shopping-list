import ProductsSectionCard from './ProductsSectionCard/ProductsSectionCard';
import { SECTIONS, Product } from '../../constants';
import './ShoppingList.scss';

interface ShoppingListProps {
    productsSections: Map<SECTIONS, Product[]>,
    deleteProduct: (section: SECTIONS, productName: string) => void 
}

function ShoppingList({ productsSections, deleteProduct }: ShoppingListProps) {
    return (
        <ul className="ShoppingList">
            {
                [...productsSections.keys()].map((sectionName) => (
                    <ProductsSectionCard 
                        sectionName={sectionName} 
                        key={`${sectionName}-item`} 
                        products={productsSections.get(sectionName) || []} 
                        deleteProduct={ (section: SECTIONS,  productName: string) => { deleteProduct(section, productName)} } 
                    />
                    )
                )
            }
        </ul>
    );
}

export default ShoppingList;