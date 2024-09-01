import BottomBanner from "./BottomBanner"
import TopBanner from "./TopBanner"

function Download(){
    return(
        <div className="screen">
            <TopBanner screenName="Photos"/>
            <div className="download mainBody flexItems">
                <a href="http://localhost:3000/FMDataAnalysis.zip" download>Download</a>
            </div>
            <BottomBanner screenName="Information"/>
        </div>
    )
}

export default Download