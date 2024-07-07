import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes ,faDownload } from '@fortawesome/free-solid-svg-icons';
import { CSVLink } from 'react-csv';

const columns = [
  { field: 'order', headerName: 'Order', width: 190 },
  { field: 'owner', headerName: 'Owner', width: 190 },
  { 
    field: 'status', 
    headerName: 'Status', 
    width: 150, 
    renderCell: (params) => (
      <div>
        {params.value === 'Completed' && (
          <span className='completed'>
            <b>{params.value}</b>
          </span>
        )}
        {params.value === 'Approved' && (
          <span className='approved'> 
            <b>{params.value}</b>
          </span>
        )}
      </div>
    )
  },
  { field: 'orderDate', headerName: 'Order Date', width: 190 },
  { field: 'shipDate', headerName: 'Ship Date', width: 190 },
  { field: 'deliverDate', headerName: 'Deliver Date', width: 190 },
  { field: 'lineItem', headerName: 'Line Item', width: 190 },
];

const activeRows = [
  { id: 1, order: '1', owner: 'Owner 1', status: 'Completed', orderDate: '2024-07-01', shipDate: '2024-07-02', deliverDate: '2024-07-03', lineItem: 'Item 1' },
  { id: 2, order: '2', owner: 'Owner 2', status: 'Approved', orderDate: '2024-07-04', shipDate: '2024-07-05', deliverDate: '2024-07-06', lineItem: 'Item 2' },
  { id: 3, order: '3', owner: 'Owner 3', status: 'Approved', orderDate: '2024-07-04', shipDate: '2024-07-05', deliverDate: '2024-07-06', lineItem: 'Item 3' },
  { id: 4, order: '4', owner: 'Owner 4', status: 'Completed', orderDate: '2024-07-04', shipDate: '2024-07-05', deliverDate: '2024-07-06', lineItem: 'Item 4' },
  { id: 5, order: '5', owner: 'Owner 5', status: 'Approved', orderDate: '2024-07-04', shipDate: '2024-07-05', deliverDate: '2024-07-06', lineItem: 'Item 5' },
  { id: 6, order: '6', owner: 'Owner 6', status: 'Completed', orderDate: '2024-07-04', shipDate: '2024-07-05', deliverDate: '2024-07-06', lineItem: 'Item 6' },
  { id: 7, order: '7', owner: 'Owner 7', status: 'Approved', orderDate: '2024-07-07', shipDate: '2024-07-05', deliverDate: '2024-07-06', lineItem: 'Item 7' },
  { id: 8, order: '8', owner: 'Owner 8', status: 'Completed', orderDate: '2024-07-04', shipDate: '2024-07-05', deliverDate: '2024-07-06', lineItem: 'Item 8' },
  { id: 9, order: '9', owner: 'Owner 9', status: 'Approved', orderDate: '2024-07-04', shipDate: '2024-07-05', deliverDate: '2024-07-06', lineItem: 'Item 9' },
  { id: 10, order: '10', owner: 'Owner 10', status: 'Completed', orderDate: '2024-07-04', shipDate: '2024-07-05', deliverDate: '2024-07-06', lineItem: 'Item 10' },
  { id: 11, order: '11', owner: 'Owner 11', status: 'Approved', orderDate: '2024-07-04', shipDate: '2024-07-05', deliverDate: '2024-07-06', lineItem: 'Item 11' },
  // Add more active rows as needed
];

const archivedRows = [
  { id: 1, order: 'Order 3', owner: 'Owner 3', status: 'Delivered', orderDate: '2024-06-01', shipDate: '2024-06-02', deliverDate: '2024-06-03', lineItem: 'Item 3' },
  { id: 2, order: 'Order 4', owner: 'Owner 4', status: 'Delivered', orderDate: '2024-06-04', shipDate: '2024-06-05', deliverDate: '2024-06-06', lineItem: 'Item 4' },
  // Add more archived rows as needed
];

export default function IncomingPurchaseOrders() {
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
        row.owner.toLowerCase().includes(searchValue.toLowerCase()) ||
        row.order.toLowerCase().includes(searchValue.toLowerCase()) ||
        row.status.toLowerCase().includes(searchValue.toLowerCase()) ||
        row.orderDate.toLowerCase().includes(searchValue.toLowerCase()) ||
        row.shipDate.toLowerCase().includes(searchValue.toLowerCase()) ||
        row.deliverDate.toLowerCase().includes(searchValue.toLowerCase()) ||
        row.lineItem.toLowerCase().includes(searchValue.toLowerCase())
      );
    }

    return true;
  });
  const csvData = filteredRows.map(row => ({
    Order: row.order,
    Owner: row.owner,
    Status: row.status,
    'Order Date': row.orderDate,
    'Ship Date': row.shipDate,
    'Deliver Date': row.deliverDate,
    'Line Item': row.lineItem,
  }));
  return (
    <div id="PurchaseOrders" className="p-4">
      <h1 className="titre d-flex justify-start align-item-start">
        <b>Incoming Purchase Orders</b>
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
          <div className="input-group me-3">
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
<div className="input-group ">
            <select
              value={activeFilter}
              onChange={handleFilterChange}
              className="form-control"
            >
              <option value="all">All</option>
              <option value="Approved">Approved</option>
              <option value="Completed">Completed</option>
            </select>
            {activeFilter && (
     
            <span  onClick={handleResetFilters} className="input-group-text"> <FontAwesomeIcon icon={faTimes} /></span>
      )}
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
