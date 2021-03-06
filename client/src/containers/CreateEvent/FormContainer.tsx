import React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { AppStateType } from '../../store'
import { getGalleryImages, thunkAddEvent, getEventCreated } from '../../store/Event'
import Form from '../../components/CreateEvent/Form'
import { EventHandleSubmitPropsType } from '../../components/CreateEvent/Form'

const mapStateToProps = (state: AppStateType) => ({
    images: getGalleryImages(state),
    clearImages: getEventCreated(state)
})

const connector = connect(mapStateToProps, { thunkAddEvent })
    
type PropsFromRedux = ConnectedProps<typeof connector>
  
const Container = (props: PropsFromRedux) => {

    const handleSubmit = (values: EventHandleSubmitPropsType) => {
        values.gallery = props.images
        
        const files = ['gallery', 'cover', 'logo']

        const data = new FormData()
        
        for (let item in values) {
            
            if (files.includes(item)) {
                Array.from(values[item]).forEach((file: any) => {
                    data.append(item, file, file.name)
                })
            } else {
                if (item === 'social') {
                    data.append(item, JSON.stringify(values[item]))
                } else {
                    data.append(item, values[item])
                }
                
            }
            
        }

        props.thunkAddEvent(data)
    }

    return <Form onSubmit={handleSubmit} {...props} />

}

  export default connector(Container)