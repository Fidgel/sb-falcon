import React from 'react';
import {CardSlide} from './CardSlide';

export default {
    component: CardSlide,
    title: 'CardSlide',
}

const Template = (args) => <CardSlide {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {},
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};