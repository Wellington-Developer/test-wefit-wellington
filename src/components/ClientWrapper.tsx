'use client';

import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/styles/global/Theme';

interface ClientWrapperProps {
  children: React.ReactNode;
}

const ClientWrapper: React.FC<ClientWrapperProps> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ClientWrapper;