import { fetchTodos } from '../../Data/DataTodos'

import { useEffect, useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import './todo.css'
import { Form } from 'react-bootstrap';

const initItemsPerPage = 10

function Todo() {

    const [todosRaw, setTodosRaw] = useState([])
    const [onlyWaiting, setOnlyWaiting] = useState(false)
    const [todos, setTodos] = useState([])
    const [itemsPerPage, setItemsPerPage] = useState(initItemsPerPage)
    const [numPages, setNumPages] = useState(0)
    const [curPage, setCurPage] = useState(1)

    useEffect(() => {
        setTodosRaw(fetchTodos())
    }, [])


    useEffect(() => {
        if (onlyWaiting) {
            setTodos(todosRaw.filter((todo) => !todo.completed))
        } else {
            setTodos(todosRaw)
        }
    }, [todosRaw, onlyWaiting, itemsPerPage])


    // useEffect(() =>{
    //     console.log(onlyWaiting)
    // },[onlyWaiting])

    useEffect(() => {
        console.log(itemsPerPage)
        setNumPages(Math.ceil(todosRaw.length / itemsPerPage))
    }, [itemsPerPage, todosRaw])

    useEffect(() => {
        // setCurPage((prev) => (prev > numPages ? numPages : prev))
        setCurPage(1)
    }, [numPages])

    function deleteClick(id) {
        setTodosRaw(todosRaw.filter((todo) => todo.id !== id))
    }

    function waitingClick(id) {
        const todoSelected = todosRaw.find((todo) => {
            return todo.id === id
        })

        todoSelected.completed = true

        setTodosRaw([...todosRaw])
    }

    function addClick(id, title) {
        const newItem = {
            id,
            title,
            completed:false,
            userId: 1
        }
        setTodosRaw([...todosRaw,newItem])
    }

    const [show, setShow] = useState(false);
    const newIdRef = useRef()
    const newTitleRef = useRef()

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    return (
        <div className='todo'>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title><i className='bi bi-plus-lg'></i>&nbsp;Add todo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>ID&nbsp;:</Form.Label>
                            <Form.Control
                                type="text"
                                autoFocus
                                value={Number(todos.reduce((prev, todo) => (todo.id > prev ? todo.id : prev), 0)) + 1}
                                ref={newIdRef}
                                disabled
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                            <Form.Label>Title&nbsp;:</Form.Label>
                            <Form.Control
                                type="text"
                                ref={newTitleRef}
                                autoFocus
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        <span className='bi bi-x-lg'>&nbsp;Cancel</span>
                    </Button>
                    <Button variant="primary" onClick={() => {
                        const id = newIdRef.current.value
                        const title = newTitleRef.current.value.trim()
                        if (title === '') {
                            alert('Title cannot be empty')
                            newTitleRef.current.value = ''
                            newTitleRef.current.focus()
                        }else{
                            addClick(id, title)
                            handleClose()
                        }
                    }}>
                        <span className='bi bi-plus-lg'>&nbsp;Add</span>
                    </Button>
                </Modal.Footer>
            </Modal>

            <div className='filters'>

                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" onClick={(e) => setOnlyWaiting(e.target.checked)} />
                    <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Show&nbsp;only&nbsp;<span className='badge bg-warning text-dark'>warning&nbsp;<i className='bi bi-clock'></i></span></label>
                </div>

                <select className="form-select" aria-label="Default select example" defaultValue={initItemsPerPage} style={{ width: '200px' }} onChange={(e) => { setItemsPerPage(e.target.value) }}>
                    <option value={5}>5&nbsp;items&nbsp;per&nbsp;page</option>
                    <option value={10}>10&nbsp;items&nbsp;per&nbsp;page</option>
                    <option value={50}>50&nbsp;items&nbsp;per&nbsp;page</option>
                    <option value={100}>100&nbsp;items&nbsp;per&nbsp;page</option>
                </select>

            </div>


            <div>
                <table className='table table-striped'>
                    <thead className='table-dark'>
                        <tr>
                            <th style={{ textAlign: 'center', width: '10%', verticalAlign: 'middle' }}>ID</th>
                            <th style={{ textAlign: 'center', verticalAlign: 'middle' }}>Title</th>
                            <th style={{ textAlign: 'right', verticalAlign: 'middle' }}>Completed <button className='btn btn-primary' onClick={() => handleShow()} ><i className='bi bi-plus-lg'></i></button></th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            todos.filter((todo, index) => {
                                const min = (curPage - 1) * itemsPerPage
                                const max = curPage * itemsPerPage - 1
                                return index >= min && index <= max
                            }).map((todo) => {
                                return (
                                    <tr key={todo.id}>
                                        <td style={{ textAlign: 'center' }}><span className='badge bg-secondary' style={{ width: '3rem' }}>{todo.id}</span></td>
                                        <td style={{ textAlign: 'left' }}>{todo.title}</td>
                                        <td style={{ textAlign: 'right' }}>
                                            {todo.completed ? (<span className='badge bg-success'>Done&nbsp;<i className="bi-check"></i></span>)
                                                :
                                                (<button className='btn btn-warning text-dark' onClick={() => waitingClick(todo.id)}>waiting&nbsp;<i className="bi-clock"></i></button>)}&nbsp;
                                            {<button className='btn btn-danger'><i className="bi bi-trash" onClick={(e) => { deleteClick(todo.id) }} ></i></button>}
                                        </td>
                                    </tr>
                                )
                            })}

                    </tbody>
                </table>
            </div>

            <div className='pagecontrol'>
                <button className='btn btn-outline-primary' onClick={() => { setCurPage(1) }} disabled={curPage === 1}>First</button>
                <button className='btn btn-outline-primary' onClick={() => { curPage > 1 && setCurPage(curPage - 1) }} disabled={curPage === 1}>Previous</button>
                <span>{curPage}&nbsp;/&nbsp;{numPages}</span>
                <button className='btn btn-outline-primary' onClick={() => { curPage < numPages && setCurPage(curPage + 1) }} disabled={curPage === numPages}>Next</button>
                <button className='btn btn-outline-primary' onClick={() => { setCurPage(numPages) }} disabled={curPage === numPages}>Last</button>

            </div>

        </div>
    )
}
export default Todo;