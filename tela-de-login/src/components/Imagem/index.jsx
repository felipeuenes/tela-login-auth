import './style.css'
import fundo from '../../assets/login-fundo.jpg'

export function Imagem(){


    return(
        <div className='imagem-fundo'>
            <img src={fundo} alt="imagemdefundo" />
        </div>
    )
}