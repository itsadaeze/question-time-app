function ErrorMessage({
  showErrorMessage,
  setShowErrorMessage,
  title,
  message1,
}) {
  return (
    <>
      {showErrorMessage ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-black/50">
            <div className="relative w-full max-w-sm md:max-w-[30%] max-h-full">
              {" "}
              {/*max-w-2xl */}
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                  <h3 className="text-xl text-center font-semibold text-red-900 dark:text-white">
                    {title}
                  </h3>
                  <button
                    type="button"
                    onClick={() => setShowErrorMessage(false)}
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-hide="defaultModal"
                  >
                    <svg
                      className="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
                <div className="text-center leading-relaxed text-red-500 dark:text-gray-400 p-6 space-y-6">
                  <p>
                    {message1} <br />
                  </p>

                  <button
                    id="modal-close"
                    onClick={() => setShowErrorMessage(false)}
                    className="p-3  bg-[#e43434] rounded-lg w-full text-white"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}

export default ErrorMessage;
