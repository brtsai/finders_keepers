import React from "react";
import cloudinary from "cloudinary";

import { geocode } from "../../util/geocoding_api_util";
import ListingsErrorBanner from "./listings_errors_container";

cloudinary.config({
	cloud_name: "djbrisg12",
	api_key: "189584942645919",
	api_secret: "smX1q9fiqSNQEgMvkFsSd2Tkbw8",
});

class AddFreebieForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			userId: this.props.userId,
			address: null,
			latitude: 37.7989666,
			longitude: -122.4035405,
			imageUrl: null,
			title: null,
			description: null,
			marker: null
		};

		this.listingHandler = this.listingHandler.bind(this);
		this.imageHandler = this.imageHandler.bind(this);
		this.update = this.update.bind(this)
	}

	update(field) {
		return e => {
			this.setState({ [field]: e.target.value });
		};
	}

	listingHandler(e) {
		e.preventDefault();
		let that = this;
		cloudinary.v2.uploader.upload(this.state.imageUrl, function(error, rez) {
			if (error !== undefined) {
				that.props.forwardErrors([error.message]);
			} else {
				that.setState({ imageUrl: rez.url });
				if (that.state.address !== null) {
					geocode(that.state.address).then(res => {
						if (res.data.results.length > 0) {
							let result = res.data.results[0];
							that.setState(
								{
									address: result.formatted_address,
									latitude: result.geometry.location.lat,
									longitude: result.geometry.location.lng,
								},
								() => {
									that.props.createListing(that.state).then(
										success => {
											// create listing success
											that.props.close();
										},
										failure => {
											// handle create listing failure
										}
									);
								}
							);
						} else {
							//handle unable to geocode
							that.props.forwardErrors(["Invalid location"]);
						}
					});
				} else {
					that.props.forwardErrors(["Location can't be empty"]);
				}
			}
		});
	}

	imageHandler(e) {
		const file = e.currentTarget.files[0];
		const fileReader = new FileReader();
		fileReader.onloadend = () => {
			this.setState({ imageUrl: fileReader.result });
		};

		if (file) {
			fileReader.readAsDataURL(file);
		}
	}

	renderImagePreview() {
		if (!this.state.imageUrl) {
			return (
				<div className="image-form-input">
					<h1>
						<i className="fas fa-plus" /> Add Image
					</h1>
					<input type="file" accept="image/*" onChange={this.imageHandler} />
				</div>
			);
		} else {
			return (
				<div className="image-form-input">
					<img className="img-preview" src={this.state.imageUrl} />
					<input
						style={{ display: "none" }}
						type="file"
						accept="image/*"
						onChange={this.imageHandler}
					/>
				</div>
			);
		}
	}

	render() {

		console.log(this.state)
		return (
			<div className="errors-and-form-wrapper">
				<ListingsErrorBanner />
				<div className="form-wrapper">
					<h1 className="form-header">Add Listing</h1>
					<form className="form-container" onSubmit={this.listingHandler}>
						<label className="form-label title">
							Title
							<input onChange={this.update("title")} type="text" />
						</label>

						<label className="form-label description">
							Description
							<textarea rows="7" onChange={this.update("description")} />
						</label>

						<label>Choose Marker
							<select onChange={this.update("marker")}>
								<option selected disabled>Choose a Category</option>
								<option value="furnitue">Furniture</option>
								<option value="food">Food</option>
								<option value="misc">Miscellanous</option>
								<option value="clothing">Clothing</option>
								<option value="toys">Toys</option>
							</select>
						</label>

						<label className="form-label address">
							Address
							<input
								onChange={this.update("address")}
								className="address-input"
								type="text"
							/>
						</label>

						<label>
							Upload Image
							{this.renderImagePreview()}
						</label>

						<div className="form-submit-close-buttons">
							<button className="form-submit-button">Submit</button>
							<button className="form-close-button" onClick={this.props.close}>
								Cancel
							</button>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default AddFreebieForm;
