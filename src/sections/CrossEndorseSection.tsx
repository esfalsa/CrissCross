import { useParams } from "react-router-dom";
import Layout from "@/components/Layout";
import { useState } from "react";

function UserNationSection() {
  const params = useParams();

  const [nations, setNations] = useState(
    Array.from({ length: 10 }, (_, i) => `Nation ${i + 1}`)
  );

  return (
    <Layout>
      <div className="space-y-4 p-4">
        <p className="rounded border border-green-400 bg-green-50 p-2 text-sm text-emerald-800 shadow-sm">
          Cross-endorsing{" "}
          <span className="font-bold">{params.pointNation}</span> as{" "}
          <span className="font-bold">{params.userNation}</span>.
        </p>
        <div>
          {nations[0] ? (
            <button
              className="block w-full rounded bg-blue-500 px-4 py-2 text-white shadow transition ease-in-out focus:border-blue-300 focus:ring-4 focus:ring-blue-200 focus-visible:outline-none"
              onClick={() => {
                window.open(
                  `https://www.nationstates.net/nation=${nations[0]}#composebutton`,
                  "_blank",
                  "noreferrer"
                );
                setNations(nations.slice(1));
              }}
            >
              Open next
            </button>
          ) : (
            <button
              className="block w-full rounded bg-slate-200 px-4 py-2 text-slate-500 shadow transition ease-in-out focus:border-blue-300 focus:ring-4 focus:ring-blue-200 focus-visible:outline-none"
              disabled
              onClick={() => {
                window.open(
                  `https://www.nationstates.net/nation=${nations[0]}#composebutton`,
                  "_blank",
                  "noreferrer"
                );
                setNations(nations.slice(1));
              }}
            >
              All links opened!
            </button>
          )}
        </div>
        <h3 className="font-semibold tracking-tight">All Nations to Endorse</h3>
        <div className="rounded border border-slate-300 bg-white px-4 py-2.5 shadow-sm">
          <div className="h-48 overflow-y-scroll">
            <div className="sticky top-0 z-10 h-2 w-full bg-gradient-to-t from-transparent to-white" />
            <div className="space-y-2">
              {nations.map((nation) => (
                <button
                  key={nation}
                  className="group flex w-full flex-row rounded border p-2"
                  onClick={() => {
                    window.open(
                      `https://www.nationstates.net/nation=${nation}#composebutton`,
                      "_blank",
                      "noreferrer"
                    );
                    setNations(nations.filter((each) => each !== nation));
                  }}
                >
                  <span>{nation}</span>
                  <span className="duration-250 ml-auto opacity-0 transition ease-in-out group-hover:opacity-100">
                    →
                  </span>
                </button>
              ))}
            </div>
            <div className="sticky bottom-0 z-10 h-2 w-full -scroll-mt-4 bg-gradient-to-b from-transparent to-white" />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default UserNationSection;
