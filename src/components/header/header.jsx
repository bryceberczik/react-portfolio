import './header.css'
import Navbar from '../navbar/navbar'
import MobileNavbar from '../mobile-nav-bar/mobileNav';
import { useState, useEffect } from 'react';

function header() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

    useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth < 768);
        };
    
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);

    return (
        <div>
            <header>
                <div className='header'>
                <h1>Bryce Berczik</h1>
                {isMobile ? <MobileNavbar /> : <Navbar />}
                </div>
            </header>
        </div>
    )
}

export default header;