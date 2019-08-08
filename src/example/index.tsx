import * as React from "react";
import * as ReactDOM from "react-dom";
import { DatePicker, Checkbox } from "antd";
import { Form, Item } from "../";

import "antd/dist/antd.css";

const root = document.getElementById("root");

function App() {
  return (
    <Form>
      <Item label="名称" tip="这是提示" percent={50}>
        <input placeholder="名称" type="date" />
      </Item>
      <Item label="类别" percent={50}>
        <select>
          <option>一</option>
        </select>
      </Item>
      <Item label="测试" percent={50}>
        <input placeholder="测试" />
      </Item>
      <Item label="测试" percent={50}>
        <DatePicker placeholder="测试" />
      </Item>
      <Item label="测试" percent={50}>
        <input type="checkbox" placeholder="测试" />
      </Item>
      <Item label="测试" percent={50}>
        <Checkbox />
      </Item>
      <Item label={false}>
        <button>提交</button>
      </Item>
    </Form>
  );
}

ReactDOM.render(<App />, root);
