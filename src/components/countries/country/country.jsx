import './country.scss';
import { useState } from 'react';
import Modal from '../../modal/modal';

export default function Country({countryData}) {
    const [isModalOpened, toggleModal] = useState(false);

    return (
        <div className="country_wrapper">
            <div 
                className="country"
                onClick={() => toggleModal(true)}>

                <div className="country__column">{countryData.name}</div>
                <div className="country__column">{countryData.currency.currencyCode}</div>
                <div className="country__column">{countryData.currency.shortName}</div>
            </div>

            <Modal 
                isOpened={isModalOpened} 
                toggleModal={toggleModal}>

                <div>{countryData.name}</div>
                <div>{countryData.currency.currencyCode}</div>
                <div>{countryData.currency.shortName}</div>
            </Modal>
        </div>  
    );
}