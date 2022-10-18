import {useSearchParams} from "react-router-dom";
import {useState} from "react";
import {filterData} from "../../../utils/filterData";
import FilterPanel from "../../filterPanel/filterPanel";

function SearchPage() {
    const [filters] = useState(filterData)
    const [searchParams, setSearchParams] = useSearchParams();
    let [allQueries,setAllQueries] = useState({})

    const updateQueries = (newQuery) => {
        let updatedQueries = { ...allQueries,...newQuery };

        setSearchParams(updatedQueries);
        setAllQueries(updatedQueries)
    };

    return (
        <FilterPanel filters={filters} updateQueries={updateQueries}/>
    )
}

export default SearchPage;