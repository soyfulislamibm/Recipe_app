import CustomFilter from '@/components/CustomFilter';
import Hero from '@/components/Hero';
import { MyCard } from '@/components/MyCard';
import RecipeCard from '@/components/RecipeCard';
import SearchBar from '@/components/SearchBar';
import { getRecipes } from '@/utils';

export default async function Home() {
  const allRecipes = await getRecipes();

  const isDataEmpty =
    !Array.isArray(allRecipes) || allRecipes.length < 1 || !allRecipes;

  return (
    <main className='overflow-hidden'>
      <Hero />
      <div className='mt-12 padding-x padding-y max-width id="discover" '>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Recipes</h1>
          <p>Choose your a recipe:</p>
        </div>
        <div className='home__filters'>
          <SearchBar />
          <div className='home__filter-container'>
            <CustomFilter title='Vegetarian' />
            <CustomFilter title='Vegan' />
          </div>
        </div>
        {!isDataEmpty ? (
          <section>
            <div className='home__cars-wrapper'>
              {allRecipes?.map((recipe) => (
                <>
                  {/* <RecipeCard key={recipe.id} recipe={recipe} /> */}
                  <MyCard key={recipe.id} recipe={recipe} />
                </>
              ))}
            </div>
          </section>
        ) : (
          <div className='home__error-container'>
            <h2 className='text-black text-xl font-bold'>Oops, no results</h2>
            <p>{allRecipes?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
