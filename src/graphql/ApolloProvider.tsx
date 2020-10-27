import React from 'react';
import { ApolloProvider as Provider } from '@apollo/client';
import PropTypes from 'prop-types';
import client from './client';

type IProps = { children: React.ReactNode };

const ApolloProvider: React.FC<IProps> = ({ children }) => {
  return <Provider client={client}>{children}</Provider>;
};

ApolloProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ApolloProvider;
