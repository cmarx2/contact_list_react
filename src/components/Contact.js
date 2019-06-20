import React from 'react';
import { Button, Table, } from 'semantic-ui-react';

const Contact =  ({firstName, phone, id, remove }) =>(
  <Table.Row id={id}>
  <Table.Cell>{firstName}</Table.Cell>
  <Table.Cell>{phone}</Table.Cell>
  <Table.Cell>
    <Button color="blue" onClick={() => remove(id) }>
      Delete
    </Button>
  </Table.Cell>
</Table.Row> 
)


export default Contact;