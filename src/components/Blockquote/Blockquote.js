import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Icon from '../Icon';

import {
  iconCheckmark,
  iconWarning,
  iconWarningSolid,
  iconInfoSolid,
} from '@wfp/icons';

const iconLookup = {
  warning: {
    icon: iconWarning,
  },
  error: {
    icon: iconWarningSolid,
  },
  info: {
    icon: iconInfoSolid,
  },
  success: {
    icon: iconCheckmark,
  },
};

class Blockquote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  toggleBlockquote = () => {
    this.setState({ open: !this.state.open });
  };

  /*showInnerHtml = content => {
    return { __html: content };
  };*/

  render() {
    const {
      className,
      contentClassName,
      children,
      error,
      style,
      title,
      toggleable,
      icon,
      //innerHtml,
      light,
      code,
      warning,
      withIcon,
      info,
      kind,
    } = this.props;
    const blockquoteClass = classNames({
      'wfp--blockquote': true,
      'wfp--blockquote--toggleable': toggleable === true,
      'wfp--blockquote--light': light,
      'wfp--blockquote--code': code,
      'wfp--blockquote--no-content': !children,
      'wfp--blockquote--error': kind === 'error' || error,
      'wfp--blockquote--warning': kind === 'warning' || warning,
      'wfp--blockquote--success': kind === 'success',
      'wfp--blockquote--info': kind === 'info' || info,
      'wfp--blockquote--with-icon': withIcon || icon,
      'wfp--blockquote--open': this.state.open,
      [`${className}`]: className,
    });

    const blockquoteContentClass = classNames('wfp--blockquote__content', {
      [`${className}`]: contentClassName,
    });

    // @deprecated Only kind is allowed
    const lookup =
      warning || kind === 'warning'
        ? iconLookup['warning']
        : error || kind === 'error'
        ? iconLookup['error']
        : kind === 'success'
        ? iconLookup['success']
        : iconLookup['info'];

    const iconElement = React.isValidElement(icon) ? (
      <div className="wfp--blockquote__icon wfp--blockquote__icon--custom">
        {icon}
      </div>
    ) : withIcon || icon ? (
      <Icon
        icon={icon ? icon : lookup.icon}
        description="Blockquote Icon"
        className="wfp--blockquote__icon"
        height="30"
        width="30"
      />
    ) : null;

    return (
      <div className={blockquoteClass}>
        {iconElement}
        <div className={blockquoteContentClass} style={style}>
          {title && (
            <div
              onClick={this.toggleBlockquote}
              onKeyDown={this.toggleBlockquote}
              className="wfp--blockquote__title"
              role="button"
              tabIndex={0}>
              {title}
            </div>
          )}
          {children}
          {/*innerHtml && (
            <div
              role="complementary"
              dangerouslySetInnerHTML={this.showInnerHtml(innerHtml)}
            />
          )*/}
        </div>
      </div>
    );
  }
}

Blockquote.propTypes = {
  /**
   * Specify a className of your `Blockquote`
   */
  className: PropTypes.string,
  /**
   * Specify a className of the inner Blockquote content
   */
  children: PropTypes.string,
  /**
   * Specify the content of your `Blockquote`
   */
  children: PropTypes.node,
  /**
   * Show content formated as code
   */
  code: PropTypes.bool,
  /**
   * Display content as `dangerouslySetInnerHTML` content
   */
  //innerHtml: PropTypes.string,
  /**
   * Display light version of Blockquote
   */
  light: PropTypes.bool,
  /**
   * Show options to show and hide the Blockquote
   */
  toogleable: PropTypes.bool,
  /**
   * Show title for Blockquote
   */
  title: PropTypes.node,
  /**
   * Specify the type of your Blockquote Options are `light` `code` `error` `warning` `info`
   */
  kind: PropTypes.oneOf[('info', 'warning', 'error', 'success')],
  /**
   * Specify if an Icon should be displayed
   */
  withIcon: PropTypes.bool,
  /**
   * Specify a custom icon. Can be either a `Icon` object or React component
   */
  icon: PropTypes.oneOfType([PropTypes.node, PropTypes.object]),
};

export default Blockquote;
