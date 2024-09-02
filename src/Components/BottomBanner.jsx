function BottomBanner({screenName}){

    function goToSection(){
        const aTag = document.createElement("a")
        aTag.href = "#" + screenName
        document.body.appendChild(aTag)
        aTag.click()
        aTag.remove()
    }

    return(
        <div onClick={() => goToSection()} className="bottomBanner banner flexItems">
            <div className="bannerTop flexItems"></div>
            <div className="bannerContent flexItems">
                <p>{screenName}</p>
                <span className="material-symbols-outlined downArrow">arrow_downward</span>
            </div>
        </div>
    )
}

export default BottomBanner