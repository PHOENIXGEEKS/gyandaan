export default function auth(){

    // const [authType, setAuthType] = useState("login");

    var authType = "login";
    var userType = "student";

    const setAuthType = () => {

    }

    return (
      <div id="login_page" className="w-full flex h-full">
        {/* Left part */}
        <div className="w-1/3 h-screen bg-red-500"></div>
        {/* Right part */}
        <div className="w-2/3 h-full p-20">
          {/* heading----option to signup----form----button */}
          <div>
            {authType == "login" ? (
              <h1 className="text-4xl font-bold">Login</h1>
            ) : (
              <h1>Signup</h1>
            )}
          </div>
          <div className="mt-4">
            {authType == "login" ? (
              <h1 className="">
                Don't have an account yet?{" "}
                <span
                  className="text-red-500 underline"
                  onclick={() => {
                    return setAuthType("signup");
                  }}
                >
                  Signup
                </span>
              </h1>
            ) : (
              <h1>
                <h1 className="">
                  Already have an account?{" "}
                  <span
                    className="text-red-500 underline"
                    onclick={() => {
                      return setAuthType("signup");
                    }}
                  >
                    Login
                  </span>
                </h1>
              </h1>
            )}
          </div>
          <div className="flex space-x-10 my-12">
            <button className="bg-red-500 rounded-full px-8 py-2 text-white border-2 border-red-500">
              Student
            </button>
            <button className="bg-white rounded-full px-8 py-2 text-red-500 border-2 border-red-500">
              Student
            </button>
          </div>
          <div>
            <form>
              <div className="flex flex-col space-y-4">
                <label for="email_id" value="">
                  Email:
                </label>
                <input
                  type="email"
                  required
                  name="email_id"
                  className="shadow-lg rounded-full px-4 py-2 w-80 border border-gray-100"
                  placeholder="elonmusk@tesla.com"
                />
                <label for="password" value="">
                  Password:
                </label>
                <input
                  type="password"
                  required
                  name="password"
                  className="shadow-lg rounded-full px-4 py-2 w-80 border border-gray-100"
                  placeholder="i_love_DogeCoin_3000"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-red-500 w-32 rounded-full px-8 py-2 text-white border-2 border-red-500 block mt-12 mb-4"
                >
                  Login
                </button>
              </div>
            </form>
            <a href="#" className="underline">Forget password</a>
          </div>
        </div>
      </div>
    );
}