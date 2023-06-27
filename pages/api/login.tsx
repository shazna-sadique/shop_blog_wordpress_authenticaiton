import axios from 'axios';
import Cookies from 'js-cookie';
import React from 'react';
import { useEffect } from 'react';

const baseURL = 'https://wp.planetmedia.dev/wp-json';

async function getBearerToken() {
  const username = 'wpcustomer';
  const password = 'l!rDymqRgR1aG)MxC^XF%v9$';

  try {
    const response = await axios.post(`${baseURL}/api/v1/token`, {
      username,
      password,
    });

    const { token } = response.data;
    return token;
  } catch (error) {
    console.error('Error getting bearer token:', error);
    throw error;
  }
}



async function makeAuthenticatedRequest(url: string, method: string = 'GET', data?: any) {
  const token = await getBearerToken();

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await axios.request({
      url: `${baseURL}${url}`,
      method,
      data,
      ...config,
    });

    return response.data;
  } catch (error) {
    console.error('Error making authenticated request:', error);
    throw error;
  }
}


export default makeAuthenticatedRequest;



async function handleLogin() {
    useEffect(() => {
        const token = Cookies.get('token');
        if (token) {
          window.location.href = '/blog';
        }
      }, []);
    try {
      const token = await getBearerToken();
      Cookies.set('token', token, { expires: 7 }); 
      window.location.href = '/blog';
    } catch (error) {
      console.error('Login error:', error);
    }
  }
  


  
  