import React from 'react';

import {render, fireEvent} from '@testing-library/react';
import * as rtl from 'react-testing-library';
import HiddenMessage from '../hidden-message';
import App from './App';

it("renders hello world", () => {
  const { queryByText } = render(<App />);
  expect(queryByText(/hello world/i)).not.toBeNull();
});


