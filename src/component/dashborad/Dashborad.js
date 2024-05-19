import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Form,
  Button,
  Container,
  Card,
  InputGroup,
  Row,
  Col,
} from "react-bootstrap";
import "./Dashboard.css";
import { BsFillCaretDownFill } from 'react-icons/bs';

const Dashboard = () => {
  const navigate = useNavigate();
  const [loanType, setLoanType] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [loanDurationYears, setLoanDurationYears] = useState([]);
  const [coApplicant, setCoApplicant] = useState("");
  const handleLoanTypeChange = (e) => {
    setLoanType(e.target.value);
  };

  const handleLoanAmountChange = (e) => {
    setLoanAmount(e.target.value);
  };
  const handleLoanDurationYearsChange = (year) => {
    if (loanDurationYears.includes(year)) {
      setLoanDurationYears(loanDurationYears.filter((y) => y !== year));
    } else {
      setLoanDurationYears([...loanDurationYears, year]);
    }
  };
  const handleCoApplicantChange = (e) => {
    setCoApplicant(e.target.value);
  };

  const saveFormValuesToLocalStorage = () => {
    let loanDetails = JSON.parse(localStorage.getItem("loanDetails"));
    if (!loanDetails) {
      loanDetails = [];
    }
    const newLoan = {
      loanType,
      loanAmount,
      loanDurationYears,
      coApplicant,
    };

    loanDetails.push(newLoan);
    localStorage.setItem("loanDetails", JSON.stringify(loanDetails));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveFormValuesToLocalStorage();
    navigate("/loan-applied");
  };

  return (
    <Container className="mt-4">
      <Card className="dashboard-card">
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={6} className="mr-md-3">
                <Form.Group controlId="loanType" className="text-start">
                  <Form.Label className="text-start">Loan Type:</Form.Label>
                  <div style={{ position: 'relative' }}>
                    <Form.Control
                      as="select"
                      value={loanType}
                      onChange={handleLoanTypeChange}
                     
                      style={{ paddingRight: '2.5rem',height:'48px', fontSize:'16px' }} 
                    >
                      <option value="">Select</option>
                      <option value="personal">Office Loan</option>
                      <option value="home">Home Loan</option>
                      <option value="car">Car Loan</option>
                    </Form.Control>
                    <div
                      style={{ position: 'absolute', right:'10px', top: '50%', transform: 'translateY(-50%)' }}
                    >
                      <BsFillCaretDownFill />
                    </div>
                  </div>
                </Form.Group>
                <br/>
                <Form.Group controlId="loanDuration" className="text-start">
                  <Form.Label className="text-start">Loan Duration:</Form.Label>
                  <div className="text-start">
                    {['5Yr','10Yr','15Yr','20Yr'].map((year) => (
                      <Form.Check
                        key={year}
                        type="checkbox"
                        label={`${year.replace('Yr', '')} year${year === '1Yr' ? '' : 's'}`}
                        checked={loanDurationYears.includes(year)}
                        onChange={() => handleLoanDurationYearsChange(year)}
                      />
                    ))}
                  </div>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="loanAmount" className="text-start">
                  <Form.Label>Loan Amount:</Form.Label>
                  <InputGroup className=" mb-3" style={{height:'48px', fontSize:'16px'}}>
                    <InputGroup.Text>INR </InputGroup.Text>
                    <Form.Control
                      type="text"
                      placeholder="Enter loan amount"
                      value={loanAmount}
                      onChange={handleLoanAmountChange}
                    />
                  </InputGroup>
                </Form.Group>
                <Form.Group controlId="coApplicant" className="text-start">
                  <Form.Label>Co-Applicant:</Form.Label>
                  <div className="co-applicant-options">
                    <Form.Check
                      inline
                      type="radio"
                      label={<span style={{ backgroundColor: 'green', width: '50px',color:'white'}}>Father</span>}
                      value="father"
                      checked={coApplicant === "father"}
                      onChange={handleCoApplicantChange}
                     
                    />
                    <Form.Check
                      inline
                      type="radio"
                      label={<span style={{ backgroundColor: 'blue', width: '50px',color:'white'}}>Mother</span>}
                      value="mother"
                      checked={coApplicant === "mother"}
                      onChange={handleCoApplicantChange}
                    />
                    <Form.Check
                      inline
                      type="radio"
                      label={<span style={{ backgroundColor: 'orange', width: '50px', color:'white'}}>Spouse</span>}
                      value="spouse"
                      checked={coApplicant === "spouse"}
                      onChange={handleCoApplicantChange}
                    />
                    <Form.Check
                      inline
                      type="radio"
                      label={<span style={{ backgroundColor: '#00FFFF', width: '50px', color:'white'}}>Sibling</span>}
                      value="sibling"
                      checked={coApplicant === "sibling"}
                      onChange={handleCoApplicantChange}
                    />
                    <Form.Check
                      inline
                      type="radio"
                      label={<span style={{ backgroundColor: '#A9A9A9', width: '50px', color:'white'}}>Other</span>}
                      value="other"
                      checked={coApplicant === "other"}
                      onChange={handleCoApplicantChange}
                    />
                  </div>
                </Form.Group>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col>
                <Button variant="primary" type="submit" className="custom-button">
                  Apply
                </Button>{" "}
                <Button variant="outline-secondary" className="custom-button">Cancel</Button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};
export default Dashboard;
