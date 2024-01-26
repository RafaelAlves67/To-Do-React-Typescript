import React, {useState, ChangeEvent, FormEvent, useEffect} from 'react'

import styles from './TaskForm.module.css'

// interface
import {ITask} from '../interfaces/Task'

type Props = {
  btnText: string
  taskList: ITask[]
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>
  task?: ITask | null
  handleUpdate?(id: number, title:string, dificulty:number):void
}

const TaskForm = ({ btnText, taskList, setTaskList, task, handleUpdate }: Props) => {

  const [title, setTitle] = useState<string>("")
  const [id, setId] = useState<number>(0)
  const [dificulty, setDificulty] = useState<number>(0)

  useEffect(() => {

    if(task){
      setId(task.id)
      setTitle(task.title)
      setDificulty(task.dificulty)
    }

  }, [task])

  const addTaskHandle = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

      if(handleUpdate){
          handleUpdate(id, title, dificulty)
      }else{
        const id = Math.floor(Math.random() * 1000)

        const newTask: ITask = {id, title, dificulty}
    
        setTaskList!([...taskList, newTask])
    
        setTitle("")
        setDificulty(0)
      }
  }

  const handleChange= (e: ChangeEvent<HTMLInputElement>) => {
    if(e.target.name === "title"){
        setTitle(e.target.value)
    } else{
      setDificulty(parseInt(e.target.value))
    }
  }

  return (
        <form onSubmit={addTaskHandle} className={styles.form}>

            <div className={styles.input_container}>
              <label htmlFor="title">
                  Título: 
               </label>
               <input value={title} type="text" name="title" placeholder='Título da tarefa' onChange={handleChange}/>
            </div>


            <div className={styles.input_container}>
              <label htmlFor="dificulty">
                  Dificuldade:
               </label>
               <input onChange={handleChange} value={dificulty} type="number" name="dificulty" placeholder='Dificuldade da tarefa'/>
            </div>

            <input type="submit" value={btnText} />
        </form>
    
  )
}

export default TaskForm