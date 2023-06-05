# Users

Collection name: `users`

### Fields

| Name              | Type       | Misc                                                                                                                                                                             | Nonempty/Nonfalsey                                         | Unique                                                     | System field                                               |
| ----------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `id`              | String     |                                                                                                                                                                                  | <input class="mdcheck" type="checkbox" checked disabled /> | <input class="mdcheck" type="checkbox" checked disabled /> | <input class="mdcheck" type="checkbox" checked disabled /> |
| `created`         | String     |                                                                                                                                                                                  | <input class="mdcheck" type="checkbox" checked disabled /> | <input class="mdcheck" type="checkbox" disabled />         | <input class="mdcheck" type="checkbox" checked disabled /> |
| `updated`         | String     |                                                                                                                                                                                  | <input class="mdcheck" type="checkbox" checked disabled /> | <input class="mdcheck" type="checkbox" disabled />         | <input class="mdcheck" type="checkbox" checked disabled /> |
| `username`        | String     |                                                                                                                                                                                  | <input class="mdcheck" type="checkbox" checked disabled /> | <input class="mdcheck" type="checkbox" checked disabled /> | <input class="mdcheck" type="checkbox" checked disabled /> |
| `email`           | String     |                                                                                                                                                                                  | <input class="mdcheck" type="checkbox" checked disabled /> | <input class="mdcheck" type="checkbox" disabled />         | <input class="mdcheck" type="checkbox" checked disabled /> |
| `emailVisibility` | Boolean    |                                                                                                                                                                                  | <input class="mdcheck" type="checkbox" disabled />         | <input class="mdcheck" type="checkbox" disabled />         | <input class="mdcheck" type="checkbox" checked disabled /> |
| `verified`        | Boolean    |                                                                                                                                                                                  | <input class="mdcheck" type="checkbox" disabled />         | <input class="mdcheck" type="checkbox" disabled />         | <input class="mdcheck" type="checkbox" checked disabled /> |
| `name`            | Plain text | Min length: 1                                                                                                                                                                    | <input class="mdcheck" type="checkbox" checked disabled /> | <input class="mdcheck" type="checkbox" disabled />         | <input class="mdcheck" type="checkbox" disabled />         |
| `avatar`          | File       | Max file size: 15MB<br />Max files: 1<br />Allowed mime types: `image/jpeg, image/jpg, image/png, image/svg+xml, image/gif`<br />Thumb sizes: `72x72, 120x120, 168x168, 240x240` | <input class="mdcheck" type="checkbox" checked disabled /> |                                                            | <input class="mdcheck" type="checkbox" disabled />         |
| `email_account`   | Bool       | If the user receives account update emails                                                                                                                                       | <input class="mdcheck" type="checkbox" disabled />         | <input class="mdcheck" type="checkbox" disabled />         | <input class="mdcheck" type="checkbox" disabled />         |
| `emails_updates`  | Bool       | If the user receives site update emails                                                                                                                                          | <input class="mdcheck" type="checkbox" disabled />         | <input class="mdcheck" type="checkbox" disabled />         | <input class="mdcheck" type="checkbox" disabled />         |
| `isAdmin`         | Bool       | If the user is an admin                                                                                                                                                          | <input class="mdcheck" type="checkbox" disabled />         | <input class="mdcheck" type="checkbox" disabled />         | <input class="mdcheck" type="checkbox" disabled />         |

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
      ```
      ```
    </td>
  </tr>
  <tr>
    <td>Update rule</td>
    <td markdown>
      ```css
      @request.auth.id = id ||
      (
        @request.auth.isAdmin = true &&
        @request.data.id:isset = false &&
        @request.data.emailVisibility:isset = false &&
        @request.data.verified:isset = false &&
        @request.data.emails_account:isset = false &&
        @request.data.emails_updates:isset = false &&
        @request.data.isAdmin:isset = false
      )
      ```
    </td>
  </tr>
  <tr>
    <td>Delete rule</td>
    <td markdown>
      ```css
      @request.auth.id = id ||
      ( @request.auth.isAdmin = true &&
        isAdmin = false
      )
      ```
    </td>
  </tr>
  <tr>
    <td>Manage rule</td>
    <td>
      Admin Only
    </td>
  </tr>
</table>

### Options

#### Auth methods

- Username/Password
  - Enabled: True
- Email/Password
  - Enabled: True
  - Except domains: N/A
  - Only domains: N/A
- OAuth2
  - Enabled: True

#### General

- Minimum password length: 8
- Always require email: True
