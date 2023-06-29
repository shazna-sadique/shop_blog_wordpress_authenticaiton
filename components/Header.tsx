import React from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import Link from 'next/link'
import styles from './header.module.css';
import Image from 'next/image';


export default function Header() {
  const isLoggedIn = Cookies.get('token');
  const router = useRouter();

  function handleLogout() {
    Cookies.remove('token');
    router.push('/');
  }

  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            <Link href="/">Shop</Link>
          </li>
          <li>
            <Link href="/login">Blogs</Link>
          </li>
          {isLoggedIn ? (
            <li>
              <button onClick={handleLogout}>Log out</button>
            </li>
          ) : (
            <li>
              <Link href="/login">Login</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}


