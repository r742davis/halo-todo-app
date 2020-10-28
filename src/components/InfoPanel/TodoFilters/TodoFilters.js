import React from "react";
import Filter from "./Filter/Filter";

const todoFilters = (props) => {
  const filterOptions = props.filters.map((filter) => (
    <Filter
      key={filter}
      classProp={
        filter === props.activeFilter
          ? "task-filters__filter--active"
          : "task-filters__filter"
      }
      type="text"
      clicked={() => props.onSelectFilterOption(filter)}
    >
      {filter}
    </Filter>
  ));

  return <section className="task-filters">{filterOptions}</section>;
};

export default todoFilters;
