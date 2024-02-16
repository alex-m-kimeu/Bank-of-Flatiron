export const Search = ({ search, setSearch  }) => {
    return (
        <div>
        <input
        className="search"
        type="text" 
        id="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search by description..."/>
        </div>
    );
};