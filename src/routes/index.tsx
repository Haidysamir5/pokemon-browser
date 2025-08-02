import React from 'react';
import { Routes as ReactDomRoutes, Route, Outlet } from 'react-router-dom';
import Layout from '../components/Layout';
import routers from './routers';

export default function Routes() {
  return (
    <ReactDomRoutes>
      <Route path="*" element={<p>404 Not Found</p>} />
      <Route
        element={
          <Layout>
            <Outlet />
          </Layout>
        }
      >
        {routers.map((router) => (
          <Route
            key={router.path}
            path={router.path}
            element={router.element}
          />
        ))}
      </Route>
    </ReactDomRoutes>
  );
}
