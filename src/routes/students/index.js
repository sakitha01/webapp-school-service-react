/**
 * Users Routes
 */
/* eslint-disable */
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

// async components
import {
    AsyncUsersListComponent,
    AsyncUserProfileComponent,
    AsyncUserProfile1Component,
    AsyncStudentManagementComponent
} from 'Components/AsyncComponent/AsyncComponent';

const Forms = ({ match }) => (
    <div className="content-wrapper">
        <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/students-management`} />
            <Route path={`${match.url}/user-profile`} component={AsyncUserProfileComponent} />
            <Route path={`${match.url}/user-list`} component={AsyncUsersListComponent} />
            <Route path={`${match.url}/user-profile-1`} component={AsyncUserProfile1Component} />
            <Route path={`${match.url}/students-management`} component={AsyncStudentManagementComponent} />
        </Switch>
    </div>
);

export default Forms;
