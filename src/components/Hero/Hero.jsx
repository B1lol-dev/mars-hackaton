import './Hero.css'

import logo from "../../assets/header/logo.svg"

export function Hero() {
    return(
        <section id='hero'> 
            <div className="container">
                <div className="box">
                    <h1>
                        <img src={logo} alt="" />
                    </h1>
                    <div className='before'></div>
                    <h2>санкт-петербург</h2>
                </div>
                <p className='hero_desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus interdum purus, est tortor pulvinar ut in. Fringilla a diam enim sed justo, sed iaculis sagittis. Tortor id eu interdum nec ut iaculis. Penatibus ullamcorper ultricies morbi ipsum sem metus pharetra, mi. Tortor nibh magna feugiat id nunc, dui nisl viverra.</p>
            </div>
        </section>
    )
}