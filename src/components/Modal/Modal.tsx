import { MouseEventHandler, ReactNode } from 'react'

type ModalProps = {
  isOpen: boolean
  children: ReactNode
  title?: string
  onClose: MouseEventHandler
}

const Modal = ({ title, isOpen, onClose, children }: ModalProps) => {
  return (
    <dialog open={isOpen}>
      <article>
        <header>
          {title}
          <a
            href='#close'
            aria-label='Close'
            className='close'
            onClick={onClose}
          ></a>
        </header>
        {children}
      </article>
    </dialog>
  )
}

export default Modal
