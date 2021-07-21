import Country from '../country/country.jsx';
import { Redirect } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getCountriesFromApi } from '../../../services/countries/countries.js';
import './countries.scss';
import { logout } from '../../../services/auth/auth.js';

export default function Countries() {
    const [countries, setCountries] = useState(null);
    const [redirect, setRedirect] = useState(false);
    const [loading, setLoadingStatus] = useState(true);

    useEffect(() => {
        async function getCountries() {
            let response = await getCountriesFromApi();

            if (!clean && response === 1)
                response = await getCountriesFromApi();
                
            if (!clean) {
                if (response === 1) {
                    logout();

                    setRedirect(true);
                }
                else if (!response)
                    setRedirect(true);
                else
                    setCountries(response.data);      
            }

            setLoadingStatus(false);
        }

        let clean = false;
        getCountries();

        return () => clean = true;

    }, [countries])
    
    return loading ? (
         <div>Загрузка</div>
    ) : (
        <div className="countries">
            <div className="countries__header">
                <div className="countries__column">Name</div>
                <div className="countries__column">CurrencyCode</div>
                <div className="countries__column">ShortName</div>
            </div>

            {   
                countries
                ? countries.data.map(country => (
                    <Country
                        key={country.id}
                        countryData={country} />
                ))
                : <div>При загрузке данных произошла ошибка</div>
            }

            {redirect && <Redirect to='/login' />}
        </div>
    );
}