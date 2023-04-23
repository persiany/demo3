import React from 'react';

const HomePage = () => {
  return (
    <div className="bg-gray-100">
      {/* Header */}
      <header className="p-4 bg-white shadow-md">
        <nav className="flex justify-between">
          <div className="flex items-center">
            <img src="https://www.upwork.com/ab/assets/Brontes/4d4fe65/dist/img/12c6d8b.svg" alt="Upwork Logo" className="h-6 mr-2" />
            <h1 className="text-lg font-bold">Lawyer Booking Marketplace</h1>
          </div>
          <div className="flex items-center">
            <form className="mr-4">
              <div className="relative text-gray-600">
                <input
                  type="search"
                  name="search"
                  placeholder="Search"
                  className="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none"
                />
                <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
                  <svg
                    className="h-4 w-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14.56 13.94a8 8 0 111.414-1.414l4.243 4.243a1 1 0 01-1.414 1.414l-4.243-4.243zm-7.5-.44a5 5 0 100-10 5 5 0 000 10z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
            </form>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md mr-4">Log In</button>
            <button className="bg-white text-blue-500 px-4 py-2 rounded-md border border-blue-500">Sign Up</button>
          </div>
        </nav>
      </header>

      {/* Filter */}
      <div className="bg-white p-4 shadow-md mb-4">
        <h2 className="text-lg font-bold mb-2">Filter Results</h2>
        <form>
          <label htmlFor="expertise" className="block text-gray-700 font-bold mb-2">
            Expertise
          </label>
          <input
            type="text"
            id="expertise"
            name="expertise"
            className="w-full border border-gray-300 p-2 rounded-lg mb-4"
            placeholder="Enter an expertise, e.g., Divorce"
          />
          <label htmlFor="location" className="block text-gray-700 font-bold mb-2">
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            className="w-full border border-gray-300 p-2 rounded-lg mb-4"
            placeholder="Enter a city, state or zip code"
          />
          <label htmlFor="fee" className="block text-gray-700 font-bold mb-2">
            Fee
          </label>
          <input
            type="number"
            id="fee"
            name="fee"
            className="w-full border border-gray-300 p-2 rounded-lg mb-4"
            placeholder="Enter a fee, e.g., 100"
          />

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-500 px-6 py-2 text-xl font-medium uppercase text-white"
          >
            Search
          </button>
        </form>
      </div>

      {/* Featured Lawyers */}
      <section className="p-4">
        <h2 className="text-lg font-bold mb-2">Featured Lawyers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img
              src="https://source.unsplash.com/random/800x600/?lawyer,1"
              alt="Featured Lawyer"
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">Mary Johnson</h3>
              <p className="text-gray-700 mb-2">Divorce Lawyer</p>
              <button className="w-full rounded-lg bg-blue-500 text-white px-6 py-2 font-medium">
                View Profile
              </button>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img
              src="https://source.unsplash.com/random/800x600/?lawyer,2"
              alt="Featured Lawyer"
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">John Smith</h3>
              <p className="text-gray-700 mb-2">Criminal Defense Lawyer</p>
              <button className="w-full rounded-lg bg-blue-500 text-white px-6 py-2 font-medium">
                View Profile
              </button>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img
              src="https://source.unsplash.com/random/800x600/?lawyer,3"
              alt="Featured Lawyer"
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">Karen Thompson</h3>
              <p className="text-gray-700 mb-2">Personal Injury Lawyer</p>
              <button className="w-full rounded-lg bg-blue-500 text-white px-6 py-2 font-medium">
                View Profile
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white p-4 shadow-md mb-4">
        <h2 className="text-lg font-bold mb-2">Client Testimonials</h2>
        <div className="flex items-center">
          <img
            src="https://source.unsplash.com/random/40x40/?face"
            alt="Testimonial author"
            className="rounded-full h-12 w-12 object-cover mr-4"
          />
          <div>
            <p className="text-gray-700 mb-2">
              "I had a great experience with the Lawyer Booking Marketplace. I was able to quickly and easily
              find the perfect lawyer for my case."
            </p>
            <p className="text-gray-700 font-bold mb-2">Jane Doe</p>
          </div>
        </div>
      </section>

      {/* Lawyer Profile */}
      <section className="bg-white p-4 shadow-md mb-4">
        <h2 className="text-lg font-bold mb-2">Mary Johnson</h2>
        <p className="text-gray-700 mb-2">Divorce Lawyer</p>
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center">
            <svg
              className="h-5 w-5 fill-current text-yellow-500 mr-1"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.441 1.754c.284-.866 1.682-.866 1.966 0l2.488 7.593c.148.452.87.755 1.336.58l7.994-2.77c.896-.31 1.97.336 1.81 1.292l-1.888 7.455c-.113.446-.56.759-1.04.705l-8.334-.618c-.53-.039-.938-.516-.88-1.049l1.373-7.554c.05-.259-.152-.497-.395-.497l-6.895.01c-.452.006-.7-.55-.395-.896l5.42-5.71zM9.5 9.5A2 2 0 119.5 13A2 2 0 019.5 9.5z"
              ></path>
            </svg>
            <p className="text-gray-700 font-bold">4.7</p>
          </div>
          <p className="text-gray-700 font-bold">$100/hr</p>
        </div>
        <p className="text-gray-700 mb-2">
          As a divorce lawyer, I am passionate about helping couples navigate the legal system and come to
          amicable arrangements that are in the best interest of everyone involved.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="text-lg font-bold mb-2">Availability</h3>
            <ul className="list-disc ml-4 mb-4">
              <li>Monday - Friday: 9am - 5pm</li>
              <li>Saturday: 11am - 3pm</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Expertise</h3>
            <ul className="list-disc ml-4">
              <li>Divorce</li>
              <li>Child Custody</li>
              <li>Family Law</li>
            </ul>
          </div>
        </div>
        <button className="w-full rounded-lg bg-blue-500 text-white px-6 py-2 font-medium mt-4">
          Book Now
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-white p-4 shadow-md">
        <nav className="flex justify-between">
          <ul className="flex">
            <li className="mr-4">
              <a href="#" className="text-gray-700 hover:text-blue-500">Terms and Conditions</a>
            </li>
            <li className="mr-4">
              <a href="#" className="text-gray-700 hover:text-blue-500">Terms of Service</a>
            </li>
            <li className="mr-4">
              <a href="#" className="text-gray-700 hover:text-blue-500">Privacy Policy</a>
            </li>
            <li className="mr-4">
              <a href="#" className="text-gray-700 hover:text-blue-500">Experts Directory</a>
            </li>
            <li className="mr-4">
              <a href="#" className="text-gray-700 hover:text-blue-500">Locations</a>
            </li>
            <li className="mr-4">
              <a href="#" className="text-gray-700 hover:text-blue-500">About Us</a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-blue-500">FAQ</a>
            </li>
          </ul>
          <ul className="flex">
            <li className="mr-4">
              <a href="#" className="text-gray-700 hover:text-blue-500">Contact Us</a>
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  );
};

export default HomePage;