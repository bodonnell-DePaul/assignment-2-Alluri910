aaaa 
import React, { useState } from 'react';
import { Container, Row, Col, ListGroup, Tab, Form, Button } from 'react-bootstrap';
import todoItems from './todoItems'; // Import the static todo items
import './App.css';

function App() {
    // State to manage ToDo items
    const [items, setItems] = useState(todoItems);

    // Handler to edit the description
    const handleDescriptionEdit = (e, index) => {
        const updatedItems = [...items];
        updatedItems[index].description = e.target.innerText;
        setItems(updatedItems);
    };

    // Handler to edit the due date
    const handleDueDateEdit = (e, index) => {
        const updatedItems = [...items];
        updatedItems[index].dueDate = e.target.value;
        setItems(updatedItems);
    };

    // Handler to add a new ToDo item
    const [newTodo, setNewTodo] = useState({ title: '', description: '', dueDate: '' });
    const handleAddTodo = (e) => {
        e.preventDefault();
        if (newTodo.title && newTodo.dueDate) {
            setItems([...items, newTodo]);
            setNewTodo({ title: '', description: '', dueDate: '' });
        }
    };

    return (
        <Container>
            <h1>Assignment 2: Bhagath's ToDo List</h1>
            
            {/* Form to add new ToDo item */}
            <Form onSubmit={handleAddTodo}>
                <Form.Group controlId="formTodoTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter ToDo title"
                        value={newTodo.title}
                        onChange={(e) => setNewTodo({ ...newTodo, title: e.target.value })}
                    />
                </Form.Group>
                <Form.Group controlId="formTodoDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        as="textarea"
                        placeholder="Enter ToDo description"
                        value={newTodo.description}
                        onChange={(e) => setNewTodo({ ...newTodo, description: e.target.value })}
                    />
                </Form.Group>
                <Form.Group controlId="formDueDate">
                    <Form.Label>Due Date</Form.Label>
                    <Form.Control
                        type="date"
                        value={newTodo.dueDate}
                        onChange={(e) => setNewTodo({ ...newTodo, dueDate: e.target.value })}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">Add ToDo</Button>
            </Form>

            <Row>
                <Col sm={4}>
                    <ListGroup>
                        {items.map((item, index) => (
                            <ListGroup.Item 
                                key={index} 
                                eventKey={index.toString()} 
                                variant={getVariant(item.dueDate)}
                            >
                                {item.title}
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Col>
                <Col sm={8}>
                <Tab.Content>
  {items.map((item, index) => (
    <Tab.Pane eventKey={`#link${index}`} key={index}>
      <h5
        contentEditable
        onBlur={(e) => handleDescriptionEdit(e, index)}
      >
        {item.description}
      </h5>
      <Form.Control
        type="date"
        value={item.dueDate}
        onChange={(e) => handleDueDateEdit(e, index)}
      />
    </Tab.Pane>
  ))}
</Tab.Content>

                </Col>
            </Row>
        </Container>
    );
}

export default App;

// Helper function to color-code items based on due date
function getVariant(dueDate) {
  const currentDate = new Date();
  const dateDue = new Date(dueDate);
  const diffTime = dateDue - currentDate;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays > 7) {
      return 'primary';
  } else if (diffDays <= 7 && diffDays > 4) {
      return 'success';
  } else if (diffDays <= 4 && diffDays > 2) {
      return 'warning';
  } else {
      return 'danger';
  }
}