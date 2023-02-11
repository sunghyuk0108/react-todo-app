import React from "react";
import "./Goals.css";
import GoalItem from "../GoalItem/GoalItem";

const Goals = (props) => {
  return (
    <section id="goals">
      <ul className="goal-list">
        {props.items.map((goal) => (
          <GoalItem 
          key={goal.id}
          id={goal.id}
          onDelete={props.deleteItem}
          >
          {goal.value}
          </GoalItem>
        ))}
      </ul>
    </section>
  );
};

export default Goals;
