# Accordion Material Design

## Install
    bower install saphyre-md-accordion

## Properties
```
md-accordion
    transclude
    multiple : '=' [To allow multiple items expanded at the same time]
    
    md-accordion-item
        transclude
        expanded : '=' [default = false]
        on-expand : '&' [expression to execute whenever the item is expanded]
        
        md-accordion-title
            transclude
            
        md-accordion-content
            transclude
```

## Usage
```
<md-accordion multiple="multiple">
    <md-accordion-item expanded="true">
        <md-accordion-title>This is one option</md-accordion-title>
        <md-accordion-content>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque aliquam finibus.
                Phasellus vestibulum feugiat felis quis mollis. Etiam elementum pellentesque ipsum at auctor.
                Pellentesque a nulla sit amet sapien vehicula rhoncus. Sed dignissim tempus ornare.
                Donec ac placerat dui. Cras gravida quam sit amet nulla gravida, eu porttitor risus.</p>
        </md-accordion-content>
    </md-accordion-item>
    <md-accordion-item>
        <md-accordion-title>This is another option</md-accordion-title>
        <md-accordion-content>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus blandit ex non justo tincidunt,
                sit amet varius enim tempus. Ut pharetra arcu vitae odio viverra condimentum. Maecenas suscipit,
                eros sed suscipit viverra, felis est vestibulum augue, ac porta ligula nunc quis mi. Proin ut elit
                magna. Sed pulvinar nulla velit.</p>
        </md-accordion-content>
    </md-accordion-item>
</md-accordion>
```

## License
MIT

## Author 
sergiofilhow@gmail.com