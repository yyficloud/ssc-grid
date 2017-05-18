import React, { Component, PropTypes } from 'react';

import { FormControl } from 'react-bootstrap';

/**
 * 控件(control/widget)分类
 * Command input: Button, Drop-down list, ...
 * Data input-output: Checkbox Color picker Combo box Cycle button Date Picker Grid view List box List builder Radio button Scrollbar Search box Slider Spinner Text box
 * 来源：https://en.wikipedia.org/wiki/Widget_(GUI)
 * 第二来源：https://docs.joomla.org/Standard_form_field_types
 * Joomla的名称和Web更贴切，wikipedia不区分Web还是Client
 */

/**
 * 文本框控件 (uncontrolled)
 */
class TextField extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: props.value
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    // 只有当值改变的情况下才会更新状态
    if (nextProps.value !== this.props.value) {
      this.setState({
        value: nextProps.value
      });
    }
  }

  handleChange(event) {
    const { value } = event.target;

    this.setState({ value });

    if (this.props.onChange) {
      this.props.onChange(event);
    }
  }

  handleBlur(event) {
    if (this.props.onBlur) {
      this.props.onBlur(event);
    }
  }

  handleFocus(event) {
    if (this.props.onFocus) {
      this.props.onFocus(event);
    }
  }

  render() {
    return (
      <FormControl
        type="text"
        value={this.state.value}
        disabled={this.props.disabled === true}
        placeholder={this.props.placeholder}
        onChange={this.handleChange}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
      />
    );
  }
}

TextField.propTypes = {
  /**
   * 是否禁用输入框
   */
  disabled: PropTypes.bool,
  /**
   * 当光标离开输入框
   */
  onBlur: PropTypes.func,
  /**
   * 当文本框内容被修改时候调用
   */
  onChange: PropTypes.func,
  /**
   * 当文本框被聚焦
   */
  onFocus: PropTypes.func,
  /**
   * 文本框占位字符
   */
  placeholder: PropTypes.string,
  /**
   * 文本框中显示的值
   * TODO `value`应该改为`defaultValue`，类似于默认的`input`组件区分`value`和
   * `defaultValue`一样，使用`defaultValue`说明该组件是uncontrolled
   */
  value: PropTypes.string,
};

TextField.defaultProps = {
  value: ''
};

export default TextField;
