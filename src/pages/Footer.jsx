import fb from '../images/fb.png'
import inst from '../images/inst.png'
import twt from '../images/twt.png'

const Footer = () => {
    return (
        <footer>
            <div id="icons">
                <div id="img_icon"></div>
                <div id="social">
                    <img src={fb} alt="" />
                    <img src={inst} alt="" />
                    <img src={twt} alt="" />
                </div>
                <span id='sp1'>&copy; 2022 Metabnb</span>
            </div>
            <div id="links">
                <div id="comm">
                    <b>Community</b>
                    <a href="">NFTs</a>
                    <a href="#">Tokens</a>
                    <a href="#">Landlords</a>
                    <a href="#">Discord</a>
                </div>
                <div id="comm">
                    <b>Places</b>
                    <a href="#">Castle</a>
                    <a href="#">Farm</a>
                    <a href="#">Beach</a>
                    <a href="#">Learn More</a>
                </div>
                <div id="comm">
                    <b>About Us</b>
                    <a href="#">Road map</a>
                    <a href="#">Creators</a>
                    <a href="#">Career</a>
                    <a href="#">Contact Us</a>
                </div>
            </div>
            <div id="social2">
                <img src={fb} alt="" />
                <img src={inst} alt="" />
                <img src={twt} alt="" />
            </div>
            <span id='sp2' style={{'textAlign':'center'}}>&copy; 2022 Metabnb</span>
        </footer>
    )
}

export default Footer