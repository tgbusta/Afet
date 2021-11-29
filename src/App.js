import "./App.css";
import PrivateLayout from "./Layouts/PrivateLayout";
import TokenService from "./Services/TokenService";
import PublicLayout from "./Layouts/PublicLayout";
import Navi from "./Components/Navi";
import Footer from "./Components/Footer";

function App() {
  const isAuth = TokenService.getToken();
  return (
    <div>
        <Navi/>
        {isAuth ? <PrivateLayout /> : <PublicLayout />}
        <Footer />
    </div>
   
  );
}

export default App;

  