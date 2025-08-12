export class NutritionCalculator {
 
  calculateBMI(weight: number, height: number): {
    value: number;
    category: string;
  } {
    const bmi = weight / (height * height);
    let category = '';
    
    if (bmi < 18.5) category = 'Underweight';
    else if (bmi < 25) category = 'Normal';
    else if (bmi < 30) category = 'Overweight';
    else category = 'Obese';
    
    return { value: Number(bmi.toFixed(1)), category };
  }

  calculateDailyCalories(
    weight: number,
    height: number,
    age: number,
    gender: 'male' | 'female',
    activityLevel: number
  ): number {
    let bmr: number;
    if (gender === 'male') {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }
    return Math.round(bmr * activityLevel);
  }

  calculateMacros(calories: number, goal: 'maintenance' | 'cut' | 'bulk'): {
    protein: number;
    carbs: number;
    fats: number;
  } {
    let proteinRatio = 0.3;
    let carbsRatio = 0.4;
    let fatsRatio = 0.3;
    
    if (goal === 'cut') {
      proteinRatio = 0.4;
      carbsRatio = 0.3;
      fatsRatio = 0.3;
    } else if (goal === 'bulk') {
      proteinRatio = 0.25;
      carbsRatio = 0.5;
      fatsRatio = 0.25;
    }
    
    return {
      protein: Math.round((calories * proteinRatio) / 4),
      carbs: Math.round((calories * carbsRatio) / 4),
      fats: Math.round((calories * fatsRatio) / 9)
    };
  }

  calculateWaterIntake(weight: number, exerciseMinutes: number = 0): number {
    const base = weight * 0.033;
    const exercise = (exerciseMinutes / 30) * 0.35;
    return Number((base + exercise).toFixed(1));
  }
}