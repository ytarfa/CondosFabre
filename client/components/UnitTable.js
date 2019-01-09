import React from 'react';
import ReactTable from 'react-table';

import unitData from '../units.json';

import '../scss/UnitTable/main.scss';
import 'react-table/react-table.css';

export default class UnitTable extends React.Component{
    render() {

        const data = unitData.units;

        const columns = [
            {
                Header: 'Condo',
                accessor: '_id',
                Cell: props => `Condo ${props.value}`
            },
            {
                Header: 'Prix',
                accessor: 'price'
            },
            {
                Header: 'Chambres',
                accessor: 'bedrooms'
            }
        ];

        return (    
            <div class="UnitTable">
                <ReactTable
                    data={data}
                    columns={columns}
                />
            </div>
        )
    }
}