import React from "react";

import AirplaneSlider from "../Components/AirplaneSlider";
import { Link } from "react-router-dom";

const Home = () => {
  return (<>
    <AirplaneSlider />

    <section className="mb-10">
      <p className="text-3xl text-center py-16 mb-2 font-semibold">
        Offers
      </p>
      <div className="flex justify-center">
        <div className="bg-offers-1 rounded-lg h-80 w-2/5 mr-10 drop-shadow-2xl shadow-2xl">
          <div className="bg-cover-offers rounded-lg flex flex-col items-center justify-center">
            <div className="mb-12">
              <p className="text-white py-3 text-center text-2xl font-bold font-roboto">
                Miami
              </p>
              <p className="text-white text-center text-2xl font-bold font-roboto">
                Just For 450$
              </p>
            </div>
            <Link to={'/booking'}>
              <button className="btn-offers text-black text-center bg-white px-6 py-1 text-base font-medium rounded-lg hover:text-white">Book Now</button>
            </Link>
          </div>
        </div>
        <div className="bg-offers-2 h-80 rounded-lg w-2/5 drop-shadow-2xl shadow-2xl">
          <div className="bg-cover-offers rounded-lg flex flex-col items-center justify-center">
            <div className="mb-12">
              <p className="text-white py-3 text-center text-2xl font-bold font-roboto">
                Maldives
              </p>
              <p className="text-white text-center text-2xl font-bold font-roboto">
                Just For 300$
              </p>
            </div>
            <Link to={'/booking'}>
              <button className="btn-offers text-black text-center bg-white px-6 py-1 text-base font-medium rounded-lg hover:text-white">Book Now</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
    <section className="mb-10">
      <p className="text-3xl text-center py-16 mb-2 font-semibold">
        Tarvel now all over the world
      </p>
      <div className="flex justify-center flex-col items-center">
        <div className="flex">
          <div className="rounded-lg flex mr-10 flex-col items-center">
            <Link to={"/booking"}>
              <div className="bg-travel-1 w-72 h-44 rounded-lg">
              </div>
            </Link>
            <Link to={"/booking"} className=" my-1">
              <p className="text-lg font-semibold">
                Buhrain
              </p>
            </Link>
            <Link to={"/booking"}>
              <p className="color-green">
                From 3200 E.P
              </p>
            </Link>
          </div>
          <div className="rounded-lg flex mr-10 flex-col items-center">

            <Link to={"/booking"}>

              <div className="bg-travel-2 w-72 h-44 rounded-lg">
              </div>
            </Link>
            <Link to={"/booking"} className=" my-1">
              <p className="text-lg font-semibold">
                UAE
              </p>
            </Link>
            <Link to={"/booking"}>
              <p className="color-green">
                From 2400 E.P
              </p>
            </Link>
          </div>
          <div className="rounded-lg flex mr-10 flex-col items-center">
            <Link to={"/booking"}>
              <div className="bg-travel-3 w-72 h-44 rounded-lg">
              </div>
            </Link>
            <Link to={"/booking"} className=" my-1">
              <p className="text-lg font-semibold">
                Germany
              </p>
            </Link>
            <Link to={"/booking"}>
              <p className="color-green">
                From 6000 E.P
              </p>
            </Link>
          </div>
        </div>
        <div className="flex my-10">
          <div className="rounded-lg flex mr-10 flex-col items-center">

            <Link to={"/booking"}>

              <div className="bg-travel-4 w-72 h-44 rounded-lg"></div>
            </Link>
            <Link to={"/booking"} className=" my-1">
              <p className="text-lg font-semibold">
                England
              </p>
            </Link>
            <Link to={"/booking"}>
              <p className="color-green">
                From 7000 E.P
              </p>
            </Link>

          </div>
          <div className="rounded-lg flex mr-10 flex-col items-center">

            <Link to={"/booking"}>

              <div className="bg-travel-5 w-72 h-44 rounded-lg"></div>
            </Link>
            <Link to={"/booking"} className=" my-1">
              <p className="text-lg font-semibold">
                France
              </p>
            </Link>
            <Link to={"/booking"}>
              <p className="color-green">
                From 5800 E.P
              </p>
            </Link>
          </div>
        </div>
      </div>
    </section>
    <section >
      <form className="flex items-center  flex-col text-xl w-full">
        <textarea
          type="textarea"
          required
          className="pl-14 max-h-52 bg-green-500 rounded-md mb-10 h-20 bg-gray w-2/4"
        />
        <Link to={'/'} className="mb-10 w-2/4">
          <button className="w-full btn-offers text-black text-center bg-btn-feedback px-6 py-2 text-base font-medium rounded-lg hover:text-white">Send Feedback</button>
        </Link>
      </form>
    </section>
    <div className="text-xl font-semibold bg-btn-feedback text-center p-6 w-full">
      Copyright &copy; 2020, Aroound The World , All Rights Reserved
    </div>

  </>);
};

export default Home;
