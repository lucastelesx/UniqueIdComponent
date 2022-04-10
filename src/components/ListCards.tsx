import { useState, useEffect } from 'react'
import shortid from 'shortid';
import { ListItem } from "./ListItem"

import '../styles/list.scss'

interface List {
  id: string
  products: number
  productName: string
  productDesc: string
  productPrice: number
  productDate: number

}

export function ListCards(){
  const [lists, setLists] = useState<List[]>([])
  useEffect(() => {
    fetch('http://demo8580067.mockable.io/frontent-teste')
    .then(response => response.json())
    .then(data => setLists(data))
  }, [])
  var arrayList =lists;
  const cardListItens = arrayList["products"];
  
  console.log('Array', cardListItens)
  console.log('Array', shortid.generate())

  const withUniqueId= cardListItens.forEach(item => {
    item.push({ id: shortid.generate() })
  })
  console.log('array com id unico', withUniqueId)

  return(
    <section className="repository-list">
      <h1>Lsta de repositórios</h1>
      <ul>
      {withUniqueId.map(list => {
        return <ListItem key= {list.id} list={list} />
      })}
      </ul>
    </section>
  )
}
/* {withUniqueId.map(list => {
  return <ListItem key= {list.id} list={list} />
})} */