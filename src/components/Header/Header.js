/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.scss';
import Link from '../Link';
import Navigation from '../Navigation';

function Header() {
  return (
    <header className={s.header}>
        <Navigation className={s.nav} />
        <div className={s.header_body}>
          <h1>Better baby products with less research</h1>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            A accusantium aliquid dolores eveniet facilis harum non
            obcaecati possimus vel voluptatum! Lorem ipsum dolor sit amet,
            consectetur adipisicing elit.
          </p>
          <span>Lorem ipsum dolor sit amet, consectetur adipisicing.</span>
          <input type="search" placeholder="What are you looking for" />
        </div>
    </header>

  );
}

export default withStyles(Header, s);
