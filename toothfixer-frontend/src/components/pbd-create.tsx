import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

interface PbdCreateProps {
  onPbdCreateSuccess: () => void;
}

const PbdCreate: React.FC<PbdCreateProps> = ({ onPbdCreateSuccess }) => {
  const [firstName, setFirstName] = useState('');
  const [surname, setSurname] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [homeAddress, setHomeAddress] = useState('');
  const [dateOfRegistration, setDateOfRegistration] = useState('');
  const matriculationNumber = '_22120613021'; // Assuming this is static
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Validation checks
    if (!firstName || !surname || !dateOfBirth || !homeAddress || !dateOfRegistration) {
      alert('Please fill in all required fields.');
      return;
    }

    // Prepare data for POST request
    const formData = {
      First_Name: firstName,
      Surname: surname,
      Middle_Name: middleName,
      Date_of_Birth: dateOfBirth,
      Home_Address: homeAddress,
      Date_of_Registration: dateOfRegistration,
      Matriculation_Number: matriculationNumber,
    };

    // Simulate loading state
    const submitButton = document.getElementById('submitCreateUserForm') as HTMLButtonElement;
    submitButton.classList.add('is-loading');

    try {
      // Perform POST request
      const response = await axios.post('http://toothfixer.com:3000/patient-biodata', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      // Handle response
      console.log('Response:', response.data);

      // Reset form and show success message
      setFirstName('');
      setSurname('');
      setMiddleName('');
      setDateOfBirth('');
      setHomeAddress('');
      setDateOfRegistration('');

      // Call parent callback to indicate success
      onPbdCreateSuccess();

      // Remove loading state
      submitButton.classList.remove('is-loading');

      // Show success notification
      alert('Patient Biodata creation successful');

      // Navigate to CrCreate form page
      navigate('/clinic-record/create');
    } catch (error: any) {
      // Handle errors
      console.error('Error:', error);

      // Remove loading state
      submitButton.classList.remove('is-loading');

      // Show error notification
      alert(`Error: ${(error as Error).message}`);
    }
  };

  const handleClear = () => {
    setFirstName('');
    setSurname('');
    setMiddleName('');
    setDateOfBirth('');
    setHomeAddress('');
    setDateOfRegistration('');
  };

  return (
    <div className="grid-container">
      {/* Navigation Bar */}
      <div className="navigation-bar">
        <Link className="hover:text-green-200" to="/">Home</Link>
        <img src="/dentist.ico" alt="Logo" className="h-8 w-8 mr-2 image-centered" />
      </div>

      {/* Form Section */}
      <h1 className="text-green-700 text-4xl font-bold mb-4 text-center">Patient Biodata Form</h1>
      <div className="grid-item-row-2">
        <form className="box" id="createUserForm" onSubmit={handleSubmit}>
          <fieldset id="createUserFormFieldSet" className="container">
            <div className="field">
              <label className="label">First Name:</label>
              <div className="control has-icons-right">
                <input
                  className="input"
                  id="firstName"
                  name="First_Name"
                  type="text"
                  placeholder="First name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Surname:</label>
              <div className="control has-icons-right">
                <input
                  className="input"
                  id="surname"
                  name="Surname"
                  type="text"
                  placeholder="Surname"
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Middle Name:</label>
              <div className="control has-icons-right">
                <input
                  className="input"
                  id="middleName"
                  name="Middle_Name"
                  type="text"
                  placeholder="Middle Name"
                  value={middleName}
                  onChange={(e) => setMiddleName(e.target.value)}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Date of Birth:</label>
              <div className="control has-icons-right">
                <input
                  className="input"
                  id="dateOfBirth"
                  name="Date_of_Birth"
                  type="date"
                  value={dateOfBirth}
                  onChange={(e) => setDateOfBirth(e.target.value)}
                  required
                  pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
                  placeholder="yyyy-mm-dd"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Home Address:</label>
              <div className="control has-icons-right">
                <input
                  className="input"
                  id="homeAddress"
                  name="Home_Address"
                  type="text"
                  placeholder="Home Address"
                  value={homeAddress}
                  onChange={(e) => setHomeAddress(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Date of Registration:</label>
              <div className="control has-icons-right">
                <input
                  className="input"
                  id="dateOfRegistration"
                  name="Date_of_Registration"
                  type="date"
                  value={dateOfRegistration}
                  onChange={(e) => setDateOfRegistration(e.target.value)}
                  required
                  pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
                  placeholder="yyyy-mm-dd"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Developer's Matriculation Number:</label>
              <div className="control has-icons-right">
                <input
                  className="input"
                  id="matriculationNumber"
                  name="Matriculation_Number"
                  type="hidden"
                  value={matriculationNumber}
                />
                <span>{matriculationNumber}</span>
              </div>
            </div>
            <div className="field is-grouped">
              <div className="control">
                <button type="submit" id="submitCreateUserForm" className="button is-link is-small">
                  Submit
                </button>
              </div>
              <div className="control">
                <button type="button" onClick={handleClear} className="button is-light-green-border is-small">
                  Clear
                </button>
              </div>
            </div>
          </fieldset>
        </form>
      </div>

      {/* Notification Section */}
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

export default PbdCreate;
