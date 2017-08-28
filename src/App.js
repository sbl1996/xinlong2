import React from 'react';
import { jsonServerRestClient, Admin, Resource, Delete } from 'admin-on-rest';

import { ProductsList, ProductCreate, ProductUpdate } from './products';

import { GodownEntriesList, GodownEntryCreate } from './godownEntries'

import getMuiTheme from 'material-ui/styles/getMuiTheme';

import chineseMessages from 'aor-language-chinese';

const messages = {
  cn: chineseMessages,
};

const myTheme = {
  fontFamily: "Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Noto Sans CJK SC,WenQuanYi Micro Hei,Arial,sans-serif",
}

const App = () => (
  <Admin
    restClient={jsonServerRestClient('http://localhost:5000')}
    title='鑫隆超市管理系统'
    locale='cn'
    messages={messages}
    theme={getMuiTheme(myTheme)}
  >
    <Resource
      name="products"
      list={ProductsList}
      create={ProductCreate}
      remove={Delete}
      edit={ProductUpdate}
      options={{label: '商品信息'}}
    />
    <Resource
      name="godown-entries"
      list={GodownEntriesList}
      create={GodownEntryCreate}
      options={{label: '入库管理'}}
    />
  </Admin>
);

export default App;