import React from 'react';
import { Table, Button, Card, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './loanAppliedList.css'; 
const LoanAppliedList = () => {
    const navigate = useNavigate();
  const loanDetails = JSON.parse(localStorage.getItem("loanDetails")) || [];
  const handleViewClick = (index) => {
    navigate(`/loan-approve/${index}`);
  };
  return (
    <div className="container-padding">
      <h1>Loan Applied List</h1>
      <Card className="card-padding">
        <Card.Body>
          <Table className="no-border-table">
            <thead>
              <tr>
                <th>Loan Type</th>
                <th>Amount</th>
                <th>Co-Applicant</th>
                <th>Loan Duration</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {loanDetails.length > 0 ? (
                loanDetails.map((loan, index) => (
                  <tr key={index}>
                    <td className="table-cell">
                      <Form.Control type="text" value={loan.loanType} readOnly />
                    </td>
                    <td className="table-cell">
                      <Form.Control type="text" value={loan.loanAmount} readOnly />
                    </td>
                    <td className="table-cell">
                      <Form.Control type="text" value={loan.coApplicant} readOnly />
                    </td>
                    <td className="table-cell">
                      <Form.Control type="text" value={loan.loanDurationYears} readOnly />
                    </td>
                    <td className="table-cell">
                      <Button variant="primary"  onClick={() => handleViewClick(index)}>View</Button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="table-cell">No loan applications found</td>
                </tr>
              )}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  );
};

export default LoanAppliedList;
