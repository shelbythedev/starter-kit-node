import './index.css'
import * as Sentry from '@sentry/browser'
import { Integrations } from '@sentry/tracing'

Sentry.init({
  dsn: 'https://bad854de90ba482fa5931cb2a2339869@o441837.ingest.sentry.io/5412644',
  integrations: [
    new Integrations.BrowserTracing(),
  ],
  tracesSampleRate: 1.0,
})
