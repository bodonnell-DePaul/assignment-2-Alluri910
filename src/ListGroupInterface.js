import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab';
import {todos} from './todoItems';

/** This class is for the primary list interface */
/** setVariant() determines how far away the due date is. */
function ListGroupInterface() {
  const colorArray = ["primary", "success", "warning", "danger"];

  function setVariant(todo) {
    var result = "";
    const due = Date.parse(todo.dueDate);
    const now = new Date();
    const difference = (due - now) / (1000 * 60 * 60 * 24);
    
    if (difference < 2) {
      result = colorArray[3];
    } else if (difference < 4) {
      result = colorArray[2];
    } else if (difference < 7) {
      result = colorArray[1];
    } else if (difference >= 7) {
      result = colorArray[0];
    } else {
      result = "light";
    }
    return result;
  }

  /** Pulls all the todoItems from file and maps them to html elements */
  return (
    <Tab.Container id="list-group-interface">
            <Row>
              <Col sm={4}>
                <ListGroup>
                  {todos.map(
                    todo => (
                      <ListGroup.Item eventKey={todo.title} key={todo.id} variant={setVariant(todo)}>
                        {todo.title}
                      </ListGroup.Item>
                    )
                  )}
                </ListGroup>
              </Col>

              <Col sm={8}>
                <Tab.Content>
                  {todos.map(
                    todo => (
                      <Tab.Pane eventKey={todo.title} key={todo.id} contentEditable="true">
                        {todo.description}<br />
                        <input type="date" defaultValue={todo.dueDate} />
                      </Tab.Pane>
                    )
                  )}
                </Tab.Content>
              </Col>
            </Row>
        </Tab.Container>
  );
}

export default ListGroupInterface;
