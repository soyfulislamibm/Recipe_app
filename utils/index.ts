export async function getRecipes() {
  const response = await fetch(
    `https://api.spoonacular.com/recipes/random?number=12&apiKey=${process.env.FOOD_APP_API_KEY}`
  );
  const result = await response.json();

  console.log(result.recipes);

  return result.recipes;
}
export function truncate(text: string, maxLength: number) {
  if (text.length <= maxLength) {
    return text;
  } else {
    // Find the last space within the maxLength
    const lastSpaceIndex = text.lastIndexOf(' ', maxLength);

    // If there's no space within maxLength, simply truncate at the maxLength
    if (lastSpaceIndex === -1) {
      return text.slice(0, maxLength) + '...';
    } else {
      // Truncate at the last space within maxLength and add "..."
      return text.slice(0, lastSpaceIndex) + '...';
    }
  }
}
