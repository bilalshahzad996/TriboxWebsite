// Every product that has its own page. Like the service pages, each one is routed in App.jsx,
// prerendered by entry-server.jsx and laid out by components/ServicePage.jsx. To add one: create
// its data file, list it here, link it in the Products menu (components/Navbar.jsx) and add it to
// public/sitemap.xml.
import { hrmsAppPage } from './hrmsApp'
import { posBusinessCentralPage } from './posBusinessCentral'
import { posFinanceOperationsPage } from './posFinanceOperations'
import { sisAppPage } from './sisApp'

// Same order as the Products menu
export const productPages = [posBusinessCentralPage, posFinanceOperationsPage, sisAppPage, hrmsAppPage]
