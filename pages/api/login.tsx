import axios from 'axios';
import Cookies from 'js-cookie';
import React from 'react';
import { useEffect } from 'react';
import getBearerToken from '../login'


async function makeAuthenticatedRequest(url: string, method: string = 'GET', data?: any) {
  const token = await getBearerToken();
  const baseURL = 'https://wp.planetmedia.dev/wp-json';
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




  
  