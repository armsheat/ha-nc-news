import { useState } from 'react';

function SortingForm({URLQuery, setURL}) {

    

    const [sortBy, setSortby] = useState('')
    
    const handleSubmit = (event) => {
        event.preventDefault()
        setSortby('')
        createURL()
    }

    const createURL = () => {
        baseURL= `https://heathers-news.herokuapp.com/api/articles'`
        
    }

    return <form onSubmit={handleSubmit}>

    </form>
}

export default SortingForm