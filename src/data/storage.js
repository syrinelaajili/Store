import React from 'react'

export default function LoadData() {
    let products=JSON.parse(global.localStorage.getItem("products"))||[]
  return (
        products
  )
}
export default function SaveData(data) {
    localStorage.setItem("products",JSON.parse(data))
}