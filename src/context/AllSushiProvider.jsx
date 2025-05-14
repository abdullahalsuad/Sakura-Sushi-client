/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState } from "react";

// create context
export const AllSushiDataContext = createContext(null);

const AllSushiDataProvider = ({ children }) => {
  const [sushiData, setSushiData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch or load apps here
    const fetchNews = async () => {
      try {
        const response = await fetch(
          "https://sakura-sushi-server.vercel.app/sushi"
        );
        const data = await response.json();
        setSushiData(data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch Data:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <AllSushiDataContext value={{ sushiData, loading, setSushiData }}>
      {children}
    </AllSushiDataContext>
  );
};

export default AllSushiDataProvider;
