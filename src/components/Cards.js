import React, { useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import data from "../data.json";
import { useState } from "react";
import ModalPop from "./ModalPop";

function Cards({ query, setQuery, data1, setData1 }) {
  const [editing, setEditing] = useState("");
  const[title,setTitle] = useState("");
  const[body,setBody] = useState("")
  const deletingCard = (item) => {
    {
      var x = data1.filter((item1) => item1.id !== item.id);
      setData1(x);
    }
  };

  const editingCard = (item) => {
    setEditing(item);
    setTitle(item.title)
    setBody(item.about)
    console.log(editing, "let me check");
  };

  return (
    <div
      style={{
        display: "flex",
        padding: "2rem",
        margin: "2rem",
        gap: "5rem",
        flexWrap: "wrap",
      }}
    >
      {data1
        .filter((post) => {
          if (query === "") {
            return post;
          } else if (post.title.toLowerCase().includes(query.toLowerCase())) {
            return post;
          }
        })
        .map((item) => (
          <div>
            <Card border="primary" style={{ width: "18rem", display: "flex" }}>
              <Card.Header>
                {" "}
                <b>Event Title : </b> {item.title}
              </Card.Header>
              <Card.Body>
                <Card.Title>
                  {" "}
                  <b>Place : </b>
                  {item.place}
                </Card.Title>
                <Card.Text>
                  <b>About : </b>
                  {item.about}
                </Card.Text>

                <Card.Footer>
                  {" "}
                  <b>Date : </b> {item.date}
                </Card.Footer>
              </Card.Body>
            </Card>
            <div style={{ display: "flex ", justifyContent: "space-around" }}>
              <Button variant="success" onClick={() => deletingCard(item)}>
                Delete
              </Button>
              <div onClick={() => editingCard(item)}>
                <ModalPop
                  data1={data1}
                  setData1={setData1}
                  editing={editing}
                  setEditing={setEditing}
                  title={title}
                  setTitle={setTitle}
                  body={body}
                  setBody={setBody}
                />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Cards;
