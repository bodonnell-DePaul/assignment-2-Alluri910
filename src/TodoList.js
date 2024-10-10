import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TodoForm from './TodoForm';
import ListGroupInterface from './ListGroupInterface';
import './TodoList.css';

/** This class places the various elements on the landing page */
function TodoList() {
  return (
    <Container fluid="md">
      <Row className="text-center mb-3 mt-3">
        <Col><div className="t-title">Assignment 2: Will's ToDo List</div></Col>
      </Row>

      <Row>
        <Col> <TodoForm /> </Col>
        <Col> <ListGroupInterface /> </Col>
      </Row>
    </Container>
  );
}

export default TodoList;
