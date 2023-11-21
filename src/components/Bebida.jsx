import React from 'react'
import {Button, Col, Card} from 'react-bootstrap'
import useBebidas from '../hooks/useBebidas'


export const Bebida = ({bebida}) => {
  
  const {handleModalClick, handleBebidaIdClick} = useBebidas()

  return (
    <Col md={6} lg={3}>
        <Card className='mb-4'>
            <Card.Img 
                variant='top'
                src={bebida.strDrinkThumb}
                alt={`Imagen de ${bebida.strDrink}`}
            />
            <Card.Body className='text-center'>
                <Card.Title>{bebida.strDrink}</Card.Title>

                <Button
                  className='w-100 text-uppercase mt-2' 
                  variant='warning' 
                  onClick={ () => {
                    handleModalClick()
                    handleBebidaIdClick(bebida.idDrink)
                  }}
                >
                  Ver Receta
                </Button>

            </Card.Body>
        </Card>
    </Col>
  )
}
