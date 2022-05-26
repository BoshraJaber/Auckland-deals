<div className="full-page-search" id="full-page-search">
    <form id="search-bar" method="get" action="https://new.grabone.co.nz/search" autocomplete="on">
        <input name="region" type="hidden" value="auckland" />
        <input name="view" type="hidden" value="" />
        <div id="search-bar-wrapper">
            <button className="mobile-search-clear hide" id="search-bar-clear" type="button">
                <span>Clear search</span>
                {/* <svg className="svg__global--close"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#svg__global--close"></use></svg> */}
            </button>
            {/* <svg className="svg__global--search"><use xlink:href="#svg__global--search"></use></svg> */}
            <input id="search-bar-query" className="mobile-search-query" name="query" type="text" value="" placeholder="Search GrabOne" />
            <button id="search-bar-back" type="button">
                {/* <svg className="svg__global--arrow-left"><use xlink:href="#svg__global--arrow-left"></use></svg> */}
            </button>
        </div>
        <div id="search-bar-intro">
            <h4>Search GrabOne</h4>
            <p>Discover deals on experiences, products, travel &amp; more</p>
        </div>
        <button id="search-bar-submit" type="submit">
            Search
        </button>
    </form>
</div>