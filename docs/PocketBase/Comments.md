# Comments

Collection name: `comments`

### Fields

| Name       | Type       | Misc                                                                                   | Nonempty/Nonfalsey                                         | Unique                                             |
| ---------- | ---------- | -------------------------------------------------------------------------------------- | ---------------------------------------------------------- | -------------------------------------------------- |
| `episode`  | Plain text | Min length: 8<br />Max length: 8                                                       | <input class="mdcheck" type="checkbox" checked disabled /> | <input class="mdcheck" type="checkbox" disabled /> |
| `markdown` | Plain text | Max length: 1000                                                                       | <input class="mdcheck" type="checkbox" checked disabled /> | <input class="mdcheck" type="checkbox" disabled /> |
| `user`     | Relation   | Collection: [`users`](./Users.md)<br />Relation type: Single<br />Cascade delete: True | <input class="mdcheck" type="checkbox" checked disabled /> | <input class="mdcheck" type="checkbox" disabled /> |
| `isEdited` | Bool       |                                                                                        | <input class="mdcheck" type="checkbox" disabled />         | <input class="mdcheck" type="checkbox" disabled /> |

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
      @request.auth.id = user.id &&
      (@request.data.isEdited:isset = false)
      ```
    </td>
  </tr>
  <tr>
    <td>Update rule</td>
    <td markdown>
      ```css
      (
        @request.auth.id = user.id &&
        @request.data.isEdited = true
      ) ||
      user.isAdmin = true
      ```
    </td>
  </tr>
  <tr>
    <td>Delete rule</td>
    <td markdown>
      ```css
      @request.auth.id = user.id ||
      user.isAdmin = true
      ```
    </td>
  </tr>
</table>
