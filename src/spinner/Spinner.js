import './spinner.css'

const Spinner = () => {
  return (
    <div style={{height:'2px', width:'2px'}} class="drawing" id="loading">
      <div class="loading-dot"></div>
    </div>
  );
};

export default Spinner;
