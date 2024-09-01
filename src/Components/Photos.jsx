import BottomBanner from "./BottomBanner"
import TopBanner from "./TopBanner"

function Photos({setCurrentScreen}){
    return(
        <div className="screen">
            <TopBanner screenName="Home" setCurrentScreen={(screen) => setCurrentScreen(screen)}/>
            <div className="photos mainBody flexItems">
                Photos
            </div>
            <BottomBanner screenName="Download" setCurrentScreen={(screen) => setCurrentScreen(screen)}/>
        </div>
    )
}

export default Photos