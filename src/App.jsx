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
        path: "create post",
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
    path: "/sign up",
    element: <Signup />,
  },
]);

function App() {
  return (
    <div className="mx-3 mt-5 2xl:desktop-screen 2xl:mx-auto">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
