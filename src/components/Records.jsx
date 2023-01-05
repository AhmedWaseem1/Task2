import React,{useState} from 'react'
import './Records.css'
const Records = ({data}) => {
    const [search,setSearch] = useState('')
    const [loading, setLoading] = useState(false);




  return (
    <>
    <div className='data_div'>
    <input type="text" placeholder="Search" onChange={(e) => setSearch(e.target.value)}/>
    <table className='table'>
        <thead>
        <tr>
                <th scope='col'>Alpha Two Code</th>
                <th scope='col'>Name          </th>
                <th scope='col'>Web Page      </th>
                <th scope='col'>City          </th>
                <th scope='col'>Country       </th>
        </tr>
        </thead>
    <tbody>
    {
            loading ? (
                <h4>Loading....</h4>
            ) :
            (
                data.filter((value) => {
                    if(search === ""){
                        return value;
                    }else if(value.name.toLowerCase().includes(search.toLowerCase())){
                        return value;
                    }
                }).map(item => (
                    <tr>
                        <td>{item.alpha_two_code} </td>
                        <td>{item.name} </td>
                        <td>{item.web_pages} </td>
                        <td>{item['state-province']} </td>
                        <td>{item.country}</td>
                    </tr>
                ))
            )
        }
    </tbody>
    </table>
        

    </div>
    </>
  )
}

export default Records