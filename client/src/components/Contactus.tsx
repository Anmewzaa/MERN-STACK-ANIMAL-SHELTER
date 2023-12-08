const Contactus = () => {
  return (
    <>
      <div className="contactus-bg">
        <div className="mx-auto max-w-[1200px] md:py-20 py-10 ">
          <div className="grid lg:grid-cols-2 gap-20 ">
            <div className="bg-white text-black p-12 rounded-lg xl:mx-0 mx-4">
              <h3 className="uppercase xl:text-6xl md:text-5xl text-4xl font-bold font-amctic mb-4 ">
                Get an Appointment
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis.
              </p>
              <div className="my-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered w-full mb-4"
                />
                <input
                  type="text"
                  placeholder="Email"
                  className="input input-bordered w-full mb-4"
                />
                <textarea
                  className="textarea input-bordered w-full mb-4"
                  placeholder="Message"
                ></textarea>
                <button className="uppercase btn w-full bg-[#FF7F50] text-white hover:text-[#FF7F50] hover:bg-white border hover:border-[#FF7F50]">
                  Get an appointment
                </button>
              </div>
            </div>
            <div className="text-white my-auto xl:mx-0 mx-4">
              <h3 className="uppercase xl:text-5xl md:text-4xl text-3xl font-bold font-amctic mb-4">
                Join our volunteer team and make a difference in the lives of
                shelter cats.
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
              <div className="divider"></div>
              <ul className="font-bold">
                <li className="flex mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                  Tristique felis molestie arcu lacus
                </li>
                <li className="flex mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                  Tristique felis molestie arcu lacus
                </li>
                <li className="flex mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                  Tristique felis molestie arcu lacus
                </li>
                <li className="flex mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                  Tristique felis molestie arcu lacus
                </li>
                <li className="flex mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                  Tristique felis molestie arcu lacus
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactus;
