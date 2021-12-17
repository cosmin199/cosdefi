import "./Hero.css"
import Crypto from "../assets/hero-img.png"

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        {/* Left Side */}
        <div className="left">
          <p>Buy & Sell Crypto 24/7 using your retirement account</p>
          <h1>Invest in Cryptocurrency with IRA</h1>
          <p>Buy, Sell, and store hundreds of Cryptocurrencies</p>
          <div className="input-container">
            <input type="email" placeholder="enter your email" />
            <button className="btn">learn more</button>
          </div>
        </div>
        <div className="right">
          <div className="img-container">
            <img src={Crypto} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
