import { connect } from "react-redux";

import { clearListingErrors } from "../../actions/listing_actions";
import { createErrorsBannerContainer } from "../shared/errors/errors_banner_container";

export default createErrorsBannerContainer("listings", clearListingErrors);
