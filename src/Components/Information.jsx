import TopBanner from "./TopBanner"

function Information(){
    return(
        <div className="screen flexItems">
            <TopBanner screenName="Download"/>
            <div className="information mainBody oneBannerBody flexItems">
                <div className="infoHeader">
                    <p className="mainTitle">Information</p>
                </div>
                <div className="mainInfo">
                    <div className="generalInfo">
                        <p className="regular">This application is currently able to generate Player Scores for every role in Football Manager and is able to have custom attribute rankings set by you, the user. In future, there will be further updates and features coming to this application. This includes hopefully Transfer Suggestion system and Tactic Suggestion, depending on the players you give the system</p>
                    </div>
                    <div className="credits">
                        <p className="regular">I would like to give credit to <a href="https://www.youtube.com/@squirrel_plays_fof4318" target="_blank">Squirrel_Plays</a> as this project has taken heavy inspiration from his own application. Although all code has been written by me, many ideas and design has currently been taken from his own application</p>
                    </div>
                    <div className="specifics">
                        <p className="regular">If you would like to view any of the specifics when making the project, please see the <a href="https://github.com/DanStew/FMDataAnalysis" target="_blank">Github</a></p>
                        <p className="regular">If you would like to ask any queries, please email danielstewarts2004@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Information