import {refreshToken, logout} from '../auth/auth.js'
import axios from 'axios'

export async function getCountriesFromApi() {
    const user = JSON.parse(localStorage.getItem('user'));

    if (!user) return 0;
    
    try {
        const response = await axios({
            method: 'get',
            url: 'https://api.bo.aa44.ru/api/Countries',
            headers: {'Authorization': 'Bearer ' + user.accessToken}
        });
    
        return response;
        //this.pages = Math.ceil(this.countries.count/this.perPage);
    }
    catch(error) {
        console.log(error);
    
        if (await refreshToken()) {
            return 1;
        }
        else {
            logout();
            
            return 0;
        }
    }
}