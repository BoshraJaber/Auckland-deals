import Card from './Card'

export default function Cards() {
    return (
        <>
            <header className="section-header">
                <a href="/auckland-experience"><span>Featured Auckland deals</span></a>
                <a href="/auckland-experience" className="view-more"><span className="view-more__text">View More</span> <i className="fa fa-angle-right" aria-hidden="true"></i></a>
            </header>
            <div className='cards-container2'>
                <Card />
                <Card />
                <Card />
                <Card />

            </div>
        </>
    )
};