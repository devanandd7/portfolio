import React, { useEffect, useState } from "react";

const AcademicHelp = () => {
  const filename = "devanand";
  // const pdfUrl = "./uploads/DAA_Lab_experiment_1.pdf";

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch("/api/users");
      if (!response.ok) throw new Error("Failed to fetch users");
      const data = await response.json();
      setUsers(data.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handlePreview = (pdfUrl) => {
    window.open(pdfUrl, "_blank");
  };

  const handleDownload = (pdfUrl) => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = filename + "_" + pdfUrl.split("/").pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-7xl text-3xl title-font mb-2 text-yellow-300">
              Academic Help
            </h1>
            <div className="h-1 w-30 bg-green-500 rounded"></div>
          </div>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-300">
            by <b>Devanand Utkarsh</b> for CU Students. Get free support for
            your Chandigarh University tasks, including assignments, notes,
            projects, and case studies.
            <br />
            <b>100% free of cost</b>, designed to simplify your learning
            journey!
          </p>
        </div>

        <div className="flex flex-wrap -m-4">
          {users.map((data) => (
            <div key={data._id} className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                {data.image1.endsWith(".pdf") ? (
                  <iframe
                    className="h-40 rounded w-full object-cover object-center mb-6 overflow-hidden"
                    src={data.image1}
                    title="PDF Preview"
                    allowFullScreen={true}
                  />
                ) : (
                  <p className="h-40 rounded w-full object-cover object-center mb-6 overflow-hidden">Preview not available because of word file , you can download it to preview</p>
                )}

                <h3 className="tracking-widest text-yellow-500 text-xs font-medium title-font">
                  Unit -1
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  {data.name}
                </h2>
                <p className="leading-relaxed text-base">{data.bio}</p>

                <div className="flex justify-center">
                  <button
                    className="inline-flex text-white bg-indigo-500 border-0 py-1 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                    onClick={() => {
                      handleDownload(data.image1);
                    }}
                  >
                    Download
                  </button>
                  <button
                    className="ml-1 inline-flex text-white bg-green-700 border-0 py-1 px-6 focus:outline-none hover:bg-green-500 rounded text-lg"
                    onClick={() => {
                      handlePreview(data.image1);
                    }}
                  >
                    Preview
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcademicHelp;
