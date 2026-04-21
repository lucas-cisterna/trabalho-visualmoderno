import './App.css'
import credito from './assets/credito.png'
import debito from './assets/debito.png'


export default function App(){
  
  return (
    <main>

    
      <section>
      
        <div className='cima'> 
          <button id='voltar'>◀︎</button>
          <h1 id='dinheiro'>Adicionar dinheiro</h1>
        </div>

        <div className='cartao'>
          <h1 id='cartao'>Escolha o Cartão</h1>

          <div className='cartao-b'>
            <button><img src={debito} alt="" /> <h1>Debito</h1></button>
            <button> <img src={credito} alt="" /><h1>Crédito</h1> </button>
          </div>
        </div>

        <div className='metodo'>
          <h1>Métodos</h1>

          <button> <p id='frase'>Mover ao seu depósito</p> <p id='seta'>▶</p></button>
          <button><p id='frase'>Transferir de outro banco</p> <p id='seta'>▶</p></button>
          <button><p id='frase'>Pagamento à vista</p> <p id='seta'>▶</p></button>
          <button><p id='frase'>Transferencia via pix</p> <p id='seta'>▶</p></button>
        </div>

      </section>
    </main>
  )
}
