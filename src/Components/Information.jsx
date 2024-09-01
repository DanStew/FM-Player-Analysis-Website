import TopBanner from "./TopBanner"

function Information({setCurrentScreen}){
    return(
        <div className="screen">
            <TopBanner screenName="Download" setCurrentScreen={(screen) => setCurrentScreen(screen)}/>
            <div className="information mainBody flexItems">
                <p>Information</p>
            </div>
        </div>
    )
}

export default Information