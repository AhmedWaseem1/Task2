import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Records from './components/Records';
import Pagination from './components/Pagination';
import ClipLoader from "react-spinners/ClipLoader";
import SideBar from './components/SideBar';
import './App.css'


function App() {

    // To hold the actual data
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false);

    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage] = useState(20);


    


    useEffect(() => {
      setLoading(true)
      setTimeout(()=>{
        setLoading(false)
      },8000)
        axios.get('http://universities.hipolabs.com/search?country=India')
            .then(res => {
              
              setLoading(false);
              setData(res.data);
                    
                })
                .catch(() => {
                    alert('There was an error while retrieving the data')
                })
    }, [])

    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
    const nPages = Math.ceil(data.length / recordsPerPage)

    return (
        <div>
          <SideBar/>
            <h2> University Data </h2>
            {
              loading ?

              <ClipLoader
                  color={"#282c34"}
                  loading={loading}
                  size={50}
      />
              :
              <>
              <Records data={currentRecords}/>
              <Pagination
                nPages={nPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
            </>
            }
            
          </div>
    );
}

export default App;