import SideBar from "./SideBar";
import LargCard from "./LargeCard";
import EmailForm from "./EmailForm";
import Cards from "./Cards";



export default function Home() {
    return (
        <>
            <section className="search-grid containerBody">
                <div className="homepage-top">
                    <div className="search-grid-listings discovery-row">
                        <SideBar />
                    </div>
                </div>

                <div className="cardsContainer">
                    <LargCard />
                    <LargCard />

                </div>
            </section>

            <EmailForm />
            <Cards />
        </>
    )
}