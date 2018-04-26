import React from 'react';


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
		}

		this.listingHandler = this.listingHandler.bind(this)
	}

	update(field){
		return (e) =>{
			this.setState({[field]: e.target.value})
		}
	}

	listingHandler(e) {
		e.preventDefault();
		this.props.createListing(this.state);
	}

	render(){
		console.log(this.props)

		return(
			<div className="form-wrapper">
				<h1 className="form-header">Add Listing</h1>
				<form className="form-container" onSubmit={this.listingHandler}>
					<label className="form-label title">Title
						<input onChange={this.update("title")} type="text"/>
					</label>

					<label className="form-label description">Description
						<textarea rows="7" onChange={this.update("description")} />
					</label>

				    <label className="form-label address">Address
				    	<input onChange={this.update("address")} className="address-input" type="text" />
				    </label>

				    <button className="form-submit-button">Submit</button>
				</form>
			</div>
		)
	}
}


export default AddFreebieForm