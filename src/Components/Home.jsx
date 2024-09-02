import BottomBanner from "./BottomBanner"

function Home(){
    return(
        <div className="screen flexItems">
            <div className="home mainBody oneBannerBody flexItems">
                Home
            </div>
            <BottomBanner screenName="Photos"/>
        </div>
    )
}

export default Home