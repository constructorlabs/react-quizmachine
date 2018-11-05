import React from "react";
import '../style/Category.scss';

function Category({ selectCategory, options, category }) {
  return (
    <div className="category">
      {Object.values(options).map(category => {
        return (
          <button
            key={category}
            onClick={() => {

              selectCategory(category);
            }}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}

export default Category;
