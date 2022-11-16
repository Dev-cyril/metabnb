import Header from './header'
import Footer from './Footer'
import frame1 from '../images/Frame 151.png'
import frame2 from '../images/Frame 151 (1).png'
import frame3 from '../images/Frame 151 (2).png'
import frame4 from '../images/Frame 151 (3).png'
import frame5 from '../images/Frame 151 (4).png'
import frame6 from '../images/Frame 151 (5).png'
import frame7 from '../images/Frame 151 (6).png'
import frame8 from '../images/Frame 151(7).png'
import star from '../images/Star 2.png'
import sett from '../images/setting-5.png'

const Places = () => {

    const house = [
        {name: frame1}, { name: frame2 }, { name: frame3 }, { name: frame4 },
        { name: frame5 }, { name: frame6 }, { name: frame7 }, { name: frame8 },
        {name: frame1}, { name: frame2 }, { name: frame3 }, { name: frame4 },
        { name: frame5 }, { name: frame6 }, { name: frame7 }, { name: frame8 }]
    return(

        <>
            <Header />
            <nav id='nav' style={{ 'width': '83%', 'margin':'50px auto'}}>
                <a href="#">Restaurant</a>
                <a href="#">Cottage</a>
                <a href="#">Castle</a>
                <a href="#">Fantast city</a>
                <a href="#">Beach</a>
                <a href="#">Carbin</a>
                <a href="#">off-grid</a>
                <a href="#">Farm</a>
                <div style={{ 'border-radius':'8px', 'display': 'flex', 'border':'1px solid #B4B4B4', 'justifyContent':'space-around', 'alignItems':'center', 'width':'161px', 'height':'48px'}}>
                    Location
                    <img src={sett} alt="" style={{ 'width': '24px', 'height': '24px' }}/>
                </div>
            </nav>
            <div id="houses" style={{'marginBottom':'50px'}}>
                {
                    house.map((e) => (
                        <div>
                            <img src={e.name} alt="" />
                            <div style={{ 'display': 'flex', 'justifyContent': 'space-between', 'width': '90%' }}><div>Desert king</div><b>1MBT per night</b></div>
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
            <Footer />
        </>
    )
}

export default Places