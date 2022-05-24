import axios from 'axios';

const baseDomain = 'http://localhost:3000';

export const customHeader = {
    'Content-Type': 'application/json',
    Accept: 'application/json'
};

export const baseUrl = `${ baseDomain }`;
export const currentDemo = "22";

export default axios.create( {
    baseUrl,
    headers: customHeader
} )