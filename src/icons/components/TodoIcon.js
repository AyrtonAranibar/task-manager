import { ReactComponent as First } from "../atom-v4.svg";
import { ReactComponent as Second } from "../atom-v2.svg";
import { ReactComponent as Third } from "../atom-v3.svg";
import { ReactComponent as Fourth } from "../atom-v4.svg";

function TodoIcon(props){
    return(
        <span
            className={`icon-${props.type}`}
        >
            <First/>
        </span>
    );
}

export { TodoIcon };