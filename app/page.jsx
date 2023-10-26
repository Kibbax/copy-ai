import Link from "next/link";

const HomePage = () => {
  return (
    <div className="min-h-screen items-center justify-center text-center relative pt-20">
      <div className="max-w-screen-xl mx-auto p-8">
        <h1 className="text-4xl md:text-5xl font-titleFont pb-4">COPY.AI</h1>
        <p className="mt-4 mb-8 text-2xl md:text-3xl font-textFont border rounded-full border-#E0AAFF  max-w-2xl mx-auto p-4 md:p-6 bg-#5A189A">
          Revolutionize Your Marketing
        </p>
        <p className="mb-8 text-xl md:text-3xl font-titleFont">Unleash CopyCraft Pro’s Power</p>
        <Link href="/signUp" className=" border border-#E0AAFF rounded-full bg-pink-300  hover:bg-blue-600 text-primary font-textFont font-bold py-3 px-6 md:py-4 md:px-8 mt-4 md:mt-8 w-1/2">
          
            Sign Up Now
          
        </Link>
        <div className="text-3xl font-titleFont text-left pt-10">
          A New Dawn in Content Creation
        </div>
        <p className="text-xl md:text-2xl mt-10 text-left text-textFont-bold">
          CopyCraft Pro is a game-changing web app that has been designed to empower marketing teams and professionals with the tools they need to create irresistibly engaging content for social media, advertisements, and marketing campaigns. Our state-of-the-art platform makes it easier than ever to generate copy that captivates your target audience, boosts brand loyalty, and drives results.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
