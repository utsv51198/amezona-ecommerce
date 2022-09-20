import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const Layout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title ? title + '-Amazona' : 'Amazona'}</title>
        <meta
          name="description"
          content="Ecommerce Website"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="flex h-12 items-center px-4 justify-between shadow-md">
            <Link href="/">
              <a className="text-lg font-bold">Amazona</a>
            </Link>
            <div>
              <Link href="/cart">
                <a className="px-2">Cart</a>
              </Link>
              <Link href="/login">
                <a className="px-2">Login</a>
              </Link>
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer className="flex h-10 justify-center items-center shadow-inner font-bold">
          Copyright @ 2022 Amazona
        </footer>
      </div>
    </>
  );
};

export default Layout;
