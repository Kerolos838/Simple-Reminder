import { Container } from "react-bootstrap";
import { ReminderData } from "./ReminderData";
import { useState } from "react";
import HeadReminder from "./components/HeadReminder";
import BodyReminder from "./components/BodyReminder";
import ActionReminder from "./components/ActionReminder";

export default function App() {
  // To Control In Data
  const [personData, setPersonData] = useState(ReminderData);

  // Handle Delete Data
  function handleDelete() {
    setPersonData([]);
  }
  // Handle Show Data
  function handleShow() {
    setPersonData(ReminderData);
  }

  return (
    <div>
      <Container className="py-5">
        <HeadReminder headData={personData} />
        <BodyReminder bodyData={personData} />
        <ActionReminder deleteData={handleDelete} showdata={handleShow} />
      </Container>
    </div>
  );
}
