// layout.js
import Head from 'next/head';
import './globals.css';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        {/* Include any necessary meta tags, links, or other head content */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Add any other meta tags or links as needed */}
      </Head>
      {/* The main content of your application */}
      <div className="centered-container">
        {children}
      </div>
    </>
  );
};

export default Layout;



