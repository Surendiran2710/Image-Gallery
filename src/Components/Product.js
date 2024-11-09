import one from '../assets/image/dog1.jpg'
import two from '../assets/image/dog2.jpg'
import three from '../assets/image/dog3.jpg'
import four from '../assets/image/dog4.jpg'
import five from '../assets/image/dog5.jpg'
import six from '../assets/image/dog6.jpg'
import seven from '../assets/image/dog7.jpg'
import eight from '../assets/image/dog8.jpg'



function Product() {
    return (

        <div className="container">

            <h1>Dogs Gallery</h1>


            <div className="image-container">

                <div class="image-s1">
                    <img src={one} alt="pocket-size-puppy"></img>
                    <h2>Pocket Size Puppy</h2>
                </div>
                <div class="image-s1">
                    <img src={two} alt="Cute-pitbull-puppy"></img>
                    <h2>Cute Pitbull Puppy</h2>
                </div>
                <div class="image-s1">
                    <img src={three} alt="american-bully"></img>
                    <h2>Bully</h2>
                </div>
                <div class="image-s1">
                    <img src={four} alt="german shepherd"></img>
                    <h2>Shepherd</h2>
                </div>
                <div class="image-s1">
                    <img src={five} alt="siberian-husky"></img>
                    <h2>Husky</h2>
                </div>
                <div class="image-s1">
                    <img src={six} alt="poodle"></img>
                    <h2>Poodle</h2>
                </div>
                <div class="image-s1">
                    <img src={seven} alt="Shihtzu"></img>
                    <h2>Shih Tzu</h2>
                </div>
                <div class="image-s1">
                    <img src={eight} alt="boxer"></img>
                    <h2>Boxer</h2>
                </div>



            </div>
        </div>
    )



}

export default Product