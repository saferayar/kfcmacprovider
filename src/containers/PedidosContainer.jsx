import React from 'react'
import PedidosTable from '../components/PedidosTable'
import PedidosForm from '../components/PedidosForm'

function PedidosContainer() {
  return (
    <div className='row'>
      <div className="col">
        <PedidosForm></PedidosForm>
      </div>
      <div className="col">
        <PedidosTable></PedidosTable>
      </div>
    </div>
  )
}

export default PedidosContainer
