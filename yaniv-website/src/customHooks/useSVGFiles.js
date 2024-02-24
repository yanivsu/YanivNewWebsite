import { useState, useEffect } from "react";
import { storage } from "./firebase"; // Adjust the path to your firebase.js file

const useSVGFiles = (path) => {
  const [svgFiles, setSVGFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSVGFiles = async () => {
      const storageRef = storage.ref(path);

      try {
        const result = await storageRef.listAll();
        const svgFileUrls = await Promise.all(
          result.items.map(async (item) => {
            const downloadURL = await item.getDownloadURL();
            return downloadURL;
          })
        );

        setSVGFiles(svgFileUrls);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching SVG files:", error);
        setError(error);
        setLoading(false);
      }
    };

    fetchSVGFiles();
  }, [path]);

  return { svgFiles, loading, error };
};

export default useSVGFiles;
