import { SyntheticEvent } from 'react';
import './AddForm.scss';
import { SECTIONS, Product } from '../../constants';

interface AddFormProps {
    onSubmit: (section: SECTIONS, product: Product) => void
};

function AddForm({ onSubmit }: AddFormProps) {
    const handleSibmit = (e: SyntheticEvent) => {
        e.preventDefault();

        const form = e.target as typeof e.target & {
            section: {
                value: SECTIONS
            },
            name: {
                value: string
            },
            quantity: {
                value: number
            }
        };

        const section = form.section.value;
        const name = form.name.value;
        const quantity = form.quantity.value;

        onSubmit(section, {
            name,
            quantity
        });
    };

    return (
        <form onSubmit={handleSibmit} className="AddForm">
            <fieldset className="AddForm__fieldset">
                <legend className="AddForm__title">Shopping List</legend>
                <div className="AddForm__body">
                    <div className="AddForm__input-block">
                        <label className="AddForm__label">Section</label>
                        <select className="AddForm__select" name="section">
                            {Object.values(SECTIONS).map((section) => (<option key={section}>{section}</option>))}
                        </select>
                    </div>
                    <div className="AddForm__input-block">
                        <label className="AddForm__label" htmlFor="quantity">Quantity</label>
                        <input className="AddForm__input" name="quantity" id="quantity" type="number" />
                    </div>
                    <div className="AddForm__input-block AddForm__input-block--full">
                        <label className="AddForm__label" htmlFor="name">Name</label>
                        <input className="AddForm__input" name="name" id="name" type="text" />
                    </div>
                    <button type="submit" className="AddForm__button">Add to list</button>
                </div>
            </fieldset>
        </form>
    );
}

export default AddForm;