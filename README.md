neat-tip-js
===========

An easy using jquery plugin to display tip

![ScreenShot](https://raw.github.com/liufan/neat-tip-js/master/neat-tip.png)

Markup:
_______
```html

<!DOCTYPE html>
<html>
<head>
    <title>Neat tip demo</title>
    <link type="text/css" rel="stylesheet" href="neat-tip.css">
    <script src="../jquery.js"></script>
    <script src="neat-tip.js"></script>
</head>
<body>

<a href="javascript:showtip()" id="show-tip-action" style="position:absolute;top:200px;left: 200px;margin: 20px;display: inline-block">Show tip</a>
</body>
<script>
    function showtip(){
        $.showTip($('#show-tip-action'), 'hello, there top',{
            position:'top',
            color:'red'
        });
        $.showTip($('#show-tip-action'), 'hello, there right',{
            position:'right',
            color:'blue',
            closeAfter:3
        });
        $.showTip($('#show-tip-action'), 'hello, there bottom',{
            position:'bottom',
            color:'yellow',
            closeAfter:4
        });
        $.showTip($('#show-tip-action'), 'hello, there left',{
            position:'left',
            color:'green',
            closeAfter:5
        });
    }
</script>
</html>

```

Usage:
______
```javascript
    function showtip(){
        $.showTip($('#show-tip-action'), 'hello, there top',{
            position:'top',
            color:'red'
        });
        $.showTip($('#show-tip-action'), 'hello, there right',{
            position:'right',
            color:'blue',
            closeAfter:3
        });
        $.showTip($('#show-tip-action'), 'hello, there bottom',{
            position:'bottom',
            color:'yellow',
            closeAfter:4
        });
        $.showTip($('#show-tip-action'), 'hello, there left',{
            position:'left',
            color:'green',
            closeAfter:5
        });
    }

```
