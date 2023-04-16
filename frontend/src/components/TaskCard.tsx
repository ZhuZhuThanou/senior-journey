// components/Card.tsx
import styled from '@emotion/styled'

interface TaskCardProps {
  children: React.ReactNode,
  showCheckbox?: boolean
}

const CardContainer = styled.div`
  position: relative;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  margin-bottom: 1rem;
`

const Checkbox = styled.input`
  position: absolute;
  top: 8px;
  left: 8px;
  bottom: 8px;
  width: 18px;
  height: 18px;
`

const TaskCard: React.FC<TaskCardProps> = ({ children, showCheckbox = false }) => {
  return (
    <CardContainer>
      {showCheckbox && <Checkbox type="checkbox" />}
      {children}
      <h5 className="text-sx">More resources</h5>      
      <button className='bg-gray-100 rounded-md px-4 py-2'>Time sensitive</button>
    </CardContainer>
  )
}

export default TaskCard;
