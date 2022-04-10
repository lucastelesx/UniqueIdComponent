interface ListItemProps {
  list: {
    productName: string
    productDesc: string
    productPrice: number
    productDate: number
  }
}


export function ListItem(props : ListItemProps){
  return(
    <li>
      <strong>{props.list.productName}</strong>
      <p>{props.list.productDesc}</p>
      <p>{props.list.productPrice}</p>
      <p>{props.list.productDate}</p>
    </li>
  )
}