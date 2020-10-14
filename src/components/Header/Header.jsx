import React from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'antd';
import { Link } from 'gatsby';

import headerStyles from './header.module.less';

const Header = () => {
  return (
    <header className={`header header-top-transparent ${headerStyles.header}`}>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </header>
  );
};

Header.propTypes = {

};
Header.defaultProps = {

};

export default Header;
