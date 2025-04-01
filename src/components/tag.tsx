import { ITag } from "../interfaces/Interfaces";

const Tag = ({name, typeTag} : ITag) => {

    return (
        <div className = {"tag font-size-2 border-radius-1 p-05 bg-normal-purple color-emerald-light " + typeTag}>
            {name}
        </div>
    )
}

export default Tag;