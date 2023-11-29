"use client"
import Button from "@/components/Button";
import Title from "@/components/Title";
import { useResult } from "../../context/resultContext";
import { FiCopy } from "react-icons/fi";
import { toast } from "sonner";
import DocPDF from "@/components/DocPDF";
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import { useState } from "react";



const Page = () => {
  const {result} = useResult()
  const [hovered, setHovered] = useState(false)
  const [viewPDF, setViewPDF] = useState(false)

 

  const copyToClipboar = () => {
    navigator.clipboard.writeText(result).then(()=>{
      //aviso de texto copiado en portapapeles
    toast.success("Copied",{
      position: "top-center",
      style: {
        margin: "auto",
        width: "25%",
        padding: "2px",
        paddingLeft: "6px",   
      },
      duration: 1000
    })
    })
  }
 /*  const viewPDF = () => {
    document.getElementById("docPDF").classList.remove("hidden")
    setHovered(true)
  } */
  
  

  
  return (
    <div
      className="w-3/4 md:w-1/2 lg:w-1/3 m-auto pt-20 pb-10 text-gray-200 relative"
      aria-label="Page Content"
    >
      
      <Title text="awesome!!" aria-label="Page Title" />
      <h2 className="text-lg">
        Copy AI crafted these captivating copies just for you!
      </h2>

      <div className="flex text-fontWhite text-sm font-textFont justify-around">
        <div className="w-full h-40 bg-zinc-500 bg-opacity-30 rounded-lg relative overflow-auto " style={{ scrollbarWidth: 'thin', margin: '0 auto' }}>
          <p className="w-11/12 whitespace-pre-line break-words m-auto mt-2 mb-1" >
            {result}
          </p>
          <div title="copy" className="absolute opacity-30 hover:opacity-100 top-1 right-1" onClick={copyToClipboar}>
           <FiCopy/>
          </div>
        </div>
      </div>
      
      <div className="text-center align-baseline mt-2" onMouseOver={()=>{setHovered(true)}} onMouseOut={()=>{setHovered(false)}}>
        <PDFDownloadLink document={<DocPDF result={result} />} fileName="Copy.pdf">
        <Button text="Download PDF" aria-label="Download PDF Button" />
        </PDFDownloadLink>
      </div>
      <div id="docPDF" onMouseOver={()=>{setViewPDF(true)}} onMouseOut={()=>{setViewPDF(false)}}className={`${hovered ||viewPDF ? "block": "hidden"}`}>
        <PDFViewer className="m-auto">
          <DocPDF result={result} />
        </PDFViewer>
      </div>
    </div>
  );
};

export default Page;
