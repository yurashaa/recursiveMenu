import React, {Fragment, useLayoutEffect, useState} from 'react';
import {v4} from 'uuid';
import './App.css';

import {Menu} from './components/Menu';

function App() {

    const [isLoading, setIsLoading] = useState(true);
    const [items, setItems] = useState([]);
    const [error, setError] = useState('');

    const getUniqueIds = (array) => {
        let result = [];
        let index = 0;

        for(let item of array) {
            result[index] = {...item, id: v4()};

            if(item.tree.length) {
                result[index].tree = getUniqueIds(item.tree)
            }

            index++;
        }

        return result;
    };

    useLayoutEffect(() => {
        const sendRequest = async () => {
            setIsLoading(true);

            try {
                const response = await fetch('http://localhost:5000/menu', {
                    method: 'GET',
                    headers: {
                        Authorization: 'aa689372-bddd-11ea-b3de-0242ac130004'
                    }
                });

                let responseData = await response.json();

                if (!response.ok) {
                    setError(responseData.message);
                    return setIsLoading(false);
                }

                responseData = getUniqueIds(responseData);

                setItems(responseData);
            } catch (err) {
                console.log(err);
            }

            setIsLoading(false);
        };

        sendRequest();
    }, []);

    return (
        <Fragment>
            {isLoading && <h3>Loading...</h3>}
            {error && <h3>{error}</h3>}
            {!isLoading && <Menu items={items}/>}
        </Fragment>
    );
}

export default App;
