import {Link} from "react-router-dom"

export default function CategoryItem(props) {
	const { idCategory, strCategory, strCategoryThumb, strCategoryDescription } =
		props;
	return (
		<div className="card category">
			<div className="card-image">
				<img src={strCategoryThumb} alt={strCategory} />
			</div>
			<div className="card-content">
        <h3 className="card-title"><b>{strCategory}</b></h3>
				<p>{strCategoryDescription.slice(0, 30)}...</p>
			</div>
      <div className="card-action">
        <Link to={`/category/${strCategory}`} className="btn">Watch ategory</Link>
      </div>
		</div>
	);
}
