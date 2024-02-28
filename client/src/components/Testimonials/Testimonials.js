import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import "./Testimonials.scss";

const TestimonialSlider = () => {
  return (
    <div className="py-20 max-w-5xl mx-auto px-6">
      <Carousel
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoFocus={true}
        emulateTouch={true}
        className="corsel"
      >
        <div className="testimonialcarousel flex justify-center items-center ">
          <div className="testimonialcontainer border border-grey-200  shadow-md mx-10  z-20 flex flex-col space-y-4 justify-center items-center w-full h-full">
            <FormatQuoteIcon style={{ fontSize: "6rem" }} />
            <h5 className="text-black text-3xl font-medium text-center leading-5 md:text-3xl">
              Something Big
            </h5>
            <p className="text-black w-1/2 text-3xl text-center leading-5 md:text-xl md:leading-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              doloribus sit numquam reiciendis facilis dolores nam eligendis
              facilis dolores nam eligendis facilis dolores nam eligendis
              facilis dolores nam eligendi eaque suscipit quisquam?
            </p>
          </div>
        </div>
        <div className="testimonialcarousel flex justify-center items-center ">
          <div className="testimonialcontainer border border-grey-200  shadow-md mx-10 py-10 z-20 flex flex-col space-y-4 justify-center items-center w-full h-full">
            <FormatQuoteIcon style={{ fontSize: "6rem" }} />
            <h5 className="text-black text-3xl font-medium text-center leading-5 md:text-3xl">
              Something Big
            </h5>
            <p className="text-black w-1/2 text-3xl text-center leading-5 md:text-xl md:leading-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              doloribus sit numquam reiciendis facilis dolores nam eligendis
              facilis dolores nam eligendis facilis dolores nam eligendis
              facilis dolores nam eligendi eaque suscipit quisquam?
            </p>
          </div>
        </div>
        <div className="testimonialcarousel flex justify-center items-center ">
          <div className="testimonialcontainer border border-grey-200  shadow-md mx-10 py-10 z-20 flex flex-col space-y-4 justify-center items-center w-full h-full">
            <FormatQuoteIcon style={{ fontSize: "6rem" }} />
            <h5 className="text-black text-3xl font-medium text-center leading-5 md:text-3xl">
              Something Big
            </h5>
            <p className="text-black w-1/2 text-3xl text-center leading-5 md:text-xl md:leading-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              doloribus sit numquam reiciendis facilis dolores nam eligendis
              facilis dolores nam eligendis facilis dolores nam eligendis
              facilis dolores nam eligendi eaque suscipit quisquam?
            </p>
          </div>
        </div>
        <div className="testimonialcarousel flex justify-center items-center ">
          <div className="testimonialcontainer border border-grey-200  shadow-md mx-10 py-10 z-20 flex flex-col space-y-4 justify-center items-center w-full h-full">
            <FormatQuoteIcon style={{ fontSize: "6rem" }} />
            <h5 className="text-black text-3xl font-medium text-center leading-5 md:text-3xl">
              Something Big
            </h5>
            <p className="text-black w-1/2 text-3xl text-center leading-5 md:text-xl md:leading-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              doloribus sit numquam reiciendis facilis dolores nam eligendis
              facilis dolores nam eligendis facilis dolores nam eligendis
              facilis dolores nam eligendi eaque suscipit quisquam?
            </p>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default TestimonialSlider;
