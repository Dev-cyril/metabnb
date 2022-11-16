import { useState } from "react"
import img1 from '../images/image 3.png'
import img2 from '../images/image 4.png'
import img3 from '../images/image 5.png'
import img4 from '../images/image 6.png'
import img5 from '../images/f1.svg'
import img6 from '../images/f2.svg'
import img7 from '../images/f3.svg'
import frame1 from '../images/Frame 151.png'
import frame2 from '../images/Frame 151 (1).png'
import frame3 from '../images/Frame 151 (2).png'
import frame4 from '../images/Frame 151 (3).png'
import frame5 from '../images/Frame 151 (4).png'
import frame6 from '../images/Frame 151 (5).png'
import frame7 from '../images/Frame 151 (6).png'
import frame8 from '../images/Frame 151(7).png'
import star from '../images/Star 2.png'
import nft3 from '../images/Frame 59546.png'
import Header from './header'
import Footer from './Footer'

const Page = () => {

    const house = [{
        name: frame1
    }, { name: frame2 }, { name: frame3 }, { name: frame4 }, 
    { name: frame5 }, { name: frame6 }, { name: frame7 }, { name: frame8 }]
    return(

        <>
            <Header />
            <section id='first'>
                <div id="txt">
                    <h3> Rent a <span style={{ 'color': 'rgba(160, 34, 121, 1)'  }}>Place</span> away from <br /> <span style={{ 'color': 'rgba(160, 34, 121, 1)' }}>Home</span> in the <span style={{ 'color': 'rgba(160, 34, 121, 1)' }}>Metaverse</span></h3>
                    <p>we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>
                    <div id="inp">
                        <input type="text" placeholder="Search for location" />
                        <button>Search</button>
                    </div>
                </div>
                <div id="img">
                    <div id="ch_img">
                        <img src={img2} id="one" alt="" />
                        <img src={img4} id="three" alt="" />
                    </div>
                    <div id="ch_img1">
                        <img src={img1} id="two" alt="" />
                        <img src={img3} id="four" alt="" />
                    </div>
                </div>
            </section>
            <section id='patners'>
                <img src={img7} alt="" />
                <img src={img6} alt="" />
                <img src={img5} alt="" />
            </section>
            <section id='places'>
                <h2 style={{'textAlign': 'center'}}>Inspiration for your next adventure</h2>
                <div id="houses">
                    {
                        house.map((e) => (
                            <div>
                                <img src={e.name} alt="" />
                                <div style={{ 'display': 'flex', 'justifyContent': 'space-between', 'width':'90%' }}><div>Desert king</div><b>1MBT per night</b></div>
                                <div style={{ 'display': 'flex', 'justifyContent': 'space-between', 'width': '90%' }}><div>2345km away</div> <div>available for 2weeks stay</div></div>
                                <div id='star'>
                                    <img src={star} alt="" />
                                    <img src={star} alt="" />
                                    <img src={star} alt="" />
                                    <img src={star} alt="" />
                                    <img src={star} alt="" />
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
            <section id="nfts">
                <div id="nft_txt">
                    <h2>Metabnb NFTs</h2>
                    <p style={{ 'color': '#fff', 'lineHeight': '35px', 'fontSize':'18px' }}>Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</p>
                    <button>Learn more</button>
                </div>
                <div id="nft_imgs">
                    <img src={nft3} alt="" id="nft3"/>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Page