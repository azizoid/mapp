import React from 'react'
import { ICustomer } from "./assets/interfaces"

type TContext = {
  customers: ICustomer[];
  setCustomers?: any
}

export const AppContext = React.createContext<TContext>({
  customers: []
})