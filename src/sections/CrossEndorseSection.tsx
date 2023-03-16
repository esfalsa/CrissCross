import { useLoaderData, useParams } from "react-router-dom";
import Layout from "@/components/Layout";
import ErrorMessage from "@/components/ErrorMessage";
import URLParamsErrorPage from "@/components/URLParamsErrorPage";
import { useEffect, useState } from "react";
import { canonicalize, prettify } from "@/utils/nation-names";

function validateNationData(nations: unknown): nations is string[] {
  return Array.isArray(nations) && nations.every((n) => typeof n === "string");
}

function UserNationSection() {
  const { pointNation, userNation } = useParams();

  if (!pointNation || !userNation) {
    return <URLParamsErrorPage />;
  }

  const originalNations = useLoaderData();

  if (!validateNationData(originalNations)) {
    return (
      <Layout>
        <ErrorMessage title="An unknown error occured.">
          <p>
            If this error persists, please try manually endorsing{" "}
            <a
              href={`https://www.nationstates.net/${canonicalize(pointNation)}`}
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 hover:underline"
            >
              {prettify(pointNation)}
            </a>{" "}
            and all nations endorsing it.
          </p>
        </ErrorMessage>
      </Layout>
    );
  }

  const [nations, setNations] = useState(originalNations);

  useEffect(() => {
    setNations(originalNations);
  }, [originalNations]);

  return (
    <Layout>
      <div className="space-y-4 p-4">
        <p className="rounded border border-green-400 bg-green-50 p-2 text-sm text-emerald-800 shadow-sm">
          Cross-endorsing{" "}
          <span className="font-bold">{prettify(pointNation)}</span> as{" "}
          <span className="font-bold">{prettify(userNation)}</span>.
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
        <div>
          <h3 className="mb-1 font-semibold tracking-tight">
            All Nations to Endorse
          </h3>
          <div className="rounded border border-slate-300 bg-white px-4 py-2 shadow-sm">
            <div className="h-60 overflow-y-scroll">
              <div className="sticky top-0 z-10 h-2.5 w-full bg-gradient-to-t from-transparent to-white" />
              <div className="space-y-2">
                {nations.map((nation) => (
                  <button
                    key={nation}
                    className="group flex w-full flex-row rounded border p-2"
                    onClick={() => {
                      window.open(
                        `https://www.nationstates.net/nation=${canonicalize(
                          nation
                        )}#composebutton`,
                        "_blank",
                        "noreferrer"
                      );
                      setNations(nations.filter((each) => each !== nation));
                    }}
                  >
                    <span>{prettify(nation)}</span>
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
      </div>
    </Layout>
  );
}

export default UserNationSection;
