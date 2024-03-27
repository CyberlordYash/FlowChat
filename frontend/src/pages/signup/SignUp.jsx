import GenderCheck from "./GenderCheck";

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Signup
          <span className=" text-blue-100"> FlowChat </span>
        </h1>
        <form>
          <div>
            <label className="label p-2">
              <span className=" text-base label-text"> Full name</span>
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full input input-bordered h-10"
            ></input>
          </div>
          <div>
            <label className="label p-2">
              <span className=" text-base label-text"> Username</span>
            </label>
            <input
              type="text"
              placeholder="username"
              className="w-full input input-bordered h-10"
            ></input>
          </div>
          <div>
            <label className="label p-2">
              <span className=" text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="w-full input input-bordered h-10"
            ></input>
          </div>
          <div>
            <label className="label p-2">
              <span className=" text-base label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="confirm password"
              className="w-full input input-bordered h-10"
            ></input>
          </div>
          <GenderCheck />
          <a
            href="#"
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            Already have an account
          </a>
          <div>
            <button className="btn glass mt-1 btn-sm btn-block">Signup</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
