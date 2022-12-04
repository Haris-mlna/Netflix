import "./style/global.css";
import { TbWorld } from "react-icons/tb";
import { AiFillCaretDown, AiOutlineWhatsApp, AiOutlineLinkedin, AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { useState } from "react";
import {Link} from 'react-router-dom';

import tv from "./assets/images/tv.png";

function App() {
  const [language, setLanguage] = useState("Language");

  const onClickLanguange = (e) => {
    if (e.target.innerText === "English") {
      setLanguage("English");
    } else {
      setLanguage("Bahasa Indonesia");
    }
  };

  return (
    <div className="App">
      {/* Header ---------------------------------------------------------- */}
      {/* Background Image */}
      <header className="flex justify-center items-center w-screen h-screen custom-image bg-cover bg-center bg-no-repeat -z-20 text-white cursor-default">
        {/* Layer Black */}
        <div className="absolute w-screen h-screen bg-black/40 z-0 custom-shadow bg-shadow cursor-default" />
        {/* Navigation Bar */}
        <nav className="flex w-screen max-sm:p-5 items-center justify-between py-7 px-14 bg-transparent z-10 cursor-default absolute top-0">
          {/* Netflix SVG */}
          <div className="logo">
            <svg
              viewBox="0 0 111 30"
              data-uia="netflix-logo"
              class="svg-icon svg-icon-netflix-logo w-32 fill-[#E50914] cursor-default"
              aria-hidden="true"
              focusable="false"
            >
              <g id="netflix-logo" className="cursor-default">
                <path d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z"></path>
              </g>
            </svg>
          </div>
          {/* Netflix SVG Ends */}
          {/* Dropdown & Button */}
          <div className="btn-drop flex items-center">
            <div className="dropdown  border rounded relative max-sm:hidden">
              <button className="flex items-center cursor-pointer py-1 px-4 rounded caret-transparent">
                <TbWorld className="mr-1" />
                {language}
                <AiFillCaretDown className="mt-1 ml-2" />
              </button>
              <div class="dropdown-content flex flex-col w-full items-center absolute border">
                <a
                  className="language w-full flex justify-center pt-2"
                  href="#"
                  onClick={onClickLanguange}
                >
                  English
                </a>
                <a
                  className="language w-full flex justify-center pt-2"
                  href="#"
                  onClick={onClickLanguange}
                >
                  Bahasa Indonesia
                </a>
              </div>
            </div>
            <Link to='/login'>
              <button className="flex py-1 px-4 mx-12 max-sm:mx-0 rounded bg-[#E50914] hover:bg-[#b30811] cursor-pointer">
                Log in
              </button>
            </Link>
          </div>
        </nav>
        {/* Navigation Bar Ends */}
        <div className="flex flex-col max-sm:w-full w-1/2 items-center justify-center z-10 text-center">
          <h1 className="text-5xl max-sm:text-3xl font-bold whitespace-nowrap">
            Unlimited movies, TV <br />
            shows, and more.
          </h1>
          <span className="text-3xl my-4 whitespace-nowrap max-sm:text-lg  ">
            Watch anywhere. Cancel anytime.
          </span>
          <p>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <form action="POST" className="flex my-4 max-sm:px-2 w-full h-full">
            <input
              className="w-full p-4 border border-black text-black"
              type="email"
              name="email"
              placeholder="Email address"
              required
            />
            <button
              className="whitespace-nowrap p-4 bg-[#E50914] border border-black"
              type="submit"
            >
              {" "}
              {`Get Started >`}
            </button>
          </form>
        </div>
      </header>
      {/* Header Ends ---------------------------------------------------------- */}
      <main className="w-screen h-full">
        {/* Card */}
        <div className="card max-sm:flex-col flex bg-black w-screen h-full py-16 px-11">
          <div className="text max-sm:w-full flex flex-1 flex-col w-1/2 justify-center items-start text-left">
            <h2 className="text-6xl font-bold">Enjoy on your TV.</h2>
            <p className="text-2xl mt-10">
              Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
              Blu-ray players, and more.
            </p>
          </div>
          <div className="flex w-1/2 max-sm:w-full justify-center items-center relative">
            <img src={tv} alt="" className="z-10 object-contain" />
            <video
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
              className="absolute z-0"
              autoPlay
              playsInline
              muted
              loop
            />
          </div>
        </div>

        <div className="card max-sm:flex-col flex bg-black w-screen h-full py-16 px-11">
          <div className="text max-sm:w-full flex flex-1 flex-col w-1/2 justify-center items-start text-left order-2">
            <h2 className="text-6xl font-bold">Download your shows to watch offline.</h2>
            <p className="text-2xl mt-10">
            Save your favorites easily and always have something to watch.
            </p>
          </div>
          <div className="flex w-1/2 max-sm:w-full justify-center items-center relative">
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
              alt=""
              className="z-10 object-contain"
            />
            <div className="download-img max-sm:scale-75 max-sm:bottom-0 absolute flex justify-between items-center z-20 bottom-10 py-4 px-4 border border-slate-700 bg-black rounded">
              <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" alt="" className="w-12 rounded"/>
              <a href="" className="text-xl mx-10">Stranger Thing <br /> <span className="text-lg text-blue-500">downloading...</span></a>
              <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif" className="w-10" alt="" />
            </div>
          </div>
        </div>

        <div className="card max-sm:flex-col flex bg-black w-screen h-full py-16 px-11">
          <div className="text max-sm:w-full flex flex-1 flex-col w-1/2 justify-center items-start text-left">
            <h2 className="text-6xl font-bold">Create profiles for kids.</h2>
            <p className="text-2xl mt-10">
            Send kids on adventures with their favorite characters in a space made just for them—free with your membership.
            </p>
          </div>
          <div className="flex w-1/2 max-sm:w-full justify-center items-center relative">
            <img src='https://occ-0-6700-64.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABfpnX3dbgjZ-Je8Ax3xn0kXehZm_5L6-xe6YSTq_ucht9TI5jwDMqusWZKNYT8DfGudD0_wWVVTFLiN2_kaQJumz2iivUWbIbAtF.png?r=11f' alt="" className="z-10 object-contain" />
          </div>
        </div>

        {/* Card Ends */}
      </main>
      <footer className="w-screen h-80 flex justify-center items-center bg-black">
        <a href="https://github.com/Haris-mlna">
          <AiFillGithub className="text-8xl max-sm:text-5xl max-sm:m-2 m-12 cursor-pointer" />
        </a>
        <a href="https://www.linkedin.com/in/haris-maulana-57b06696/">
          <AiOutlineLinkedin className="text-8xl max-sm:text-5xl max-sm:m-2 m-12 cursor-pointer"/>
        </a>
        <a href="https://twitter.com/harismaulana000">
          <AiOutlineTwitter className="text-8xl max-sm:text-5xl max-sm:m-2 m-12 cursor-pointer"/>
        </a>
        <a href="whatsapp:contact=+6281386329291">
          <AiOutlineWhatsApp className="text-8xl max-sm:text-5xl max-sm:m-2 m-12 cursor-pointer"/>
        </a>
      </footer>
    </div>
  );
}

export default App;
