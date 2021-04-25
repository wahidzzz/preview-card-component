import "./assets/styles/App.css";
import ContentHolder from "./components/ContentHolder/ContentHolder";
import ImageHolder from "./components/ImageHolder/ImageHolder";

function App() {
  return (
    <>
      <main>
        <div className="contentHolder">
          <ContentHolder />
        </div>
        <div className="imageHolder">
          <ImageHolder />
        </div>
      </main>
    </>
  );
}

export default App;
