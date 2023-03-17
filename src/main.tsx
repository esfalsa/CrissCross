import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import PointNationSection from "@/sections/PointNationSection";
import UserNationSection from "@/sections/UserNationSection";
import CrossEndorseSection from "@/sections/CrossEndorseSection";
import "@/index.css";
import { canonicalize } from "@/utils/nation-names";

const router = createHashRouter([
  {
    path: "/",
    element: <PointNationSection />,
  },
  {
    path: "/cross/:pointNation",
    element: <UserNationSection />,
  },
  {
    path: "/cross/:pointNation/as/:userNation",
    loader: async ({ params }) => {
      // TODO: proper error handling (API error response, no endorsements on point, etc.)

      if (!params.pointNation) return null;

      const endpoint = new URL("https://www.nationstates.net/cgi-bin/api.cgi");
      endpoint.search = new URLSearchParams({
        nation: canonicalize(params.pointNation),
        q: "endorsements",
        "User-Agent":
          "CrissCross/0.1.0 (by: Esfalsa, github.com/esfalsa/crisscross)",
      }).toString();

      const response = await fetch(endpoint, {
        headers: {
          "User-Agent":
            "CrissCross/0.1.0 (by: Esfalsa, github.com/esfalsa/crisscross)",
        },
      }).then((res) => res.text());

      const endorsers = new DOMParser()
        .parseFromString(response, "text/xml")
        .querySelector("ENDORSEMENTS")
        ?.textContent?.split(",");

      if (!endorsers) return null;

      return [
        params.pointNation,
        ...endorsers
          .filter((endorser) => endorser && endorser !== params.userNation)
          .reverse(),
      ];
    },
    element: <CrossEndorseSection />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} fallbackElement />
  </React.StrictMode>
);
