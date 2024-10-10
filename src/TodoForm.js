import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './TodoForm.css';

/** Input form : Text field for an item title, text field for description, date selector for due date. (Not functional) */
function TodoForm() {
    return (
        <Form>
            
            <Form.Group className="mb-3 ms-3 me-3 pt-2" controlId="todo-item-input">
                <Form.Label>ToDo Item</Form.Label>
                <Form.Control type="textarea" placeholder="Add todo item" />
            </Form.Group>
            
            <Form.Group className="mb-3 ms-3 me-3" controlId="todo-date-input">
                <Form.Label>Due Date</Form.Label>
                <Form.Control type="date" />
            </Form.Group>

            <div className="d-grid gap-2 pb-3 ps-3 pe-3">
                <Button variant="primary" type="submit">
                    Add Todo
                </Button>
            </div>
        </Form>
    );
}

export default TodoForm;
