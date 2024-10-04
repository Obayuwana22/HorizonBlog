import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  CreatePost,
  HomeLayout,
  Landing,
  Login,
  Posts,
  Profile,
  Signup,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "posts",
        element: <Posts />,
      },
      {
        path: "createpost",
        element: <CreatePost />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
]);

function App() {
  return (
    <div className="mx-3 mt-5  2xl:desktop-screen 2xl:mx-auto">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
