# Ticket Tags

Collection name: `ticket_tags`

### Fields

| Name           | Type       | Misc                                                                                               | Nonempty/Nonfalsey                                         | Unique                                                     |
| -------------- | ---------- | -------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `name`         | Plain text |                                                                                                    | <input class="mdcheck" type="checkbox" checked disabled /> | <input class="mdcheck" type="checkbox" checked disabled /> |
| `color`        | Plain text | Min length: 4<br />Max length: 8<br /><a href="https://regexr.com/7el86" target="_blank">Regex</a> | <input class="mdcheck" type="checkbox" checked disabled /> | <input class="mdcheck" type="checkbox" disabled />         |
| `display_name` | Plain text |                                                                                                    | <input class="mdcheck" type="checkbox" checked disabled /> | <input class="mdcheck" type="checkbox" checked disabled /> |

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
