import './Book.css'

export default function Book({ name = "default"}){
  console.log("Book", name)
  return(
    <div className="book">
      {name}
    </div>
  )
}