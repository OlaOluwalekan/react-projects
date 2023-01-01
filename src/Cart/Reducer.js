const reducer = (state, action) => {
  if (action.type === "INCREASE_ITEM") {
    return {
      products: action.payload[0],
      sum: action.payload[1],
      itemNo: action.payload[2],
    }
  }
  if (action.type === "DECREASE_ITEM") {
    return {
      products: action.payload[0],
      sum: action.payload[1],
      itemNo: action.payload[2],
    }
  }
  if (action.type === "REMOVE_ITEM") {
    let newProducts = state.products.filter((product) => {
      return product.id !== action.payload[0]
    })
    return {
      products: newProducts,
      sum: action.payload[1],
      itemNo: action.payload[2],
    }
  }
  if (action.type === "CLEAR_ALL") {
    return {
      products: action.payload[0],
      sum: action.payload[1],
      itemNo: action.payload[2],
    }
  }
  throw new Error("no matching action type")
}

export default reducer
