import Head from 'next/head'
import Link from 'next/link'

import UserForm from '@/components/UserForm'

export default function Home() {
  return (
    <>
      <Head>
        <title>Jao Rent App</title>
        <meta name='description' content="Jao's renting system app" />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='container-fluid'>
        <nav>
          <ul>
            <li>
              <Link href='/users' role='button'>
                <strong>Users</strong>
              </Link>
              <Link href='/transaction' role='button'>
                <strong>Transaction</strong>
              </Link>
            </li>
          </ul>
        </nav>
        <section>
          <UserForm />
        </section>
      </main>
    </>
  )
}
