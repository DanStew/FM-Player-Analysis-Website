function Home({setCurrentScreen}){
    return(
        <div>
            Home
            <button onClick={() => setCurrentScreen("Information")}></button>
        </div>
    )
}

export default Home