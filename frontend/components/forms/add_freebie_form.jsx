import React from "react";
import { geocode } from "../../util/geocoding_api_util";
import cloudinary from "cloudinary";

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
		};

		this.listingHandler = this.listingHandler.bind(this);
		this.imageHandler = this.imageHandler.bind(this);
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
			that.setState({ imageUrl: rez.url });

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
							console.log(that.state);
							that.props.createListing(that.state).then(
								success => {
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
				}
			});
		});

		// const fd = new FormData();
		// fd.append('image', this.state.selectedfile, this.state.selectedFile.name);
		// const data = this.props.uploadImage(fd);
		// console.log(data);
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
						<i class="fas fa-plus" /> Add Image
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
		console.log(this.props);
		return (
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
		);
	}
}

export default AddFreebieForm;
