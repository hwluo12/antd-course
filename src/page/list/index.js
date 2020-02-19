import React from "react";
import { connect } from "dva";
import { Table, Modal, Button, Form, Input } from "antd";

const namespace = "cards";
const FormItem = Form.Item;

const mapStateToProps = state => {
  return {
    cardsList: state[namespace].cardsList,
    cardsLoading: state.loading.effects[`${namespace}/queryList`]
  };
};

@Form.create()
@connect(mapStateToProps)
class List extends React.Component {
  state = {
    visible: false
  };

  columns = [
    {
      title: "名称",
      dataIndex: "name"
    },
    {
      title: "描述",
      dataIndex: "desc"
    },
    {
      title: "链接",
      dataIndex: "url",
      render(value) {
        return <a href={value}>{value}</a>;
      }
    }
  ];

  componentDidMount() {
    this.props.dispatch({
      type: `${namespace}/queryList`
    });
  }

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleCancel = () => {
    this.setState({
      visible: false
    });
  };

  handleOk = () => {
    console.log(this.props);
    const {
      dispatch,
      form: { validateFields }
    } = this.props;

    validateFields((err, values) => {
      if (!err) {
        dispatch({
          type: `${namespace}/addOne`,
          payload: values
        });
        this.setState({ visible: false });
      }
    });
  };

  render() {
    const { visible } = this.state;
    const {
      cardsList,
      cardsLoading,
      form: { getFieldDecorator }
    } = this.props;
    return (
      <div>
        <Table
          columns={this.columns}
          dataSource={cardsList}
          loading={cardsLoading}
          rowKey="id"
        ></Table>
        <Button onClick={this.showModal}>新建</Button>
        <Modal
          title="新建记录"
          visible={visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Form>
            <FormItem label="名称">
              {getFieldDecorator("name", {
                rules: [{ required: true }]
              })(<Input />)}
            </FormItem>
            <FormItem label="描述">
              {getFieldDecorator("desc")(<Input />)}
            </FormItem>
            <FormItem label="链接">
              {getFieldDecorator("url", {
                rules: [{ type: "url" }]
              })(<Input />)}
            </FormItem>
          </Form>
        </Modal>
      </div>
    );
  }
}

export default List;
