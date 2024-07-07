"use client"; // This is a client component 👈🏽
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const VerticalPills = ({ setActiveComponent }) => {
  const [orders, setOrders] = useState([
    { name: "Incoming purchase orders", value: "incoming_purchase_orders" },
    { name: "Orders sales", value: "orders_sales" },
    { name: "Invoices", value: "invoices" },
    { name: "Price strategies", value: "price_strategies" }
  ]);

  return (
    <div className="d-flex align-items-start">
      <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
        <button className="nav-link" id="v-pills-sales-tab" data-bs-toggle="pill" data-bs-target="#v-pills-sales" type="button" role="tab" aria-controls="v-pills-sales" aria-selected="true">Sales <FontAwesomeIcon icon={faChevronRight} /></button>
        <button className="nav-link" id="v-pills-production-tab" data-bs-toggle="pill" data-bs-target="#v-pills-production" type="button" role="tab" aria-controls="v-pills-production" aria-selected="false">Production <FontAwesomeIcon icon={faChevronRight} /></button>
        <button className="nav-link" id="v-pills-stock-tab" data-bs-toggle="pill" data-bs-target="#v-pills-stock" type="button" role="tab" aria-controls="v-pills-stock" aria-selected="false">Stock <FontAwesomeIcon icon={faChevronRight} /></button>
        <button className="nav-link" id="v-pills-procurement-tab" data-bs-toggle="pill" data-bs-target="#v-pills-procurement" type="button" role="tab" aria-controls="v-pills-procurement" aria-selected="false">Procurement <FontAwesomeIcon icon={faChevronRight} /></button>
        <button className="nav-link" id="v-pills-control-tab" data-bs-toggle="pill" data-bs-target="#v-pills-control" type="button" role="tab" aria-controls="v-pills-control" aria-selected="false">Quality control <FontAwesomeIcon icon={faChevronRight} /></button>
        <button className="nav-link" id="v-pills-crm-tab" data-bs-toggle="pill" data-bs-target="#v-pills-crm" type="button" role="tab" aria-controls="v-pills-crm" aria-selected="false">Crm</button>
        <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings <FontAwesomeIcon icon={faChevronRight} /></button>
        <button className="nav-link" id="v-pills-learn-tab" data-bs-toggle="pill" data-bs-target="#v-pills-learn" type="button" role="tab" aria-controls="v-pills-learn" aria-selected="false">Learn <FontAwesomeIcon icon={faChevronRight} /></button>
      </div>
      <div className="tab-content" id="v-pills-tabContent">
        <div className="tab-pane fade " id="v-pills-sales" role="tabpanel" aria-labelledby="v-pills-sales-tab">
          {orders.map(order => (
            <div className='list_order' key={order.value}>
              <button className="nav-link" type="button" onClick={() => setActiveComponent(order.value)}>
                {order.name}
              </button>
            </div>
          ))}
        </div>
        <div className="tab-pane fade" id="v-pills-production" role="tabpanel" aria-labelledby="v-pills-production-tab">.d..</div>
        <div className="tab-pane fade" id="v-pills-stock" role="tabpanel" aria-labelledby="v-pills-stock-tab">..t.</div>
        <div className="tab-pane fade" id="v-pills-procurement" role="tabpanel" aria-labelledby="v-pills-procurement-tab">.y..</div>
        <div className="tab-pane fade" id="v-pills-control" role="tabpanel" aria-labelledby="v-pills-control-tab">.y..</div>
        <div className="tab-pane fade" id="v-pills-crm" role="tabpanel" aria-labelledby="v-pills-crm-tab">.y..</div>
        <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">.y..</div>
        <div className="tab-pane fade" id="v-pills-learn" role="tabpanel" aria-labelledby="v-pills-learn-tab">.y..</div>
      </div>
    </div>
  );
};

export default VerticalPills;
