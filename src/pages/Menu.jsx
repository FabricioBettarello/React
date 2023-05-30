import ColorSchemesExample from "./ColorSchemesExample"
import Carousel from './carousel'
import Card from './card'
import Card2 from './card2'
import Footer from './Footer'
import Card3 from "./card3"

function Menu (){
    return(
        <div>
            <ColorSchemesExample/><br/>
            <Carousel/><br/>
            <div className="row">
                <Card/>
                <Card2/>
                <Card3/>
            </div>
            <Footer/>
        </div>
    )
}

export default Menu