import Nav from "../Components/Nav"
import Banner from "../Components/Banner"
import Card1 from "../Components/Card1"
import Card2 from "../Components/Card2"
import Card3 from "../Components/Card3"


function Main_page(){
    return(
        <>
            <div>
                <Nav/>
                <Banner/>
                <div className="Card-container">
                    <Card1/>
                    <Card2/>
                    <Card3/>
                </div>
            </div>
        </>
    )
}

export default Main_page