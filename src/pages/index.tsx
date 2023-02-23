import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Jao Rent App</title>
        <meta name='description' content="Jao's renting system app" />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='container'>
        First step for doing the rent app
        <button
          onClick={() => {
            alert('Good job!')
          }}
        >
          Click Me!
        </button>
      </main>
    </>
  )
}
