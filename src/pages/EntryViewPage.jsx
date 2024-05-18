import { useParams } from "react-router-dom";
import EntryParent from "../components/EntryParent";


export function EntryViewPage(){
    let {id} = useParams();

    return (
        <div>
            <EntryParent id={id} />
        </div>
    )
}