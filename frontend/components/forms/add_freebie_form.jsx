import React from 'react';
import { geocode } from '../../util/geocoding_api_util';


class AddFreebieForm extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			selectedFile: null,
			newListing: {
		    address: null,
		    latitude: 37.7989666,
		    longitude: -122.4035405,
				imageUrl: "",
		    title: null,
		    description: null,
			}
		};

		this.listingHandler = this.listingHandler.bind(this);
		this.imageHandler = this.imageHandler.bind(this);
	}

	update(field){
		return (e) =>{
			this.setState({[field]: e.target.value});
		};
	}

	listingHandler(e) {
		e.preventDefault();
		const fd = new FormData();

		fd.append('image', this.state.selectedfile, this.state.selectedFile.name);
		const data = this.props.uploadImage(fd);
		console.log(data);

    geocode(this.state.address).then(res => {
      if (res.data.results.length > 0) {
        const result = res.data.results[0];
        this.setState({ 
          address: result.formatted_address,
          latitude: result.geometry.location.lat,
          longitude: result.geometry.location.lng
        }, () => {
		      // this.props.createListing(this.state.newListing).then(
          //   success => { 
          //     this.props.close();
          //   },
          //   failure => {
          //     // handle create listing failure
          //   }
          // );
        });
      } else {
        //handle unable to geocode
      }
    });

	}

	imageHandler(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({selectedFile: file, newListing: {imageUrl: fileReader.result}});
    };

    if(file) {
      fileReader.readAsDataURL(file);
    }
  }

	// imageHandler(event) {
	// 	this.setState({ selectedFile: event.target.files[0] });
	// }

	render(){
		console.log(this.props);
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

					<label>Upload Image
						<input type="file" accept="image/*" onChange={this.imageHandler}/>
					</label>

					<img className="img-preview" src={this.state.newListing.imageUrl}/>

				    <div className="form-submit-close-buttons">
              <button className="form-submit-button">Submit</button>
              <button className="form-close-button" onClick={ this.props.close } >Cancel</button>
            </div>
				</form>
			</div>
		);
	}
}


export default AddFreebieForm;
