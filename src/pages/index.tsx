import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import AppWrapper from '@/components/AppWrapper'
import { useRouter } from 'next/router'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter();
  console.log(router.asPath);
  return (
    
      
        <AppWrapper>
        <div className='ml-5 md:ml-80 w-1/2 my-auto md:mt-40 animate-in fade-in-25 duration-1000'>
          <div id={"biography"}>
            <div className='text-blue dark:text-yellow-400'>
              Hi, my name is
            </div>
            <div className='text-4xl md:text-7xl'>
              Jakob Delossantos
            </div>
            <div className='whitespace-normal w-3/4'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </div>
          <div id={"picactions"} className='flex mt-auto md:mt-16'>
            <Image src="/me.jpg" alt="circle picture of me" width={264} height={132} className="hover:scale-150 hover:translate-x-24"/>
            <div id={"actions"} className='mt-16 md:mt-32 mx-auto '>
              <div className={`text-2xl md:text-5xl text-dark-grey font-bold dark:text-yellow-400 hover:scale-125`}>
                    <Link href="/About">
                        about
                    </Link>
              </div>
              <div className={`text-2xl md:text-5xl text-dark-grey font-bold dark:text-yellow-400 hover:scale-125`}>
                    <Link href="/Projects">
                        projects
                    </Link>
              </div>
              <div className={`text-2xl md:text-5xl text-dark-grey font-bold dark:text-yellow-400 hover:scale-125`}>
                    <Link href="/Contact">
                        contact
                    </Link>
              </div>
            </div>
          </div>
        </div>
      </AppWrapper>


  )
}
