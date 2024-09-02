function TopBanner({screenName}){

    function goToSection(){
        const aTag = document.createElement("a")
        aTag.href = "#" + screenName
        document.body.appendChild(aTag)
        aTag.click()
        aTag.remove()
    }

    return(
        <div onClick={() => goToSection()}className="banner topBanner flexItems">
            <div className="bannerContent flexItems">
                <p>{screenName}</p>
                <span class="material-symbols-outlined upArrow">arrow_upward</span>
            </div>
            <div className="bannerBottom flexItems"></div>
        </div>
    )
}

export default TopBanner