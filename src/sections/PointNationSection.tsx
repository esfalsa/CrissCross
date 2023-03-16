import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";

interface FormInputs {
  pointNation: string;
}

function PointNationSection() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const navigate = useNavigate();

  return (
    <Layout>
      <form
        onSubmit={handleSubmit(({ pointNation }) =>
          navigate(`/cross/${pointNation}`)
        )}
      >
        <div className="p-4">
          <p>
            <label>
              Who would you like to cross-endorse?
              <input
                className={`duration-250 mt-1 w-full rounded border shadow-sm transition ease-in-out focus:ring-4 ${
                  errors.pointNation
                    ? "border-red-500 focus:border-red-500 focus:ring-red-200"
                    : "border-slate-300 focus:border-blue-300 focus:ring-blue-200"
                }`}
                type="text"
                placeholder="Testlandia"
                {...register("pointNation", {
                  required: true,
                })}
              />
              {errors.pointNation?.type === "required" && (
                <span className="text-sm text-red-500">
                  Please enter the nation you want to cross-endorse.
                </span>
              )}
            </label>
          </p>
        </div>

        <div className="bg-white/75 p-4">
          <button
            className="block w-full rounded bg-blue-500 px-4 py-2 text-white shadow transition ease-in-out focus:border-blue-300 focus:ring-4 focus:ring-blue-200 focus-visible:outline-none"
            type="submit"
          >
            Next
          </button>
        </div>
      </form>
    </Layout>
  );
}

export default PointNationSection;
