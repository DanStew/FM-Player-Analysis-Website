import BottomBanner from "./BottomBanner"
import TopBanner from "./TopBanner"

//Importing the images
import GUIHomeScreen from "../Images/FMGUIHome.png"
import GUIPlayerScores from "../Images/FMGUIPlayerScores.png"
import GUIOutputTable from "../Images/FMGUIOutputTable.png"
import GUIUpdateAttributes from "../Images/FMGUIUpdateRankings.png"

function Photos(){

    //Function to automatically navigate the windows
    var counter = 1
    setInterval(function(){
        document.getElementById("radio" + counter).checked = true
        counter++
        if (counter > 4){
            counter = 1
        }
    },5000)

    return(
        <div className="screen flexItems">
            <TopBanner screenName="Home"/>
            <div className="photos mainBody twoBannerBody flexItems">
                <div className="information">
                    <p>Below can be seen some of the images from the GUI section of this application. This includes the HTML Output Table that will be produced when making player scores.</p>
                </div>
                <div className="slideshow">
                    <div className="slider">
                        <div className="slides">
                            {/* Making the radio buttons to use */}
                            <input type="radio" name="radio-btn" id="radio1"/>
                            <input type="radio" name="radio-btn" id="radio2"/>
                            <input type="radio" name="radio-btn" id="radio3"/>
                            <input type="radio" name="radio-btn" id="radio4"/>
                            {/* Making the slides */}
                            <div className="slide first">
                                <img src={GUIHomeScreen} alt="GUI Home Screen" />
                            </div>
                            <div className="slide">
                                <img src={GUIPlayerScores} alt="GUI Player Scores Screen" />
                            </div>
                            <div className="slide">
                                <img src={GUIOutputTable} alt="GUI Player Scores Output Table" />
                            </div>
                            <div className="slide">
                                <img src={GUIUpdateAttributes} alt="GUI Update Attribute Rankings Screen" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <BottomBanner screenName="Download"/>
        </div>
    )
}

export default Photos