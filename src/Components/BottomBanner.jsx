function BottomBanner({screenName,setCurrentScreen}){
    return(
        <div onClick={() => setCurrentScreen(screenName)} className="banner bottomBanner flexItems">
            <div className="bannerTop flexItems"></div>
            <div className="bannerContent flexItems">
                <p>{screenName}</p>
            </div>
        </div>
    )
}

export default BottomBanner