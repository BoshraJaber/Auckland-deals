import './HeaderImage.css'

export default function HeaderImage() {
    return (
        <>
            <div className="headerimage">
                <a href="https://clickfrenzy.co.nz/"><img src="https://mediacdn.grabone.co.nz/asset/3pC7sBYlTK" className="desktopheaderimage" alt="Click Frenzy Mayhem" /></a>
            </div>

            {/* <div className="mobileheaderimage">
                <a href="https://clickfrenzy.co.nz/"><img src="https://mediacdn.grabone.co.nz/asset/UqZknPlInM" className="mobileheaderimage" alt="Click Frenzy Mayhem" /></a>
            </div> */}
            <div style={{padding:"20px 0px 0px 0px", textAlign:"center", fontWeight:"normal", fontSize:"15px"}}><strong>For savings on big brands you love, <a href="https://clickfrenzy.co.nz/"> register here.</a> </strong>
            </div>
        

        </>
    )
}


