import axios from 'axios';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const baseURL = 'https://wp.planetmedia.dev/wp-json';

async function getBearerToken(username, password) {
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

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const token = await getBearerToken(username, password);
      Cookies.set('token', token, { expires: 7 });
      router.push('/blogs');
    } catch (error) {
      console.error('Login error:', error);
    }
  }

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      router.push('/blogs');
    }
  }, [router]);
  

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
