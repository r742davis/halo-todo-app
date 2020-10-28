import React from "react";
import Filter from "./Filter/Filter";

const todoFilters = (props) => {
  const filterOptions = props.filters.map((filter) => (
    <Filter key={filter} clicked={() => props.onSelectFilterOption(filter)}>
      {filter}
    </Filter>
  ));

  return <section className="task-filters">{filterOptions}</section>;
};

export default todoFilters;
