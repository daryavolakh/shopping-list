import { SECTIONS, Product } from '../../../constants';
import './ProductsSectionCard.scss';

interface ProductsSectionCardProps {
    sectionName: SECTIONS,
    products: Product[],
    deleteProduct: (section: SECTIONS, productName: string) => void 
}

function ProductsSectionCard({ sectionName, products, deleteProduct }: ProductsSectionCardProps) {
    return (
        <li className="ProductsSectionCard">
            <div className="ProductsSectionCard__name">{ sectionName }</div>
            <ul className="ProductsSectionCard__items">
                {
                   products.map(({name, quantity}) => (
                    <li className="ProductsSectionCard__item" key={name}>
                        <div className="ProductsSectionCard__item-name">{name}</div>
                        <div className="ProductsSectionCard__item-quantity">{quantity}</div>
                        <button className="ProductsSectionCard__item-delete" onClick={() => { deleteProduct(sectionName, name)}}>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="8" cy="8" r="8" className="ProductsSectionCard__item-delete-icon"></circle>
                                <line x1="3.70711" y1="3.79289" x2="12.1924" y2="12.2782" stroke="white" strokeWidth="2"></line>
                                <line x1="3.29289" y1="12.2782" x2="11.7782" y2="3.7929" stroke="white" strokeWidth="2"></line>
                            </svg>
                        </button>
                    </li>
                   )) 
                }
                
            </ul>
        </li>
    );
};

export default ProductsSectionCard;