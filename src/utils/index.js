export const API_URL = process.env.REACT_APP_API_ENDPOINT;

export const getToken = () => {
    if(sessionStorage === 'undefined') return null
    return sessionStorage.getItem('Nekot');
    
};