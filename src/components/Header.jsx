import React, { useEffect, useState } from 'react';
import amznLogo from '../assets/amznLogo-removebg-preview.png';
import indiaFlag from '../assets/indiaFlag.jpeg';
import '../styles/header.css';
import { GrLocation } from "react-icons/gr";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdSearch } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";
import Card from './Card';

const Header = ({setClicked}) => {

    const [ searchText, setSearchText ] = useState('');
    const [ resultData, setResultData ] = useState([]);
    const [ filteredData, setFilteredData ] = useState([]);
    
    const searchHandler = (e) => {
        setSearchText(e.target.value);
    }

    const getData = async() => {
        try{
            const res = await fetch('https://dummyjson.com/products');
            const data = await res.json();
            setResultData(data.products);
        }catch(err){
            console.log(err);
        }
    }

    useEffect(() => {
        getData()
    }, []);

    const getFilteredData = (text) => {
        setClicked(true);
        if(text === ''){
            setFilteredData([]);
        }else{
            const data = resultData.filter((el) => el.category === text);
            setFilteredData(data);
        }
    }

    const handleKeyDown = (e) => {
        setClicked(true);
        if(e.key === 'Enter'){
            getFilteredData(searchText);
        }
    }

  return (
    <div>

        <div className='topHeader'>

            <div className='firstSection'>
                <img id='amznImg' src={amznLogo} alt="not available" />
                <GrLocation />
                <div className='locationDiv'>
                    <p className='deliverPara'>Delivering to your location</p>
                    <p className='updatePara'>Update location</p>
                </div>
            </div>

            <div className='secondSection'>
                <div className='tab-left'>
                   <p>All</p>
                   <IoMdArrowDropdown />
                </div>
                <input
                className='tab-input' 
                placeholder='Search in Amazon' 
                type="text" 
                value={searchText}
                onChange={(e) => searchHandler(e)}
                onKeyDown={(e) => handleKeyDown(e)}
                />
                <div className='tab-right' onClick={() => getFilteredData(searchText)}>
                   <MdSearch className='searchIcon'/>
                </div>
            </div>
                
            <div className='thirdSection'>
                <div className='flagDiv'>
                   <img id='indiaFlag' src={indiaFlag} alt="not available" />
                   <p className='engPara'>en</p>
                   <IoMdArrowDropdown id='arrow'/>
                </div>
                <div className='accountDiv'>
                   <p className='signPara'>Hello&#x2c; sign in</p>
                   <span className='spanDiv'><p>Account &amp; Lists</p><IoMdArrowDropdown className='spanArrow'/></span>
                </div>
                <div className='returnDiv'>
                    <p className='returnPara'>Returns</p>
                    <p className='orderPara'>&amp; Orders</p>
                </div>
                <div className='cartDiv'>
                    <p className='cartPara'>cart</p>
                </div>
            </div>

        </div>

        <div className='bottomHeader'>

            <div className='ulDiv'>
                <ul>
                    <li><IoMdMenu />All</li>
                    <li>Fresh <IoMdArrowDropdown /></li>
                    <li>Amazon miniTV</li>
                    <li>Sell</li>
                    <li>BestSellers</li>
                    <li>Mobiles</li>
                    <li>Today's Deals</li>
                    <li>Prime <IoMdArrowDropdown /></li>
                    <li>Electronics</li>
                    <li>Customer Service</li>
                    <li>New Releases</li>
                    <li>Home &amp; Kitchen</li>
                    <li>Fashion</li>
                </ul>
            </div>

            <div className='imgDiv'>
               <img src="https://m.media-amazon.com/images/G/31/Events/img24/may24ART/GW/MayART24_SWM_SN._CB561779500_.jpg" alt="not available" />
            </div>

        </div>

        <Card filteredData={filteredData}/>
        
    </div>
  )
}

export default Header;



