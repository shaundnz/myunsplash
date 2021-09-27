import React, {useState, createContext} from 'react'

export const SearchContext = createContext({
  searchQuery: "",
  searchHandler: (query: string) => {}
})

const SearchContextProvider:React.FC = (props) => {
  const [searchQuery, setSearchQuery] = useState("")

  const searchHandler = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <SearchContext.Provider value={{ searchQuery: searchQuery, searchHandler: searchHandler }}>
      {props.children}
    </SearchContext.Provider>
  )
}

export default SearchContextProvider