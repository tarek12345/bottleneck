import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faDownload } from '@fortawesome/free-solid-svg-icons';
import { CSVLink } from 'react-csv';

const columns = [
  { field: 'name', headerName: 'Name', width: 200 },
  { field: 'createddate', headerName: 'Created date', width: 200 },

];

const activeRows = [];


export default function PriceStrategies() {
  const [searchValue, setSearchValue] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };


  const filteredRows = activeRows.filter(row => {
    if (activeFilter !== 'all' && row.status !== activeFilter) {
      return false;
    }

    if (searchValue) {
      return (
        row.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        row.createddate.toLowerCase().includes(searchValue.toLowerCase())
      );
    }

    return true;
  });
  const csvData = filteredRows.map(row => ({
    'Deliver Date': row.createddate,
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
      </ul>
      <div className="tab-content" id="pills-tabContent">
        <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
          <div className="filters-container mb-3 d-flex justify-start align-items-center ">

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
      </div>
    </div>
  );
}
