import './NavBar.css';

import { ReactComponent as SearchIcon } from '../assets/searchIcon.svg';


export default function NavBar() {
    return (
        <>
            <nav id="banner-secondary-nav">
                <div className="banner-secondary-nave__content">
                    <ul id="mega-menu-container">


                        <li className="banner-vertical-item banner-vertical-item--menu banner-vertical-item--browse-categories">
                            <a href="https://new.grabone.co.nz/" className="banner-vertical-item__text">
                                Browse Categories
                                <div className="banner-vertical-item-triangle"></div>
                            </a>
                            <div className="mega-menu" data-menu-vertical="">
                            </div>
                        </li>
                        <li className="banner-vertical-item  banner-vertical-item--whats-new">
                            <a href="https://new.grabone.co.nz/auckland/search?sortby=new&view=grid" className="banner-vertical-item__text" >
                                What&#39;s New
                            </a>
                        </li>
                        <li className="banner-vertical-item  banner-vertical-item--trending">
                            <a href="https://new.grabone.co.nz/auckland/search?view=grid" className="banner-vertical-item__text" >
                                Trending
                            </a>
                        </li>
                        <li className="banner-vertical-item  banner-vertical-item--for-you">
                            <a href="https://new.grabone.co.nz/auckland/picked-for-you" className="banner-vertical-item__text" >
                                For You
                            </a>
                        </li>
                        <li className="banner-vertical-item  banner-vertical-item--shop-products">
                            <a href="https://new.grabone.co.nz/auckland/c/shop-collection" className="banner-vertical-item__text" >
                                Shop Products
                            </a>
                        </li>
                    </ul>

                    <div id="banner-secondary-nav-container">
                        <div id="banner-search" className="header-search">


                            <form id="search-bar" className="search-bar" method="get" action="https://new.grabone.co.nz/search" autoComplete="on">
                                <input name="region" type="hidden" value="auckland" />
                                <input name="view" type="hidden" value="" />

                                <input id="search-bar-query" className="search-bar__query" name="query" type="text" value="" placeholder="Search GrabOne" />

                                <button id="search-bar-submit" type="submit" className="search-bar__search-button">
                                    <span>Search</span>
                                </button>

                                <button id="search-bar-clear" type="button" className="search-bar__clear-button hide">
                                    < SearchIcon />
                                </button>
                            </form>

                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}