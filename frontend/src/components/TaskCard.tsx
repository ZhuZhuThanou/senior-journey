// components/TaskCard.tsx
import ResourceTagButton from './ResourceTagButton'
import MarkDown from './MarkDown'

interface TaskCardProps {
    showCheckbox?: boolean
    content: string,
    resourcesTitle: string,
    resourceLinks: string,
    tags: string
}

const TaskCard: React.FC<TaskCardProps> = ({
    showCheckbox = false,
    content,
    resourcesTitle = "",
    resourceLinks,
    tags = null,
}) => {

    const tagsArray = tags ? tags.split(" ").map(tag => tag.replace(/_/g, ' ')) : [];
    return (
        <div className="relative bg-white rounded-lg shadow-md p-6 mb-4">
            {showCheckbox && (
                <input type="checkbox" className="relative top-2 w-6 h-6 mb-4" />
            )}
            {showCheckbox && (<hr />)}
            <MarkDown content={content} />
            <h5 className="text-s pb-4">{resourcesTitle}</h5>
            <MarkDown content={resourceLinks} />
            {tagsArray.map((tag, index) => (
                <ResourceTagButton key={index}>{tag}</ResourceTagButton>
            ))}
        </div>
    )
}

export default TaskCard
