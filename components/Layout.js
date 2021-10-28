import Head from 'next/head';
import Link from 'next/link';

const Layout = ({ children, title = 'Track My Crypto' }) => {
  return (
    <div className='layout'>
      <Head>
        <title>{title}</title>
        <link rel='icon' href='/Cjdowner-Cryptocurrency-Flat-Bitcoin-Plus-XBC.ico' />
      </Head>
      <header className='header flex justify-center'>

        <Link href='/' passHref>
        <a>
            <img src='/trader.png' width='250px'/>
          </a>
        </Link>


      </header>
      <main>{children}</main>     
    </div>
  );
};

export default Layout;
