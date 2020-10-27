import React from "react";
import ItemsLeft from "./ItemsLeft/ItemsLeft";
import TaskFilters from "./TaskFilters/TaskFilters";
import ClearCompleted from "./ClearCompleted/ClearCompleted";

const infoPanel = () => (
  <section className="info-panel">
    <ItemsLeft />
    <TaskFilters />
    <ClearCompleted />
  </section>
);

export default infoPanel;
