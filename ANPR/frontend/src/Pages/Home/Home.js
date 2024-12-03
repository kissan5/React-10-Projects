import React from "react";
import "./Home.css";
import feature1 from "../../assets/1.jpeg";
import feature2 from "../../assets/2.jpeg";
import feature3 from "../../assets/6.jpeg";
import howItWorks from "../../assets/4.jpeg";
import admin1Image from "../../assets/fb.jpg";
import admin2Image from "../../assets/pp3.jpg";
import carImage from "../../assets/11.jpg";
import { CheckCircle } from "lucide-react";
import { IoMdCheckmarkCircle } from "react-icons/io";
import bannerImage from "../../assets/f1.jpg";
import {
  FaGlobe,
  FaCamera,
  FaBolt,
  FaCloud,
  FaBullseye,
  FaAward,
  FaCheckCircle,
  FaTools,
} from "react-icons/fa";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div className="home">
      {/* <header className="hero-section">
        <h1>Welcome to Automatic Number Plate Recognition (ANPR)</h1>
        <p>Revolutionizing vehicle identification with advanced technology.</p>
        <a href="/camera" className="cta-button">
          Get Started
        </a>
      </header> */}

      {/* Hero Container */}
      <div className="hero-section">
        {/* Component */}

        {/* Hero Content */}
        <div className="flex flex-col item-center justify-center">
          {/* Hero Title */}
          <h1 className="mb-4 text-4xl font-bold md:text-6xl lg:text-4xl w-2/3 m-auto leading-[4.5rem!important]">
            Welcome to Automatic Number Plate Recognition (ANPR)
          </h1>
          <p className="mb-6 max-w-lg text-sm text-gray-500 sm:text-xl md:mb-10 lg:mb-12">
            Revolutionizing vehicle identification with advanced technology.
            Built with ReactJs and Python.
          </p>
          {/* Hero Button */}
          <div className="flex items-center justify-center pt-4 rounded-lg bg-[#6622a0]  w-fit m-auto px-8">
            <a
              href="/camera"
              className="flex max-w-full items-center font-bold"
            >
              <p>Get Started</p>
            </a>
          </div>
        </div>
      </div>
      {/* 
      <section className="features-grid">
        <div className="container">
          <div className="grid">
            <div className="feature-item">
              <FaBullseye className="feature-icon" size={24} />
              <h3>Try It Out</h3>
              <p>
                Our algorithm handles plates that are blurry, dark, angled, and
                much more! See our ANPR in action across regions.
              </p>
            </div>
            <div className="feature-item">
              <FaCamera className="feature-icon" size={24} />
              <h3>Images & Videos</h3>
              <p>
                We handle both. Snapshot decodes plates from images. Stream
                processes live camera or video files.
              </p>
            </div>
            <div className="feature-item">
              <FaAward className="feature-icon" size={24} />
              <h3>Feature-Rich</h3>
              <p>
                Get vehicle make, model, color, region, direction of travel,
                Webhooks, Dashboard, and more! Blur plates too!
              </p>
            </div>

            <div className="feature-item">
              <FaBolt className="feature-icon" size={24} />
              <h3>Fast, Nimble</h3>
              <p>
                Snapshot's inference speed is 50-100 ms and Stream processes
                5-10 cameras on a mid-range CPU. No GPU needed!
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className="features">
        <h2>Features</h2>
        <div className="feature-list">
          <div className="feature">
            <img src={feature1} alt="Fast Recognition" />
            <h3>Fast Recognition</h3>
            <p>
              Quick and accurate number plate detection for seamless operations.
            </p>
          </div>
          <div className="feature">
            <img src={feature2} alt="User-Friendly Interface" />
            <h3>User-Friendly Interface</h3>
            <p>Intuitive design enhances user experience and ease of access.</p>
          </div>
          <div className="feature">
            <img src={feature3} alt="Real-Time Monitoring" />
            <h3>Real-Time Monitoring</h3>
            <p>Monitor vehicles live for enhanced security and efficiency.</p>
          </div>
        </div>
      </section> */}

      <section>
        {/* Container */}
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
          {/* Title */}

          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold md:text-5xl">
              Make every step user-centric
            </h2>
            <p className="mb-8 mt-4 max-w-xl text-base text-gray-500 md:mb-12 md:text-lg lg:mb-16">
              we give accurate results for the user centric number plate of vehicle 
            </p>
          </div>
          {/* Features Content */}
          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 md:gap-4 lg:gap-6">
            {/* Features Item */}
            <div className="grid gap-6 rounded-md border border-solid border-gray-300 p-8 md:p-10">
              <FaBullseye className="feature-icon" size={24} />

              <h3 className="text-xl font-semibold">Try It Out</h3>
              <p className="text-sm text-gray-500">
                Our algorithm handles plates that are blurry, dark, angled, and
                much more! See our ANPR in action across regions.
              </p>
            </div>
            {/* Features Item */}
            <div className="grid gap-6 rounded-md border border-solid border-gray-300 p-8 md:p-10">
              <FaCamera className="feature-icon" size={24} />
              <h3 className="text-xl font-semibold">Images</h3>
              <p className="text-sm text-gray-500">
                We handle both. Snapshot decodes plates from images. Stream
                processes live camera or video files.
              </p>
            </div>
            {/* Features Item */}
            <div className="grid gap-6 rounded-md border border-solid border-gray-300 p-8 md:p-10">
              <FaAward className="feature-icon" size={24} />
              <h3 className="text-xl font-semibold">Feature-Rich</h3>
              <p className="text-sm text-gray-500">
                Get vehicle make, model, color, region, direction of travel,
                Webhooks, Dashboard, and more! Blur plates too!
              </p>
            </div>
            {/* Features Item */}
            <div className="grid gap-6 rounded-md border border-solid border-gray-300 p-8 md:p-10">
              <FaBolt className="feature-icon" size={24} />
              <h3 className="text-xl font-semibold">Fast, Nimble</h3>
              <p className="text-sm text-gray-500">
                Snapshot's inference speed is 50-100 ms and Stream processes
                5-10 cameras on a mid-range CPU. No GPU needed!
              </p>
            </div>

            {/* Features Item */}
            <div className="grid gap-6 rounded-md border border-solid border-gray-300 p-8 md:p-10">
              <FaCheckCircle className="feature-icon" size={24} />
              <h3 className="text-xl font-semibold">Quality</h3>
              <p className="text-sm text-gray-500">
                We ensure that every aspect of our service is top-notch,
                providing high-quality results and delivering on every promise.
                From image clarity to feature reliability, your experience is
                our priority.
              </p>
            </div>

            {/* Features Item */}
            <div className="grid gap-6 rounded-md border border-solid border-gray-300 p-8 md:p-10">
              <FaTools className="feature-icon" size={24} />
              <h3 className="text-xl font-semibold">Resource</h3>
              <p className="text-sm text-gray-500">
                Our extensive resources give you everything you need to get the
                most out of our service, including guides, tools, and continuous
                support. We are here to help you at every step, with resources
                that simplify your experience and empower your success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="how-it-works-content">
          <img src={howItWorks} alt="How it works" />
          <p>
            Using advanced algorithms and high-resolution cameras, our ANPR
            system accurately detects and extracts vehicle number plates. Ideal
            for traffic management, parking, toll booths, and security, it
            offers real-time processing, efficient multi-vehicle handling, and
            reliable performance across varied conditions.
          </p>
        </div>
      </section> */}

      <section className="py-12">
        {/* Container */}
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-5 py-16 md:px-10 md:py-20">
          {/* HEADING TEXT */}
          <p className="font-inter mb-2 text-center text-sm font-medium">
            3 EASY STEPS
          </p>
          <h1 className="text-center text-[#6622a0] text-3xl font-bold lg:text-4xl">
            How it works
          </h1>
          <p className="font-inter mx-auto mb-12 mt-4 max-w-lg px-5 text-center text-base font-light text-gray-500">
            Our ANPR system detects vehicle plates with accuracy, offering
            real-time, reliable performance for traffic, parking, tolls, and
            security.
          </p>
          {/* HOW IT WORKS STEPS */}
          <div className="flex flex-col items-start justify-center lg:flex-row">
            {/* BLOCK */}
            <div className="relative my-8 flex w-full rounded-md lg:mx-8 lg:flex-col">
              <div className="flex h-16 w-16 items-center justify-center rounded-md  bg-[#6622a0]">
                <h2 className="text-3xl text-white font-medium">1</h2>
              </div>
              <div className="ml-6 lg:ml-0">
                <h2 className="mb-5 text-xl font-medium lg:mt-8">
                  Capture Image
                </h2>
                <p className="font-inter max-w-md pr-5 text-base text-gray-500">
                  The system captures an image of the vehicle using a camera or
                  uploaded footage.
                </p>
              </div>
              {/* MOBILE - HOW IT WORKS LINE */}
              <svg
                className="absolute -bottom-[48px] left-[28px] lg:hidden"
                width="12"
                height="70"
                viewBox="0 0 12 95"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 0.226497L0.226497 6L6 11.7735L11.7735 6L6 0.226497ZM6 94.7735L11.7735 89L6 83.2265L0.226497 89L6 94.7735ZM5 6V10.15H7V6H5ZM5 18.45V26.75H7L7 18.45H5ZM5 35.05L5 43.35H7V35.05H5ZM5 51.65L5 59.95H7L7 51.65H5ZM5 68.25L5 76.55H7L7 68.25H5ZM5 84.85L5 89H7V84.85H5Z"
                  fill="black"
                ></path>
              </svg>
              {/* DESKTOP - HOW IT WORKS LINE */}
              <svg
                className="absolute right-0 top-7 hidden lg:block"
                width="170"
                height="12"
                viewBox="0 0 170 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.226497 6L6 11.7735L11.7735 6L6 0.226497L0.226497 6ZM169.773 6L164 0.226497L158.227 6L164 11.7735L169.773 6ZM6 7H9.95V5H6V7ZM17.85 7H25.75V5H17.85V7ZM33.65 7H41.55V5H33.65V7ZM49.45 7H57.35V5H49.45V7ZM65.25 7H73.15V5H65.25V7ZM81.05 7H88.95V5H81.05V7ZM96.85 7H104.75V5H96.85V7ZM112.65 7H120.55V5H112.65V7ZM128.45 7H136.35V5H128.45V7ZM144.25 7H152.15V5H144.25V7ZM160.05 7H164V5H160.05V7Z"
                  fill="#6622a0"
                />
              </svg>
            </div>
            {/* BLOCK */}
            <div className="relative my-8 flex w-full rounded-md lg:mx-8 lg:flex-col">
              <div className="flex h-16 w-16 items-center justify-center rounded-md bg-[#6622a0]">
                <h2 className="text-3xl text-white  font-medium">2</h2>
              </div>
              <div className="ml-6 lg:ml-0">
                <h2 className="mb-5 text-xl font-medium lg:mt-8">
                  Detect and Extract Plate
                </h2>
                <p className="font-inter max-w-md pr-5 text-base text-gray-500">
                  The system identifies the license plate within the image and
                  isolates it for further analysis.
                </p>
              </div>
              {/* MOBILE - HOW IT WORKS LINE */}
              <svg
                className="absolute -bottom-[48px] left-[28px] lg:hidden"
                width="12"
                height="70"
                viewBox="0 0 12 95"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 0.226497L0.226497 6L6 11.7735L11.7735 6L6 0.226497ZM6 94.7735L11.7735 89L6 83.2265L0.226497 89L6 94.7735ZM5 6V10.15H7V6H5ZM5 18.45V26.75H7L7 18.45H5ZM5 35.05L5 43.35H7V35.05H5ZM5 51.65L5 59.95H7L7 51.65H5ZM5 68.25L5 76.55H7L7 68.25H5ZM5 84.85L5 89H7V84.85H5Z"
                  fill="black"
                ></path>
              </svg>
              {/* DESKTOP - HOW IT WORKS LINE */}
              <svg
                className="absolute right-0 top-7 hidden lg:block"
                width="170"
                height="12"
                viewBox="0 0 170 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.226497 6L6 11.7735L11.7735 6L6 0.226497L0.226497 6ZM169.773 6L164 0.226497L158.227 6L164 11.7735L169.773 6ZM6 7H9.95V5H6V7ZM17.85 7H25.75V5H17.85V7ZM33.65 7H41.55V5H33.65V7ZM49.45 7H57.35V5H49.45V7ZM65.25 7H73.15V5H65.25V7ZM81.05 7H88.95V5H81.05V7ZM96.85 7H104.75V5H96.85V7ZM112.65 7H120.55V5H112.65V7ZM128.45 7H136.35V5H128.45V7ZM144.25 7H152.15V5H144.25V7ZM160.05 7H164V5H160.05V7Z"
                  fill="#6622a0"
                />
              </svg>
            </div>
            {/* BLOCK */}
            <div className="relative my-8 flex w-full rounded-md lg:mx-8 lg:flex-col">
              <div className="flex h-16 w-16 items-center justify-center rounded-md bg-[#6622a0]">
                <h2 className="text-3xl text-white font-medium">3</h2>
              </div>
              <div className="ml-6 lg:ml-0">
                <h2 className="mb-5 text-xl font-medium lg:mt-8">
                  Recognize Plate!
                </h2>
                <p className="font-inter max-w-md pr-5 text-base text-gray-500">
                  The characters on the license plate are extracted and
                  processed using OCR (Optical Character Recognition) to
                  retrieve the text.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="pr-snapshot">
        <div className="pr-container">
          <h2 className="pr-title">Plate Recognizer Snapshot ANPR</h2>
          <div className="pr-content-grid">
            <div className="pr-image-wrapper">
              <img
                src={carImage}
                alt="Dark car with brake lights on in a city street"
                className="pr-feature-image"
              />
            </div>
            <div className="pr-features">
              <ul className="pr-feature-list">
                <li className="pr-feature-item">
                  <CheckCircle className="pr-icon" />
                  <div>
                    <span className="pr-feature-label">INPUT: </span>
                    Takes image in any format
                  </div>
                </li>
                <li className="pr-feature-item">
                  <CheckCircle className="pr-icon" />
                  <div>
                    <span className="pr-feature-label">OUTPUT: </span>
                    Decodes license plate, vehicle make, model, color, and more!
                  </div>
                </li>
                <li className="pr-feature-item">
                  <CheckCircle className="pr-icon" />
                  <div>
                    <span className="pr-feature-label">HARDWARE: </span>
                    Runs via Cloud or On-Premise SDK (no Internet required) on
                    Windows, Linux, Jetson, Pi, and more.
                  </div>
                </li>
                <li className="pr-feature-item">
                  <CheckCircle className="pr-icon" />
                  <div>
                    <span className="pr-feature-label">SPEED: </span>
                    Fast inference speed for SDK (50 ms) and Cloud (200 ms).
                  </div>
                </li>
                <li className="pr-feature-item">
                  <CheckCircle className="pr-icon" />
                  <div>
                    <span className="pr-feature-label">MORE: </span>
                    Sample code in 8 languages, Webhooks, detection zones, and
                    more!
                  </div>
                </li>
              </ul>
              <button className="pr-learn-more-button">Learn more</button>
            </div>
          </div>
        </div>
      </section> */}

      <section>
        {/* Container */}
        <div className="mx-auto w-full max-w-7xl px-5 py-12 md:px-10 md:py-16 lg:py-20">
          {/* Component */}
          <div className="flex flex-col gap-8 lg:flex-row lg:gap-10">
            {/* Content */}
            <div className="flex flex-col gap-8 lg:w-3/5">
              <h2 className="mb-8 text-3xl font-bold md:text-5xl text-[#6622a0]">About us</h2>
              <p className="text-sm sm:text-base text-gray-500">
                Welcome to Smart Plate Recognizer, your cutting-edge solution
                for automatic number plate recognition. Our platform is designed
                to simplify and automate license plate detection with real-time
                camera integration, ensuring seamless user experiences and
                efficient data management. With our application, users can
                easily capture and recognize license plates using a camera, save
                the recognized details, including timestamps, and securely store
                them in a database. Whether you're an individual or a business,
                our system provides an intuitive and secure way to manage
                license plate records effortlessly.
              </p>
              <a
                href="/about"
                className="w-36 rounded-md bg-[#6622a0]   px-6 py-3 text-center font-semibold text-white"
              >
                Learn More
              </a>
              {/* Divider */} <div className="my-8 h-px w-full bg-black"></div>
              {/* Testimonials */}
              <div className="grid gap-8 md:grid-cols-2 md:gap-4">
                <div className="flex flex-col gap-4 rounded-md border border-solid bg-gray-100 p-6 md:p-4">
                  <p className="text-sm">
                    I have been using the Business Solution services for the
                    past year, and I am extremely satisfied with the results.
                    Their innovative solutions and expertise have transformed my
                    business operations.
                  </p>
                  <div className="flex items-center gap-2 sm:gap-x-4">
                    <div className="flex items-center gap-x-2">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPLaceholder%20Image%20Secondary.svg?alt=media&token=b8276192-19ff-4dd9-8750-80bc5f7d6844"
                        alt=""
                        className="h-12 w-12 rounded-full object-cover"
                      />
                      <p className="text-sm font-semibold sm:text-base">
                        Alleyah
                      </p>
                    </div>
                    {/* Divider */} <div className="h-5 w-px bg-gray-300"></div>
                    <div className="flex items-center gap-x-2">
                      <p className="text-sm font-semibold sm:text-base">5.0</p>
                      <div className="flex text-orange-500">
                        <svg
                          className="h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          width="100%"
                          height="100%"
                          preserveAspectRatio="xMidYMid meet"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"
                          ></path>
                        </svg>
                        <svg
                          className="h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          width="100%"
                          height="100%"
                          preserveAspectRatio="xMidYMid meet"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"
                          ></path>
                        </svg>
                        <svg
                          className="h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          width="100%"
                          height="100%"
                          preserveAspectRatio="xMidYMid meet"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"
                          ></path>
                        </svg>
                        <svg
                          className="h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          width="100%"
                          height="100%"
                          preserveAspectRatio="xMidYMid meet"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"
                          ></path>
                        </svg>
                        <svg
                          className="h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          width="100%"
                          height="100%"
                          preserveAspectRatio="xMidYMid meet"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-4 rounded-md border border-solid bg-gray-100 p-6 md:p-4">
                  <p className="text-sm">
                    I have been using the Business Solution services for the
                    past year, and I am extremely satisfied with the results.
                    Their innovative solutions and expertise have transformed my
                    business operations.
                  </p>
                  <div className="flex items-center gap-2 sm:gap-x-4">
                    <div className="flex items-center gap-x-2">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPLaceholder%20Image%20Secondary.svg?alt=media&token=b8276192-19ff-4dd9-8750-80bc5f7d6844"
                        alt=""
                        className="h-12 w-12 rounded-full object-cover"
                      />
                      <p className="text-sm font-semibold sm:text-base">
                        Alleyah
                      </p>
                    </div>
                    {/* Divider */} <div className="h-5 w-px bg-gray-300"></div>
                    <div className="flex items-center gap-x-2">
                      <p className="text-sm font-semibold sm:text-base">5.0</p>
                      <div className="flex text-orange-500">
                        <svg
                          className="h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          width="100%"
                          height="100%"
                          preserveAspectRatio="xMidYMid meet"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"
                          ></path>
                        </svg>
                        <svg
                          className="h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          width="100%"
                          height="100%"
                          preserveAspectRatio="xMidYMid meet"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"
                          ></path>
                        </svg>
                        <svg
                          className="h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          width="100%"
                          height="100%"
                          preserveAspectRatio="xMidYMid meet"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"
                          ></path>
                        </svg>
                        <svg
                          className="h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          width="100%"
                          height="100%"
                          preserveAspectRatio="xMidYMid meet"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"
                          ></path>
                        </svg>
                        <svg
                          className="h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          width="100%"
                          height="100%"
                          preserveAspectRatio="xMidYMid meet"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Image */}
            <div className="w-full rounded-md bg-gray-100 max-[991px]:h-[475px] lg:w-2/5">
              <img src={carImage} className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* <section className="contact-section">
        <div className="container">
          <div className="content-grid">
            <div className="text-content">
              <h2>Let's Stay Connected</h2>
              <p>
                We'd love to hear from you! Reach out to discuss how we can
                assist.
              </p>
            </div>
            <div className="form-container">
              <form id="contactForm" className="contact-form">
                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div className="form-group full-width">
                    <label htmlFor="email">Business Email</label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Enter your business email"
                      required
                    />
                  </div>
                  <div className="form-group full-width">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      placeholder="Enter your message"
                      required
                    ></textarea>
                  </div>
                </div>
                <div className="checkbox-group">
                  <input type="checkbox" id="privacy" required />
                  <label htmlFor="privacy">
                    I agree to the <a href="#">Privacy Policy</a> and{" "}
                    <a href="#">Terms of Service</a>
                  </label>
                </div>
                <button type="submit" id="submitButton">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section> */}
      <section className=" bg-[#30143d]">
        {/* Container */}
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
          {/* Component */}
          <div className="grid items-center gap-8 sm:gap-20 lg:grid-cols-2">
            <div className="max-w-3xl">
              {/* Title */}
              <h2 className="mb-2 text-white text-3xl font-bold md:text-5xl">
                Lets get Connected!
              </h2>
              <p className="my-4 max-w-lg pb-4 text-sm text-gray-500 sm:text-base md:mb-6 lg:mb-8">
                We'd love to hear from you! Reach out to discuss how we can
                assist.
              </p>
              {/* Testimonial */}
              
              
              <div className="flex">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
                  alt=""
                  className="mr-4 inline-block h-16 w-16 rounded-full object-cover"
                />
               
              </div>
            </div>
            <div className="mx-auto max-w-xl bg-[#30143d] p-8 text-center">
              <h3 className="text-2xl text-white font-bold md:text-3xl">
                Get a free quote
              </h3>
              <p className="mx-auto mb-6 mt-4 max-w-lg text-sm text-gray-500 lg:mb-8">
                Our ANPR solution accurately reads vehicle plates in real-time,
                ideal for security, parking, and law enforcement. Get in touch
                for a personalized quote.
              </p>
              {/* Form */}
              <form
                className="mx-auto mb-4 max-w-sm text-left"
                name="wf-form-password"
                method="get"
              >
                <div>
                  <label htmlFor="name-2" className="mb-1 font-medium">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="mb-4 block h-9 w-full rounded-md border border-solid  px-3 py-6 pl-4 text-sm text-black"
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="name-2" className="mb-1 font-medium">
                    Email Address
                  </label>
                  <input
                    type="text"
                    className="mb-4 block h-9 w-full rounded-md border border-solid  px-3 py-6 pl-4 text-sm text-black"
                  />
                </div>
                <div className="mb-5 md:mb-6 lg:mb-8">
                  <label htmlFor="field-3" className="mb-1 font-medium">
                    Project Brief
                  </label>
                  <textarea
                    placeholder=""
                    maxLength="5000"
                    name="field"
                    className="mb-2.5 block h-auto min-h-32 w-full rounded-md border border-solid p-3 text-sm text-black"
                  ></textarea>
                </div>
                <input
                  type="submit"
                  value="Get free quote"
                  className="inline-block w-full cursor-pointer rounded-md bg-[#6622a0] py-3 text-center font-semibold text-white"
                />
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="anpr-section">
        <div className="anpr-container">
          <h2 className="anpr-title">Some ANPR Applications</h2>
          <div className="anpr-grid">
            <div className="anpr-card">
              <h3 className="anpr-card-title">Parking Management</h3>
              <p className="anpr-card-text">
                Ensure that vehicles are abiding to your parking policy. Get
                alerts when there's a violation. Check out our{" "}
                <a href="#" className="anpr-link">
                  Parking Enforcement
                </a>{" "}
                solution!
              </p>
            </div>
            <div className="anpr-card">
              <h3 className="anpr-card-title">Highway Monitoring</h3>
              <p className="anpr-card-text">
                Monitor vehicles at different junctions of the highway, identify
                stolen vehicles and more!
              </p>
            </div>
            <div className="anpr-card">
              <h3 className="anpr-card-title">Toll Management</h3>
              <p className="anpr-card-text">
                Collect toll automatically based on plate number without the
                need for RFID!
              </p>
            </div>
          </div>
        </div>
      </section> */}
      <section>
        {/* Container */}
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
          {/* Title */}
          <h2 className="mb-8 text-center text-3xl font-bold md:mb-12 md:text-5xl lg:mb-16 text-[#6622a0]">
            We get results
          </h2>
          {/* Content */}
          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 md:gap-4 lg:gap-6">
            {/* Item */}
            <div className="relative p-8 md:p-10">
              <h3 className="mb-4 text-3xl font-bold md:text-5xl">1000+</h3>
              <p className="text-sm text-gray-500">
              Number of plates successfully recognized by our system to date.
              </p>
              <div className="absolute right-0 top-[29%] hidden h-2/5 border-r border-gray-300 md:block"></div>
            </div>
            {/* Item */}
            <div className="relative p-8 md:p-10">
              <h3 className="mb-4 text-3xl font-bold md:text-5xl">41%</h3>
              <p className="text-sm text-gray-500">
              Increase in security and operational efficiency using our ANPR solution.
              </p>
              <div className="absolute right-0 top-[29%] hidden h-2/5 border-r border-gray-300 md:block"></div>
            </div>
            {/* Item */}
            <div className="p-8 md:p-10">
              <h3 className="mb-4 text-3xl font-bold md:text-5xl">100+</h3>
              <p className="text-sm text-gray-500">
              Number of successful installations and ongoing active deployments in our parking area
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="admins">
        <h2>Meet Our Admins</h2>
        <div className="admin-list">
          <div className="admin-card">
            <img src={admin1Image} alt="Admin 1" />
            <h3>Admin Name 1</h3>
            <p>
              Dedicated to optimizing performance and ensuring user
              satisfaction.
            </p>
          </div>
          <div className="admin-card">
            <img src={admin2Image} alt="Admin 2" />
            <h3>Admin Name 2</h3>
            <p>Focused on innovation and seamless user experience.</p>
          </div>
        </div>
      </section> */}
    </div>
  );
};

function FeatureItem({ title, description }) {
  return (
    <div className="feature-item">
      <span className="feature-icon">&#10004;</span>
      <div>
        <span className="feature-title">{title}</span>
        <span className="feature-description">{description}</span>
      </div>
    </div>
  );
}

export default Home;
