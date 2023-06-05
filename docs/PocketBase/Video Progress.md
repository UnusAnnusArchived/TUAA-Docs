# Video Progress

Collection name: `video_progress`

## Fields

| Name      | Type       | Misc                                                                                   | Nonempty/Nonfalsey                                         | Unique                                             |
| --------- | ---------- | -------------------------------------------------------------------------------------- | ---------------------------------------------------------- | -------------------------------------------------- |
| `user`    | Relation   | Collection: [`users`](./Users.md)<br />Relation type: Single<br />Cascade delete: True | <input class="mdcheck" type="checkbox" checked disabled /> | <input class="mdcheck" type="checkbox" disabled /> |
| `video`   | Plain text |                                                                                        | <input class="mdcheck" type="checkbox" checked disabled /> | <input class="mdcheck" type="checkbox" disabled /> |
| `seconds` | Number     |                                                                                        | <input class="mdcheck" type="checkbox" checked disabled /> | <input class="mdcheck" type="checkbox" disabled /> |

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
      @request.auth.id = user.id
      ```
    </td>
  </tr>
  <tr>
    <td>View rule</td>
    <td markdown>
      ```css
      @request.auth.id = user.id
      ```
    </td>
  </tr>
  <tr>
    <td>Create rule</td>
    <td markdown>
      ```css
      @request.auth.id = user.id
      ```
    </td>
  </tr>
  <tr>
    <td>Update rule</td>
    <td markdown>
      ```css
      @request.auth.id = user.id &&
      @request.data.video = video
      ```
    </td>
  </tr>
  <tr>
    <td>Delete rule</td>
    <td markdown>
      ```css
      @request.auth.id = user
      ```
    </td>
  </tr>
</table>
