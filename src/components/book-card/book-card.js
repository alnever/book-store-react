import React from "react";
import {Alert, Col} from "reactstrap";
import AuthorLink from "../author-link/author-link";

const BookCard = (props) => {
    return (
        <Col>
            <h3>{props.book.title}</h3>

            <p>
                {
                    props.book.author
                }
            </p>

            <p>
                {
                    props.book.genres.map(genre => genre.name).join(" ")
                }
            </p>

            <Alert color={"success"}>{props.book.price}</Alert>
        </Col>
    );
}

export default BookCard;