

const TodoList = ({item,list,setList}) => {
  return (
    <div>
      <div className="grid grid-cols-1 gap-4 border-2 my-4 mx-2 rounded-xl px-2 py-2 bg-slate-200">
      <li className="text-xl font-semibold ">
        {item.name}
      </li>
      <p className="text-lg font-light">
      description : { item.description}
     </p>
    </div>
    </div>
  )
}

export default TodoList