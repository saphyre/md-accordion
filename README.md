Accordion Material Design

md-accordion
    transclude
    multiple : '='
    
    md-accordion-item
        transclude
        title : '@'
        expanded : '='
        on-expand : '&'

```
<md-accordion multiple="multiple">
    <md-accordion-item expanded="true" title="This is one option">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque aliquam finibus.
            Phasellus vestibulum feugiat felis quis mollis. Etiam elementum pellentesque ipsum at auctor.
            Pellentesque a nulla sit amet sapien vehicula rhoncus. Sed dignissim tempus ornare.
            Donec ac placerat dui. Cras gravida quam sit amet nulla gravida, eu porttitor risus.</p>
    </md-accordion-item>
    <md-accordion-item title="This is another option">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus blandit ex non justo tincidunt,
            sit amet varius enim tempus. Ut pharetra arcu vitae odio viverra condimentum. Maecenas suscipit,
            eros sed suscipit viverra, felis est vestibulum augue, ac porta ligula nunc quis mi. Proin ut elit
            magna. Sed pulvinar nulla velit.</p>
    </md-accordion-item>
</md-accordion>
```

License MIT
Author sergiofilhow@gmail.com