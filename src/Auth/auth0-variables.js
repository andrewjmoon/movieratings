import { authDomain, authClientId } from '../constants';

export const AUTH_CONFIG = {
  domain: authDomain,
  clientId: authClientId,
  callbackUrl: 'http://localhost:3000/callback'
};
//https://amsrecordcollection.netlify.com/callback
//http://localhost:3000/callback