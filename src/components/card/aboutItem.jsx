import { faArrowsToDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function AboutItem() {
    return (<div className="row">
        <div className="col-3">
            <FontAwesomeIcon icon={faArrowsToDot} style={{ color: "#5783b2", fontSize: "60px", marginTop: "10px" }} />
        </div>
        <div className="col-9 d-flex flex-column">
            <div></div>
            <div></div>
        </div>
   
    </div>);
}

export default AboutItem;