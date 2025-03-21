import react from "react";
import './picture.css';

function Pic () 
{
    return (
        <div className="banner">
        <div className="slider" style={{ "--quantity": 10 }}>
            {[...Array(10)].map((_, index) => (
                <div className="item" style={{ "--position": index + 1 }} key={index}>
                    <img src="" alt="image" />
                </div>
            ))}
        </div>
        <div className="content">
            <h1 data-content="text">HAPPY BIRTHDAY</h1>
            <div className="author">
                <h2>Text</h2>
                <p><b>e</b></p>
            </div>
            <div className="model"></div>
        </div>
    </div>
        /*
     <div class="banner">
        <div class="slider" style="--quantity: 10;">
            <div class="item" style="--position : 1;"><img src="../../src/image/images.jpeg" alt="image"/> </div>
            <div class="item" style="--position : 2;"><img src="../../src/image/images.jpeg" alt="image"/> </div>
            <div class="item" style="--position :3"><img src="../../src/image/images.jpeg" alt="image"/> </div>
            <div class="item" style="--position : 4"><img src="../../src/image/images.jpeg" alt="image"/> </div>
            <div class="item" style="--position : 5"><img src="../../src/image/images.jpeg" alt="image"/> </div>
            <div class="item" style="--position : 6"><img src="../../src/image/images.jpeg" alt="image"/> </div>
            <div class="item" style="--position : 7"><img src="../../src/image/images.jpeg" alt="image"/> </div>
            <div class="item" style="--position : 8"><img src="../../src/image/images.jpeg" alt="image"/> </div>
            <div class="item" style="--position : 9"><img src="../../src/image/images.jpeg" alt="image"/> </div>
            <div class="item"style="--position : 10" ><img src="../../src/image/images.jpeg" alt="image"/> </div>
        </div>
        <div class="content">
            <h1 data-content="text"> HAPPY BIRTHDAY</h1>
            <div class="author">
                <h2>  Text</h2>
                <p> <b> e</b></p>
                <p> </p>
            </div>
            <div class="model"> </div>
        </div>
    </div> */

);
}
export default Pic;