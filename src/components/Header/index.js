import React from 'react';
import { FiMessageSquare, FiBell, FiMoreVertical, FiToggleRight, FiCalendar, FiSlack, FiSearch, FiChevronLeft, FiSettings, FiUser, FiFilter, FiPlus } from 'react-icons/fi';

import { ContainerPrimary, User, ContainerSecondary } from './styles';

export default function Header() {
    return (
        <>
            <ContainerPrimary>
                <div className='logo-toogle'>
                    <FiToggleRight className='icon-toogle' size={40} />
                    <h2>Rocketfy - cmoreiradev Requests</h2>
                </div>

                <User>
                    <FiMessageSquare className='icon' size={20} color='#FFF' />
                    <FiSearch className='icon' size={20} color='#FFF' />
                    <FiBell className='icon' size={20} color="#FFF" />
                    <img src="https://avatars0.githubusercontent.com/u/56305107?s=400&u=2240a7b9b5e8499f64fb1607b42c00f0af10096a&v=4" alt="Caique Moreira" />
                    <FiMoreVertical size={20} color='#FFF' />
                </User>
            </ContainerPrimary>

            <ContainerSecondary>
                <div className="left">
                    <div className="first">
                        <FiChevronLeft size={20} color='#FFF' />
                        <h4>Cards</h4>
                        <h4>Reports</h4>
                    </div>
                    <div className="options">
                        <FiCalendar size={20} />
                        <h4>Calendar</h4>
                    </div>

                    <div className="options">
                        <FiSlack size={20} />
                        <h4>Slack</h4>
                    </div>
                </div>

                <div className="right">
                    <button>
                        <FiPlus size={20} color='#FFF' />
                        Invite member
                    </button>
                    <FiUser className='item' size={20} color='#FFF' />
                    <FiFilter className='item' size={20} color='#FFF' />
                    <FiSettings className='item' size={20} color='#FFF' />
                </div>
            </ContainerSecondary>
        </>
    )
}