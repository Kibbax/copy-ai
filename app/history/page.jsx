"use client"
import { BsSearch,BsDownload,BsFillCaretRightFill,BsFillCaretLeftFill} from "react-icons/bs";
import Link from "next/link";
import Title from "@/components/Title"
import { useState, useEffect, Suspense } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import DocPDF from "@/components/DocPDF";


export default function History() {
  const [data, setData] = useState(null)

  useEffect(()=>{
    async function fetchData(){
      const res = await fetch('/api/history')
      
      if(!res.ok){
        throw new Error('Failed to fetch data')
      }
    
      return res.json()
      
    }
    fetchData().then(data => setData(data))

  },[])


  function upperCase(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  

    return<div className="text-gray-200 flex ml-10 md:w-1/2 md:m-auto lg:w-1/3 flex-col">
        <div className="w-3/4 md:w-1/2 lg:w-1/3 pt-10 pb-10">
            <Title text="Hi Marco"/>
            <h2 className="font-bold font-dm-sans">Check your history!</h2>
        </div>
         <div className="w-2/3 h-10 flex-shrink-0 relative">
            <BsSearch className="w-6 h-6 absolute left-2 top-2 text-gray-400" />
            <input
              type="text"
              className="w-full h-full pl-10 pr-2 bg-fontWhite bg-opacity-30 text-white border border-gray-300 rounded-full focus:outline-none"
              placeholder="Buscar..."
            />
          </div>
          <div className="flex flex-col justify-between">

            <div className="max-h-52 mt-5 bg-opacity-30 text-fontWhite rounded-md bg-inputColor p-5 pt-2 focus:outline-none focus:ring focus:ring-linesColors overflow-y-auto containerScroll">             
                {data? ( data.inputs.length == 0 ? (<p className="text-center font-bold">No results found</p>): data.inputs.map((input, i) => (
                  <li key={i} className="flex justify-between mb-1">
                        <span title={`${input.content}`} className="flex-grow">{i + 1}-{upperCase(input.content.substring(0,17))
                        }</span>
                        <Link className="mr-2" href={"/"}>
                        {input.results[0].date.substring(0,10)}
                        </Link>
                        <PDFDownloadLink document={<DocPDF result={input.results[0].result} />} fileName={`${input.content}.pdf`}>
                        <BsDownload className="hover:text-primary"/>
                        </PDFDownloadLink>
                      </li>
                ))): (<>
      <div className="m-auto w-16 h-16 border-t-4 border-hoverColor border-solid rounded-full animate-spin"></div>
    </>
            )}
              
            </div>
            {/* <div className="pt-2 flex text-primary justify-between">
              <button className="w-1/2 mr-1 pr-3 pl-2 bg-activeLigthBlue rounded-full lg:w-1/3"><BsFillCaretLeftFill className="inline"/>Prev </button>
              <button className=" w-1/2 ml-1 pr-2 pl-3  bg-activeLigthBlue rounded-full lg:w-1/3">Next <BsFillCaretRightFill className="inline"/></button>
            </div> */}
          </div>
          
    </div>
}