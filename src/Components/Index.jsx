//Importing the neccesary components
import Home from "./Home";
import Photos from "./Photos"
import Download from "./Download"
import Information from "./Information"

function Index(){
    return(
        <div>
            <div id="Home" className="section">
                <Home />
            </div>
            <div id="Photos" className="section">
                <Photos />
            </div>
            <div id="Download" className="section">
                <Download />
            </div>
            <div id="Information" className="section">
                <Information />
            </div>
        </div>
    )
}

export default Index