import Button from "@/components/Button"
import Title from "@/components/Title"


export default function AuthPage() {
  return <div className=" text-gray-200 pt-36">
    <div className="w-3/4 md:w-1/2 lg:w-1/3 m-auto pt-10 pb-10">
      <Title text="LOGIN"/>
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
  <div className="m-auto text-center">
  <Button text="Login"/>
  </div>
</form>
</div>
}
