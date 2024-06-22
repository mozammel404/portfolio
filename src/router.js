import { createBrowserRouter } from "react-router-dom";

import App from './App/App';
import Home from './pages/Home/Home';

import Error404 from "./Error 404/Error 404";
import AboutMe from "./pages/About-Me/About-Me";
import Projects from "./pages/Projects/Projects";
import Project from "./pages/Project/Project";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error404 />,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/about-me',
        element: <AboutMe></AboutMe>
      },
      {
        path: '/projects',
        element: <Projects></Projects>
      },
      {
        path: '/project/:name',
        element: <Project></Project>
      }
    ],
  }
]);

export default router;