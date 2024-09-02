import BottomBanner from "./BottomBanner"
import TopBanner from "./TopBanner"

function Download(){

    //Function to implement the download of files for the user
    function downloadFiles(){
        const aTag = document.createElement("a")
        aTag.href = "http://localhost:3000/FMDataAnalysis.zip"
        aTag.setAttribute("download","FMDataAnalysis")
        document.body.appendChild(aTag)
        aTag.click()
        aTag.remove()
    }

    return(
        <div className="screen flexItems">
            <TopBanner screenName="Photos"/>
            <div className="download mainBody twoBannerBody flexItems">
                <div className="information flexItems">
                    <p className="subheading">Download</p>
                    <p className="regular">Click below to download the Zip Folder for the application</p>
                    <p className="regular">Within this folder, read the ReadMe.md file to better understand the application and what you need to do in order to do use</p>
                    <p className="regular">Enjoy!</p>
                </div>
                <div className="button flexItems">
                    <button l onClick={() => downloadFiles()}>Download</button>
                </div>
            </div>
            <BottomBanner screenName="Information"/>
        </div>
    )
}

export default Download