import React from 'react'
import Form from '../../containers/CreateEvent/FormContainer'
import { EventContainerTypeProps } from '../../containers/CreateEvent/Container'
import Modal from 'react-modal'
import style from './style.module.scss'
import H2 from '../common/H2'

const CreateEvent: React.FC<EventContainerTypeProps> = ({ created, eventCreated }) => (

    <div>
        <H2 text="Create Event" />

        <Modal isOpen={created} className={style.modal} style={{ overlay: { zIndex: 6666 }}} >
            <h2 className="h2">
                Event successfully created
                <hr className="h2-border" />
            </h2>
            <div className="text-center">
                <button className="btn btn-pink" onClick={() => {
                    eventCreated(false)
                    document.body.classList.toggle('overflow-hidden')
                }}>Close</button>
            </div>
        </Modal>

        <div className={style.inner}>
            <Form />
        </div>

    </div>
)

export default CreateEvent