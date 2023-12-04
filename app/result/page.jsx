"use client"
import React, { useEffect, useState } from "react";
import { FiCopy } from "react-icons/fi";
import { toast } from "sonner";
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import Button from "@/components/Button";
import Title from "@/components/Title";
import DocPDF from "@/components/DocPDF";
import { useResult } from "../../context/resultContext";
import { useRouter } from "next/navigation"
import Link from "next/link";


const Page = () => {
  const { result } = useResult();
  const [hovered, setHovered] = useState(false);
  const [viewPDF, setViewPDF] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(result.res.result).then(() => {
      toast.success("Copied", {
        position: "top-center",
        style: {
          margin: "auto",
          width: "25%",
          padding: "2px",
          paddingLeft: "6px",
        },
        duration: 1000,
      });
    });
  };

  return (
    <div className="w-3/4 md:w-1/2 lg:w-1/3 m-auto pt-20  text-gray-200 relative">
      <Title text="awesome!!" />
      <h2 className="text-lg">
        Copy AI crafted these captivating copies just for you!
      </h2>

      <div className="flex text-fontWhite text-sm font-textFont justify-around">
        <div
          className="w-full h-40 bg-zinc-500 bg-opacity-30 rounded-lg relative overflow-auto containerScroll"
          style={{ scrollbarWidth: "thin", margin: "0 auto" }}
        >
          <p className="w-11/12 whitespace-pre-line break-words m-auto mt-2 mb-1">
            {result?.res?.result}
          </p>
          <div
            title="copy"
            className="absolute opacity-30 hover:opacity-100 top-1 right-1"
            onClick={copyToClipboard}
          >
            <FiCopy />
          </div>
        </div>
      </div>

      <div className="text-center align-baseline mt-2 flex justify-between">
        <div
          className="w-[48%] mr-2"
          onMouseOver={() => setHovered(true)}
          onMouseOut={() => setHovered(false)}
        >
          {isClient && (
            <PDFDownloadLink
              document={<DocPDF result={result?.res.result} input={result?.res.input} />}
              fileName={result?.res.input + ".pdf"}
            >
              <Button text="Download PDF" />
            </PDFDownloadLink>
          )}
        </div>
        <Link href="/input" className="block w-[48%]">
        <Button text="New Copy"  />
        </Link>
      </div>
      

      <div id="docPDF" onMouseOver={() => setViewPDF(true)} onMouseOut={() => setViewPDF(false)} className={`${hovered || viewPDF ? "block" : "hidden"}`}>
        {isClient && (
          <PDFViewer>
            <DocPDF result={result?.res.result} input={result?.res.input} />
          </PDFViewer>
        )}
      </div>
    </div>
  );
};

export default Page;
