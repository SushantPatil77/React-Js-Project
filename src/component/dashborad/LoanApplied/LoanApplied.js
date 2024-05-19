import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const LoanApplied = () => {
  const loanDetails = JSON.parse(localStorage.getItem("loanDetails")) || [];
  const loanDetailsCount = loanDetails.length;

  return (
    <Container className="mt-4">
      <Row>
        <Col md={4}>
          <Link to="/loanAppliedList" style={{ textDecoration: "none" }}>
            <Card bg="light" style={{ height: "100%" }}>
              <Card.Body style={{ height: "100%" }}>
                <p
                  style={{
                    fontSize: "48px",
                    textAlign: "center",
                    marginTop: "30%",
                  }}
                >
                  {loanDetailsCount}
                </p>
              </Card.Body>
            </Card>
            <p
              style={{ fontSize: "25px", textAlign: "center", color: "black" }}
            >
              Loan Applied
            </p>
          </Link>
        </Col>
        <Col md={4}>
          <Link to="/loan-approved" style={{ textDecoration: "none" }}>
            <Card bg="light" style={{ height: "100%" }}>
              <Card.Body style={{ height: "100%" }}>
                <p
                  style={{
                    fontSize: "48px",
                    textAlign: "center",
                    marginTop: "30%",
                  }}
                >
                  {0}
                </p>
              </Card.Body>
            </Card>
            <p
              style={{ fontSize: "25px", textAlign: "center", color: "black" }}
            >
              Loan Approved
            </p>
          </Link>
        </Col>
        <Col md={4}>
          <Link to="/notification-sent" style={{ textDecoration: "none" }}>
            <Card bg="light" style={{ height: "100%" }}>
              <Card.Body style={{ height: "100%" }}>
                <p
                  style={{
                    fontSize: "48px",
                    textAlign: "center",
                    marginTop: "30%",
                  }}
                >
                  {0}
                </p>
              </Card.Body>
            </Card>
            <p
              style={{ fontSize: "25px", textAlign: "center", color: "black" }}
            >
              Notification Sent
            </p>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default LoanApplied;
