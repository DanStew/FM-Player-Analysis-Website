import BottomBanner from "./BottomBanner"
import TopBanner from "./TopBanner"

function Download(){
    return(
        <div className="screen flexItems">
            <TopBanner screenName="Photos"/>
            <div className="download mainBody twoBannerBody flexItems">
                <a href="http://localhost:3000/FMDataAnalysis.zip" download>Download</a>
            </div>
            <BottomBanner screenName="Information"/>
        </div>
    )
}

export default Download