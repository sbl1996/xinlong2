import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  Create,
  SimpleForm,
  TextInput,
  NumberInput,
  required,
  DateField,
  DateInput,
} from 'admin-on-rest';

import EmbeddedManyInput from './EmbeddedManyInput'

const idLabel = 'ID'
const entryDateLabel = '入库日期'
const transactorLabel = '经办人'
const remarkLabel = '备注'

export const GodownEntriesList = (props) => (
    <List {...props} title="入库记录">
        <Datagrid>
            <TextField source="id" label={idLabel} />
            <DateField source="entryDate" label={entryDateLabel} />
            <TextField source="transactor" label={transactorLabel} sortable={false} />
            <TextField source="remark" label={remarkLabel} sortable={false} />
        </Datagrid>
    </List>
);

export const GodownEntryCreate = (props) => (
  <Create {...props} title="商品入库">
    <SimpleForm>
      <EmbeddedManyInput source="items">
          <TextInput source="productID" label="商品编号" parse={v => Number.parseInt(v, 10)} foramt={v => '' + v}/>
          <NumberInput source="amount" label="数量"/>
          <NumberInput source="purchasePrice" label="采购价"/>
      </EmbeddedManyInput>
      <DateInput source="entryDate" label={entryDateLabel} validate={required} parse={dateParse} format={dateFormat} />
      <TextInput source="transactor" label={transactorLabel} validate={required} />
      <TextInput source="remark" label={remarkLabel} />
    </SimpleForm>
  </Create>
)

const dateParse = (v) => {
  if (!(v instanceof Date) || isNaN(v)) return
  return v.getTime()
}

const dateFormat = (v) => {
  if (!v) return
  return new Date(v)
}

/*const ItemsInput = () => (
  <FieldArray name="items" component={renderItems} />
)

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} type={type} placeholder={label}/>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)

const renderItems = ({ items }) => (
  <ul>
    <li>
      <button type="button" onClick={() => items.push({})}>增加入库项</button>
    </li>
    {items.map((item, index) =>
      <li key={index}>
        <Field
          name={`${item}.productID`}
          type="text"
          component={renderField}
          label="商品编号"
        />
        <Field
          name={`${item}.amount`}
          type="number"
          component={renderField}
          label="数量"
        />
        <Field
          name={`${item}.purchasePrice`}
          type="number"
          component={renderField}
          label="采购价"
        />
      </li>
    )}
  </ul> 
)*/