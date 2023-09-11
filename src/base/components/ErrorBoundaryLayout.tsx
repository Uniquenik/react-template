import { ErrorBoundary } from 'react-error-boundary';
import { Outlet } from 'react-router-dom';

import ClientErrorScreen from 'screens/client-error/ClientErrorScreen';

export const ErrorBoundaryLayout = () => (
  <ErrorBoundary
    resetKeys={[window.location.pathname]}
    fallbackRender={({ error, resetErrorBoundary }) => (
      <ClientErrorScreen error={error} onHandleReload={resetErrorBoundary} />
    )}
  >
    <Outlet />
  </ErrorBoundary>
);
