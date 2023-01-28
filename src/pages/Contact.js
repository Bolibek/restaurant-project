export default function Contact() {
	return (
		<div className="contact h-12">
			<div className="head">
				<h3>CONTACT US</h3>
				<h6>Please complete the form below!</h6>
			</div>
			<form action="#" className="form">
				<label>
					Name*
					<input type="text" name="name" placeholder="Firstname" required />
					<input type="text" name="name" placeholder="Lastname" required />
				</label>
				<label htmlFor="">
					Email*
					<input type="email" placeholder="Email" required />
				</label>
				<label>
					Massege*
					<textarea
						name="massege"
						id="1"
						cols="30"
						rows="10"
						required
					></textarea>
				</label>
				<button className="btn form-btn">SUBMIT</button>
			</form>
		</div>
	);
}
