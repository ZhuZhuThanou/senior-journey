import { FC } from 'react'

import { GetServerSideProps } from 'next'
import { useTranslation, Trans } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { NextSeo } from 'next-seo'
import Image from 'next/image'
import { GoTriangleUp } from 'react-icons/go'
import { MdArrowForwardIos } from 'react-icons/md'

import { useEffect, useState} from 'react'
import { useRouter } from 'next/router'

const PlanningToSaveForRetirement: FC = () => {
  const { t } = useTranslation('learn/planning-to-save-for-retirement')
  const router = useRouter()

  // TODO -- side page navigation to change background colour of nav item on page scroll
  const [offset, setOffset] = useState(0);
  useEffect(() => {
      const onScroll = () => setOffset(window.pageYOffset);
      // clean up listeners:
      window.removeEventListener('scroll', onScroll);
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(()=>{
    let mainSections = document.querySelectorAll('#content h2')
    let navItems = document.querySelectorAll('#page-nav a')
    let intersection = navItems[[...mainSections].findIndex(section=>section.getBoundingClientRect().top-10>=0)-1]
    navItems.forEach(item=>item===intersection ? item.classList.add('page-nav-active') : item.classList.remove('page-nav-active'))
  },[offset])
  

  return (
    <div>
      <NextSeo title={t('header')} />
      <h1 className="h1 bg-gray-100 p-4 md:p-16 rounded-3xl">{t('header')}</h1>
      <div className='pt-2 md:flex gap-10'>
        <section className='hidden md:block md:flex-[0.5]'>
          <nav id='page-nav' className="border-2 rounded-lg shadow-sm shadow-black text-[.9em] sticky top-0">
            <h2 className='text-[1.1em] p-5 font-bold border-b-2'>{t('header')}</h2>
            {
              [
                {id: "overview", text: t('overview-link-text')},
                {id: "how-much-will-you-need", text: t('how-much-will-you-need-heading')},
                {id: "changes-with-age", text: t('changes-with-age-heading')},
                {id: "turning-savings-into-income", text: t('turning-savings-into-income-heading')}
              ].map(({id,text})=>(
                <a href={`#${id}`} key={id} className='block no-underline p-5 text-black visited:text-black hover:bg-[#4ED8E8] hover:bg-opacity-[12%] hover:text-[#008490]'>{text}</a>
              ))
            }
            <div className='p-5 border-t-2 flex gap-5 justify-center text-[#008490] visited:text-[#008490] pr-20'>
              <GoTriangleUp role='presentation'/>
              <a href="#" className='no-underline font-xl visited:text-[#008490] hover:text-[#0b3e43]'>{t('back-to-top')}</a>
            </div>
          </nav>
        </section>
        <section id="content" className='flex-[2]'>
          <div>
            <h2 id="overview" className='invisible h-0'>{t('overview-link-text')}</h2>
            <div>{t('overview')}</div>
          </div>
          <div className='space-y-5'>
            <h2 id="how-much-will-you-need" className='h2'>{t('how-much-will-you-need-heading')}</h2>
            <Trans i18nKey='how-much-will-you-need-content' components={{anchor: <a href={t("GIS-link")} target='_blank' rel="noopener noreferrer" className='no-after'/>}}>
              <p>{t('how-much-will-you-need-content')}</p>
            </Trans>
          </div>
          <div className='space-y-5'>
            <h2 id="changes-with-age" className='h2'>{t('changes-with-age-heading')}</h2>
            <p>{t('changes-with-age-content-one')}</p> 
            <p>{t('changes-with-age-content-two')}</p> 
          </div>
          <div className='space-y-5'>
            <h2 id="turning-savings-into-income" className='h2'>{t('turning-savings-into-income-heading')}</h2>
            <p>{t('turning-savings-into-income-content-one')}</p>
            <p>{t('turning-savings-into-income-content-two')}</p>
            <Image src={`/assets/rrif_${router.locale}.svg`} height={500} width={500} alt={t('rrif-alt')} className='mx-auto'/>
            <p>{t('turning-savings-into-income-content-three')}</p>
            <Trans i18nKey='turning-savings-into-income-content-four' components={{anchor: <a href={t("RRIF-link")} target='_blank' rel="noopener noreferrer" className='no-after'/>}}>
              <p>{t('turning-savings-into-income-content-four')}</p>
            </Trans>
          </div>
          <div className='space-y-10'>
            <h2 className='h2'>{t('learn-more-heading')}</h2>
            <a href='#' tabIndex={0} className='flex space-between m-5 items-center no-underline text-black visited:text-black border-b-2'>
              <div className='md:mr-20'>
                <h3 className='font-medium mb-2'>{t('transitioning-heading')}</h3>
                <p className='text-[.9em] text-gray-700'>{t('transitioning-content')}</p>
              </div>
              <MdArrowForwardIos className='font-bold ml-5 text-[5rem] xl:text-2xl md:mr-5' />
            </a>
            <a href='https://www.canada.ca/en/services/benefits/publicpensions/cpp.html' tabIndex={0} className='flex space-between m-5 items-center no-underline text-black visited:text-black border-b-2'>
              <div className='md:mr-20'>
                <h3 className='font-medium mb-2'>{t('cpp-heading')}</h3>
                <p className='text-[.9em] text-gray-700'>{t('cpp-content')}</p>
              </div>
              <MdArrowForwardIos className='font-bold ml-5 text-[5rem] xl:text-2xl md:mr-5' />
            </a>
            <a href='https://www.canada.ca/en/services/benefits/publicpensions/cpp/old-age-security.html' tabIndex={0} className='flex space-between m-5 items-center no-underline text-black visited:text-black border-b-2'>
              <div className='md:mr-20'>
                <h3 className='font-medium mb-2'>{t('oas-heading')}</h3>
                <p className='text-[.9em] text-gray-700'>{t('oas-content')}</p>
              </div>
              <MdArrowForwardIos className='font-bold ml-5 text-[5rem] xl:text-2xl md:mr-5' />
            </a>
            <a href='#' tabIndex={0} className='flex space-between m-5 items-center no-underline text-black visited:text-black border-b-2'>
              <div className='md:mr-20'>
                <h3 className='font-medium mb-2'>{t('sources-of-income-heading')}</h3>
                <p className='text-[.9em] text-gray-700'>{t('sources-of-income-content')}</p>
              </div>
              <MdArrowForwardIos className='font-bold ml-5 text-[5rem] xl:text-2xl md:mr-5' />
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}



export const getServerSideProps: GetServerSideProps = async ({ locale }) => {

  return{
    props: {
      ...(await serverSideTranslations(locale ?? 'default', ['common', 'learn/planning-to-save-for-retirement'])),
    }
  }
}

export default PlanningToSaveForRetirement