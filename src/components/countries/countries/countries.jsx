import Country from '../country/country.jsx';
import { Redirect } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getCountriesFromApi } from '../../../services/countries/countries.js';
import './countries.scss';
import { logout, refreshToken } from '../../../services/auth/auth.js';

export default function Countries() {
    const [countries, setCountries] = useState(null);
    const [redirect, setRedirect] = useState(false);
    const [loading, setLoadingStatus] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        async function getCountries() {
            let response = await getCountriesFromApi();
            
            if (clean) return false;    // если компонент уже unmounted

            if (!response) {    //если пользователя вообще нет в localStorage
                setRedirect(true);
                return false;
            }

            if (response.status === 401) {  // если ошибка 401
                if (await refreshToken()) { // пробуем рефреш 
                    response = await getCountriesFromApi(); // и снова получить страны, если рефреш удачный
                }
                else {
                    logout();   // если рефреш неудачный, выкидываем пользователя из аккаунта
                    setRedirect(true); 

                    return false;
                }
            }
            
            if (clean) return false; // если компонент уже unmounted после второго запроса стран

            if (response.status === 200) // если все ок
                setCountries(response.data);
            else // пользователь точно авторизован, но список стран все равно получить не удается
                setError('Произошла ошибка при загрузке данных. Повторите попытку позднее.')
        
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
                error
                ? <div>{error}</div>
                : countries.data.map(country => (
                    <Country
                        key={country.id}
                        countryData={country} />
                ))
            }

            {redirect && <Redirect to='/login' />}
        </div>
    );
}