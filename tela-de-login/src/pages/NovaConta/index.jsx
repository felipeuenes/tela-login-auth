import './style.css'
import cadasfundo from '../../assets/cadastro-fundo.jpg'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios'



export function NovaConta(){

    const { register, handleSubmit, formState: { errors }} = useForm()

    console.log(errors);
    
    const API = 'http://localhost:3000/auth/register'
      
    
    function onSubmit(data) {
        
        console.log(data);
        axios.post(API, data)
        .then((res) => {
            alert(JSON.stringify(res.data.msg))
        
            
        }).catch((res) => {
            alert(res.response.data.msg)
        })


    }

    return(
        <div className='container'>
            
            <section className='formulario'>
           

                <h1>Cadastro</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <section>

                    <label htmlFor="">Nome de usuario:</label>
                    <input type="text" placeholder='@usuario' id='name' {...register('name', {required: true})}/>

                    </section>
                    {errors.name && <span className='erro'>Campo obrigatório!</span>}

                    <section>
                        <label htmlFor="">Senha:</label>
                        <input type="password" placeholder='********' id='password' {...register('password', {required: true})}/>
                    </section>
                    {errors.password && <span className='erro'>Campo obrigatório!</span>}
                    <section>
                        <label htmlFor="">Confirme sua senha:</label>
                        <input type="password" placeholder='********' id='confirmPassword' {...register('confirmPassword', {required: true})}/>
                    </section>
                    {errors.confirmPassword && <span className='erro'>Campo obrigatório!</span>}
                    <section className='bt-cadastrar'>
                        <button>Cadastrar</button>
                    </section>
                </form>
                <Link to='/'> <p>Já possui conta? logar</p></Link>
            </section>
            <section>
                    <img src={cadasfundo} alt="imagem-de-fundo" />
            </section>

        </div>
    )
}