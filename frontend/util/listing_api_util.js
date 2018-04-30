import axios from "axios";

export const fetchListings = () => axios.get("/api/listings");

export const createListing = formListing =>
	axios.post("/api/listings", formListing);

export const deleteListing = listingId =>
	axios.delete(`/api/listings/${listingId}`, listingId);
