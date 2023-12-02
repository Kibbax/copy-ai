import React from "react";

const Background = () => {
  return (
    <>
    <div className="z-10">
      <div className="fixed w-[130px] left-[66%] top-[20%]  lg:scale-150 md:scale-150 sm:scale-150">
        {/* Logo */}
        <div className="grid grid-cols-3 grid-rows-3 gap-2 opacity-30">
          {/* Rectángulo 1 */}
          <div className="bg-violet-800 w-[80px] h-[40px] rounded-bl-full rounded-tr-full col-span-2 row-span-1"></div>

          {/* Cuadrado 2 */}
          <div className="bg-violet-800 w-[40px] h-[40px] rounded-tr-full rounded-tl-full rounded-bl-full col-span-1 overflow-hidden">
            <img
              src="/assets/celu-en-mano.webp"
              alt="Image"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Cuadrado 3 */}
          <div className="bg-violet-800 w-[40px] h-[40px]  rounded-tr-full rounded-br-full rounded-bl-full col-span-1 overflow-hidden">
            <img
              src="/assets/trabajando.webp"
              alt="Image"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Cuadrado 4 */}
          <div className="bg-violet-800 w-[40px] h-[40px] col-span-1"></div>

          {/* Cuadrado 5 */}
          <div className="bg-violet-800 w-[40px] h-[40px]  rounded-bl-full col-span-1 overflow-hidden">
            <img
              src="/assets/notebook.webp"
              alt="Image"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Cuadrado 6 */}
          <div className="bg-violet-800 w-[40px] h-[40px] rounded-full col-span-1"></div>

          {/* Rectángulo 7 */}
          <div className="bg-violet-800 w-[80px] h-[40px] rounded-tl-full rounded-bl-full rounded-tr-full col-span-2 row-span-1 overflow-hidden">
            <img
              src="/assets/muchos-celus.webp"
              alt="Image"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      
      {/* Círculo con bordes (oculto en pantallas sm) */}
      <div className="hidden sm:block fixed bottom-[60%] left-[30%]  top-[52rem]  transform -translate-x-1/2 -translate-y-1/2 skew-x-[-50deg] w-[576px] h-[576px] bg-transparent border-2 border-violet-900 border-opacity-30 rounded-full rotate-[136deg] -z-10" />
      </div>" 
      
    </>
  );
};

export default Background;
