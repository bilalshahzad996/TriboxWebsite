// Every service that has its own page. Each one is routed in App.jsx, prerendered by
// entry-server.jsx and laid out by components/ServicePage.jsx. To add a page: create its data
// file, list it here, set `page` on the service in data/site.js, and add it to public/sitemap.xml.
import { bcPage } from './businessCentral'
import { crmPage } from './crm'
import { eInvoicingPage } from './eInvoicing'
import { financeOperationsPage } from './financeOperations'
import { mobileAppsPage } from './mobileApps'
import { odooPage } from './odoo'
import { webAppsPage } from './webApps'

// Same order as the services in data/site.js
export const servicePages = [financeOperationsPage, bcPage, crmPage, odooPage, mobileAppsPage, webAppsPage, eInvoicingPage]
