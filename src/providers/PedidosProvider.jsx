import React, { useRef, useState } from 'react'
import PedidosContext from './context'

function PedidosProvider({children}) {
  const toast = useRef(null);
  const [pedidos, setPedidos] = useState([]);
  const createPedido = (pedido)=>{
    //TODO: Si quiero guardar en una api llamo al servicio, y despues actualizo el state
    setPedidos([...pedidos, pedido]);
  }

  const removePedido = (pedido)=>{
    //TODO: Si quiero eliminar en un origen externo, llamo a api para eliminar y actualizo el state
    //TODO: 2 Eliminar con una key unica
  }

  const loadPedidos =()=>{
    //TODO: Llamar a la operacion get
  }

  const globalState = {pedidos, createPedido, removePedido, loadPedidos, toast};
  return (
    <PedidosContext.Provider value={globalState} >{children}</PedidosContext.Provider>
  )
}

export default PedidosProvider
