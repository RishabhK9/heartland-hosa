import React from 'react';
import Footer from './Footer';
import Header from './Header';

function Layout({ children }) {
    return (
        <div className="flex flex-col h-full justify-start">
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
}

export default Layout;
