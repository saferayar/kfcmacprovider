import React, { useContext } from 'react'
import {DataTable} from 'primereact/datatable';
import { Column } from 'primereact/column';
import PedidosContext from '../providers/context';
import { Button } from 'primereact/button';
function PedidosTable() {

  const {pedidos, removePedido, toast} = useContext(PedidosContext);
  
  const handleRemovePedido = (pedido)=>{
    removePedido(pedido);
    toast.current.show({severity: "success", summary: "Pedido Atendido"})
  }
  const accionesTemplate = (pedido)=>{
    return <Button severity='success' label='Atender pedido' rounded onClick={(e)=>handleRemovePedido(pedido)}></Button>
  }
  return (
            <DataTable cellMemo={false} value={pedidos} tableStyle={{ minWidth: '50rem' }}>
                <Column field="nombre" header="Nombre"></Column>
                <Column field="tipo.text" header="Tipo"></Column>
                <Column field="medioPago.text" header="Medio de Pago"></Column>
                <Column field="total" header="Cantidad"></Column>
                <Column header="Acciones" body={accionesTemplate}></Column>
            </DataTable>
  )
}

export default PedidosTable
