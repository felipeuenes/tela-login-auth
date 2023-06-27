import './style.css'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios'

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


export function Form (){



    const { register, handleSubmit, formState: { errors }} = useForm()

    const API = 'http://localhost:3000/auth/login'

    function onSubmit(data) {
        
        // console.log(data);
        axios.post(API, data)
        .then((res) => {
            alert(JSON.stringify(res.data.msg))
            console.log('logado!');
            console.log(res.data);
        }).catch((res) => {
            

            alert(JSON.stringify(res.response.data.msg));
            console.log(res.response.data.msg);
          });
    } 


    const notify = () => toast.error('Preecha todos os dados!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    return(

        <div className='form'>
                <section>
                    <h1>Seja bem-vindo!</h1>
                </section>
               <form onSubmit={handleSubmit(onSubmit)}>
                <section>
                        <label htmlFor="usuario">Usuário:</label>
                        <input type="text" placeholder='@usuario' id='name' {...register('name', {required: true})}/> 
                </section>

                {errors.name && <ToastContainer />}

                

                <section>
                        <label htmlFor="senha">Senha:</label>
                        <input type="password" placeholder='********' id='password' {...register('password', {required: true})}/>
                </section>
                
                {errors.password && <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light" />}

                <div id='detalhes-login'>
                
                    <section className='checkbox'>
                            <input type="checkbox" id='relembrar'/>
                            <label htmlFor="relembrar">relembrar</label>
                    </section>

                    <section>
                    <label htmlFor=""><a href="#" target="_blank" rel="noopener noreferrer">esqueci a senha</a></label>

                    </section>

                </div>

                <section className='login-bt'>
                    <button onClick={notify}>Login</button>
                </section>

                <section className='sem-conta'>
                <Link to='/cadastrar'>  <p>Não tem conta? crie uma!</p></Link>
                </section>
                


               </form>



        </div>
    )
}