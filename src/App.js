import "./App.css";
// import "./styles.css";
import Testimonial from "./Components/Testimonial";
import reviews from "./Data";

function App() {
  return (
    <div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center">
      <h1>Our testimonials</h1>
      <div></div>
      {/* passing the data to testimonial Components */}
      <Testimonial reviews={reviews} />
    </div>
  );
}

export default App;
