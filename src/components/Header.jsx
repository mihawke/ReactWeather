import React from 'react';
import { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { BsSearch } from 'react-icons/bs';


function Header({ handleLocation }) {
    const [location, setLocation] = useState('')
    const handleInput = (e) => {
        setLocation(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        handleLocation(location)
        setLocation('')
    }
    return (
        <form className="flex flex-row items-center border-[1px] px-4 py-2 rounded-lg" onSubmit={handleSubmit}>
            <input
                className='bg-transparent outline-none'
                type='text'
                value={location}
                placeholder='Search Location...'
                onChange={handleInput}
            />
            <BiSearch className="mr-2" size={24} onClick={handleSubmit}/>
        </form>
    )
}

export default Header