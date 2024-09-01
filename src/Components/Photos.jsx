import BottomBanner from "./BottomBanner"
import TopBanner from "./TopBanner"

function Photos(){
    return(
        <div className="screen">
            <TopBanner screenName="Home"/>
            <div className="photos mainBody flexItems">
                Photos
            </div>
            <BottomBanner screenName="Download"/>
        </div>
    )
}

export default Photos