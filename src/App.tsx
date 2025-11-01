import RootLayout from "./layout";
import HomePage from "./page";

function App() {
  return (
    <>
      <HomePage />
      <RootLayout>
        <div>
          {/* Alles wat in de layout moet verschijnen */}
          <h1>Welkom bij JuiceBar!</h1>
        </div>
      </RootLayout>
    </>
  );
}

export default App;
