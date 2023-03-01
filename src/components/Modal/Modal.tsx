import { MouseEventHandler, ReactNode } from 'react'

type ModalProps = {
  isOpen: boolean
  children: ReactNode
  onClose: MouseEventHandler
}

const Modal = ({ children, isOpen, onClose }: ModalProps) => {
  return (
    <dialog open={isOpen}>
      <article>
        <header>
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
