import Button from "@/components/Button";
import Title from "@/components/Title";

export default function InputPage() {
    
    return  <div className="flex justify-center pt-36 md:w-1/2 lg:w-1/3 m-auto">
        <div className="flex flex-col w-5/6 h-[370px] items-center justify-between">
            <div className="w-full">
            <Title text={"Create your plan"}/>
            </div>
            <div className="flex flex-col  justify-center w-full h-[320px]">
                <label className="text-fontWhite text-xl mb-5" htmlFor="ideaInput">Input your idea:</label>
                <textarea
                id="ideaInput"
                className="w-full h-[159px] bg-opacity-30 text-fontWhite rounded-md bg-inputColor p-5 focus:outline-none focus:ring focus:ring-linesColors"
                type="text"
                placeholder="Enter your idea"
                required
                ></textarea>
            </div>
            <Button text={"Submit"}/>
        </div>
    </div>
}