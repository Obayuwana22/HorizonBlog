import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import {
  CreatePost,
  HomeLayout,
  Landing,
  Login,
  Posts,
  Profile,
  Signup,
  ForgotPassword,
  SinglePost,
} from "./pages";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/signup" replace />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/home",
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
        path: "create-post",
        element: <CreatePost />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "single-post",
        element: <SinglePost />,
      },
    ],
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
