import img1 from "../imgs/Pattern1.jpeg"

function Card1(){
    return(
        <>
            <div className="Card">
                <img src={img1}/>
                <h4>First Thing</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero repellendus exercitationem laboriosam asperiores voluptas facilis nisi cupiditate blanditiis iste enim dolorum iure repudiandae rerum magnam, cum nemo nesciunt. Omnis, recusandae.</p>
                <div>
                    <button className="btn-download">Download</button>
                    <button className="btn-like"><i class="fa-solid fa-heart"></i></button>
                </div>
            </div>
        </>
    )
}

export default Card1