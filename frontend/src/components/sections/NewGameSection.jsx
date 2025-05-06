import { useState } from 'react'
import Button from '../button'
import Modal from '../Modal'
import NewGameForm from '../forms/NewGameForm'
import { useAuth } from '../../contexts/AuthContext.jsx'


function NewGameSection () {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { state: { user } } = useAuth()

  const havePlayer = user.players.length < 1

  return (
    <>
      <section className='flex flex-col w-full h-full mx-auto justify-center items-center gap-4 bg-white shadow-md rounded-lg p-4 max-w-md'>
        <h1 className='text-2xl font-semibold'>Bienvenue sur AiRPG</h1>
        <div className='flex flex-row w-full justify-between items-center'>
          <Button
            variant='success'
            onClick={() => setIsModalOpen(true)}
            disabled={havePlayer}
          >
            Créer une partie
          </Button>
          <Button
            variant='info'
            disabled={havePlayer}
          >
            Rejoindre une partie
          </Button>
        </div>
        {havePlayer && (
          <p className='text-sm text-red-500'>
            Créer un personnage avant de pouvoir créer une partie.
          </p>
        )}
      </section>
      <Modal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        contentLabel='Informations de la partie'
      >
        <h2 className='text-xl font-semibold mb-4'>Créer une partie</h2>
        <NewGameForm
          closeModal={() => setIsModalOpen(false)}
        />
      </Modal>
    </>
  )
}

export default NewGameSection
