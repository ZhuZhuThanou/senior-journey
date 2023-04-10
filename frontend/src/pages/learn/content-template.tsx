import { FC, PropsWithChildren } from 'react'

import { GetServerSideProps } from 'next'
import { Trans, useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { NextSeo } from 'next-seo'
import Image from 'next/image'
import Link from 'next/link'

import Layout from '../../components/Layout'

export interface ImportantCardProps extends PropsWithChildren {}
const ImportantCard: FC<ImportantCardProps> = ({ children }) => (
  <p className="rounded-lg bg-[#fba575]/[.3] p-5">{children}</p>
)

const WhenToTakeYourGovernmentPensions: FC = () => {
  const { t } = useTranslation('learn/content-template')
  return (
    <Layout>
      <NextSeo title={t('header')} />
      <h1 className="mb-10 rounded-3xl bg-[#212121]/[.08] px-4 py-6 font-display text-4xl font-medium text-primary-700 md:mb-12 md:px-24 md:py-16 md:text-5xl md:font-bold">
        {t('header')}
      </h1>

      <h2 id="overview" className="sr-only">
        {t('overview.header')}
      </h2>
      <p>{t('overview.paragraph-1')}</p>
      <ul className="mb-5 list-disc space-y-2 pl-7">
        <li>{t('overview.list.item-1')}</li>
        <li>{t('overview.list.item-2')}</li>
        <li>{t('overview.list.item-3')}</li>
      </ul>
      <p>{t('overview.paragraph-2')}</p>
      <p>
        <Trans
          ns="learn/content-template"
          i18nKey="overview.paragraph-3.content"
          components={{ a: <a href={t('overview.paragraph-3.link')} /> }}
        />
      </p>

      <h2 id="section-1" className="h2">
        {t('section-1.header')}
      </h2>
      <h3 className="mb-6 bg-primary-600 p-4 font-display text-2xl font-light text-white">
        {t('section-1.col-span-3')}
      </h3>
      <div className="grid gap-6 md:grid-cols-3">
        <div className="flex h-full flex-col gap-6 md:col-span-2">
          <h4 className="bg-secondary-700 p-4 font-display text-xl font-bold text-white">
            {t('section-1.col-span-2')}
          </h4>
          <div className="grid h-full gap-6 md:grid-cols-2">
            <div className="h-full bg-secondary-100 p-4">
              <h5 className="mb-2.5 font-display text-xs font-semibold uppercase">
                {t('section-1.col-1.header')}
              </h5>
              <p className="mb-2.5 font-bold">
                {t('section-1.col-1.paragraph-1')}
              </p>
              <p className="text-sm">
                {t('section-1.col-1.paragraph-2')}
              </p>
            </div>
            <div className="h-full bg-secondary-100 p-4">
              <h5 className="mb-2.5 font-display text-xs font-semibold uppercase">
                {t('section-1.col-2.header')}
              </h5>
              <p className="mb-2.5 font-bold">
                {t('section-1.col-2.paragraph-1')}
              </p>
              <p className="text-sm">
                {t('section-1.col-2.paragraph-2')}
              </p>
            </div>
          </div>
        </div>
        <div className="flex h-full flex-col gap-6">
          <h4 className="bg-[#4A0056] p-4 font-display text-xl font-bold text-white">
            {t('section-1.col-span-1')}
          </h4>
          <div className="h-full bg-[#F0D0FF] p-4">
            <h5 className="mb-2.5 font-display text-xs font-semibold uppercase">
              {t('section-1.col-3.header')}
            </h5>
            <p className="mb-2.5 font-bold">
              {t('section-1.col-3.paragraph-1')}
            </p>
            <p className="text-sm">
              {t('section-1.col-3.paragraph-2')}
            </p>
            <p className="text-sm">
              {t('section-1.col-3.paragraph-3')}
            </p>
          </div>
        </div>
      </div>

      <h2 id="section-2" className="h2">
        {t('section-2.header')}
      </h2>
      <p>{t('section-2.overview')}</p>

      <h3 className="h3">{t('section-2.paragraph-card.header')}</h3>
      <p>
        <Trans
          ns="learn/content-template"
          i18nKey="section-2.paragraph-card.paragraph-1.content"
          components={{
            a: (
              <a
                href={t(
                  'section-2.paragraph-card.paragraph-1.link'
                )}
              />
            ),
          }}
        />
      </p>
      <p>
        <Trans
          ns="learn/content-template"
          i18nKey="section-2.paragraph-card.paragraph-2.content"
          components={{
            a: (
              <a
                href={t(
                  'section-2.paragraph-card.paragraph-2.link'
                )}
              />
            ),
          }}
        />
      </p>
      <div className="flex flex-col gap-4 sm:flex-row">
        <div>
          <p>
            <Trans
              ns="learn/content-template"
              i18nKey="section-2.paragraph-card.paragraph-3.content"
              components={{
                a: (
                  <a
                    href={t(
                      'section-2.paragraph-card.paragraph-3.link'
                    )}
                  />
                ),
              }}
            />
          </p>
          <p>{t('section-2.paragraph-card.paragraph-4.content')}</p>
        </div>
        <div>
          <div className="mb-4 rounded p-4 elevation-1 sm:w-[264px]">
            <h4 className="mb-4">
              {t('section-2.paragraph-card.card.header')}
            </h4>
            <p className="mb-4.5 text-xs">
              {t('section-2.paragraph-card.card.content')}
            </p>
            <div className="text-right text-primary-500">
              <a
                href="#"
                className="uppercase text-inherit no-underline visited:text-inherit hover:text-inherit hover:underline focus:text-inherit focus:underline"
              >
                {t('section-2.paragraph-card.card.learn-more')}
              </a>
            </div>
          </div>
        </div>
      </div>
      <p>
        <Trans
          ns="learn/content-template"
          i18nKey="section-2.paragraph-card.paragraph-5.content"
          components={{
            a1: (
              <a
                href={t(
                  'section-2.paragraph-card.paragraph-5.link-1'
                )}
              />
            ),
            a2: (
              <a
                href={t(
                  'section-2.paragraph-card.paragraph-5.link-2'
                )}
              />
            ),
          }}
        />
      </p>
      <ImportantCard>
        <Trans
          ns="learn/content-template"
          i18nKey="section-2.important-notice"
        />
      </ImportantCard>

      <h2 id="section-3" className="h2">
        {t('section-3.header')}
      </h2>
      <p>{t('section-3.overview')}</p>
      <div className="my-10 rounded p-4 elevation-1">
        <h3 className="mb-4 font-display font-medium">
          {t('section-3.card.header')}
        </h3>
        <p className="mb-4.5 text-sm">
          {t('section-3.card.content')}
        </p>
        <div className="text-right text-primary-500">
          <a
            href="#"
            className="font-display font-bold uppercase text-inherit no-underline visited:text-inherit hover:text-inherit hover:underline focus:text-inherit focus:underline"
          >
            {t('section-3.card.learn-more')}
          </a>
        </div>
      </div>

    

      <h2 id="section-4" className="h2">
        {t('section-4.header')}
      </h2>
      <p>{t('section-4.overview')}</p>

      <h3 className="h3">{t('section-4.sub-section-1.header')}</h3>
      <p>{t('section-4.sub-section-1.overview')}</p>
      <div className="flex flex-col items-center gap-6 md:flex-row md:gap-10">
        <Image
          alt={t('section-4.sub-section-1.illustration.alt')}
          src={t('section-4.sub-section-1.illustration.img-url')}
          width={173}
          height={150}
          className="w-full max-w-md"
        />
        <div className="w-full lg:flex-1">
          <ImportantCard>
            <Trans
              ns="learn/content-template"
              i18nKey="section-4.sub-section-1.important-notice"
            />
          </ImportantCard>
        </div>
      </div>

      <h2 id="learn-more" className="h2">
        {t('learn-more.header')}
      </h2>
      {[
        {
          header: t('learn-more.transitioning-from-work-to-retirement.header'),
          description: t(
            'learn-more.transitioning-from-work-to-retirement.description'
          ),
          link: '/learn/transitioning-from-work-to-retirement',
        },
        {
          header: t('learn-more.canada-pension-plan-program.header'),
          description: t('learn-more.canada-pension-plan-program.description'),
          link: '/learn/canada-pension-plan-program',
        },
        {
          header: t('learn-more.old-age-security-program.header'),
          description: t('learn-more.old-age-security-program.description'),
          link: '/learn/old-age-security-program',
        },
        {
          header: t('learn-more.sources-of-retirement-income.header'),
          description: t('learn-more.sources-of-retirement-income.description'),
          link: '/learn/retirement-income-sources',
        },
      ].map(({ header, description, link }) => (
        <Link
          key={header}
          href={link}
          className="mt-10 flex items-center justify-between gap-6 border-b pb-3 text-basic-gray no-underline visited:text-basic-gray hover:text-basic-gray focus:text-basic-gray"
        >
          <div>
            <h3 className="font-display font-medium">{header}</h3>
            <p className="m-0 text-sm text-opacity-60">{description}</p>
          </div>
          <div className="text-primary-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-6 w-6"
            >
              <path
                fillRule="evenodd"
                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </Link>
      ))}
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'default', [
      'common',
      'learn/content-template',
    ])),
  },
})

export default WhenToTakeYourGovernmentPensions
