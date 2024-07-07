import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes, faDownload } from '@fortawesome/free-solid-svg-icons';
import { CSVLink } from 'react-csv';

const columns = [
  { field: 'order', headerName: 'Order', width: 150 },
  { field: 'custoumerpro', headerName: 'Custoumer pro', width: 150 },
  { field: 'custoumer', headerName: 'Custoumer', width: 150 },
  { field: 'facility', headerName: 'Facility', width: 150 },
  { field: 'salesperson', headerName: 'Sales person', width: 150 },
  {
    field: 'status',
    headerName: 'Status',
    width: 150,
    renderCell: (params) => (
      <div>
        {params.value === 'Paid' && (
          <span className='Paid'>
            <b>{params.value}</b>
          </span>
        )}
        {params.value === 'Open' && (
          <span className='Open'>
            <b>{params.value}</b>
          </span>
        )}
          {params.value === 'Drafet' && (
          <span className='Drafet'>
            <b>{params.value}</b>
          </span>
        )}
      </div>
    )
  },
  { field: 'orderDate', headerName: 'Order Date', width: 150 },
  { field: 'shipDate', headerName: 'Ship Date', width: 150 },
  { field: 'deliverDate', headerName: 'Deliver Date', width: 150 },
  { field: 'Balance', headerName: 'Line Item', width: 150 },
];

const activeRows = [
  { id: 1, order: 'SO-3450', custoumerpro: '43678953', custoumer: 'Sidewail Lcc', facility: 'Main facility', salesperson: 'Mahdi gamoudi', status: 'Paid', orderDate: '2024-07-01', shipDate: '2024-07-02', deliverDate: '2024-07-03', Balance: '$ 9430.60' },
  { id: 2, order: 'SO-3455', custoumerpro: '43678957', custoumer: 'Lcc', facility: 'Main facility', salesperson: 'Lina lazono', status: 'Open', orderDate: '2024-07-01', shipDate: '2024-07-02', deliverDate: '2024-07-03', Balance: '$ 9430.60' },
  { id: 3, order: 'SO-3455', custoumerpro: '43678957', custoumer: 'Lcc', facility: 'Main facility', salesperson: 'TEST4', status: 'Drafet', orderDate: '2024-05-01', shipDate: '2024-06-02', deliverDate: '2024-07-03', Balance: '$ 9430.60' },
  // Add more active rows as needed
];

const archivedRows = [
  { id: 3, order: 'SO-5050', custoumerpro: '43678999', custoumer: 'Sidewail Lcc', facility: 'MainT facility', salesperson: 'Test1', status: 'Paid', orderDate: '2024-01-01', shipDate: '2024-07-02', deliverDate: '2024-07-03', Balance: '$ 9430.60' },
  { id: 4, order: 'SO-2055', custoumerpro: '43678911', custoumer: 'LccS', facility: 'MainS facility', salesperson: 'Test2', status: 'Open', orderDate: '2024-10-01', shipDate: '', deliverDate: '2024-07-03', Balance: '' },
  // Add more archived rows as needed
];

export default function Invoices() {
  const [searchValue, setSearchValue] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleFilterChange = (event) => {
    setActiveFilter(event.target.value);
  };

  const handleResetFilters = () => {
    setSearchValue('');
    setActiveFilter('all');
  };

  const filteredRows = activeRows.filter(row => {
    if (activeFilter !== 'all' && row.status !== activeFilter) {
      return false;
    }

    if (searchValue) {
      return (
        row.custoumer.toLowerCase().includes(searchValue.toLowerCase()) ||
        row.facility.toLowerCase().includes(searchValue.toLowerCase()) ||
        row.custoumerpro.toLowerCase().includes(searchValue.toLowerCase()) ||
        row.status.toLowerCase().includes(searchValue.toLowerCase()) ||
        row.salesperson.toLowerCase().includes(searchValue.toLowerCase()) ||
        row.orderDate.toLowerCase().includes(searchValue.toLowerCase()) ||
        row.shipDate.toLowerCase().includes(searchValue.toLowerCase()) ||
        row.deliverDate.toLowerCase().includes(searchValue.toLowerCase()) ||
       
        row.Balance.toLowerCase().includes(searchValue.toLowerCase())
      );
    }

    return true;
  });
  const csvData = filteredRows.map(row => ({
    custoumer: row.custoumer,
    facility: row.facility,
    custoumerpro: row.custoumerpro,
    salesperson: row.salesperson,
    'Order Date': row.orderDate,
    'Ship Date': row.shipDate,
    'Deliver Date': row.deliverDate,
    'Line Item': row.Balance,
  }));
  return (
    <div id="PurchaseOrders" className="p-4">
      <h1 className="titre d-flex justify-start align-item-start">
        <b> Invoices </b>
      </h1>
      <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="pills-home-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-home"
            type="button"
            role="tab"
            aria-controls="pills-home"
            aria-selected="true"
          >
            Active
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="pills-archived-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-archived"
            type="button"
            role="tab"
            aria-controls="pills-archived"
            aria-selected="false"
          >
            Archived
          </button>
        </li>
      </ul>
      <div className="tab-content" id="pills-tabContent">
        <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
          <div className="filters-container mb-3 d-flex justify-start align-items-center ">
            <div className="input-group_1 me-3 ">
              <label className='opacity-0'>Status</label>
              <div className="input-group">
                <input
                  type="text"
                  value={searchValue}
                  onChange={handleSearchChange}
                  placeholder="Type to search..."
                  className="form-control "
                />
                <span className="input-group-text">
                  <FontAwesomeIcon icon={faSearch} />
                </span>
              </div>
            </div>
            <div className="input-group_1 me-3 ">
              <label className='d-block'>Customer</label>
              <div className="input-group">
                <input
                  type="text"
                  value={searchValue}
                  onChange={handleSearchChange}
                  placeholder="All"
                  className="form-control "
                />
                <span onClick={handleResetFilters} className="input-group-text"> <FontAwesomeIcon icon={faTimes} /></span>
              </div>
          </div>     
             <div className="input-group_1 me-3 ">
              <label className='d-block'>Status</label>
              <div className="input-group ">
            <select
              value={activeFilter}
              onChange={handleFilterChange}
              className="form-control"
            >
              <option value="all">All</option>
              <option value="paid">Paid</option>
              <option value="open">Open</option>
              <option value="Drafet">Drafet</option>
            </select>
            {activeFilter && (
     
            <span  onClick={handleResetFilters} className="input-group-text"> <FontAwesomeIcon icon={faTimes} /></span>
      )}
          </div>
          </div>
  
    
          </div>
          <div className='btn-csv'>
            <CSVLink
              data={csvData}
              filename={'filtered_data.csv'}
              className="btn btn-primary ms-auto"
            >
              <FontAwesomeIcon icon={faDownload} />   Export
            </CSVLink>
          </div>
          <div style={{ height: 400, width: '100%' }}>
            <DataGrid
              rows={filteredRows}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 5 },
                },
              }}
              pageSizeOptions={[5, 10]}
            />
          </div>
        </div>
        <div className="tab-pane fade" id="pills-archived" role="tabpanel" aria-labelledby="pills-archived-tab">
          <div style={{ height: 400, width: '100%' }}>
            <DataGrid
              rows={archivedRows}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              disableSelectionOnClick
            />
          </div>
        </div>
      </div>
    </div>
  );
}
