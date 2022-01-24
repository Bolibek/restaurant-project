import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getMealById } from "../Api";
import Loader from "../components/Loader";
export default function Recipe() {
	const [recipe, setRecipe] = useState([]);
	const [showRecipe, setShowRecipe] = useState(false);
	const { id } = useParams();
	const goBack = useNavigate();
	useEffect(() => {
		getMealById(id).then((data) => setRecipe(data.meals[0]));
	}, []);
	function handleSubmit(e) {
		e.preventDefault();
		goBack(`/category/${recipe.strCategory}`);
	}
	const handleRecipeShow = () => {
		setShowRecipe(!showRecipe);
	};
	return (
		<div>
			<button className="btn btn-back" onClick={handleSubmit}>
				Go Back
			</button>
			{!recipe.idMeal ? (
				<Loader />
			) : (
				<div className="recipe">
					<img className="recipe-img" src={recipe.strMealThumb} alt={recipe.strMeal} />
					<h1>
						Name: <b>{recipe.strMeal}</b>
					</h1>
					<h3>
						Category: <b>{recipe.strCategory}</b>
					</h3>
					{recipe.strArea ? (
						<h4>
							Area: <b>{recipe.strArea}</b>
						</h4>
					) : null}
					<p>{recipe.strInstructions}</p>
          <button className="btn" onClick={handleRecipeShow}>{!showRecipe? <span>Show</span> : <span>Hide</span>} Recipe</button>
					{showRecipe ? (
						<table>
							<thead>
								<tr>
									<th>Ingredient</th>
									<th>Measure</th>
								</tr>
							</thead>
							<tbody>
								{Object.keys(recipe).map((key) => {
									if (key.includes("Ingredient") && recipe[key]) {
										return (
											<tr>
												<td>{recipe[key]}</td>
												<td>{recipe[`strMeasure${key.slice(13)}`]}</td>
											</tr>
										);
									}
								})}
							</tbody>
						</table>
					) : null}

					{recipe.strYoutube ? (
						<div className="row">
							<h4>Video Recipe</h4>
							<iframe
								src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(
									-11
								)}`}
								allowFullScreen
								title={id}
							/>
						</div>
					) : null}
				</div>
			)}
		</div>
	);
}
