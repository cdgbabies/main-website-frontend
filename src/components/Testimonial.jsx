import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const TestimonialItem = (props) => (
  <div key={props.id} className="space-y-8 lg:mb-0 mb-6 p-4">
    <div className="h-full  bg-slate-200 rounded-lg p-6 dark:bg-slate-900 dark:highlight-white/5">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        className="block w-5 h-5 text-gray-400 mb-4"
        viewBox="0 0 975.036 975.036"
      >
        <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
      </svg>
      <blockquote className="mt-6 text-slate-700 dark:text-slate-300">
        <p className="leading-relaxed mb-6 ">{props.testimonial}</p>
      </blockquote>

      <a className="inline-flex float-right">
        <span className="flex-grow flex flex-col pl-4 text-base text-slate-900 font-semibold dark:text-slate-300 pb-2">
          <span className="title-font font-medium ">- {props.author}</span>
          {props.designation && (
            <span className=" text-sm">{props.designation}</span>
          )}
        </span>
      </a>
    </div>
  </div>
);

const AddTestimonialModal = (props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [progress, setProgress] = useState(false);
  async function addTestimonial(data) {
    const url = import.meta.env.PUBLIC_ADD_TESTIMONIAL_URL;

    if (
      data.testimonial.trim().length === 0 ||
      data.author.trim().length === 0
    ) {
      alert("Please enter both testimonial and author");
      return false;
    }
    setProgress(true);

    await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    setProgress(false);
    reset();
    document.getElementById("modalCloseButton").click();
  }
  return (
    <div
      id="defaultModal"
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"
    >
      <div className="relative w-full h-full max-w-2xl md:h-auto">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Write your Testimonial
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-toggle="defaultModal"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path                 
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <form onSubmit={handleSubmit(addTestimonial)}>
            <div className="p-4 space-y-4">
              <label className="block text-gray-700 text-sm font-bold  float-left dark:text-white">
                Author
              </label>
              <input
                {...register("author")}
                className="shadow appearance-none border rounded w-full  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="author"
                type="text"
                placeholder="Author"
              />
              <label className="block text-gray-700 text-sm font-bold mb-2 float-left dark:text-white">
                Testimonial
              </label>
              <textarea
                {...register("testimonial")}
                className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="testimonial"
                rows="4"
              />
            </div>

            <div className="flex items-center p-6 space-x-2 ">
              <button
                disabled={progress}
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
              >
                {progress ? (
                  <span>
                    <svg
                      aria-hidden="true"
                      role="status"
                      className="inline w-4 h-4 mr-3 text-white animate-spin"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="#E5E7EB"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentColor"
                      />
                    </svg>
                    Saving...
                  </span>
                ) : (
                  "Submit"
                )}
              </button>

              <button
                id="modalCloseButton"
                data-modal-toggle="defaultModal"
                type="button"
                className="text-white bg-red-600 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-red-800 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const Testimonial = (props) => {
  //Setting ttl to 15 minutes (15*60*1000)
  const [testimonials, setTestimonials] = useState(null);
  useEffect(() => {
   
    async function getTestimonials() {
      const data = await fetch(
        import.meta.env.PUBLIC_MAIN_SITE_URL + "dynamic/testimonials.json"
      )
        .then((response) => response.json())
        .catch((error) => console.log("Not able to load testimonials"));
       
      setTestimonials(data);
    }

    getTestimonials();
  }, []);

  const [showMore, setShowMore] = useState(true);
  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const dataLoaded = !!testimonials;
  
  let displayedTestimonials = [];
  if (testimonials && Array.isArray(testimonials)) {
    displayedTestimonials =
      showMore || testimonials.length <= 3
        ? testimonials
        : testimonials.slice(0, 3);
  }

  return (
    <>
      <section className="relative max-w-7xl mx-auto px-4 focus:outline-none sm:px-3 md:px-5">
      <div className="inset-x-0 bottom-0 flex justify-center  from-white pt-4  pointer-events-none  relative   space-x-4 text-sm">
        <div>
          <button
            onClick={toggleShowMore}
            className="relative bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 text-sm text-white font-semibold h-12 px-6 rounded-lg flex items-center dark:bg-slate-700 dark:hover:bg-slate-600 pointer-events-auto"
          >
            {showMore ? "Show Less..." : "Show More..."}
          </button>
        </div>
        <div>
          <button
            className="relative bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 text-sm text-white font-semibold h-12 px-6 rounded-lg flex items-center dark:bg-slate-700 dark:hover:bg-slate-600 pointer-events-auto"
            data-modal-toggle="defaultModal"
          >
            Add Testimonial
          </button>
        </div>
      </div>
      </section>
      <div className="grid grid-cols-1 gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3 overflow-hidden">
        
        {dataLoaded &&
          displayedTestimonials &&
          displayedTestimonials.map((item) => (
            <TestimonialItem
              key={item.sk}
              id={item.sk}
              testimonial={item.testimonial}
              author={item.author}
              designation={item.designation}
            />
          ))}
      </div>
    
      <AddTestimonialModal />
    </>
  );
};
export default Testimonial;
