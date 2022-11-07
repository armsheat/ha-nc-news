import { useState } from 'react';

function SortingForm({URLQuery, setURL}) {

    const [sortBy, setSortby] = useState('')
    const [descending, setDescending] = useState(false)
    
    const handleSubmit = (event) => {
        event.preventDefault()
        setSortby('')
        createURL()
    }

    const createURL = () => {
        let newURL = ''
        
        if (setSortby !== '') {
            newURL = URLQuery + `?sort_by=` + sortBy
        }
        if (descending) {
            newURL = URLQuery + `?sort_by=` + sortBy + `&&order=DESC`
        }
        setURL(newURL)
    }

    return <form onSubmit={handleSubmit} className='SortingForm'>
        <label htmlFor='sortby'>Sortby:  </label>
         <select name='sortby' id='sortby' onChange={(event) => setSortby(event.target.value)}>
                <option value=''>------</option>
                <option value='title'>title</option>
                <option value='created_at'>date</option>
                <option value='author'>author</option>
                <option value='votes'>number of votes</option>
                <option value='number_of_comments'>number of comments</option>
        </select>
        <label htmlFor='order'>  Order:  </label>
        <select name='order' id='order' onChange={(event) => setDescending(event.target.value)}>
                <option value=''>------</option>
                <option value='false'>Ascending</option>
                <option value='true'>Descending</option>
        </select>
        <button>Sort Away!</button>
    </form>
}

export default SortingForm