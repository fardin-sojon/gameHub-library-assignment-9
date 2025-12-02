import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home";
import Profile from "../Pages/Profile/Profile";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Error404 from "../Pages/Error404";
import GameDetails from "../Pages/GameDetails";
import AllGame from "../Pages/AllGame";
import PrivateRoute from "../Provider/PrivateRoute";
import AboutUs from "../Pages/AboutUs";
import ForgetPassword from "../Pages/ForgetPassword";
import UpdateProfile from "../Pages/Profile/UpdateProfile";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("/gamehub.json"),
      },
      {
        path: "/profile",
        Component: Profile,
      },
      {
        path: "/profile/edit",
        Component: UpdateProfile,
      },
      {
        path: "/auth-login",
        Component: Login,
      },
      {
        path: "/auth-register",
        Component: Register,
      },
      {
        path: "/all-game",
        Component: AllGame,
        loader: () => fetch("/gamehub.json").then(res => res.json()),
      },
      {
        path: "game-details/:id",
        element: (
          <PrivateRoute>
            <GameDetails></GameDetails>
          </PrivateRoute>
        ),
        loader: () => fetch("/gamehub.json"),
      },
      {
        path: "about-us",
        loader: async () => {
          const res = await fetch("/team.json");
          const data = await res.json();
          return data; 
        },
        Component: AboutUs,
      },

      {
        path: "/forget-password",
        Component: ForgetPassword,
      },
      {
        path: "/*",
        Component: Error404,
      },
    ],
  },
]);
