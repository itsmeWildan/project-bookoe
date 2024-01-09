import React from "react";
import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const FourHundredFour = React.lazy(() => import("pages/FourHundredFour"));
const SingleBook = React.lazy(() => import("pages/SingleBook"));
const Search404 = React.lazy(() => import("pages/Search404"));
const Search = React.lazy(() => import("pages/Search"));
const Latest = React.lazy(() => import("pages/Latest"));
const Home1 = React.lazy(() => import("pages/Home1"));

const ENDPOINT = "https://bookapi.cm.hmw.lol/api/books";

const ProjectRoutes = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${ENDPOINT}`);
        const data = await response.json();
        setBooks(data.data);
        console.log(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle error, show an error message, etc.
      }
    };
    fetchData();
  }, []);

  // Buku Random
  const [randomListBooks, setRandomListBooks] = useState([]);
  useEffect(() => {
    const shuffledBooks = shuffleBooks(books);
    setRandomListBooks(shuffledBooks);
  }, [books]);

  const shuffleBooks = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
  // End Buku Random

  return (
    <React.Suspense fallback={<>Loading...</>}>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="*" element={<NotFound />} />

          <Route path="/" element={<Home1 books={randomListBooks} />} />
          <Route path="latest" element={<Latest books={books} />} />
          <Route path="search" element={<Search />} />
          <Route path="search404" element={<Search404 />} />
          <Route path="singlebook" element={<SingleBook />} />
          <Route path="fourhundredfour" element={<FourHundredFour />} />
        </Routes>
      </BrowserRouter>
    </React.Suspense>
  );
};
export default ProjectRoutes;
