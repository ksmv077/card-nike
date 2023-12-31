import { useState } from 'react'
import styles from './App.module.css'

function App() {

  const [buttonText, setButtonText] = useState('Добавить в корзину')
  const [card, setCard] = useState(false)
  const [cardText, setCardText] = useState('')

  const [details, setDetails] = useState(false)

  const textHandler = () => {
    setButtonText('Уже в корзине')
    setCard(true)
    setCardText('Удалить из корзины')
  }

  const cardTextHandler = () => {
    setButtonText('Добавить в корзину')
    setCard(false)
    setCardText('')
  }

  


  return (
    <div className={styles.card}>
      <div className={styles.photo}><img src="data:image/jpeg;base64,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" alt="" /></div>
      <div className={styles.footer}>
        <div className={styles.display}>
          <div>
            <div>Nike Sneakers</div>
            <div>$ 120</div>
          </div>
          <button onClick={() => setDetails(true)}>Детали</button>
        </div>
        <hr />
        <div className={styles.lorem}>
          <p>Lorem ipsum dolar sit amet, consectetur adipisicing elit. Animi, dignissimos</p>
          <button disabled={card} onClick={textHandler}>{buttonText}</button>
          <p onClick={cardTextHandler}>{cardText}</p>
        </div>
      </div>
          {details && (
            <div className={styles.details_cnt}>
              <div><button onClick={() => setDetails(false)}>x</button></div>
              <div>rtshsrthsrthsrthsrth</div>
            </div>
          )}
    </div>
  )
}

export default App


// import { useState } from 'react'
// import styles from './App.module.css'

// function App() {

//   const [buttonText, setButtonText] = useState('Добавить в корзину')
//   const [card, setCard] = useState(false)
//   const [cardText, setCardText] = useState('')
//   const [buy, setBuy] = useState(false)

//   const handleAddToCart = () => {
//     // setButtonText('Уже в корзине')
//     // setCard(true)
//     // setCardText('Удалить из корзины')
//     setBuy(true)
//   }

//   const cardTextHandler = () => {
//     setButtonText('Добавить в корзину')
//     setCard(false)
//     setCardText('')
//   }


//   return (
//     <div className={styles.card}>
//       <div className={styles.photo}><img src="data:image/jpeg;base64,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" alt="" /></div>
//       <div className={styles.footer}>
//         <div className={styles.display}>
//           <div>
//             <div>Nike Sneakers</div>
//             <div>$ 120</div>
//           </div>
//           <button>Детали</button>
//         </div>
//         <hr />
//         <div className={styles.lorem}>
//           <p>Lorem ipsum dolar sit amet, consectetur adipisicing elit. Animi, dignissimos</p>
//           <button disabled={buy} onClick={handleAddToCart}>{buy ? "уже в корзине" : "добавить в корзину"}</button>
//           {buy && <div onClick={() => setBuy(false)}>delete product</div>}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default App
