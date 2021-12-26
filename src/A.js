import Spinner from './spinner/Spinner'

const A = () => {
  return (
    <div>
      <div style={{ backgroundColor: "black", height: "500px" }}>k</div>
      <div style={{ backgroundColor: "green", height: "500px" }}>l</div>
      <div style={{ backgroundColor: "white", height: "500px" }}>
        <p>CLick Me</p>

        <div style={{ position: "fixed", top: "300px", left: "40%" , color:'purple'}}>
          <Spinner />
        </div>
      </div>
    </div>
  );
};

export default A;
