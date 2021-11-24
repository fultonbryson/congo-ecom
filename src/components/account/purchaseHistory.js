import React, { Component } from "react";

import PageTitle from "../pageTitle";
import Purchases from "./purchases";
import PurchaseDetail from "./purchase-detail";

class PurchaseHistory extends Component {
  render() {
    return (
      <div className='purchase-history'>
        <PageTitle className='purchase-history__page-title' title='Purchases' />
        <Purchases className='purchase-history__purchases' />
        <PurchaseDetail className='purchase-history__detail' />
        <div className='purchase-history__border-bottom' />
      </div>
    );
  }
}

export default PurchaseHistory;
