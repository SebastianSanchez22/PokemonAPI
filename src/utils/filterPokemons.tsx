import React from 'react'

type HeaderProps = {
    query: string;
    setQuery: (query:string) => void;
}

const MainFilter = ({query, setQuery}:HeaderProps) => {
  return (
    <div className='flex justify-center items-center text-2xl font-bold mx-4 mb-3 '>
      <header>
        <div>
        <input className='text-center border-solid border-black' placeholder='Busca un Pokemon' type="text" value={query} onChange = {(event) => setQuery(event.target.value)}/>
        </div>        
      </header>
    </div>
  )
}

export default MainFilter