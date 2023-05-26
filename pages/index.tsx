import About from '@/components/About'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import WorkExperience from '@/components/WorkExperience'
import ContactMe from '@/components/ContactMe'
import Head from 'next/head'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import { Experience, PageInfo, Project, Skill, Social } from '@/typings'
import { fetchPageInfo } from '@/utils/fetchPageInfo'
import { fetchExperiences } from '@/utils/fetchExperience'
import { fetchProjects } from '@/utils/fetchProjects'
import { fetchSocials } from '@/utils/fetchSocials'
import { fetchSkills } from '@/utils/fetchSkills'
import { urlFor } from '@/sanity'

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[]
  projects: Project[];
  socials: Social[];
}

export default function Home({ pageInfo, experiences, projects, socials, skills }: Props) {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y 
    snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
      <Head>
        <title>{pageInfo?.name} - Portofolio</title>
      </Head>

      <Header socials={socials} />

      <section id='hero' className='snap-start'>
        <Hero pageInfo={pageInfo} />
      </section>

      <section id='about' className='snap-center'>
        <About pageInfo={pageInfo} />
      </section>

      <section id='experience' className='snap-center'>
        <WorkExperience experiences={experiences} />
      </section>

      <section id='skills' className='snap-start'>
        <Skills skills={skills} />
      </section>

      <section id='education' className='snap-start'>
        <Projects projects={projects} />
      </section>

      <section id='contact' className='snap-start'>
        <ContactMe />
      </section>

      <Link href="#hero">
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className='flex items-center justify-center'>
            <img className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0' src={urlFor(pageInfo.heroImage).url()} alt="" />
          </div>
        </footer>
      </Link>
    </div>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo()
  const experiences: Experience[] = await fetchExperiences()
  const projects: Project[] = await fetchProjects()
  const socials: Social[] = await fetchSocials()
  const skills: Skill[] = await fetchSkills()

  return {
    props: {
      pageInfo: pageInfo as any,
      experiences,
      projects,
      socials,
      skills
    },
    revalidate: 10
  }
}
