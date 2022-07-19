import { useState } from "react";



const Search = (props) => {
    const [search, setSearch] = useState("");

    const handleChange = (e) => {
        setSearch(e.target.value);
    }
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            props.callBack(search);
            props.loadCall(true)
        }
    }

    return(
        <div className="">
            <div className="search-box">
                <p className="label">Search</p>
                <input 
                    placeholder="Type in a search word and press enter"
                    onChange={handleChange} 
                    onKeyDown={handleKeyPress} 
                    class="input-search" />

            </div>
        </div>
    )
}
export default Search;