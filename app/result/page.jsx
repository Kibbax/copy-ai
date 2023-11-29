import Button from "@/components/Button";
import Title from "@/components/Title";

const Page = () => {
  return (
    <div
      className="w-3/4 md:w-1/2 lg:w-1/3 m-auto pt-20 pb-10 text-gray-200 relative"
      aria-label="Page Content"
    >
      <Title text="awesome!!" aria-label="Page Title" />
      <h2 className="text-lg">
        Copy AI crafted these captivating copies just for you!
      </h2>

      <div
        className="flex px-4 py-4 text-fontWhite text-sm font-textFont justify-around"
        aria-label="Copy Options"
      >
        <div className="mx-2 px-4 bg-zinc-500 bg-opacity-30 rounded-lg">
          <p>Copy A</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque
            praesentium porro quo dignissimos, iure tempore explicabo!.
          </p>
          <div>
            <button
              className="mt-6 justify-end px-4 py-2 bg-buttonBlack rounded-lg text-fontWhite"
              aria-label="Copy A - Copy Button"
            >
              Copy
            </button>
          </div>
        </div>

        <div className="mx-2 px-4 bg-zinc-500 bg-opacity-30 rounded-lg">
          <p>Copy B</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque
            praesentium porro quo dignissimos, iure tempore explicabo!.
          </p>
          <div>
            <button
              className="mt-6 align-center px-4 py-2 bg-buttonBlack rounded-lg text-fontWhite"
              aria-label="Copy B - Copy Button"
            >
              Copy
            </button>
          </div>
        </div>
      </div>

      <div className="text-center align-baseline">
        <Button text="Download PDF" aria-label="Download PDF Button" />
      </div>
    </div>
  );
};

export default Page;
