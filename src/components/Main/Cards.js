import Card from './Card'

export default function Cards() {
    return (
        <>
            <header class="section-header">
                <a href="/auckland-experience"><span>Featured Auckland deals</span></a>
                <a href="/auckland-experience" class="view-more"><span class="view-more__text">View More</span> <i class="fa fa-angle-right" aria-hidden="true"></i></a>
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