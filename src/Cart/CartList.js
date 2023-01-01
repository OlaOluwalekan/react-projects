import React, { useReducer } from "react"
import CartItem from "./CartItem"
import data from "./data"
import reducer from "./Reducer"
import Header from "./Header"

const defaultState = {
  products: data,
  sum: function () {
    return this.products.reduce((acc, curr) => {
      acc += curr.price * curr.amount
      return acc
    }, 0)
  },
  itemNo: function () {
    return this.products.reduce((acc, curr) => {
      acc += curr.amount
      return acc
    }, 0)
  },
}

const CartList = () => {
  const [state, dispatch] = useReducer(reducer, defaultState)

  const increaseItemCount = (id) => {
    let productID = id - 1

    state.products[productID].amount += 1
    dispatch({
      type: "INCREASE_ITEM",
      payload: [state.products, state.sum, state.itemNo],
    })
  }

  const decreaseItemCount = (id) => {
    let productID = id - 1
    if (state.products[productID].amount === 1) {
      removeItem(id)
    } else {
      state.products[productID].amount -= 1
      dispatch({
        type: "DECREASE_ITEM",
        payload: [state.products, state.sum, state.itemNo],
      })
    }
    // console.log(state.itemNo())
  }

  const removeItem = (id) => {
    let productID = id
    dispatch({
      type: "REMOVE_ITEM",
      payload: [productID, state.sum, state.itemNo],
    })
  }

  const clearAll = () => {
    state.products = []
    dispatch({
      type: "CLEAR_ALL",
      payload: [state.products, state.sum, state.itemNo],
    })
    console.log(state.products)
  }

  return (
    <section className='container'>
      <Header itemInCart={state.itemNo()} />
      <div className='cart-list'>
        <h2 className='cart-header'>Your Bag</h2>
        {state.products.length === 0 ? (
          <h3>Does not contain any item</h3>
        ) : (
          state.products.map((item) => {
            return (
              <CartItem
                key={item.id}
                {...item}
                increaseItemCount={() => increaseItemCount(item.id)}
                decreaseItemCount={() => decreaseItemCount(item.id)}
                removeItem={() => removeItem(item.id)}
              />
            )
          })
        )}
        <div className='horizontal-divider'></div>
        <article className='total'>
          <h4 className='total-in-words'>Total</h4>
          <h4 className='sum-total'>${state.sum()}</h4>
        </article>
        <button className='clear-all' onClick={clearAll}>
          Clear Cart
        </button>
      </div>
    </section>
  )
}

export default CartList
