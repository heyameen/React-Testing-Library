import { render, screen } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';
import FollowersList from '../FollowersList';
import React from 'react';

const MockFollowersList = ()  => {
    return (
        <BrowserRouter>
            <FollowersList/>
        </BrowserRouter>
    )
}

describe('FollowersList', () => {  
  it('should render follower items', async () => {
    render(<MockFollowersList/>);
    const followerDivElement = await screen.findByTestId("follower-item-0");
    expect(followerDivElement).toBeInTheDocument();
  });
  
//   it('should render multiple follower items', async () => {
//     render(<MockFollowersList/>);
//     const followersDivElement = await screen.findAllByTestId(/follower-item/i);
//     expect(followersDivElement.length).toBe(5);
//   });
})