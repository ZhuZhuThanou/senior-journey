import { FC, PropsWithChildren } from 'react'

import { GetServerSideProps } from 'next'
import { Trans, useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { NextSeo } from 'next-seo'
import Image from 'next/image'
import Link from 'next/link'

import Layout from '../../components/Layout'

const Checklist: FC = () => {
  const { t } = useTranslation('quiz/checklist')
  const variable = 'step-1.body'
  return (
    <Layout>
      <div className="my-10 rounded p-4 elevation-1">
        <div dangerouslySetInnerHTML={{ __html: t(`${variable}`) }} />
        <div>
          <h5 className="text-sx">More resources</h5>
          <div className="pt-4 pl-4" dangerouslySetInnerHTML={{ __html: t('step-1.links') }} />
        </div>
        <div className="pt-8 pl-8" dangerouslySetInnerHTML={{ __html: t('step-1.categories')}} />
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
