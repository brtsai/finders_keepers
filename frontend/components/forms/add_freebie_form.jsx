import React from 'react';
import { geocode } from '../../util/geocoding_api_util';

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
    geocode(this.state.address).then(res => {
      if (res.data.results.length > 0) {
        const result = res.data.results[0];
        this.setState({ 
          address: result.formatted_address,
          latitude: result.geometry.location.lat,
          longitude: result.geometry.location.lng
        }, () => {
		      this.props.createListing(this.state).then(
            success => { 
              this.props.close();
            },
            failure => {
              // handle create listing failure
            }
          );
        });
      } else {
        //handle unable to geocode
      }
    });

	}

	render(){
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

				    <div className="form-submit-close-buttons">
              <button className="form-submit-button">Submit</button>
              <button className="form-close-button" onClick={ this.props.close } >Cancel</button>
            </div>
				</form>
			</div>
		)
	}
}


export default AddFreebieForm
