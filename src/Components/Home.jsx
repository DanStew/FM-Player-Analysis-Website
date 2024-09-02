import BottomBanner from "./BottomBanner"

function Home(){

    function goToSection(location){
        const aTag = document.createElement("a")
        aTag.href = "#" + location
        document.body.appendChild(aTag)
        aTag.click()
        aTag.remove()
    }

    return(
        <div className="screen flexItems">
            <div className="home mainBody oneBannerBody flexItems">
                <div className="mainTitle">
                    <p>Football Manager</p>
                    <p>Player Analyser</p>
                </div>
                <div className="information">
                    <p>This is a Football Manager Player Analyser Application made using Python. It includes a CLI and GUI interface for the user to use and enables you to be able to generate Player Scores for players that you input into the system. The system also enable you to change the attribute rankings, to customise the player scores for your need. More infromation on how to use the system can be seen within the download folder.</p>
                </div>
                <div className="transportArea">
                    <div className="subheading">
                        <p className="flexItems">Jump To : </p>
                    </div>
                    <div className="buttonsArea flexItems">
                        <button onClick={() => goToSection("Photos")}>Photos</button>
                        <button onClick={() => goToSection("Download")}>Download</button>
                        <button onClick={() => goToSection("Information")}>Information</button>
                    </div>
                </div>
            </div>
            <BottomBanner screenName="Photos"/>
        </div>
    )
}

export default Home