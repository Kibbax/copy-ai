import React from "react"
import ContentLoader from "react-content-loader"

const Loading = () =>{ 
  
  {/* <ContentLoader 
    speed={200}
    width={400}
    height={300}
    viewBox="0 0 400 300"
    backgroundColor="#e0aaff"
    foregroundColor="#d9127c"
    {...props}
  >
    <rect x="9" y="14" rx="20" ry="20" width="235" height="44" /> 
    <rect x="28" y="89" rx="10" ry="10" width="82" height="19" /> 
    <rect x="28" y="116" rx="10" ry="10" width="148" height="19" /> 
    <rect x="28" y="143" rx="10" ry="10" width="160" height="19" /> 
    <rect x="28" y="170" rx="10" ry="10" width="163" height="19" /> 
    <rect x="28" y="197" rx="10" ry="10" width="155" height="19" /> 
    <rect x="28" y="224" rx="10" ry="10" width="160" height="19" /> 
    <rect x="28" y="251" rx="10" ry="10" width="145" height="19" /> 
    <rect x="218" y="89" rx="10" ry="10" width="116" height="16" /> 
    <rect x="218" y="116" rx="10" ry="10" width="116" height="16" /> 
    <rect x="219" y="143" rx="10" ry="10" width="116" height="16" /> 
    <rect x="218" y="170" rx="10" ry="10" width="116" height="16" /> 
    <rect x="218" y="197" rx="10" ry="10" width="116" height="16" /> 
    <rect x="218" y="224" rx="10" ry="10" width="116" height="16" /> 
    <rect x="218" y="251" rx="10" ry="10" width="116" height="16" />
  </ContentLoader>  */}
  return (<div className="flex items-center justify-center h-screen">
      <div className="w-16 h-16 border-t-4 border-hoverColor border-solid rounded-full animate-spin"></div>
    </div>
  );
}

export default Loading