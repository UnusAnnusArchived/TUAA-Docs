# Comments

| Name       | Type       | Misc                                                                                          | Nonempty/Nonfalsey                                         | Unique                                             |
| ---------- | ---------- | --------------------------------------------------------------------------------------------- | ---------------------------------------------------------- | -------------------------------------------------- |
| `episode`  | Plain text | Min length: 8<br />Max length: 8                                                              | <input class="mdcheck" type="checkbox" checked disabled /> | <input class="mdcheck" type="checkbox" disabled /> |
| `markdown` | Plain text | Max length: 1000                                                                              | <input class="mdcheck" type="checkbox" checked disabled /> | <input class="mdcheck" type="checkbox" disabled /> |
| `user`     | Relation   | Collection: users<br />Relation type: Single<br />Delete main record on relation delete: True | <input class="mdcheck" type="checkbox" checked disabled /> | <input class="mdcheck" type="checkbox" disabled /> |
| `isEdited` | Bool       |                                                                                               | <input class="mdcheck" type="checkbox" disabled />         | <input class="mdcheck" type="checkbox" disabled /> |

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
        asdf
      ```
    </td>
  </tr>
</table>
| Name             | Rule                                                                   |
| ---------------- | ---------------------------------------------------------------------- |
| List/Search rule | `@request.auth.id = user.id && (@request.data.isEdited:isset = false)` |
| View rule        |                                                                        |
| Create rule      |                                                                        |
| Update rule      |                                                                        |
| Delete rule      |                                                                        |
