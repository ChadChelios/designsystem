import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import Button from '../Button';

export default class FormControls extends React.Component {
  static propTypes = {
    /**
     * Specify the text to be read by screen-readers when visiting the <Tabs>
     * component
     */
    className: PropTypes.string,
    onNextClick: PropTypes.func,
    nextDisabled: PropTypes.bool,
    nextIcon: PropTypes.string,
    nextHidden: PropTypes.bool,
    nextText: PropTypes.node,
    onPreviousClick: PropTypes.func,
    previousDisabled: PropTypes.bool,
    previousIcon: PropTypes.string,
    previousHidden: PropTypes.bool,
    previousText: PropTypes.node,
    onSubmitClick: PropTypes.func,
    submitDisabled: PropTypes.bool,
    submitIcon: PropTypes.string,
    submitHidden: PropTypes.bool,
    submitText: PropTypes.node,
  };

  static defaultProps = {
    nextIcon: 'arrow--right',
    nextText: 'Next',
    previousIcon: 'arrow--left',
    previousText: 'Previous',
    submitText: 'Submit',
  };

  render() {
    const {
      className,
      onNextClick,
      nextDisabled,
      nextIcon,
      nextHidden,
      nextText,
      onPreviousClick,
      previousDisabled,
      previousIcon,
      previousHidden,
      previousText,
      onSubmitClick,
      submitDisabled,
      submitIcon,
      submitHidden,
      submitText,
    } = this.props;

    const formControlsClasses = classNames('wfp--form-controls', className);

    return (
      <div className={formControlsClasses}>
        <div className="wfp--form-controls__steps">
          {!previousHidden && (
            <Button
              disabled={previousDisabled}
              kind="secondary"
              className="wfp--form-controls__prev"
              icon={previousIcon}
              onClick={onPreviousClick}>
              {previousText}
            </Button>
          )}
          {!nextHidden && (
            <Button
              disabled={nextDisabled}
              kind="secondary"
              className="wfp--form-controls__next"
              icon={nextIcon}
              type="submit"
              onClick={onNextClick}>
              {nextText}
            </Button>
          )}
        </div>
        <div>
          {!submitHidden && (
            <Button
              disabled={submitDisabled}
              type="submit"
              className="next"
              icon={submitIcon}
              onClick={onSubmitClick}>
              {submitText}
            </Button>
          )}
        </div>
      </div>
    );
  }
}
