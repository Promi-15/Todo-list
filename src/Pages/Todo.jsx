import TodoList from "../Components/TodoList";

const Todo = ({ list, setList }) => {
  const handleAdd = (e) => {
    e.preventDefault();
    // console.log(e.currentTarget)
    const form = new FormData(e.currentTarget);
    const n = form.get("name");
    const d = form.get("description");
    const addItem = {
      id: new Date().getDate().toString(),
      name: n,
      description: d,
    };
    // console.log(name,description)
    list.push(addItem);
    setList(list);
    localStorage.setItem("list", JSON.stringify(list));
  };

  return (
    <div className="max-w-7xl mx-auto  border-2 my-20 py-10 bg-slate-400 rounded-xl">
      <h1 className="text-center text-4xl font-bold mt-10">Todo List </h1>
      <hr className="mt-4" />
      <div>
        <div className="flex flex-row gap-4  justify-center mt-10 items-center">
          {/* <IoIosAddCircleOutline onClick={handleAdd} className="text-2xl" /> */}
          {/* You can open the modal using document.getElementById('ID').showModal() method */}
          <button
            className="btn btn-outline"
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            Add Items
          </button>
          <dialog id="my_modal_3" className="modal">
            <div className="modal-box p-14">
              <form
                method="dialog"
                className="grid grid-cols-1 gap-4"
                onSubmit={handleAdd}
              >
                {/* if there is a button in form, it will close the modal */}

                <input
                  type="text"
                  name="name"
                  className="border-2 p-2"
                  placeholder="Name"
                />
                <input
                  type="text"
                  className="border-2 p-2"
                  placeholder="description"
                  name="description"
                />
                <button
                  className="btn   btn-outline  right-2 top-2"
                  onClick={() => document.getElementById("my_modal_3").close()}
                >
                  Add
                </button>
              </form>
            </div>
          </dialog>
        </div>
        <div className="my-9">
          {list?.map((item) => (
            <TodoList
              key={item.id}
              item={item}
              list={list}
              setList={setList}
            ></TodoList>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Todo;
