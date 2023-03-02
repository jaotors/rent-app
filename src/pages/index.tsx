import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'

import UserForm, { UserInputs } from '@/components/UserForm'
import Modal from '@/components/Modal'

export default function Home() {
  const [modalAddIsOpen, setModalAddIsOpen] = useState<boolean>(false)

  const handleUserModal = (status: boolean): void => {
    setModalAddIsOpen(status)
  }

  const handleSubmit = (data: UserInputs) => {
    console.log(data)
  }

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
          <button
            onClick={() => {
              handleUserModal(true)
            }}
          >
            Add User
          </button>
        </section>
        <Modal
          isOpen={modalAddIsOpen}
          onClose={() => {
            handleUserModal(false)
          }}
          title='Add User'
        >
          <UserForm onSubmit={handleSubmit} />
        </Modal>
      </main>
    </>
  )
}
