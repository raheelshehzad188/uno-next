import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getData } from "../../utils/getData";

const PopularTags = ({ title, activeLanguage }) => {
  const [tags, setTags] = useState();

  useEffect(() => {
    getData(`${process.env.API_URL + activeLanguage}/blog-top-keywords`)
      .then((res) => {
        setTags(res.data.data.keywords);
      })
      .catch((error) => console.log("Error", error));
  }, []);

  return (
    <div className="advance-card">
      <h6>{title}</h6>
      <div className="tags">
        <ul>
          {tags?.map((data, i) => (
            <li key={i}>
              <Link locale={activeLanguage} href={`/blog/tag/${data}`}>
                {data}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PopularTags;
