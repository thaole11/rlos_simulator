import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import BankingSystemPage from '../pages/BankingSystemPage';
import CustomerForm from '../pages/CustomerForm';
import CustomerSelectionPage from '../pages/CustomerSelectionPage';
import WorkWithCustomerPage from '../pages/WorkWithCustomerPage';
import CustomerCreditLinesPage from '../pages/CustomerCreditLinesPage';
import CustomerSublimitsPage from '../pages/CustomerSublimitsPage';
import NewAccountTypeSelectionPage from '../pages/NewAccountTypeSelectionPage';
import AccountsTiedToSublimitsPage from '../pages/AccountsTiedToSublimitsPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: React.createElement(NewAccountTypeSelectionPage),
  },
  {
    path: '/customer-form',
    element: React.createElement(CustomerForm),
  },
  {
    path: '/customer-selection',
    element: React.createElement(CustomerSelectionPage),
  },
  {
    path: '/work-with-customer',
    element: React.createElement(WorkWithCustomerPage),
  },
  {
    path: '/customer-credit-lines',
    element: React.createElement(CustomerCreditLinesPage),
  },
  {
    path: '/customer-sublimits',
    element: React.createElement(CustomerSublimitsPage),
  },
  {
    path: '/accounts-tied-to-sublimits',
    element: React.createElement(AccountsTiedToSublimitsPage),
  },
  {
    path: '/new-account-type-selection',
    element: React.createElement(NewAccountTypeSelectionPage),
  },
]);

export default router;