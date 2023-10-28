import Button from "@/components/Button";
import Title from "@/components/Title";

export default function InputPage() {
  return (
    <div className="flex justify-center pt-36 md:w-1/2 lg:w-1/3 m-auto">
      <div className="flex flex-col w-5/6 h-[370px] items-center justify-between">
        <Title text={"Create your plan"} />
        <div className="flex flex-col  justify-center w-full h-[320px]">
          <label className="text-fontWhite text-xl mb-5" htmlFor="ideaInput">
            Input your idea:
          </label>
          <textarea
            id="ideaInput"
            className="w-full bg-opacity-30 text-fontWhite rounded-md bg-inputColor p-5 focus:outline-none focus:ring focus:ring-linesColors"
            type="text"
            placeholder="Enter your idea"
            required
          ></textarea>
          <select
            className="bg-fontWhite text-linesColors my-3 p-2 rounded-md font-bold"
            name="campaignObjectives"
            id="campaignObjectives"
          >
            <option value="" disabled selected>Select Campaign Objectives</option>

          </select>

          <select
            className="bg-fontWhite text-linesColors my-3 p-2 rounded-md font-bold"
            name="objectivePublic"
            id="objectivePublic"
          >
            <option value="" disabled selected>Select Objective Public</option>
          </select>

          <select
            className="bg-fontWhite text-linesColors my-3 p-2 rounded-md font-bold"
            name="brandVoice"
            id="brandVoice"
          >
            <option value="" disabled selected>Select Brand Voice</option>
          </select>
        </div>
        <Button text={"Submit"} />
      </div>
    </div>
  );
}
