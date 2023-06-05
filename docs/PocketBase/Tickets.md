# Tickets

Collection name: `tickets`

### Fields

| Name            | Type       | Misc                                                                                                                                               | Nonempty/Nonfalsey                                         | Unique                                                     |
| --------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `op`            | Relation   | Collection: [`users`](./Users.md)<br />Relation type: Single<br />Cascade delete: False                                                            | <input class="mdcheck" type="checkbox" checked disabled /> | <input class="mdcheck" type="checkbox" disabled />         |
| `added_users`   | Relation   | Collection: [`users`](./Users.md)<br />Relation type: Multiple<br />Min select: None<br />Max select: None<br />Cascade delete: False              | <input class="mdcheck" type="checkbox" disabled />         | <input class="mdcheck" type="checkbox" disabled />         |
| `title`         | Plain text |                                                                                                                                                    | <input class="mdcheck" type="checkbox" checked disabled /> | <input class="mdcheck" type="checkbox" disabled />         |
| `tags`          | Relation   | Collection: [`ticket_tags`](./Ticket%20Tags.md)<br />Relation type: Multiple<br />Min select: None<br />Max select: None<br />Cascade delete: True | <input class="mdcheck" type="checkbox" disabled />         | <input class="mdcheck" type="checkbox" disabled />         |
| `public_ticket` | Bool       | If the ticket is public or not                                                                                                                     | <input class="mdcheck" type="checkbox" disabled />         | <input class="mdcheck" type="checkbox" disabled />         |
| `edited`        | Bool       | If the ticket has been edited                                                                                                                      | <input class="mdcheck" type="checkbox" disabled />         | <input class="mdcheck" type="checkbox" disabled />         |
| `number`        | Number     | Min: 1                                                                                                                                             | <input class="mdcheck" type="checkbox" checked disabled /> | <input class="mdcheck" type="checkbox" checked disabled /> |
| `closed`        | Bool       |                                                                                                                                                    | <input class="mdcheck" type="checkbox" disabled />         | <input class="mdcheck" type="checkbox" disabled />         |
| `rich_text`     | JSON       |                                                                                                                                                    | <input class="mdcheck" type="checkbox" checked disabled /> | <input class="mdcheck" type="checkbox" disabled />         |

## Permissions

<table>
  <tr>
    <th>Name</th>
    <th>Rule</th>
  </tr>
  <tr>
    <td>List/Search rule</td>
    <td markdown>
      ```
      ```
    </td>
  </tr>
  <tr>
    <td>View rule</td>
    <td markdown>
      ```
      ```
    </td>
  </tr>
  <tr>
    <td>Create rule</td>
    <td markdown>
      ```css
      @request.auth.id = op.id &&
      @request.data.closed:isset = false &&
      @request.data.edited:isset = false &&
      (
        public_ticket = true ||
        added_users:length > 0
      )
      ```
    </td>
  </tr>
  <tr>
    <td>Update rule</td>
    <td markdown>
      ```css
      (
        (
          @request.auth.id = op.id &&
          edited = true
        ) || @request.auth.isAdmin = true
      ) &&
      (
        public_ticket = true ||
        added_users:length > 0
      )
      ```
    </td>
  </tr>
  <tr>
    <td>Delete rule</td>
    <td markdown>
      ```css
      @request.auth.id = op.id ||
      @request.auth.isAdmin = true
      ```
    </td>
  </tr>
</table>
