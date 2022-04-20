import axios from 'axios';

const baseDomain = 'http://192.168.137.32:1337';

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