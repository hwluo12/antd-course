import React from "react";
import { connect } from "dva";
import { Table } from "antd";

const namespace = "cards";

const mapStateToProps = state => {
  return {
    cardsList: state[namespace].cardsList,
    cardsLoading: state.loading.effects[`${namespace}/queryList`]
  };
};

@connect(mapStateToProps)
class List extends React.Component {
  componentDidMount() {
    this.props.dispatch({
      type: `${namespace}/queryList`
    });
  }

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

  render() {
    const { cardsList, cardsLoading } = this.props;
    return (
      <div>
        <Table
          columns={this.columns}
          dataSource={cardsList}
          loading={cardsLoading}
          rowKey="id"
        ></Table>
      </div>
    );
  }
}

export default List;
