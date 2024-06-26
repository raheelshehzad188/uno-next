import React from "react";
import Link from "next/link";

const BlogTags = ({ title, tags, activeLanguage }) => {
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

export default BlogTags;
