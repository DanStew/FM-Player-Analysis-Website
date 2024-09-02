//Importing the neccesary components
import Home from "./Home";
import Photos from "./Photos"
import Download from "./Download"
import Information from "./Information"

function Index(){
    return(
        <div>
            <div id="Home" className="section flexItems">
                <Home />
            </div>
            <div id="Photos" className="section flexItems">
                <Photos />
            </div>
            <div id="Download" className="section flexItems">
                <Download />
            </div>
            <div id="Information" className="section flexItems">
                <Information />
            </div>
        </div>
    )
}

export default Index