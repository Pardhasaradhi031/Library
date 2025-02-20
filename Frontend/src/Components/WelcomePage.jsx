import React from "react";
import { Link } from "react-router";

const WelcomePage = () => {
  return (
    <div className="w-full min-h-screen bg-white rounded-lg shadow-lg flex flex-col items-center p-8">
      <header className="w-full text-center mb-8">
        <h1 className="text-3xl font-title text-primary-950">Welcome to Our Library</h1>
        <p className="text-neutral-700 mt-2">A place where knowledge and imagination thrive.</p>
      </header>
      <main className="flex flex-row w-full gap-6 justify-center">
        <div className="basis-1/3 flex flex-col items-center">
          <h2 className="text-lg font-semibold text-primary-950">Explore Books</h2>
          <p className="text-neutral-700 text-center mt-2">Discover a collection of books to enrich your knowledge.</p>
        </div>
      </main>
      <footer className="w-full text-center mt-8">
				<Link to={"/auth/register"}>
        <button className="bg-primary-500 text-primary-50 py-2 px-4 rounded-md hover:bg-primary-600 cursor-pointer">
          Explore Now
        </button>
				</Link>
      </footer>
    </div>
  );
}

export default WelcomePage;
