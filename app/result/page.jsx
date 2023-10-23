const Page = () => {
  return (
    <div className="flex justify-center pt-36 md:w-1/2 lg:w-1/3 m-auto">
      
      <div className="container">
        <h1 className="text-fontPurple text-4xl font-titleFont">awesome!</h1>
        <p className="text-fontPurple text-2xl font-textFont">Check out your results</p>

        <div className="flex px-4 py-4 text-fontWhite justify-around">
          <div className="mx-2 px-4 bg-inputColor bg-opacity-10 rounded-lg">
            <p>Copy A</p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Doloremque praesentium porro quo dignissimos, iure tempore
              explicabo!.
            </p>
            <div>
              <button className="mt-6 align-center px-4 py-2 bg-buttonBlack rounded-lg">
                Copy
              </button>
            </div>
          </div>

          <div className="mx-2 px-4 bg-inputColor bg-opacity-10 rounded-lg">
            <p>Copy B</p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Doloremque praesentium porro quo dignissimos, iure tempore
              explicabo!.
            </p>
            <div>
              <button className="mt-6 align-center px-4 py-2 bg-buttonBlack rounded-lg">
                Copy
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button className="mt-6 align-center px-4 py-2 bg-buttonBlack rounded-lg text-fontWhite">
          Download PDF
        </button>
      </div>
    </div>
  );
};

export default Page;
