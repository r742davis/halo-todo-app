import React from "react";
import Filter from "./Filter/Filter";

const todoFilters = (props) => {
  const filterOptions = props.filters.map((filter) => (
    <Filter
      key={filter}
      classProp={
        filter === props.activeFilter
          ? "todo-filters__filter--active"
          : "todo-filters__filter"
      }
      type="text"
      clicked={() => props.onSelectFilterOption(filter)}
    >
      {filter}
    </Filter>
  ));

  return <section className="todo-filters">{filterOptions}</section>;
};

export default todoFilters;
