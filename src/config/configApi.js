export const apiUrl = 'http://178.155.41.71:8080';
export const accessToken = '20f17f1e-b7fc-41cf-a3f8-fa60cb212b92';

export const headersRequest = {
    "Content-Type": 'application/x-www-form-urlencoded',
    "Authorization": `Bearer ${accessToken}`,
    'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
}