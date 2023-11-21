import React from 'react'
import {Modal, Image, Button} from 'react-bootstrap'
import useBebidas from '../hooks/useBebidas'

export const ModalBebida = () => {

    const {modal, handleModalClick, receta, cargando} = useBebidas()

    // console.log(receta)

    const mostrarIngredientes = () => {
        let ingredientes = []
        for (let i = 1; i < 16; i++) {
            if( receta[`strIngredient${i}`] ) {
                ingredientes.push(
                    <li>{receta[`strIngredient${i}`]} {receta[`strMeasure${i}`]}</li>
                )
            }
            
        }

        return ingredientes
    }

    return (
        !cargando && (
            <Modal show={modal} onHide={handleModalClick}>
                <Image 
                    src={receta.strDrinkThumb}
                    alt={`Imagen receta ${receta.strDrink}`}
                />
                <Modal.Header>
                    <Modal.Title>{receta.strDrink}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div className='p-3'>
                        <h2>Intrucciones</h2>
                        {receta.strInstructions}
                        <h2>Ingredientes y Cantidades</h2>
                        {mostrarIngredientes()}
                    </div>
                </Modal.Body>

                <Modal.Footer>
                    <Button 
                        className='text-uppercase w-100' 
                        variant='danger'
                        onClick={handleModalClick}
                    >
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    )
}
