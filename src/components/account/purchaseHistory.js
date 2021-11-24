import React, { Component } from "react";

import PageTitle from "../pageTitle";

class PurchaseHistory extends Component {
  render() {
    return (
      <div className='purchase-history'>
        <PageTitle className='purchase-history__page-title' title='Purchases' />
      </div>
    );
  }
}

export default PurchaseHistory;
