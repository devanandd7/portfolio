import React from 'react'

const acadamic_help = () => {
    const pdfUrl = "./uploads/pdf.pdf"; // Path to the PDF file in the public folder

    const handlePreview = () => {
      // Opens the PDF in a new tab
      window.open(pdfUrl, "_blank");
    };
  
    const handleDownload = () => {
      // Triggers the download of the PDF
      const link = document.createElement("a");
      link.href = pdfUrl;
      link.download = "./uploads/pdf.pdf"; // Default filename for download
      link.click();
    }
  return (
    <>

    <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap w-full mb-20">
      <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
       <b> <h1 class="sm:text-7xl text-3xl  title-font mb-2 text-yellow-300">Acadamic_help</h1></b>
        <div class="h-1 w-30 bg-green-500 rounded"></div>
      </div>
      <p class="lg:w-1/2 w-full leading-relaxed text-gray-300">by   <b>Devanand Utkarsh </b> for CU Students**  
      Get free support for your Chandigarh University tasks, including assignments, notes, projects, and case studies.<br/>  <b> 100% free of cost </b>, designed to simplify your learning journey!.</p>
    </div>
    <div class="flex flex-wrap -m-4">
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded-lg">
        

          <iframe class="h-40 rounded w-full object-cover object-center mb-6 overflow-hidden" src={pdfUrl} title="PDF Preview" />
          <h3 class="tracking-widest text-yellow-500 text-xs font-medium title-font">Unit -1 </h3>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">TEST_CASE_OF_WEBSITE</h2>
          <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>

          <div class="flex justify-center">
        <button class="inline-flex text-white bg-indigo-500 border-0 py-1 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"  onClick={handleDownload}>Download</button>
        <button class="ml-1 inline-flex text-white bg-green-700 border-0 py-1 px-6 focus:outline-none hover:bg-green-500 rounded text-lg" onClick={handlePreview}>Preview</button>
      </div>
        </div>
       
      </div>
    
    </div>
  </div>
</section>

      </>
    )

}

export default acadamic_help