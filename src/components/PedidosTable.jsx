import React from 'react'
import {DataTable} from 'primereact/datatable';
import { Column } from 'primereact/column';
function PedidosTable() {
  return (
            <DataTable value={[]} tableStyle={{ minWidth: '50rem' }}>
                <Column field="nombre" header="Nombre"></Column>
                <Column field="tipo" header="Tipo"></Column>
                <Column field="medioPago" header="Medio de Pago"></Column>
                <Column field="total" header="Cantidad"></Column>
            </DataTable>
  )
}

export default PedidosTable
