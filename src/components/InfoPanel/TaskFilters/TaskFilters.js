import React from "react";
import Filter from "./Filter/Filter";

const taskFilters = (props) => (
  <section className="task-filters">
    <Filter classes="task-filters__filter--active">All</Filter>
    <Filter>Active</Filter>
    <Filter>Completed</Filter>
  </section>
);

export default taskFilters;
