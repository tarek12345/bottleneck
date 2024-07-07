import React, { useState } from 'react';
import VerticalPills from './VerticalPills';
import IncomingPurchaseOrders from '@/pages/list_sales/IncomingPurchaseOrders';
import OrdersSales from '@/pages/list_sales/OrdersSales';
import Invoices from '@/pages/list_sales/Invoices';
import PriceStrategies from '@/pages/list_sales/PriceStrategies';

const Dashboard = () => {
  const [activeComponent, setActiveComponent] = useState(null);

  const renderContent = () => {
    switch (activeComponent) {
      case 'incoming_purchase_orders':
        return <IncomingPurchaseOrders />;
      case 'orders_sales':
        return <OrdersSales />;
      case 'invoices':
        return <Invoices />;
      case 'price_strategies':
        return <PriceStrategies />;
      default:
        return <IncomingPurchaseOrders />;
    }
  };

  return (
    <div className='d-flex justify-start align-items-start gap-10'>
      <div id="sidebar">
        <VerticalPills setActiveComponent={setActiveComponent} />
      </div>
      <div id="content_right">
        {renderContent()}
      </div>
    </div>
  );
};

export default Dashboard;
