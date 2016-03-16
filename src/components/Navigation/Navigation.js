/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Navigation.scss';
import Link from '../Link';

function Navigation({ className }) {
  return (
    <nav className={cx(s.root, className)} role="navigation">
      <div className={s.container}>
        <Link className={s.logo} to="/">
          <img src={require('./logo.png')} width="38" height="38" alt="React" />
        </Link>
        <ul>
          <li>
            <Link className={s.link} to="/about">About</Link>
          </li>
          <li>
            <Link className={s.link} to="/about">About</Link>
          </li>
          <li>
            <Link className={s.link} to="/about">About</Link>
          </li>
          <li>
            <Link className={s.link} to="/about">About</Link>
          </li>
          <li>
            <Link className={s.link} to="/about">About</Link>
          </li>
          <li>
            <Link className={s.link} to="/about">About</Link>
          </li>
          <li>
            <Link className={s.link} to="/about">About</Link>
          </li>
        </ul>
        </div>
    </nav>
  );
}

Navigation.propTypes = {
  className: PropTypes.string,
};

export default withStyles(Navigation, s);
