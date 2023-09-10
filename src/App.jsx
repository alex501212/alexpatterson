import Carousel from "./components/Carousel/Carousel";
import Sidebar from "./components/Sidebar/Sidebar";
import Other from "./components/Other/Other";

const App = () => {
  return (
    <div>
      <Sidebar />
      <div>
        <h1 className="ml-[450px] font-bold text-4xl top-[30px] relative">
          Recent Projects
        </h1>
        <Carousel />
        <h1 className="ml-[450px] font-bold text-4xl top-[30px] relative">
          Other Projects
        </h1>
        <Other />
      </div>
    </div>
  );
};

export default App;
