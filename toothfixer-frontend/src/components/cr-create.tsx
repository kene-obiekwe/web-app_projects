import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const CrCreate: React.FC = () => {
  const [clinicDate, setClinicDate] = useState('');
  const [natureOfAilment, setNatureOfAilment] = useState('');
  const [medicinePrescribed, setMedicinePrescribed] = useState('');
  const [procedureUndertaken, setProcedureUndertaken] = useState('');
  const [dateOfNextAppointment, setDateOfNextAppointment] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!clinicDate || !natureOfAilment || !medicinePrescribed || !procedureUndertaken || !dateOfNextAppointment) {
      alert('Please fill in all required fields.');
      return;
    }

    const formData = {
      Clinic_Date: clinicDate,
      Nature_of_Ailment: natureOfAilment,
      Medicine_Prescribed: medicinePrescribed,
      Procedure_Undertaken: procedureUndertaken,
      Date_of_next_Appointment: dateOfNextAppointment,
    };

    const submitButton = document.getElementById('submitCreateUserForm') as HTMLButtonElement;
    submitButton.classList.add('is-loading');

    try {
      const response = await axios.post('http://toothfixer.com:3000/clinical-records', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Response:', response.data);

      setClinicDate('');
      setNatureOfAilment('');
      setMedicinePrescribed('');
      setProcedureUndertaken('');
      setDateOfNextAppointment('');

      submitButton.classList.remove('is-loading');
      alert('Clinic Record creation successful');

      // Navigates back to home page
      navigate('/'); 
    
    }
        catch (error: any) {
            // Handle errors
            console.error('Error:', error);
      
            // Remove loading state
            submitButton.classList.remove('is-loading');
      
            // Show error notification
            alert(`Error: ${(error as Error).message}`);
      }
    }

  const handleClear = () => {
    setClinicDate('');
    setNatureOfAilment('');
    setMedicinePrescribed('');
    setProcedureUndertaken('');
    setDateOfNextAppointment('');
  };

  return (
    <div className="grid-container">
      <div className="navigation-bar">
        <Link to="/">Home</Link>
        <img src="/dentist.ico" alt="Logo" className="h-8 w-8 mr-2" />
      </div>
      <h1 className="text-green-700 text-4xl font-bold mb-4 text-center">Clinical Records Form</h1>
      <div className="grid-item-row-2">
        <form className="box" id="createUserForm" onSubmit={handleSubmit}>
          <fieldset id="createUserFormFieldSet" className="container">
            <div className="field">
              <label className="label">Clinic Date:</label>
              <div className="control has-icons-right">
                <input
                  className="input"
                  id="clinicDate"
                  name="Clinic_Date"
                  type="date"
                  value={clinicDate}
                  onChange={(e) => setClinicDate(e.target.value)}
                  required
                  pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
                  placeholder="yyyy-mm-dd"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Nature of Ailment:</label>
              <div className="control has-icons-right">
                <input
                  className="input"
                  id="natureOfAilment"
                  name="Nature_of_Ailment"
                  type="text"
                  placeholder="Nature of Ailment"
                  value={natureOfAilment}
                  onChange={(e) => setNatureOfAilment(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Medicine Prescribed:</label>
              <div className="control has-icons-right">
                <input
                  className="input"
                  id="medicinePrescribed"
                  name="Medicine_Prescribed"
                  type="text"
                  placeholder="Medicine Prescribed"
                  value={medicinePrescribed}
                  onChange={(e) => setMedicinePrescribed(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Procedure Undertaken:</label>
              <div className="control has-icons-right">
                <input
                  className="input"
                  id="procedureUndertaken"
                  name="Procedure_Undertaken"
                  type="text"
                  placeholder="Procedure Undertaken"
                  value={procedureUndertaken}
                  onChange={(e) => setProcedureUndertaken(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Date of Next Appointment:</label>
              <div className="control has-icons-right">
                <input
                  className="input"
                  id="dateOfNextAppointment"
                  name="Date_of_next_Appointment"
                  type="date"
                  value={dateOfNextAppointment}
                  onChange={(e) => setDateOfNextAppointment(e.target.value)}
                  required
                  pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
                  placeholder="yyyy-mm-dd"
                />
              </div>
            </div>
            <div className="field is-grouped">
              <div className="control">
                <button type="submit" id="submitCreateUserForm" className="button is-link is-small">
                  Submit
                </button>
              </div>
              <div className="control">
                <button type="reset" onClick={handleClear} className="button is-light is-small">
                  Clear
                </button>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
      <section className="section">
        <div className="container">
          <div id="notification" className="notification container is-hidden animated slideInUp">
            <button className="delete"></button>
            <div id="notificationMessage"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CrCreate;
