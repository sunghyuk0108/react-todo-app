import React, { useState } from "react";
import styles from "./GoalForm.module.css";
import Button from "../../UI/Button/Button";

const GoalForm = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if(event.target.value.trim().length > 0){
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
    // const newGoal = {id : Math.floor(Math.random() * 10), value : e.target.value}
    // const newArr = [newGoal, ...props.items];
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if(enteredValue.trim().length === 0){
      setIsValid(false);
      return; // return 으로 중단
    }
    props.onAddGoal(enteredValue);
  }

  return (
    <section id="goal-form">
      <form onSubmit={formSubmitHandler}>
        <div className={`${styles["form-control"]} ${!isValid && styles.invalid}`}>
          <label>Course Goal</label>
          <input type="text" onChange={goalInputChangeHandler}></input>
        </div>
        <Button type="submit">Add Goal</Button>
      </form>
    </section>
  );
};

export default GoalForm;
