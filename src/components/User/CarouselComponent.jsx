import Glider from "react-glider";
import "glider-js/glider.min.css";


export default function CarouselComponent({ arrayUrls }) {



    console.log("El array es: ", arrayUrls);

    return (
        <div className="mb-9">
            {/* Component of carousel */}
            <Glider
                className="container-glider mt-11 ml-8 me-8"
                hasArrows
                draggable
                hasDots
                slidesToShow={2}
                slidesToScroll={1}
                dragVelocity={0.6}
            >


                {arrayUrls && arrayUrls.length > 0 ? (
                    arrayUrls.map((src, index) => {
                        return (
                            <div className=" p-5" key={index}>
                                <img src={src} alt="" className="" />
                            </div>
                        );
                    })
                ) : (
                    <p>No Images Available</p>
                )}

            </Glider>
        </div>
    );
}