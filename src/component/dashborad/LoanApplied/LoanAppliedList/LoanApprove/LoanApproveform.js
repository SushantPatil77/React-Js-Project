import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Card, Form, Row, Col, Button, InputGroup } from 'react-bootstrap';
import { BsFillCaretDownFill } from 'react-icons/bs';

const LoanApproveForm = () => {
  const navigate = useNavigate();
  const { index } = useParams();
  const loanDetails = JSON.parse(localStorage.getItem('loanDetails')) || [];
  const loan = loanDetails[parseInt(index)];

  const [departments, setDepartments] = useState({
    "Top Management": false,
    "Market Department": false,
    "Design Department": false,
    "Financial Department": false,
    "Supply Department": false
  });

  useEffect(() => {
    if (loan) {
      const updatedDepartments = { ...departments };
      loan.loanDurationYears.forEach(department => {
        if (updatedDepartments.hasOwnProperty(department)) {
          updatedDepartments[department] = true;
        }
      });
      
      if (JSON.stringify(updatedDepartments) !== JSON.stringify(departments)) {
        setDepartments(updatedDepartments);
      }
    }
  }, [loan]);

  if (!loan) {
    return <div>Loan not found</div>;
  }

  const handleCheckboxChange = (department) => {
    setDepartments(prevState => ({
      ...prevState,
      [department]: !prevState[department]
    }));
  };

  const handleApprove = (e) => {
    e.preventDefault();
    const approvedLoan = {
      ...loan,
      departments: Object.keys(departments).filter(department => departments[department])
    };
    const approvedLoans = JSON.parse(localStorage.getItem('approvedLoans')) || [];
    
    approvedLoans.push(approvedLoan);

    localStorage.setItem('approvedLoans', JSON.stringify(approvedLoans));

    const updatedLoanDetails = loanDetails.filter((_, i) => i !== parseInt(index));
    
    localStorage.setItem('loanDetails', JSON.stringify(updatedLoanDetails));
    
    navigate("/loan-applied");
  };

  return (
    <Container className="mt-4">
      <Card className="dashboard-card">
        <Card.Body>
          <Form onSubmit={handleApprove}>
            <Row>
              <Col md={6} className="mr-md-3">
                <Form.Group controlId="loanType" className="text-start">
                  <Form.Label className="text-start">Loan Type:</Form.Label>
                  <div style={{ position: 'relative' }}>
                    <Form.Control
                      as="select"
                      value={loan.loanType}
                      readOnly
                      style={{ paddingRight: '2.5rem', height: '48px', fontSize: '16px' }}
                    >
                      <option value="personal">Personal Loan</option>
                      <option value="home">Home Loan</option>
                      <option value="car">Car Loan</option>
                    </Form.Control>
                    <div
                      style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)' }}
                    >
                      <BsFillCaretDownFill />
                    </div>
                  </div>
                </Form.Group>
                <br />
                <Form.Group controlId="loanDuration" className="text-start">
                  <Form.Label className="text-start">Send to Group </Form.Label>
                  <div className="text-start">
                    {Object.keys(departments).map((department, idx) => (
                      <Form.Check
                        key={idx}
                        type="checkbox"
                        label={department}
                        checked={departments[department]}
                        onChange={() => handleCheckboxChange(department)}
                      />
                    ))}
                  </div>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="loanAmount" className="text-start">
                  <Form.Label>Loan Amount:</Form.Label>
                  <InputGroup className="mb-3" style={{ height: '48px', fontSize: '16px' }}>
                    <InputGroup.Text>INR </InputGroup.Text>
                    <Form.Control
                      type="text"
                      value={loan.loanAmount}
                      readOnly
                    />
                  </InputGroup>
                </Form.Group>
                <Form.Group controlId="coApplicant" className="text-start">
                  <Form.Label>Co-Applicant:</Form.Label>
                  <div className="co-applicant-options">
                    <Form.Check
                      inline
                      type="radio"
                      label={<span style={{ backgroundColor: 'green', width: '50px', color: 'white' }}>Father</span>}
                      value="father"
                      checked={loan.coApplicant === "father"}
                      readOnly
                    />
                    <Form.Check
                      inline
                      type="radio"
                      label={<span style={{ backgroundColor: 'blue', width: '50px', color: 'white' }}>Mother</span>}
                      value="mother"
                      checked={loan.coApplicant === "mother"}
                      readOnly
                    />
                    <Form.Check
                      inline
                      type="radio"
                      label={<span style={{ backgroundColor: 'orange', width: '50px', color: 'white' }}>Spouse</span>}
                      value="spouse"
                      checked={loan.coApplicant === "spouse"}
                      readOnly
                    />
                    <Form.Check
                      inline
                      type="radio"
                      label={<span style={{ backgroundColor: '#00FFFF', width: '50px', color: 'white' }}>Sibling</span>}
                      value="sibling"
                      checked={loan.coApplicant === "sibling"}
                      readOnly
                    />
                    <Form.Check
                      inline
                      type="radio"
                      label={<span style={{ backgroundColor: '#A9A9A9', width: '50px', color: 'white' }}>Other</span>}
                      value="other"
                      checked={loan.coApplicant === "other"}
                      readOnly
                    />
                  </div>
                </Form.Group>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col>
                <Button type="submit" variant="primary" className="custom-button">
                  Approve
                </Button>{" "}
                <Button variant="outline-secondary" className="custom-button" onClick={() => navigate("/")}>
                  Cancel
                </Button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default LoanApproveForm;
