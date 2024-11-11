function calculateCalories() {
    const age = document.getElementById('age').value;
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    const activityLevel = document.getElementById('activity-level').value;

    // Calculate Basal Metabolic Rate (BMR) using Mifflin-St Jeor Equation
    // For men: BMR = 10 * weight + 6.25 * height - 5 * age + 5
    // For women: BMR = 10 * weight + 6.25 * height - 5 * age - 161
    let bmr = 10 * weight + 6.25 * height - 5 * age + 5;

    // Adjust BMR based on activity level
    let calories = bmr * activityLevel;

    // Display the result
    document.getElementById('calories').textContent = Math.round(calories);
}