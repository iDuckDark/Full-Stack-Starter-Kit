import { bindActionCreators } from "redux";
import * as allActions from "../redux/allActions";

export const mapDispatchToProps = dispatch => {
    return { actions: bindActionCreators(allActions, dispatch) };
};

export const mapStateToProps = () => {};
