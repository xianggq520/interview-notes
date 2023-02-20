
JSONP是一种利用script标签可跨域

# server side

```php

<?php
$myJSON = '{ "name":"John", "age":30, "city":"New York" }';

echo "myFunc(".$myJSON.");";
?>

```

