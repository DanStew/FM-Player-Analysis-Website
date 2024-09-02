import BottomBanner from "./BottomBanner"
import TopBanner from "./TopBanner"

function Photos(){
    return(
        <div className="screen flexItems">
            <TopBanner screenName="Home"/>
            <div className="photos mainBody twoBannerBody flexItems">
                Photos
            </div>
            <BottomBanner screenName="Download"/>
        </div>
    )
}

export default Photos