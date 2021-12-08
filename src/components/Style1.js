import {  Tween, ScrollTrigger} from "react-gsap";

const Style1 = () => {
  const htmlEle = [
    "Product 1",
    "Product 2",
    "Product 3",
    "Product 4",
    "Product 5",
  ];
  return (
    <div style={{ width: "80%", margin: "auto" }}>
      {htmlEle.map((html, index) => (
        <ScrollTrigger
          key={index}
          start="-200px center"
          end="200px center"
          scrub={0.5}
          markers
        >
          <Tween
            to={{
              x: "300px",
            }}
          >
            <div> {html} </div>
          </Tween>
        </ScrollTrigger>
      ))}
    </div>
  );
};

export default Style1;
