import React from "react";
import parser from "html-react-parser";

const FilterPanel = ({
  setFilterData,
  isActive,
  setIsActive,
  gridData,
  size,
}) => {
  return (
    <div className="filter-panel">
      <div className="top-panel tab-icon">
        <div className="filters respon-filter-content filter-button-group">
          <ul className="icon-tab">
            {gridData?.map((data, i) => (
              <li
                key={i}
                className={
                  isActive === data.project_property_title ? "active" : ""
                }
                onClick={() => {
                  setFilterData(
                    gridData.filter(
                      (item) =>
                        item.project_property_title ===
                        data.project_property_title
                    )
                  );
                  setIsActive(data.project_property_title);
                }}
              >
                {parser(data.property_type_icon ?? "")}
                <span>{data.project_property_title}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;
