import React from "react";
import { Card, Button, Row } from "antd";

const { Meta } = Card;
const BookCard = ({ book, detail }) => {
  return (
    <Card
      hoverable
      style={{
        width: 240,
      }}
      cover={<img alt={book.title} src={book.imageUrl} />}
    >
      <Meta title={book.title} description={book.description} />
      <Row style={{ gap: 10, marginTop: 10 }}>
        <Button type="primary" onClick={detail}>
          Learn More
        </Button>
      </Row>
    </Card>
  );
};

export default BookCard;
