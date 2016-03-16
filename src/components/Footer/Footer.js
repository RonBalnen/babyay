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
import s from './Footer.scss';
import Link from '../Link';

function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <h2>Trending Items</h2>
        <div className={s.items_wrapper}>
          <div className={s.item}>
            <div className={s.img_wrapper}>
              <img src={require('./logo.png')} alt="logo" />
            </div>
            <a href="#">Lorem ipsum dolor sit amet.</a>
            <div className={s.rating}>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
              <span>(2134)</span>
            </div>
          </div>
          <div className={s.item}>
            <div className={s.img_wrapper}>
              <img src={require('./logo.png')} alt="logo" />
            </div>
            <a href="#">Lorem ipsum dolor sit amet.</a>
            <div className={s.rating}>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
              <span>(2134)</span>
            </div>
          </div>
          <div className={s.item}>
            <div className={s.img_wrapper}>
              <img src={require('./logo.png')} alt="logo" />
            </div>
            <a href="#">Lorem ipsum dolor sit amet.</a>
            <div className={s.rating}>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
              <span>(2134)</span>
            </div>
          </div>
          <div className={s.item}>
            <div className={s.img_wrapper}>
              <img src={require('./logo.png')} alt="logo" />
            </div>
            <a href="#">Lorem ipsum dolor sit amet.</a>
            <div className={s.rating}>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
              <span>(2134)</span>
            </div>
          </div>
          <div className={s.item}>
            <div className={s.img_wrapper}>
              <img src={require('./logo.png')} alt="logo" />
            </div>
            <a href="#">Lorem ipsum dolor sit amet.</a>
            <div className={s.rating}>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
              <span>(2134)</span>
            </div>
          </div>
          <div className={s.item}>
            <div className={s.img_wrapper}>
              <img src={require('./logo.png')} alt="logo" />
            </div>
            <a href="#">Lorem ipsum dolor sit amet.</a>
            <div className={s.rating}>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
              <span>(2134)</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default withStyles(Footer, s);
