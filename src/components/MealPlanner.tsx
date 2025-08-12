import React, { useState } from 'react';

interface Meal {
  id: string;
  name: string;
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
  time: 'breakfast' | 'lunch' | 'dinner' | 'snack';
}

interface DailyGoals {
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
}

export const MealPlanner: React.FC = () => {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [mealInput, setMealInput] = useState({
    name: '',
    calories: '',
    protein: '',
    carbs: '',
    fats: '',
    time: 'breakfast' as const
  });
  
  const [dailyGoal] = useState<DailyGoals>({ 
    calories: 2000, 
    protein: 150, 
    carbs: 200, 
    fats: 65 
  });

  const totals = meals.reduce((acc, meal) => ({
    calories: acc.calories + meal.calories,
    protein: acc.protein + meal.protein,
    carbs: acc.carbs + meal.carbs,
    fats: acc.fats + meal.fats
  }), { calories: 0, protein: 0, carbs: 0, fats: 0 });

  const getProgressColor = (current: number, goal: number): string => {
    const percentage = (current / goal) * 100;
    if (percentage < 80) return 'low';
    if (percentage <= 100) return 'good';
    return 'over';
  };

  const addMeal = () => {
    if (mealInput.name && mealInput.calories) {
      const newMeal: Meal = {
        id: Date.now().toString(),
        name: mealInput.name,
        calories: Number(mealInput.calories),
        protein: Number(mealInput.protein) || 0,
        carbs: Number(mealInput.carbs) || 0,
        fats: Number(mealInput.fats) || 0,
        time: mealInput.time
      };
      
      setMeals([...meals, newMeal]);
      setMealInput({
        name: '',
        calories: '',
        protein: '',
        carbs: '',
        fats: '',
        time: 'breakfast'
      });
    }
  };

  const deleteMeal = (id: string) => {
    setMeals(meals.filter(meal => meal.id !== id));
  };

  return (
    <div className="meal-planner" data-testid="meal-planner">
      <h2>Daily Meal Tracker</h2>
      
      <div className="nutrition-summary">
        <div className={`macro-progress ${getProgressColor(totals.calories, dailyGoal.calories)}`}>
          <span>Calories: {totals.calories}/{dailyGoal.calories}</span>
          <div className="progress-bar">
            <div style={{ width: `${Math.min(100, (totals.calories/dailyGoal.calories)*100)}%` }} />
          </div>
        </div>
        
        <div className={`macro-progress ${getProgressColor(totals.protein, dailyGoal.protein)}`}>
          <span>Protein: {totals.protein}g/{dailyGoal.protein}g</span>
        </div>

        <div className={`macro-progress ${getProgressColor(totals.carbs, dailyGoal.carbs)}`}>
          <span>Carbs: {totals.carbs}g/{dailyGoal.carbs}g</span>
        </div>

        <div className={`macro-progress ${getProgressColor(totals.fats, dailyGoal.fats)}`}>
          <span>Fats: {totals.fats}g/{dailyGoal.fats}g</span>
        </div>
      </div>

      <div className="add-meal-form">
        <h3>Add Meal</h3>
        <input
          type="text"
          placeholder="Meal name"
          value={mealInput.name}
          onChange={(e) => setMealInput({...mealInput, name: e.target.value})}
          aria-label="Meal name"
        />
        <input
          type="number"
          placeholder="Calories"
          value={mealInput.calories}
          onChange={(e) => setMealInput({...mealInput, calories: e.target.value})}
          aria-label="Calories"
        />
        <input
          type="number"
          placeholder="Protein (g)"
          value={mealInput.protein}
          onChange={(e) => setMealInput({...mealInput, protein: e.target.value})}
          aria-label="Protein"
        />
        <input
          type="number"
          placeholder="Carbs (g)"
          value={mealInput.carbs}
          onChange={(e) => setMealInput({...mealInput, carbs: e.target.value})}
          aria-label="Carbs"
        />
        <input
          type="number"
          placeholder="Fats (g)"
          value={mealInput.fats}
          onChange={(e) => setMealInput({...mealInput, fats: e.target.value})}
          aria-label="Fats"
        />
        <select
          value={mealInput.time}
          onChange={(e) => setMealInput({...mealInput, time: e.target.value as any})}
          aria-label="Meal time"
        >
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
          <option value="snack">Snack</option>
        </select>
        <button onClick={addMeal}>Add Meal</button>
      </div>

      <div className="meals-list">
        <h3>Today's Meals</h3>
        {meals.length === 0 ? (
          <p>No meals added yet</p>
        ) : (
          <ul>
            {meals.map(meal => (
              <li key={meal.id}>
                <span className="meal-time">{meal.time}</span>
                <span className="meal-name">{meal.name}</span>
                <span className="meal-calories">{meal.calories} cal</span>
                <span className="meal-macros">
                  P: {meal.protein}g | C: {meal.carbs}g | F: {meal.fats}g
                </span>
                <button onClick={() => deleteMeal(meal.id)}>Delete</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};