import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./Pages/Home.js";
import Bears from "./Pages/Bears.js";
import Tiger from "./Pages/Tiger";
import Wolf from "./Pages/Wolf";
import Camel from "./Pages/Camel";
import AntelopsDeer from "./Pages/AntelopsDeer.js";
import Lemurs from "./Pages/Lemurs";
import RaccoonSurkat from "./Pages/RaccoonSurkat";
import BirdsPrey from "./Pages/BirdsPrey";
import ExoticBirds from "./Pages/ExoticBirds";
import WaterfowlRare from "./Pages/WaterfowlRare";

const RootLayout = () => (
  <>
    <Header />
    <div style={{ paddingTop: 70 }}>
      <Outlet />
    </div>
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "bears", element: <Bears /> },
      { path: "tiger", element: <Tiger /> },
      { path: "wolf", element: <Wolf /> },
      { path: "camel", element: <Camel /> },
      { path: "antelops-deer", element: <AntelopsDeer /> },
      { path: "lemurs", element: <Lemurs /> },
      { path: "raccoon-surkat", element: <RaccoonSurkat /> },
      { path: "birds-prey", element: <BirdsPrey /> },
      { path: "exotic-birds", element: <ExoticBirds /> },
      { path: "waterfowl-rare", element: <WaterfowlRare /> },
    ],
  },
]);

function App() {
  <div className='page'></div>
  return (
    <div className='page'>
      <RouterProvider router={router} />
      <div style={{backgroundColor: "green", width: "100%",height: "190px", borderTopRightRadius: "50%",  borderTopLeftRadius: "50%", overflow: "hidden",  }}></div>
    </div>
  );
}

export default App;
