
import Link from "next/link";
import React from "react";

const index = () => {

  return (
    <>
      <header className="text-lime-600 body-font">
        <div className="container w-screen lg:ml-24 fixed mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center  bg-[#030112]">
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center font-bold">
            <a className="mr-7 hover:text-white" href="#home">
              home
            </a>
            <a className="mr-7 hover:text-white" href="#projects">
              projects
            </a>
            <a className="mr-7 hover:text-white" href="#Certificates">
              Certificates
            </a>
            <Link className="mr-7 hover:text-white" href="/acadamic_help">
              Acadmic
            </Link>
          </nav>
          {/* <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            Button
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button> */}
        </div>
      </header>

      <section id="home" className=" body-font h-fit m-0">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className=" lg:w-1/2 w-full h-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
            <img
              alt="feature"
              className="object-center h-full w-full rounded-full image_dev border-8 border-orange-500"
              src="/dev_port.jpeg"
            />
          </div>
          <div className="flex flex-col flex-wrap lg:py-3  lg:w-1/2 lg:pl-6 lg:text-left ">
            <section className="text-white  body-font">
              <div className="container px-5 py-4 mx-auto">
                <div className="xl:w-3/4 lg:w-3/6 w-full mx-auto text-center ">
                  {/* <h1 className="text-5xl text-red-600">Hey ,</h1> */}
                  <h1 className=" text-3xl  lg:text-7xl mt-12 italic md:text-center font-bold">
                  &ldquo; Devanand Utkarsh &rdquo;
                    <br />
                    <p className="text-xl text-center text-lime-300 text-center mt-9 lg:mt-12">
                    &ldquo;Transforming ideas into digital reality.&rdquo;
                    </p>
                  </h1>
                  <p className="leading-relaxed text-lg text-center lg:text-xl mt-10 lg:mt-14">
                    Passionate about building seamless, user-friendly web
                    applications. Skilled in front-end and back-end
                    technologies, I transform ideas into functional, engaging
                    digital experiences. Always eager to learn and innovate!
                  </p>
                  <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6 justify-center"></span>
                  <div className="container px-5 py-4 m-auto flex flex-wrap flex-col ">
                    <div className="flex mx-auto flex-wrap mb-10 justify-center">
                      <div className="w-10 h-10 border rounded-full m-2 object-scale-down">
                        <a href="https://www.instagram.com/_dev_coder?igsh=MW1xYXZ5dG53MjQ5cA==">
                        
                          <img src="/social.png" alt="" />
                        </a>
                      </div>
                      <div className="w-10 h-10 border rounded-full m-2 object-scale-down">
                        <a href="https://github.com/devanandd7">
                          
                          <img src="/github (2).png" alt="" />
                        </a>
                      </div>
                      <div className="w-10 h-10 border rounded-full m-2 object-scale-down">
                        <a href="https://www.linkedin.com/in/devanand-utkarsh-64426a2b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                          <img src="/linkedin.png" alt="" />
                        </a>
                      </div>
                      <div onClick={()=> navigator.clipboard.writeText('devanandutkarsh23@gmail.com')} className="w-10 h-10 border rounded-full m-2 object-scale-down">
                       <a > <img src="/mail.png" alt="" /></a>
                      </div>
                      <div className="w-10 h-10 border rounded-full m-2 object-scale-down overflow-hidden">
                      <a href="/devanandresume2024.pdf" download="devanandresume2024.pdf"> <img src="/cv.png" alt="" /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>

      <div className="flex flex-col">
       

        <section className=" body-font">
          <div className="container px-5 py:12 lg:py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20 ">
              <h1 className="text-4xl lg:text-8xl font-medium title-font mb-4 text-white-900 font-bold">
                Skill <br /> (Coding & Other)
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                Bringing ideas to life through code and creativity. Skilled in
                JavaScript, React, Next.js, and databases like MongoDB and SQL.
                Beyond coding, I express my creativity through drawing and
                cooking. 
              </p>
            </div>
            <div className="flex flex-wrap -m-4 text-center">
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                  <img
                    className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                    src="/paint-palette.png"
                    alt=""
                  />
                  <h2 className="title-font font-medium text-3xl ">Painting</h2>
                </div>
              </div>
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                  <img
                    className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                    src="/cook_man_icon.png"
                    alt=""
                  />
                  <h2 className="title-font font-medium text-3xl ">Cooking</h2>
                </div>
              </div>
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                  <img
                    className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                    src="/codeing_icon.png"
                    alt=""
                  />
                  <h2 className="title-font font-medium text-3xl ">Coding</h2>
                </div>
              </div>
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                  <img
                    className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                    src="/creative_icon.png"
                    alt=""
                  />
                  <h2 className="title-font font-medium text-3xl ">Creative</h2>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="Certificates" className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h1 className="text-3xl lg:text-7xl title-font mb-4 text-white font-bold">
                Certificates
              </h1>
            </div>
            <div className="flex flex-wrap -m-4 justify-center">
              <div className="lg:w-1/3 sm:w-1/2 p-4">
                <div className="flex ">
                  <img
                    alt="gallery"
                    className="  w-fit md:w-full m-fit md:h-full object-center "
                    src="csharp.png"
                  />
                </div>
              </div>

              <div className="lg:w-1/3 sm:w-1/2 p-4">
                <div className="flex ">
                  <img
                    alt="gallery"
                    className=" w-full h-full object-cover"
                    src="octanet.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className=" body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col">
              <div className="h-1 bg-gray-200 rounded overflow-hidden">
                <div className="w-24 h-full bg-indigo-500"></div>
              </div>
              <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
                <h1 className="sm:w-2/5 text-white font-medium title-font text-6xl mb-2 sm:mb-0">
                  My Projects{" "}
                </h1>
                <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
                &ldquo;Turning visions into reality, one project at a time.&ldquo;
                </p>
              </div>
            </div>
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
              <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                <div className="rounded-lg h-64 overflow-hidden">
                  <img
                    alt="content"
                    className="object-cover object-center h-full w-full"
                    src="pristar.png"
                  />
                </div>
                <h2 className="text-xl font-medium title-font  mt-5 font-bold">
                  pristar
                </h2>
                <p className="text-base leading-relaxed mt-2 text-gray-500">
                  this is first chating app , by using third party api link ,
                  where you can chat with multiple user as same time.
                </p>
                <a
                  className="text-indigo-500 inline-flex items-center mt-3"
                  href="https://pristar.netlify.app/"
                >
                  Online
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
              <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                <div className="rounded-lg h-64 overflow-hidden">
                  <img
                    alt="content"
                    className="object-cover object-center h-full w-full"
                    src="newspro.png"
                  />
                </div>
                <h2 className="text-xl font-medium title-font  mt-5">
                  newspro
                </h2>
                <p className="text-base leading-relaxed mt-2 text-gray-500">
                  Excited to share my latest project!  I&quot;ve built a fully
                  responsive website using React, JavaScript, news api and
                  Bootstrap. Designed with a focus on seamless user experience
                  across all devices, this project reflects my passion for clean
                  code and modern web development. Check it out and let me know
                  your thoughts! Always eager to connect and learn from the
                  community. 
                </p>
                <a className="text-indigo-500 inline-flex items-center mt-3">
                  Offline
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
              <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                <div className="rounded-lg h-64 overflow-hidden">
                  <img
                    alt="content"
                    className="object-cover object-center h-full w-full"
                    src="textcon.png"
                  />
                </div>
                <h2 className="text-xl font-medium title-font  mt-5">
                  textcon
                </h2>
                <p className="text-base leading-relaxed mt-2 text-gray-500">
                   Excited to share my latest project!  I&apos;ve built a Text
                  Manipulation Website using React and JavaScript. This platform
                  allows users to interact with words in various
                  ways—transforming, analyzing, and exploring text effortlessly.
                  It&apos;s fully responsive and designed to provide an engaging user
                  experience. Check it out and let me know your thoughts! Your
                  feedback is always appreciated.
                </p>
                <a
                  className="text-indigo-500 inline-flex items-center mt-3 "
                  href="https://textcon.netlify.app/"
                >
                  Online
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>

              <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                <div className="rounded-lg h-64 overflow-hidden">
                  <img
                    alt="content"
                    className="object-cover object-center h-full w-full"
                    src="disamansoon.png"
                  />
                </div>
                <h2 className="text-xl font-medium title-font  mt-5">
                  disamonsoon app
                </h2>
                <p className="text-base leading-relaxed mt-2 text-gray-500">
                   Excited to share my latest project!  I &apos;ve developed a
                  weather website using JavaScript and React! Users can easily
                  check real-time temperature, humidity, and wind speed for any
                  location. This project reflects my passion for building
                  functional, user-friendly applications and enhancing everyday
                  experiences with technology. Check it out, and I &apos; d love to
                  hear your feedback! 
                </p>
                <a
                  className="text-indigo-500 inline-flex items-center mt-3"
                  href="https://disamonsoon.netlify.app/"
                >
                  Online
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      
    </>
  );
};

export default index;
