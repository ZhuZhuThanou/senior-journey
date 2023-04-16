import { FC, PropsWithChildren } from 'react'

import { GetServerSideProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import TaskCard from '../../components/TaskCard'

interface Task {
  id: string
  description: string
  links: string,
  tags: string
}

const TaskListPrint: FC = () => {

  const { t } = useTranslation('quiz/task-list')
  const resourcesTitle = t('section.resources.title')

  const section1Tasks: Task[] = t('section-1.tasks', { returnObjects: true })
  const section2Tasks: Task[] = t('section-2.tasks', { returnObjects: true })
  const section3Tasks: Task[] = t('section-3.tasks', { returnObjects: true })
  const filterIds = new Set(['1', '3', '20', '30', '100'])

  const section1FilteredTasks = section1Tasks.filter(task => filterIds.has(task.id))
  const section2FilteredTasks = section2Tasks.filter(task => filterIds.has(task.id))
  const section3FilteredTasks = section3Tasks.filter(task => filterIds.has(task.id))

  return (

    <div>
      {section1FilteredTasks.length > 0
        && (<div className="pl-5 mb-4 mt-4">
          <strong>{t('section-1.title')}</strong>
          <hr className="mt-4" />
        </div>)}
      {section1FilteredTasks.map((task, index) => (
        <TaskCard key={task.id} showCheckbox={true}
          content={task.description}
          resourcesTitle={resourcesTitle}
          resourceLinks={task.links}
          tags={task.tags} />
      ))}

      {section2FilteredTasks.length > 0
        && (<div className="pl-5 mb-4 mt-4">
          <strong>{t('section-2.title')}</strong>
          <hr className="mt-4" />
        </div>)}

      {section2FilteredTasks.map((task, index) => (
        <TaskCard key={task.id} showCheckbox={true}
          content={task.description}
          resourcesTitle={resourcesTitle}
          resourceLinks={task.links}
          tags={task.tags} />
      ))}

      {section3FilteredTasks.length > 0
        && (<div className="pl-5 mb-4 mt-4">
          <strong>{t('section-3.title')}</strong>
          <hr className="mt-4" />
        </div>)}

      {section3FilteredTasks.map((task, index) => (
        <TaskCard key={task.id} showCheckbox={true}
          content={task.description}
          resourcesTitle={resourcesTitle}
          resourceLinks={task.links}
          tags={task.tags} />
      ))}

    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'default', [
      'common',
      'quiz/task-list'
    ])),
  },
})

export default TaskListPrint
