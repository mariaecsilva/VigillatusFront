import React, {useState} from "react";
import { Container, DivDropdown, CustomSelect} from "./Style";

function Dropdown() {
    const [value, setValue] = useState('')
    const options = [
        {label: "Finalizado", value: 1},
        {label: "Em Análise", value: 2},
        {label: "Não Análisado", value: 3}
    ]
    function handleSelect(event) {
        setValue(event.target.value)
    }
    return(
                <CustomSelect onChange={handleSelect}>
                    {options.map((option, index) => (
                        <option key={index}>{option.label}</option>
                    ))}
                </CustomSelect>
    )
}

export default Dropdown;
