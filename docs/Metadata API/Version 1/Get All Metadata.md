# Get All Metadata

Returns an array of each season's metadata.

```typescript title="TypeScript"
import TUAA from "tuaa"; // (1)

const tuaa = new TUAA();

const metadata = await tuaa.v1.getallmetadata();
```

1. The latest version of the `tuaa` package only supports v3 of the API. Please use `tuaa@<3.0.0`.

!!! get

    ```
    https://unusann.us/api/v1/getallmetadata
    ```

## Example response:

```json title="JSON"
[
  [
    ...Metadata // (1)
  ],
  [
    ...Metadata // (2)
  ]
]
```

1. [Reference](../../Reference/Metadata/index.md)
2. [Reference](../../Reference/Metadata/index.md)
