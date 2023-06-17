import { Route, Routes } from "react-router-dom";
import ClientLayout from "./components/layouts/ClientLayout";
import Products from "./pages/client/Products";
import ProductDetail from "./pages/client/ProductDetail";
import Hompage from "./pages/client/Hompage";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* client layout */}
        <Route path="/" element={<ClientLayout />}>
          <Route index element={<Hompage/>} />
          <Route path="products">
            <Route index element={<Products />} />
            <Route path=":id/productdetail" element={<ProductDetail />} />
          </Route>
        </Route>
        {/* end client layout */}
      </Routes>
    </div>
  );
}

export default App;
