import { useState } from "react"
import { useRef, useEffect } from 'react';
import img1 from '../images/image 66.png'
import img2 from '../images/image 69.png'
import img3 from '../images/nft.png'


const Header = ()=>{

    const [isNavExpanded, setIsNavExpanded] = useState(false)
    const [isForm, setIsForm] = useState(true)
    const ref = useRef(null);
    const handleClick = () => {
        const el = document.getElementById('fff');
        el.style.display = 'block';
        setIsForm(!isForm);
    };
    const handle = () => {
        document.getElementById('fff').style.display = 'none';
        setIsForm(!isForm);
    };
    return(
        
        <>
            <header>
                <nav className="navigation">
                    <div id="img_icon"></div>
                    <button className="hamburger"
                        onClick={() => {
                            setIsNavExpanded(!isNavExpanded);
                        }}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="white"
                        >
                            <path
                                fillRule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                    <div className={
                        isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
                    }>
                        <ul>
                            <li>
                                <a href={`/`}>Home</a>
                            </li>
                            <li>
                                <a href={`places-to-visit`}>Place to stay</a>
                            </li>
                            <li>
                                <a href="">NFTs</a>
                            </li>
                            <li>
                                <a href="">Community</a>
                            </li>
                            <li>
                                <button
                                    onClick={handleClick}>Connect wallet</button>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
            <div ref={ref} id="fff">
                <div id={isForm ? 'dNone' : 'dGrid'}>
                <div id="head">Connect your wallet <span onClick={handle}>X</span></div>
                <div id="bdy">
                    Choose your preferred wallet
                    <div id="set"><div id="bdy1"><img src={img1} alt="" /> <span><b>Metamask</b></span></div> <img src={img3} alt="" /> </div>
                    <div id="set"><div id="bdy1"><img src={img2} alt="" /> <b>WalletConnect</b></div> <img src={img3}/></div>
                </div>
            </div>
            </div>
        </>
    )
}

export default Header