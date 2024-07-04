

function Search({ search, setSearch, types}) {
    const handleSubmit = (ev) => {
        ev.preventDefault();
    }

    const handleChange = (ev) =>{
        setSearch({...search, name: ev.target.value});
    }

    const handleSelect = (ev) =>{
        setSearch({...search, type: ev.target.value});
    }

    const handleReset = () => {
        setSearch({name: '', type: ''})
    }



  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="search-name" className="input">search</label>
        <input type="text" name="search-name" id="search-name" onChange={handleChange} value={search.name} placeholder="Product name"/>

        <select name="types" id="types" onChange={handleSelect} value={search.type}>
            <option value="">All</option>
            {types.map((type, i)=>{
                return <option key={i} value={type}>{type}</option>
            })}
        </select>

        <input type="reset" value="x" onClick={handleReset} />
    </form>
  )
}

export default Search