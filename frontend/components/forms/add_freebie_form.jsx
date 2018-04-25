import React from 'react'


class AddFreebieForm extends React.Component {
	constructor(props){
		super(props);

		this.state = {
		    address: null,
		    latitude: 37.7989666,
		    longitude: -122.4035405,
		    imageUrl: null,
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

	listingHandler() {
		
	}

	render(){
		console.log(this.state)
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

				    <label>Img upload
				    	<input type="file" className="image-upload" />
				    </label>

				    <input type="submit">Submit</input>
				</form>
			</div>
		)
	}
}


export default AddFreebieForm