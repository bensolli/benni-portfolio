import React from "react";
import { withRouter } from "react-router-dom";

const BackButton = ({ history }) => (
  <button className="[ backButton ][ buttons ]" onClick={history.goBack}>Back</button>
);
export default withRouter(BackButton);