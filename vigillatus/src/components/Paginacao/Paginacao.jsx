import React from "react";
import { UlPaginacao, LiPaginacao} from "./Style";
 
function Paginacao({ limite, total, offSet, setOffSet }) {
    const maxItens = 5;
    const maxLeft = Math.floor((maxItens - 1) / 2);
   
    const atual = offSet ? Math.floor(offSet / limite) + 1 : 1;
    const paginas = Math.ceil(total / limite);
    const primeira = Math.max(atual - maxLeft, 1);
    const ultima = Math.min(primeira + maxItens - 1, paginas);
 
    return (
        <UlPaginacao>
            {Array.from({ length: ultima - primeira + 1 })
                .map((_, index) => index + primeira)
                .map((page) => (
                    page <= paginas && (
                        <LiPaginacao key={page}>
                            <button
                                onClick={() => setOffSet((page - 1) * limite)}
                                className={page === atual ? 'active' : ''}
                            >
                                {page}
                            </button>
                        </LiPaginacao>
                    )
                ))}
        </UlPaginacao>
    );
}
 
export default Paginacao;

