import React from 'react';
import { FiMoreVertical } from 'react-icons/fi';

import { MdAdd } from 'react-icons/md';

import Card from '../Card';

import { Container } from './styles';

export default function List({ data, index: listIndex }) {
    return (
        <Container done={data.done}>
            <header className='header'>
                <h2>{data.title}</h2>
                
                <div className="icons">
                    {data.creatable && (
                        <button type="button">
                            <MdAdd size={24} color="#FFF" />
                        </button>
                    )}
                    <FiMoreVertical size={20} />
                </div>
            </header>
            <ul>
                {data.cards.map((card, index) => (
                    <Card
                        key={card.id}
                        listIndex={listIndex}
                        index={index}
                        data={card} />
                ))}
            </ul>
        </Container>
    );
}