import TopBanner from "./TopBanner"

function Information(){
    return(
        <div className="screen flexItems">
            <TopBanner screenName="Download"/>
            <div className="information mainBody oneBannerBody flexItems">
                <p>Information</p>
            </div>
        </div>
    )
}

export default Information