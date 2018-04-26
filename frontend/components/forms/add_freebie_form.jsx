import React from 'react';
// import cloudinary from 'cloudinary';
// const keys = require('../../../config/keys');
// cloudinary.config(keys.cloudinaryKey);

class AddFreebieForm extends React.Component {
	constructor(props){
		super(props);

		this.state = {
		    address: null,
		    latitude: 37.7989666,
		    longitude: -122.4035405,
		    imageUrl: "https://media.blueapron.com/recipes/1566/square_newsletter_images/20160303-2047-4-0783/2P_022416_7_Falafel_20-_205135_SQ_hi_res.jpg",
		    title: null,
		    description: null,
		};

		this.listingHandler = this.listingHandler.bind(this);
	}

	update(field){
		return (e) =>{
			this.setState({[field]: e.target.value});
		};
	}

	listingHandler(e) {
		e.preventDefault();
		this.props.createListing(this.state);
	}

	imageHandler(e) {
		console.log(e.target.files);
	}

	render(){
		return(
			<div>
				<form className="form-container" onSubmit={this.listingHandler}>
					<label>Title
						<input onChange={this.update("title")} type="text"/>
					</label>

					<label>Description
						<textarea onChange={this.update("description")} />
					</label>

					<label>Address
						<input onChange={this.update("address")} className="address-input" type="text" />
					</label>

					<label>Upload Image
						<input type="file" accept="image/*" onChange={this.imageHandler}/>
					</label>

					<img className="img-preview" src={this.state.imageUrl}/>

				    <input type="submit" value="submit" />
				</form>
			</div>
		);
	}
}


export default AddFreebieForm;