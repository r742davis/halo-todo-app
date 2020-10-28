import React from "react";

const itemsLeft = (props) => {
  const calculateItemsLeft = () => {
    const filteredItems = props.todos.filter(
      (todo) => todo.isDone === false
    );
    const itemsLeftCount = filteredItems.length;
    return itemsLeftCount;
  };

  return <div className="items-left">{calculateItemsLeft()} Items Left</div>;
};

export default itemsLeft;
