import BottomBanner from "./BottomBanner"

function Home(){
    return(
        <div className="screen">
            <div className="home mainBody flexItems">
                Home
            </div>
            <BottomBanner screenName="Photos"/>
        </div>
    )
}

export default Home