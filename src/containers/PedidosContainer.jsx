import React, { useContext } from 'react'
import PedidosTable from '../components/PedidosTable'
import PedidosForm from '../components/PedidosForm'
import { Toast } from 'primereact/toast'
import PedidosContext from '../providers/context'

function PedidosContainer() {
    const {toast} = useContext(PedidosContext);
    return (
        <>
            <Toast ref={toast}></Toast>
            <div className='row'>
                <div className="col">
                    <PedidosForm></PedidosForm>
                </div>
                <div className="col">
                    <PedidosTable></PedidosTable>
                </div>
            </div>
        </>
    )
}

export default PedidosContainer
