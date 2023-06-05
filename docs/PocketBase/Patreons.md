# Patreons

Collection name: `patreons`

### Fields

| Name     | Type       | Misc                                                      | Nonempty/Nonfalsey                                         | Unique                                                     |
| -------- | ---------- | --------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `name`   | Plain text |                                                           | <input class="mdcheck" type="checkbox" checked disabled /> | <input class="mdcheck" type="checkbox" checked disabled /> |
| `pfp`    | File       | Max file size: 10MB<br /> Thumb sizes: `100x100, 200x200` | <input class="mdcheck" type="checkbox" checked disabled /> |                                                            |
| `since`  | DateTime   |                                                           | <input class="mdcheck" type="checkbox" checked disabled /> | <input class="mdcheck" type="checkbox" disabled />         |
| `amount` | Plain text | Min length: 2                                             | <input class="mdcheck" type="checkbox" checked disabled /> | <input class="mdcheck" type="checkbox" disabled />         |
| `show`   | Bool       |                                                           | <input class="mdcheck" type="checkbox" disabled />         | <input class="mdcheck" type="checkbox" disabled />         |

## Permissions

<table>
  <tr>
    <th>Name</th>
    <th>Rule</th>
  </tr>
  <tr>
    <td>List/Search rule</td>
    <td markdown>
      ```css
      show = true
      ```
    </td>
  </tr>
  <tr>
    <td>View rule</td>
    <td markdown>
      ```css
      show = true
      ```
    </td>
  </tr>
  <tr>
    <td>Create rule</td>
    <td>
      Admin Only
    </td>
  </tr>
  <tr>
    <td>Update rule</td>
    <td>
      Admin Only
    </td>
  </tr>
  <tr>
    <td>Delete rule</td>
    <td>
      Admin Only
    </td>
  </tr>
</table>
