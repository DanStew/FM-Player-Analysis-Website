function TopBanner({screenName,setCurrentScreen}){
    return(
        <div onClick={() => setCurrentScreen(screenName)} className="banner topBanner flexItems">
            <div className="bannerContent flexItems">
                <p>{screenName}</p>
            </div>
            <div className="bannerBottom flexItems"></div>
        </div>
    )
}

export default TopBanner