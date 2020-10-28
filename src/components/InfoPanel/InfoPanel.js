import React from "react";
import ItemsLeft from "./ItemsLeft/ItemsLeft";
import TodoFilters from "./TodoFilters/TodoFilters";
import ClearCompleted from "./ClearCompleted/ClearCompleted";

const infoPanel = (props) => (
  <section className="info-panel">
    <ItemsLeft todos={props.todos} />
    <TodoFilters
      filters={props.filters}
      onSelectFilterOption={props.onSelectFilterOption}
    />
    <ClearCompleted clicked={props.onClearCompletedTodos} />
  </section>
);

export default infoPanel;
