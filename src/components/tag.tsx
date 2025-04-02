import { ITag } from "../interfaces/Interfaces";

const Tag = ({name, typeTag} : ITag) => {

    return (
        <div className = {typeTag}>
            {name}
        </div>
    )
}

export default Tag;