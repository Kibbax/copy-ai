export default function AuthPage() {
  return <div className=" text-gray-200 pt-36">
    <div className="w-3/4 md:w-1/2 lg:w-1/3 m-auto pt-10 pb-10">
    <h1 className="text-3xl font-semibold pb-5">LOGIN</h1>
    <h2>Do you have an account in a COPY.AI?</h2>
    </div>
  <form className="w-3/4 md:w-1/2 lg:w-1/3 m-auto  ">
  <div className="mb-4">
    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2"></label>
    <input
      type="email"
      id="email"
      name="email"
      placeholder="E-mail adress"
      className="w-full py-2 px-3  bg-zinc-500 bg-opacity-30 rounded-lg focus:outline-none"
      required
    />
  </div>
  <div className="mb-4">
    <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2"></label>
    <input
      type="password"
      id="password"
      name="password"
      placeholder="Password"
      className="w-full py-2 px-3 bg-zinc-500 bg-opacity-30 rounded-lg focus:outline-none"
      required
    />
  </div>
  <button
    type="submit"
    className="block m-auto bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-1/2 "
  >
    Login
  </button>
</form>
</div>
}
