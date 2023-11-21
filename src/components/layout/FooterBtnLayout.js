import React from 'react';
import { Outlet } from 'react-router-dom';
import FooterBtn from '../pages/partials/footer/FooterBtn';

function FooterBtnLayout(props) {
    return (
        
              <div className="private__layout">
            {/* <HeaderPrivate /> */}
            <main className="main">
                <Outlet/>
            </main>
            {/* <FooterBtn /> */}
        </div>
        
    );
}

export default FooterBtnLayout;