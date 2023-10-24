import { BsSearch,BsDownload,BsFillCaretRightFill,BsFillCaretLeftFill} from "react-icons/bs";
import Link from "next/link";
import Title from "@/components/Title"
export default function DownloadPage() {
  const files = [
    {
      date: "10/05/2022",
      fileName: "My market"
    },
    {
      date: "10/05/2022",
      fileName: "My shoes"
    },
    {
      date: "10/05/2022",
      fileName: "My plane"
    },
    {
      date: "10/05/2022",
      fileName: "My car"
    },
    {
      date: "10/05/2022",
      fileName: "My coffee"
    },

  ]

    return<div className="text-gray-200 flex ml-10 pt-36 md:w-1/2 md:m-auto lg:w-1/3 flex-col">
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
          <div className="flex flex-col w-11/12 justify-center">
            <div className="h-[159px] mt-5 bg-opacity-30 text-fontWhite rounded-md bg-inputColor p-5 focus:outline-none focus:ring focus:ring-linesColors">
                {files.map((file, i) => (
                      <li key={i} className="flex items-center">
                        <span>{`${i + 1}-${file.date}`}</span>
                        <Link className="w-2/5 ml-10" href={"/"}>
                          {file.fileName}
                        </Link>
                        <BsDownload />
                      </li>
                ))}
            </div>
            <div className="pt-2 flex text-primary justify-between">
              <button className="w-1/2 mr-1 pr-3 pl-2 bg-activeLigthBlue rounded-full lg:w-1/3"><BsFillCaretLeftFill className="inline"/>Prev </button>
              <button className=" w-1/2 ml-1 pr-2 pl-3  bg-activeLigthBlue rounded-full lg:w-1/3">Next <BsFillCaretRightFill className="inline"/></button>
            </div>
          </div>
          
    </div>
}