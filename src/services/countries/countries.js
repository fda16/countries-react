import axios from '../../axios-config.js'

export async function getCountriesFromApi() {
    const user = JSON.parse(localStorage.getItem('user'));

    if (!user) return false;

    try {
        const response = await axios({
            method: 'get',
            url: '/Countries',
            headers: {'Authorization': 'Bearer ' + user.accessToken}
        });
    
        return response;
        //this.pages = Math.ceil(this.countries.count/this.perPage);
    }
    catch(error) {
        return error.response;   
    }
}