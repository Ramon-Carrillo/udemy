import { Link } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'
import './RecipeList.css'

const RecipeList = ({ recipes }) => {
  const { mode } = useTheme()
  if (recipes.length === 0) {
    return <div className='error'>No recipes to display</div>
  }

  return (
    <div className='recipe-list'>
      {recipes.map((recipe) => (
        <div className={`card ${mode}`} key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.cookingTime} to make.</p>
          <div>{recipe.method.substring(0, 100)}...</div>
          <Link to={`/recipe/${recipe.id}`}>Cook This</Link>
        </div>
      ))}
    </div>
  )
}
export default RecipeList
