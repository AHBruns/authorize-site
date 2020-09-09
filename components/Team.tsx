function Team() {
  return (
    <div className="bg-gray-800">
      <div className="max-w-6xl px-4 py-12 mx-auto sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12">
          <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
            <h2 className="text-3xl font-extrabold leading-9 tracking-tight text-orange-500 sm:text-4xl">
              Meet the team
            </h2>
            <p className="text-xl leading-7 text-white">
              Surprise! It's just me. Some people hate working with independent
              freelancers. Others love it. I get it. Personally, I think being a
              lone wolf has some advantages. For instance, every line of code on
              your site will be written by the same guy you call for
              support&mdash;me, and while being a sole proprietar means my
              throughput is limited it also means when I give you my word about
              a deadline you can hold me personally responsible. No more blaming
              Jim from down the hall.
            </p>
          </div>
          <ul className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8">
            <li className="px-6 py-10 text-center bg-gray-900 rounded-lg xl:px-10 xl:text-left">
              <div className="space-y-6 xl:space-y-10">
                <img
                  className="w-40 h-40 mx-auto rounded-full shadow-lg xl:w-56 xl:h-56"
                  src="/headshot.jpeg"
                />
                <div className="space-y-2 xl:flex xl:items-center xl:justify-between">
                  <div className="space-y-1 text-lg font-medium leading-6">
                    <h4 className="text-white">Alex Bruns</h4>
                    <p className="text-orange-400">Founder & Operator</p>
                  </div>
                  <ul className="flex justify-center space-x-5">
                    <li>
                      <a
                        href="https://twitter.com/AlexHBruns"
                        target="_blank"
                        rel="noopener"
                        className="text-gray-400 transition duration-150 ease-in-out hover:text-gray-300"
                      >
                        <span className="sr-only">Twitter</span>
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/alexbruns/"
                        target="_blank"
                        rel="noopener"
                        className="text-gray-400 transition duration-150 ease-in-out hover:text-gray-300"
                      >
                        <span className="sr-only">LinkedIn</span>
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Team;
