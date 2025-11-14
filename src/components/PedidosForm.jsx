import React, { useContext, useState } from 'react'
import { Fieldset } from 'primereact/fieldset';
import { InputText } from 'primereact/inputtext';
import { SelectButton } from 'primereact/selectbutton';
import { Dropdown } from 'primereact/dropdown';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';
import PedidosContext from '../providers/context';
import { v4 as uuidv4 } from 'uuid';

function PedidosForm() {
 
const {createPedido, toast} = useContext(PedidosContext);
    
const [nombre, setNombre] = useState("");
const tipoPedidos = [{name: "solo", text: "Solo hamburguesa"}, {name: "combo", text: "Combo"}];
const [tipo, setTipo] = useState(tipoPedidos[0]);
const mediosPago = [{name: "efectivo", text: "Efectivo"}, {name:"tarjeta", text: "Tarjeta"}]; 
const [medioPago, setMedioPago] = useState(mediosPago[0]);

const [total, setTotal] = useState(1);
const handleRegistro = ()=>{
    const newPedido = {id: uuidv4(), nombre, tipo, medioPago, total}
    createPedido(newPedido);
    toast.current.show({severity:"info", summary: "Pedido registrado"});
}

return (
    <Fieldset legend="Registrar Pedido" toggleable>
      <div className="mb-3">
        <InputText placeholder='Nombre' className='w-100' value={nombre} onChange={e=>setNombre(e.target.value)} ></InputText>
      </div>
      <div className="mb-3 d-flex flex-column">
        <label htmlFor="tipo-select">Tipo</label>
        <SelectButton className='mt-3' options={tipoPedidos} value={tipo} onChange={e=>setTipo(e.value)} optionLabel='text'></SelectButton>
      </div>
      <div className="mb-3 d-flex flex-column">
        <label htmlFor="">Medio Pago</label>
        <Dropdown className='mt-3' options={mediosPago} value={medioPago} onChange={e=>setMedioPago(e.value)} optionLabel='text'></Dropdown>
      </div>
      <div className="mb-3 d-flex flex-column">
        <label htmlFor="">Total</label>
        <InputNumber className='mt-3' value={total} onChange={e=>setTotal(e.value)} showButtons min={1} max={50}></InputNumber>
      </div>
      <div className="mt-3">
        <Button severity='info' label='Registrar' onClick={handleRegistro} ></Button>
      </div>

    </Fieldset>
  )
}

export default PedidosForm
