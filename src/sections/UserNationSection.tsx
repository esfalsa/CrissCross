import { useForm } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";

interface FormInputs {
  userNation: string;
}

function UserNationSection() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();
  const navigate = useNavigate();
  const params = useParams();

  return (
    <Layout>
      <form
        onSubmit={handleSubmit(({ userNation }) =>
          navigate(`/cross/${params.pointNation}/as/${userNation}`)
        )}
      >
        <div className="space-y-4 p-4">
          <p className="rounded border border-green-400 bg-green-50 p-2 text-sm text-emerald-800 shadow-sm">
            Preparing to endorse{" "}
            <span className="font-bold">{params.pointNation}</span> and all
            nations endorsing it.
          </p>
          <p>
            <label>
              What is your nation?
              <input
                className={`duration-250 mt-1 w-full rounded border shadow-sm transition ease-in-out focus:ring-4 ${
                  errors.userNation
                    ? "border-red-500 focus:border-red-500 focus:ring-red-200"
                    : "border-slate-300 focus:border-blue-300 focus:ring-blue-200"
                }`}
                type="text"
                placeholder="Mynation"
                {...register("userNation", {
                  required: true,
                })}
                autoFocus
              />
              {errors.userNation?.type === "required" && (
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

export default UserNationSection;
