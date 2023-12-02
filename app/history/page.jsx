"use client"
import { BsSearch,BsDownload } from "react-icons/bs";
import Title from "@/components/Title"
import { useState, useEffect, Suspense } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import DocPDF from "@/components/DocPDF";
import { useSession } from "next-auth/react";

export default function History() {
  const [data, setData] = useState(null)
  const [inputList, setInputList] = useState(null) 
  const [searchHistory, setSearchHistory] = useState("")
  const { data: session } = useSession()
  

  useEffect(()=>{
    async function fetchData(){
      const res = await fetch('/api/history')
      
      if(!res.ok){
        throw new Error('Failed to fetch data')
      }
    
      return res.json()
      
    }
    fetchData().then(data => {
      setData(data)
      setInputList(data)
    })
    
  },[])
  

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase()
    setSearchHistory(searchTerm);

    const filteredData  = inputList.inputs.filter(input =>{
     if(input.content.toLowerCase().includes(searchTerm)){
      return input
     }
    } )
   
    setData({inputs:filteredData})

  }


  function upperCase(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  

    return<div className="text-gray-200 flex ml-10 md:w-1/2 md:m-auto lg:w-1/3 flex-col">
        <div className="w-3/4 md:w-1/2 lg:w-1/3 pt-10 pb-10">
            <Title text={session? "Hi "+session?.user?.name :"..."} />
            <h2 className="font-bold font-dm-sans">Check your history!</h2>
        </div>
         <div className="w-2/3 h-10 flex-shrink-0 relative">
            <BsSearch className="w-6 h-6 absolute left-2 top-2 text-gray-400" />
            <input
              type="text"
              className="max-w-md h-full  pl-10 pr-2 bg-fontWhite bg-opacity-30 text-white border border-gray-300 rounded-full focus:outline-none"
              placeholder="Buscar..."
              value={searchHistory}
              onChange={handleSearch}
            />
          </div>
          <div className="flex flex-col justify-between w-[88%] md:w-full">

            <div className="max-h-52 max-w-md mt-5 bg-opacity-30 text-fontWhite rounded-md bg-inputColor p-5 pt-2 focus:outline-none focus:ring focus:ring-linesColors overflow-y-auto containerScroll">             
                {data? ( data.inputs.length == 0 ? (<p className="text-center font-bold">No results found</p>): data.inputs.map((input, i) => (
                  <li key={i} className="flex justify-between mb-1">
                        <span title={`${input.content}`} className="flex-grow w-12 overflow-hidden truncate pr-3">{i + 1}-{upperCase(input.content)
                        }</span>
                        <span className="mr-2 whitespace-nowrap">
                        {input.results[0]?.date.substring(0,10)}
                        </span>
                        <PDFDownloadLink document={<DocPDF result={input.results[0]?.result} />} fileName={`${input.content}.pdf`}>
                        <BsDownload className="hover:text-primary"/>
                        </PDFDownloadLink>
                      </li>
                ))): (<>
      <div className="m-auto w-16 h-16 border-t-4 border-hoverColor border-solid rounded-full animate-spin"></div>
    </>
            )}
              
            </div>
          </div>
          
    </div>
}