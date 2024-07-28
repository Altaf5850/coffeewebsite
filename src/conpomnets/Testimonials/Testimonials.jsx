import React from "react";
import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "Altaf Pathan",
    text: "A frontend developer specializes in creating the visual and interactive elements of a website or web application that users interact with directly.Their role involves designing and implementing the layout, user interface (UI), and user experience (UX) using technologies such as HTML, CSS, and JavaScript.",
    img: "https://static.vecteezy.com/system/resources/thumbnails/027/951/137/small_2x/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png",
  },
  {
    id: 2,
    name: "Sahil Bhange",
    text: "A backend developer is responsible for building and maintaining the server-side logic, databases, and application programming interfaces (APIs) that power web and mobile applications. They ensure that the server, application, and database communicate and function seamlessly.",
    img: "https://static.vecteezy.com/system/resources/previews/041/469/279/non_2x/3d-illustration-family-father-png.png",
  },
  {
    id: 3,
    name: "Irfan Shaikh",
    text: "A DevOps developer bridges the gap between software development and IT operations, aiming to deliver high-quality software swiftly and reliably. They utilize practices like continuous integration, continuous delivery, and infrastructure as code to automate and streamline processes.",
    img: "https://static.vecteezy.com/system/resources/previews/027/951/130/non_2x/africa-guy-3d-avatar-character-illustrations-png.png",
  },
  {
    id: 5,
    name: "Ram Kedase",
    text: "A Sales Manager is responsible for leading and guiding a team of salespeople in an organization. They set sales goals & quotas, build a sales plan, analyze data, assign sales territories, and mentor the members of their sales team.",
    img: "https://cdn3d.iconscout.com/3d/premium/thumb/young-businessman-avatar-5692595-4743364.png?f=webp",
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10">
      <div className="container">
        {/* header section */}
        <div className="mb-10">
          <h1
            data-aos="fade-up"
            className="text-center text-4xl font-bold font-cursive"
          >
            Testimonials
          </h1>
        </div>

        {/* Testimonial cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div className="my-6">
                <div
                  key={data.id}
                  className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl  bg-primary/10 relative"
                >
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  {/* content section */}
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs text-gray-500">{data.text}</p>
                      <h1 className="text-xl font-bold text-black/80  font-cursive2">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
