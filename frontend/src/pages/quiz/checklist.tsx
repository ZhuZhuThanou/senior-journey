import { FC, PropsWithChildren } from 'react'

import { GetServerSideProps } from 'next'
import { Trans, useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Layout from '../../components/Layout'
import MarkDown from '../../components/MarkDown'
import TaskCard from '../../components/TaskCard'

const contentData = {
  "id": "2",
  "content": "# Second Content\n\nThis is the second Markdown content.\n\n[Link text Here](https://link-url-here.org)\n\n* Fruit\n\n* Apple"
}

interface Content {
  id: string
  content: string
}

const Checklist: FC = () => {
  const { t } = useTranslation('quiz/checklist')
  const variable = 'step-1.body'
  return (
    <Layout>
      <div className="my-10 rounded p-4 elevation-1">
        <div dangerouslySetInnerHTML={{ __html: t(`${variable}`) }} />
        <TaskCard>
           <MarkDown content={contentData.content} />
        </TaskCard>
        
        <div>
          <h5 className="text-sx">More resources</h5>
          <div className="pt-4 pl-4" dangerouslySetInnerHTML={{ __html: t('step-1.links') }} />
        </div>
        <div className="pt-8 pl-8" dangerouslySetInnerHTML={{ __html: t('step-1.categories') }} />
      </div>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'default', [
      'common',
      'quiz/checklist',
    ])),
  },
})

export default Checklist
