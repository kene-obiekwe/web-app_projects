import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

interface PatientBiodata {
  Clinic_ID: number;
  First_Name: string;
  Surname: string;
  Middle_Name: string;
  Date_of_Birth: Date;
  Home_Address: string;
  Date_of_Registration: Date;
  Matriculation_Number: string;
}

interface ClinicalRecord {
  Clinic_ID: number;
  Clinic_Date: Date;
  Nature_of_Ailment: string;
  Medicine_Prescribed: string;
  Procedure_Undertaken: string;
  Date_of_next_Appointment: Date;
}

const ViewData: React.FC = () => {
  const [patientBiodata, setPatientBiodata] = useState<PatientBiodata[]>([]);
  const [clinicalRecords, setClinicalRecords] = useState<ClinicalRecord[]>([]);
  const [editingPatient, setEditingPatient] = useState<PatientBiodata | null>(null);
  const [editingRecord, setEditingRecord] = useState<ClinicalRecord | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPatientBiodata = async () => {
      try {
        const response = await axios.get('http://toothfixer.com:3000/patient-biodata');
        setPatientBiodata(response.data);
      } catch (error) {
        console.error('Error fetching patient biodata:', error);
      }
    };

    const fetchClinicalRecords = async () => {
      try {
        const response = await axios.get('http://toothfixer.com:3000/clinical-records');
        setClinicalRecords(response.data);
      } catch (error) {
        console.error('Error fetching clinical records:', error);
      }
    };

    fetchPatientBiodata();
    fetchClinicalRecords();
  }, []);

  const deletePatient = async (id: number) => {
    try {
      await axios.delete(`http://toothfixer.com:3000/patient-biodata/${id}`);
      setPatientBiodata((prev) => prev.filter((patient) => patient.Clinic_ID !== id));
    } catch (error) {
      console.error('Error deleting patient:', error);
    }
  };

  const deleteClinicalRecord = async (id: number) => {
    try {
      await axios.delete(`http://toothfixer.com:3000/clinical-records/${id}`);
      setClinicalRecords((prev) => prev.filter((record) => record.Clinic_ID !== id));
    } catch (error) {
      console.error('Error deleting clinical record:', error);
    }
  };

  const handleEditPatient = (patient: PatientBiodata) => {
    setEditingPatient(patient);
  };

  const handleEditRecord = (record: ClinicalRecord) => {
    setEditingRecord(record);
  };

  const handlePatientUpdateSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!editingPatient) return;
  
    try {
      const response = await axios.patch(`http://toothfixer.com:3000/patient-biodata/${editingPatient.Clinic_ID}`, editingPatient);
      setPatientBiodata((prev) =>
        prev.map((patient) => (patient.Clinic_ID === editingPatient.Clinic_ID ? response.data : patient))
      );
      setEditingPatient(null);
      setError(null);
    } catch (error) {
      console.error('Error updating patient:', error);
      setError('Failed to update patient data. Please try again.');
    }
  };
  
  const handleRecordUpdateSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!editingRecord) return;
  
    try {
      const response = await axios.patch(`http://toothfixer.com:3000/clinical-records/${editingRecord.Clinic_ID}`, editingRecord);
      setClinicalRecords((prev) =>
        prev.map((record) => (record.Clinic_ID === editingRecord.Clinic_ID ? response.data : record))
      );
      setEditingRecord(null);
      setError(null);
    } catch (error) {
      console.error('Error updating clinical record:', error);
      setError('Failed to update clinical record. Please try again.');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, entity: 'patient' | 'record') => {
    const { name, value } = e.target;
    if (entity === 'patient' && editingPatient) {
      setEditingPatient({ ...editingPatient, [name]: value });
    } else if (entity === 'record' && editingRecord) {
      setEditingRecord({ ...editingRecord, [name]: value });
    }
  };

  return (
    <div className="grid-container">
      {/* Navigation Bar */}
      <div className="navigation-bar">
        <Link className="hover:text-green-200" to="/">Home</Link>
        <img src="/dentist.ico" alt="Logo" className="h-8 w-8 mr-2" />
      </div>

      <h1 className="text-green-700 text-4xl font-extrabold mb-4 text-center">Patient Biodata</h1>
      {error && <div className="notification is-danger">{error}</div>}
      <div className="box">
        <table className="min-w-full bg-white">
          <thead className="bg-green-500 text-white">
            <tr>
              <th className="w-1/5 px-4 py-2">Clinic_ID</th>
              <th className="w-1/5 px-4 py-2">First Name</th>
              <th className="w-1/5 px-4 py-2">Surname</th>
              <th className="w-1/5 px-4 py-2">Middle Name</th>
              <th className="w-1/5 px-4 py-2">Date of Birth</th>
              <th className="w-1/5 px-4 py-2">Home Address</th>
              <th className="w-1/5 px-4 py-2">Date of Registration</th>
              <th className="w-1/5 px-4 py-2">Developer's Matriculation Number</th>
              <th className="w-1/5 px-4 py-2">Functions</th>
            </tr>
          </thead>
          <tbody>
            {patientBiodata.map((patient) => (
              <tr key={patient.Clinic_ID}>
                <td className="border px-4 py-2">{patient.Clinic_ID}</td>
                <td className="border px-4 py-2">{patient.First_Name}</td>
                <td className="border px-4 py-2">{patient.Surname}</td>
                <td className="border px-4 py-2">{patient.Middle_Name}</td>
                <td className="border px-4 py-2">{new Date(patient.Date_of_Birth).toLocaleDateString()}</td>
                <td className="border px-4 py-2">{patient.Home_Address}</td>
                <td className="border px-4 py-2">{new Date(patient.Date_of_Registration).toLocaleDateString()}</td>
                <td className="border px-4 py-2">{patient.Matriculation_Number}</td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => handleEditPatient(patient)}
                    className="button is-light-green-border is-small"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => deletePatient(patient.Clinic_ID)}
                    className="button is-link is-small"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {editingPatient && (
        <form onSubmit={handlePatientUpdateSubmit} className="box">
          <h2 className="text-2xl mb-4">Update Patient Biodata</h2>
          <div className="field">
            <label className="label">First Name</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="First_Name"
                value={editingPatient.First_Name}
                onChange={(e) => handleInputChange(e, 'patient')}
                required
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Surname</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="Surname"
                value={editingPatient.Surname}
                onChange={(e) => handleInputChange(e, 'patient')}
                required
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Middle Name</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="Middle_Name"
                value={editingPatient.Middle_Name}
                onChange={(e) => handleInputChange(e, 'patient')}
                required
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Date of Birth</label>
            <div className="control">
              <input
                className="input"
                type="date"
                name="Date_of_Birth"
                value={editingPatient.Date_of_Birth.toString().split('T')[0]}
                onChange={(e) => handleInputChange(e, 'patient')}
                required
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Home Address</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="Home_Address"
                value={editingPatient.Home_Address}
                onChange={(e) => handleInputChange(e, 'patient')}
                required
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Date of Registration</label>
            <div className="control">
              <input
                className="input"
                type="date"
                name="Date_of_Registration"
                value={editingPatient.Date_of_Registration.toString().split('T')[0]}
                onChange={(e) => handleInputChange(e, 'patient')}
                required
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Matriculation Number</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="Matriculation_Number"
                value={editingPatient.Matriculation_Number}
                readOnly
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button type="submit" className="button is-link">Update</button>
              <button
                type="button"
                onClick={() => setEditingPatient(null)}
                className="button is-light"
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      )}

      <h1 className="text-green-700 text-4xl font-extrabold mb-4 text-center">Clinical Records</h1>
      <div className="box">
        <table className="min-w-full bg-white">
          <thead className="bg-green-500 text-white">
            <tr>
              <th className="w-1/5 px-4 py-2">Clinic_ID</th>
              <th className="w-1/5 px-4 py-2">Clinic Date</th>
              <th className="w-1/5 px-4 py-2">Nature of Ailment</th>
              <th className="w-1/5 px-4 py-2">Medicine Prescribed</th>
              <th className="w-1/5 px-4 py-2">Procedure Undertaken</th>
              <th className="w-1/5 px-4 py-2">Date of Next Appointment</th>
              <th className="w-1/5 px-4 py-2">Functions</th>
            </tr>
          </thead>
          <tbody>
            {clinicalRecords.map((record) => (
              <tr key={record.Clinic_ID}>
                <td className="border px-4 py-2">{record.Clinic_ID}</td>
                <td className="border px-4 py-2">{new Date(record.Clinic_Date).toLocaleDateString()}</td>
                <td className="border px-4 py-2">{record.Nature_of_Ailment}</td>
                <td className="border px-4 py-2">{record.Medicine_Prescribed}</td>
                <td className="border px-4 py-2">{record.Procedure_Undertaken}</td>
                <td className="border px-4 py-2">{new Date(record.Date_of_next_Appointment).toLocaleDateString()}</td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => handleEditRecord(record)}
                    className="button is-light-green-border is-small"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => deleteClinicalRecord(record.Clinic_ID)}
                    className="button is-link is-small"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {editingRecord && (
        <form onSubmit={handleRecordUpdateSubmit} className="box">
          <h2 className="text-2xl mb-4">Update Clinical Record</h2>
          <div className="field">
            <label className="label">Clinic Date</label>
            <div className="control">
              <input
                className="input"
                type="date"
                name="Clinic_Date"
                value={editingRecord.Clinic_Date.toString().split('T')[0]}
                onChange={(e) => handleInputChange(e, 'record')}
                required
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Nature of Ailment</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="Nature_of_Ailment"
                value={editingRecord.Nature_of_Ailment}
                onChange={(e) => handleInputChange(e, 'record')}
                required
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Medicine Prescribed</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="Medicine_Prescribed"
                value={editingRecord.Medicine_Prescribed}
                onChange={(e) => handleInputChange(e, 'record')}
                required
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Procedure Undertaken</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="Procedure_Undertaken"
                value={editingRecord.Procedure_Undertaken}
                onChange={(e) => handleInputChange(e, 'record')}
                required
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Date of Next Appointment</label>
            <div className="control">
              <input
                className="input"
                type="date"
                name="Date_of_next_Appointment"
                value={editingRecord.Date_of_next_Appointment.toString().split('T')[0]}
                onChange={(e) => handleInputChange(e, 'record')}
                required
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button type="submit" className="button is-link">Update</button>
              <button
                type="button"
                onClick={() => setEditingRecord(null)}
                className="button is-light"
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default ViewData;
