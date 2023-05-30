# Get Season Metadata

Returns a list of the specified season's metadata.

```typescript title="TypeScript"
import TUAA from "tuaa"; // (1)

const tuaa = new TUAA();

const specials = await tuaa.v2.metadata.season.s00();
const season1 = await tuaa.v2.metadata.season.s01();
```

1. The latest version of the `tuaa` package only supports v3 of the API. Please use `tuaa@<3.0.0`.

!!! get

    ```
    https://unusann.us/api/v2/metadata/season/{season}
    ```

    ## Parameters
    | Name     | Type     | Required                                                   | Accepted Values |
    | ---------| ---------| ---------------------------------------------------------- | --------------- |
    | `season` | `String` | <input class="mdcheck" type="checkbox" checked disabled /> | `s00` or `s01`  |

## Example response:

```json title="JSON"
[
  ...Metadata // (1)
]
```

1. [Reference](../../Reference/Metadata/index.md)
