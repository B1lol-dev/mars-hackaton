import "./Header.css"

import logo from "../../assets/header/logo.svg"

import cart_img from "../../assets/hero/cart.svg"
import search_img from "../../assets/hero/search.svg"

export function Header() {
    return (
        <header>
            <div className="header_top">
                <div className="container">
                    <p className="info">8 (812) 123-45-67    |    Работаем 7 дней в неделю    |    9:00 — 18:00  </p>
                    <p className="user"><span><a href="#">Войти </a></span>/<span><a href="#"> Регистрация</a></span></p>
                </div>
            </div>
            <nav className="navbar">
                <div className="container">
                    <a href="#" className="nav_logo">
                        <img src={logo} alt="Protein" />
                    </a>
                    
                    <ul className="nav_collection">
                        <li><a href="#">Понравилось</a></li>
                        <li><a href="#">личный кабинет</a></li>
                        <li><a href="#">настройки</a></li>
                    </ul>

                    <div className="nav_btns">
                        <button type="button">
                            <img src={cart_img} alt="cart" />
                        </button>
                        <button type="button">
                            <img src={search_img} alt="search" />
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    )
}