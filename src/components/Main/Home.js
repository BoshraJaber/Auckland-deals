import SideBar from "./SideBar";
import LargCard from "./LargeCard";



export default function Home() {
    return (
        <>
            <section className="search-grid containerBody">
                <div className="homepage-top">
                    <div className="search-grid-listings discovery-row d-flex">
                         <SideBar />
                        <LargCard />
                    </div>
                </div>
            </section>
        </>
    )
}