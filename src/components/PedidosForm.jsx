import React from 'react'
import { Fieldset } from 'primereact/fieldset';
import { InputText } from 'primereact/inputtext';
import { SelectButton } from 'primereact/selectbutton';
import { Dropdown } from 'primereact/dropdown';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';


function PedidosForm() {
  return (
    <Fieldset legend="Registrar Pedido" toggleable>
      <div className="mb3">
        <InputText placeholder='Nombre' className='w-100' ></InputText>
      </div>
      <div className="mb-3 d-flex flex-column">
        <label htmlFor="tipo-select">Tipo</label>
        <SelectButton></SelectButton>
      </div>
      <div className="mb-3 d-flex flex-column">
        <label htmlFor="">Medio Pago</label>
        <Dropdown></Dropdown>
      </div>
      <div className="mb-3 d-flex flex-column">
        <label htmlFor="">Total</label>
        <InputNumber showButtons min={1} max={50}></InputNumber>
      </div>
      <div className="mb-3">
        <Button severity='info' label='Registrar'></Button>
      </div>

    </Fieldset>
  )
}

export default PedidosForm
