"use client"
import Button from "@/components/Button";
import Title from "@/components/Title";
import { useState } from "react";

export default function InputPage() {
    const [input, setInput] = useState("")

    const handleChange = (e)=>{
        setInput(e.target.value)
        console.log(e.target.value)
    }
    
  

  const handleSubmit = async (e)=>{
    e.preventDefault()

    fetch('/api/result', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json', 
          },
        body: JSON.stringify({prompt:input})
    })
    /* const data = await inputSend.json()
    return data */
    .then(response => response.json()) 
    .then(data => {
      console.log(data); 
    })
    .catch(error => {
      console.error('Error:', error);
    });

  }
    
    return  <div className="flex justify-center pt-36 md:w-1/2 lg:w-1/3 m-auto">
        <div className="flex flex-col w-5/6 h-[370px] items-center justify-between">
            <div className="w-full">
            <Title text={"Create your plan"}/>
            </div>
            <form className="flex flex-col  justify-center w-full h-[320px]" onSubmit={handleSubmit}>
                <label className="text-fontWhite text-xl mb-5" htmlFor="ideaInput">Input your idea:</label>
                <textarea
                id="ideaInput"
                className="w-full h-[159px] bg-opacity-30 text-fontWhite rounded-md bg-inputColor p-5 focus:outline-none focus:ring focus:ring-linesColors"
                type="text"
                placeholder="Enter your idea"
                onChange={handleChange}
                required
                ></textarea>
                <div className="m-auto text-center">
                <Button text={"Submit"} />
                </div>
            </form>
            
        </div>
    </div>
}