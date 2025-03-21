import Sidebar from '../navbar/menubar';
import Navbar from '../navbar/navbar';
function Container() {
    return(
       
<div className="Container">
   
  
    <h1>ma page</h1>
<p>Container</p>
<div > <h1> test Lorem Lorem Lore lore</h1></div>
<div className="banner">
                <div className="slider" style={{ "--quantity": 10 }}>
                    {[...Array(10)].map((_, index) => (
                        <div className="item" style={{ "--position": index + 1 }} key={index}>
                            <img src="/image/images.jpeg" alt="image" />
                        </div>
                    ))}
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
    </div> 
</div>

    );
    
}
export default Container;