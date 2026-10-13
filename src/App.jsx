import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import Home from "./screens/home";
import HowWeWork from "./screens/howWeWork";
import Blog from "./screens/blog";
import Account from "./screens/account";
import ViewPlans from "./screens/viewPlans";
import Layout from "./layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} /> 
          <Route path="/howWeWork" element={<HowWeWork />} />
        </Route>
       
          <Route path="/blog" element={<Blog />} />
          <Route path="/account" element={<Account />} />
          <Route path="/viewPlans" element={<ViewPlans />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
