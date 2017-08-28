import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  Create,
  SimpleForm,
  TextInput,
  NumberInput,
  Edit,
  DisabledInput,
  EditButton,
  SelectInput,
  SelectField,
  required,
} from 'admin-on-rest';

const idLabel = 'ID'
const nameLabel = '名称'
const retailPriceLabel = '零售价'
const categoryLabel = '类目'
const barcodeLabel = '条码'
const specificationLabel = '规格'

const categories = [
  { id: "副食", name: "副食" },
  { id: "酒水", name: "酒水" },
  { id: "调料", name: "调料" },
  { id: "饼干", name: "饼干" },
  { id: "纸品", name: "纸品" },
  { id: "日杂", name: "日杂" },
  { id: "特产", name: "特产" },
  { id: "化妆品", name: "化妆品" },
  { id: "其他", name: "其他" },
]

export const ProductsList = (props) => (
    <List {...props} title="商品列表">
        <Datagrid>
            <TextField source="id" label={idLabel} />
            <TextField source="barcode" label={barcodeLabel} sortable={false}/>
            <TextField source="name" label={nameLabel} sortable={false}/>
            <TextField source="specification" label={specificationLabel} sortable={false}/>
            <TextField source="retailPrice" label={retailPriceLabel} />
            <SelectField source="category" choices={categories} label={categoryLabel} sortable={false}/>
            <EditButton />
        </Datagrid>
    </List>
);

export const ProductCreate = (props) => (
  <Create {...props} title="增加商品">
    <SimpleForm>
      <TextInput source="barcode" label={barcodeLabel} validate={required} />
      <TextInput source="name" label={nameLabel} validate={required} />
      <TextInput source="specification" label={specificationLabel} />
      <NumberInput source="retailPrice" label={retailPriceLabel} validate={required} />
      <SelectInput source="category" choices={categories} label={categoryLabel} validate={required} />
    </SimpleForm>
  </Create>
)

export const ProductUpdate = (props) => (
  <Edit {...props} title="修改商品信息">
    <SimpleForm>
      <DisabledInput source="id" label={idLabel} />
      <TextInput source="barcode" label={barcodeLabel} validate={required} />
      <TextInput source="name" label={nameLabel} validate={required} />
      <TextInput source="specification" label={specificationLabel} />
      <NumberInput source="retailPrice" label={retailPriceLabel} validate={required} />
      <SelectInput source="category" choices={categories} label={categoryLabel} validate={required} />
    </SimpleForm>
  </Edit>
)