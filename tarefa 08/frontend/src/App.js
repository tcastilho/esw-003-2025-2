import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./Layout.js";
import ErrorPage from "./error/Error.js";
import Home from "./home/Home.js";
import Localidades from "./localidades/Localidades.js";
import Pacotes from "./pacotes/Pacotes.js";
import PacoteDetails from "./pacotes/PacoteDetails.js";
import LocalidadeDetails from "./localidades/LocalidadeDetails.js";

import { loadPacote, loadPacotes } from "./pacotes/stub.js";
import { loadLocalidade, loadLocalidades } from "./localidades/stubs.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage/>,
    children: [{
      index: true,
      element: <Home/>
    }, {
      path: "/pacotes",
      loader: async ({request}) => {
        const url = new URL(request.url);
        const criteria = url.searchParams.get('q');
        const page = url.searchParams.get('page') ?? '0';
        const size = 15;
        return loadPacotes(criteria, page, size);
      },
      element: <Pacotes/>
    }, {
      path: "/pacotes/:id",
      loader: async ({params}) => loadPacote(params.id),
      element: <PacoteDetails/>
    }, {
      path: "/localidades",
      loader: async({request}) => {
       const url = new URL(request.url);
        const criteria = url.searchParams.get('q');
        const page = url.searchParams.get('page') ?? '0';
        const size = 15;
        return loadLocalidades(criteria, page , size);
      },
      element: <Localidades/>
    },{
      path: "/localidades/:id",
      loader: async ({params}) => loadLocalidade(params.id),
      element: <LocalidadeDetails/>
    }]
  }
]);

function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App;