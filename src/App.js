import React, {useState} from "react";
import "./App.css";
import GoalForm from "./component/CourseGoals/GoalForm/GoalForm";
import Goals from "./component/CourseGoals/Goals/Goals";

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    { id: "g1", value: "오늘의 할 일1" },
    { id: "g2", value: "오늘의 할 일2" },
  ]);

  const deleteGoal = (goalId) => {
    setCourseGoals(prevGoals => {
      const updatedGoals = prevGoals.filter(goal => goal.id !== goalId);
      return updatedGoals;
    })
  }

  let content = (
    <p style={{textAlign: "center"}}>No goals found. maybe add one?</p>
  )

  if(courseGoals.length > 0){
    content = <Goals items={courseGoals} deleteItem={deleteGoal}/>
  }

  const addGoalHandler = (enteredText) => {
    setCourseGoals(prevGoals => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({value: enteredText, id : Math.random().toString()});
      return updatedGoals;
    });
  }
  return (
    <main>
      <GoalForm onAddGoal={addGoalHandler}/>
      {content}
    </main>
  );
}

export default App;
