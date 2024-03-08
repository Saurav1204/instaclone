import React, { useState, useEffect } from 'react'
import axios from 'axios';


function Test() {
    const [text, setText] = useState('');
    const [body, setBody] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [data, setData] = useState([]);


    const saveData = async () => {
        if (!text || !body) {
            setErrorMessage('Please fill in all fields');
            return;
        }

        const data = { text, body };

        try {
            const response = await axios.post('https://jsonplaceholder.typicode.com/posts', data, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                    
                }
            });

            if (response.status === 201) {
                setSuccessMessage('Record added successfully');
                setText('');
                setBody('');
            } else {
                throw new Error('Failed to save data');
            }
        } catch (error) {
            setErrorMessage('An error occurred while saving data');
            console.error('Error:', error);
        }
    };
    const deletedata = async (id) => {
        try {
            const resp = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
            if (resp.status === 200) {
                setSuccessMessage('Record deleted successfully');
                saveData(); // Fetch data again after deleting a record
            } else {
                throw new Error('Failed to delete data');
            }
        } catch (error) {
            setErrorMessage('An error occurred while deleting data');
            console.error('Error:', error);
        }
    };

    const fetchData = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            setData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {   
        fetchData();
    }, []); 
    
    
    return (
        <div>
            <h2>Post Form</h2>
            {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            <form onSubmit={(e) => { e.preventDefault(); saveData(); }}>
                <div>
                    <label htmlFor="text">Text:</label>
                    <input type="text" id="text" value={text} onChange={(e) => setText(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="body">Body:</label>
                    <textarea id="body" value={body} onChange={(e) => setBody(e.target.value)} />
                </div>
                <button type="submit">Submit</button>
            </form>

      <h1>Fetched Data:</h1>
     <ul>
        {data.map(item => (
          <>ID: <li key={item.id}>{item.title}</li>
          Text : <li key={item.title}>{item.title}</li>
          <button onClick={() => deletedata(item.id)}>Delete</button><br/><br/>
          </>
        ))}
      </ul>
    </div>
  );
};


export default Test
