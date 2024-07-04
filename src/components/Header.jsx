import Menu from "./Menu"


function Header({search, setSearch, types}) {
  return (
    <header>
        <div>Logo</div>
        <Menu search={search} setSearch={setSearch} types={types}/>
    </header>
  )
}

export default Header