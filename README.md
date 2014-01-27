<h1>iOS7 Select Element Override</h1>
The purpose of this plugin is to override the necessity to click 'close' or 'done" after choosing an option via iOS7's default select element functionality on iPhone and iPad (see screenshot below). The option is provided to either sniff out the OS (via getOS()) or, if such functionality isn't your cup of tea, override the default by setting a max width.<br /><br />In order to override the native functionality, the option elements must be wrapped in an optgroup. In case you're populating select elements dynamically (and, in turn, removing the optgroup wrappers added by init()), the class 'iOS_select' is added to all select elements so you've got a selector to target for manually reapplying optgroups<br /><br />
<img src="http://cdn.css-tricks.com/wp-content/uploads/2011/07/iphoneselect.png" />
<br />
&mdash; Luke Whyte (http://lukeallanwhyte.com), 2014