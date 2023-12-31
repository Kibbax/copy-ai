"use client";
import { useState } from "react";
import Button from "@/components/Button";
import Title from "@/components/Title";
import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react";
import { useResult } from "../../context/resultContext"; 


export default function InputPage() {
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const router = useRouter();
  const { data: session } = useSession();
  const { newResult } = useResult();

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setErrorMessage(null);
    setSuccessMessage(null);

    try {
      // console.log('Sending request with data:', { prompt: input, value: 'Instagram', targetAge: 25 });
      const saveInput = await fetch('/api/input', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: input,
          value: "Instagram",
          targetAge: 25,
        }),

      });
      
      const response = await fetch('/api/request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: input,
          value: 'Instagram',
          targetAge: 25,
        }),

      });
      const res = await response.json()
      newResult(res)
      
      /* console.log(res)
      console.log(response.ok)

      console.log('Response status:', response.status); */

      if (!response.ok) {
        console.error('Failed to submit data. Response status:', response.status);
        throw new Error('Failed to submit data');
      }{
        router.push("/result");
      }

     /*  const data = await response.json();
      setSuccessMessage(data.message); */
    } catch (error) {
      setErrorMessage("Failed to submit data. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center pt-36 md:w-1/2 lg:w-1/3 m-auto">
      <div className="flex flex-col w-5/6 h-[370px] items-center justify-between">
        <div className="w-full">
          <Title text={"Create your plan"} />
        </div>
        <form
          className="flex flex-col justify-center w-full h-[320px]"
          onSubmit={handleSubmit}
        >
          <label className="text-fontWhite text-xl mb-5" htmlFor="ideaInput">
            Input your idea:
          </label>
          <textarea
            id="ideaInput"
            className="w-full h-[159px] bg-opacity-30 text-fontWhite rounded-md bg-inputColor p-5 focus:outline-none focus:ring focus:ring-linesColors"
            type="text"
            placeholder="Enter your idea"
            onChange={handleChange}
            required
          ></textarea>
          <div className="m-auto text-center">
            <Button text={isLoading? "Loading...": "Submit"} disabled={isLoading} />
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            {successMessage && (
              <p className="text-green-500">{successMessage}</p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
