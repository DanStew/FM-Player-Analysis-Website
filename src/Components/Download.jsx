import BottomBanner from "./BottomBanner"
import TopBanner from "./TopBanner"

function Download({setCurrentScreen}){
    return(
        <div className="screen">
            <TopBanner screenName="Photos" setCurrentScreen={(screen) => setCurrentScreen(screen)}/>
            <div className="download mainBody flexItems">
                <a href="http://localhost:3000/FMDataAnalysis.zip" download>Download</a>
            </div>
            <BottomBanner screenName="Information" setCurrentScreen={(screen) => setCurrentScreen(screen)}/>
        </div>
    )
}

export default Download