# off2json
Convert .off file content to json.

`npm install off2json --save`

## Example

```
OFF
#  cube.off
#  A cube

8 6 12
1.0   0.0   1.0
0.0   1.0   1.0
-1.0   0.0   1.0
0.0  -1.0   1.0
1.0   0.0  -1.0
0.0   1.0  -1.0
-1.0   0.0  -1.0
0.0  -1.0  -1.0
4  0 1 2 3
4  7 4 0 3
4  4 5 1 0
4  5 6 2 1
4  3 2 6 7
4  6 5 4 7
```

Read the off file as a string.

```javascript
var off2json = require('off2json');

var cubeData = off2json(file_contents);
```

`cubeData` should equal:

```javascript
{
  vertices: [
    [1.0, 0.0, 1.0],
    [0.0, 1.0, 1.0],
    [-1.0, 0.0, 1.0],
    ...
  ],
  faces: [
    [0, 1, 2, 3],
    [7, 4, 0, 3],
    [4, 5, 1, 0],
    ...
  ]
}
```