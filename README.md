### meteor-smartclient-demo

Meteor package that demonstrates the features of powerful javascript frontend library SmartClient developed by Isomorphic Software (http://smartclient.com).
This demo shows how to create list grid components and place them in Meteor templates by referring their html element id.

### Installation

```
meteor add metstrike:meteor-smartclient-demo
```
### Examples
![Screenshot](http://snag.gy/9OKUZ.jpg)

**Simle HTML page referring to two templates:**
```html
<head>
  <title>meteor-smartclient-demo</title>
</head>

<body>
<h1>Welcome to Meteor SmartClient Demo!</h1>

{{> meteorSmartclientDemoExample1}}

{{> meteorSmartclientDemoExample2}}

</body>
```
**Templates have to define unique element id:**
```html
<template name="meteorSmartclientDemoExample1">
<H3>Example1: Simple Grid</H3>
<div id="meteorSmartclientDemoExample1">
</div>
</template>

<template name="meteorSmartclientDemoExample2">
<H3>Example2: Simple Grid with Presorted Column 2</H3>
<div id="meteorSmartclientDemoExample2">
</div>
</template>
```
After templates are rendered create ListGrid components and place them to html elements associated with the templates: 
```js
		Template.meteorSmartclientDemoExample1.onRendered(function() {
	  		  isc.ListGrid.create({
				    ID: "countryList2",
				    htmlElement: "meteorSmartclientDemoExample1",
				    width:800, height:400, alternateRecordStyles:true,
				    data: countryData,
				    fields:[
				        {name:"countryName", title:"Country"},
				        {name:"capital", title:"Capital", showIf:"false"},
				        {name:"continent", title:"Continent"}
				    ],
				    canReorderFields: true
				})
		});

		Template.meteorSmartclientDemoExample2.onRendered(function() {
				ListGrid.create({
	  			    ID:"animalList3",
				    htmlElement: "meteorSmartclientDemoExample2",
	  			    data:animalsData,
	  			    sortFieldNum:2,
	  			    
	  			    fields:animalFields,
	  			    canReorderRecords:true,
	  			    width:800,
	  			    height:600,
	  			    alternateRecordStyles:true
	  			});
		});
```

### License

Released under the MIT license. See the LICENSE file for more info.

This package depends on metstrike:meteor-smartclient package which contains components of Smartclient library covered by LGPL. See https://github.com/metstrike/meteor-smartclient for more info.
