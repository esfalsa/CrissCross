import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import ErrorMessage from "@/components/ErrorMessage";

function URLParamsErrorPage() {
  return (
    <Layout>
      <ErrorMessage title="Could not parse URL.">
        <p>
          It looks like something strange happend with your URL. Please try
          repeating the cross-endorsment process from the{" "}
          <Link to="/" className="text-blue-500 hover:underline">
            first page
          </Link>{" "}
          to see if this error persists.
        </p>
      </ErrorMessage>
    </Layout>
  );
}

export default URLParamsErrorPage;
