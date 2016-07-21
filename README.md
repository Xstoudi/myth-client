# MythClient

A client-side Myth transpiler.

Client-side transpiler is the fastest way to get started for developing with Myth but this feature isn't offered by the basic Myth module. So here it is.

Please notice this client-side transpiler is good for development, but a server-sider transpiler is far better in production.

## How to use

Just include the Myth file like another stylesheet but replace the `rel` attribute to `stylesheet/less`:

```css
<link rel="stylesheet/myth" type="text/css" href="style.css" />
```

After this, download the MythClient script and include it with a `<script>` tag in the head element:

```css
<script src="https://raw.githubusercontent.com/Xstoudi/MythClient/master/dist/mythclient.min.js" type="text/javascript"></script>
```