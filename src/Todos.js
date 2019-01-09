import React  from 'react';

const Todos =({todo,deltodo})=>{

    const todolist = todo.length ?
    (
        todo.map((todoss)=>{
            return (
                <div className="collection-item" key={todoss.id}>
                   
                       <p > {todoss.content}
                       <button onClick={()=>{deltodo(todoss.id)}} className="right btn   red">
                           X
                       </button>
                       </p>
                     
                        
                    
                </div>

            )

        })
    ):  
    (
 <p className="center red-text"> you have no todo left</p>
    )
return(<div className="todos collection">
    {todolist}

</div>
)


}

export default Todos;