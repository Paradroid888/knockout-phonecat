ko.components.register('phonedetail', {
    viewModel: function(params){
        var self = this;
        self.phone = params.phone;
        self.selectedImageUrl = ko.observable('');

        self.phone.subscribe(function(newPhone){
            self.selectedImageUrl(newPhone.images()[0]);
        });        
            
        self.setImage = function(data, event){
            self.selectedImageUrl(data);
        };
        
        self.largeImageUrl = ko.computed(function(){
            return self.selectedImageUrl();
        });
        
        self.cameraFeatures = ko.computed(function(){
            if (self.phone()){
                return self.phone().camera.features().join(', ');
            }
        })
        
    },
    
    template: `
    
    <div data-bind="with: phone">

    <img data-bind="attr: {src: $parent.selectedImageUrl}" class="phone">
    
    <h1 data-bind="text: name"></h1>
    <p data-bind="text: description">desc</p>

    <ul class="phone-thumbs" data-bind="foreach: images">
      <li>
        <img data-bind="attr: {src: $data}, click:$parents[1].setImage">
      </li>
    </ul>

    <ul class="specs">
      <li>
        <span>Availability and Networks</span>
        <dl>
          <dt>Availability</dt>
          <!-- ko foreach: availability -->
          <dd data-bind="text: $data"></dd>
          <!-- /ko -->
        </dl>
      </li>
      <li>
        <span>Battery</span>
        <dl>
          <dt>Type</dt>
          <dd data-bind="text: battery.type"></dd>
          <dt>Talk Time</dt>
          <dd data-bind="text: battery.talkTime"></dd>
          <dt>Standby time (max)</dt>
          <dd data-bind="text: battery.standbyTime"></dd>
        </dl>
      </li>
      <li>
        <span>Storage and Memory</span>
        <dl>
          <dt>RAM</dt>
          <dd data-bind="text: storage.ram"></dd>
          <dt>Internal Storage</dt>
          <dd data-bind="text: storage.flash"></dd>
        </dl>
      </li>
      <li>
        <span>Connectivity</span>
        <dl>
          <dt>Network Support</dt>
          <dd data-bind="text: connectivity.cell"></dd>
          <dt>WiFi</dt>
          <dd data-bind="text: connectivity.wifi"></dd>
          <dt>Bluetooth</dt>
          <dd data-bind="text: connectivity.bluetooth"></dd>
          <dt>Infrared</dt>
          <dd><checkmark params="value: connectivity.infrared"></checkmark></dd>
          <dt>GPS</dt>
          <dd><checkmark params="value: connectivity.gps"></checkmark></dd>
        </dl>
      </li>
      <li>
        <span>Android</span>
        <dl>
          <dt>OS Version</dt>
          <dd data-bind="text: android.os"></dd>
          <dt>UI</dt>
          <dd data-bind="text: android.ui"></dd>
        </dl>
      </li>
      <li>
        <span>Size and Weight</span>
        <dl>
          <dt>Dimensions</dt>
          <!-- ko foreach: sizeAndWeight.dimensions -->
          <dd data-bind="text:$data"></dd>
          <!-- /ko -->          
          <dt>Weight</dt>
          <dd data-bind="text: sizeAndWeight.weight">{{phone.sizeAndWeight.weight}}</dd>
        </dl>
      </li>
      <li>
        <span>Display</span>
        <dl>
          <dt>Screen size</dt>
          <dd data-bind="text: display.screenSize">{{phone.display.screenSize}}</dd>
          <dt>Screen resolution</dt>
          <dd data-bind="text: display.screenResolution">{{phone.display.screenResolution}}</dd>
          <dt>Touch screen</dt>
          <dd><checkmark params="value: display.touchScreen"></checkmark></dd>
        </dl>
      </li>
      <li>
        <span>Hardware</span>
        <dl>
          <dt>CPU</dt>
          <dd data-bind="text: hardware.cpu">{{phone.hardware.cpu}}</dd>
          <dt>USB</dt>
          <dd data-bind="text: hardware.usb">{{phone.hardware.usb}}</dd>
          <dt>Audio / headphone jack</dt>
          <dd data-bind="text: hardware.audioJack">{{phone.hardware.audioJack}}</dd>
          <dt>FM Radio</dt>
          <dd><checkmark params="value: hardware.fmRadio"></checkmark></dd>
          <dt>Accelerometer</dt>
          <dd><checkmark params="value: hardware.accelerometer"></checkmark></dd>
        </dl>
      </li>
      <li>
        <span>Camera</span>
        <dl>
          <dt>Primary</dt>
          <dd data-bind="text: camera.primary"></dd>
          <dt>Features</dt>
          <dd data-bind="text: $parent.cameraFeatures"></dd>
        </dl>
      </li>
      <li>
        <span>Additional Features</span>
        <dd data-bind="text: additionalFeatures">{{phone.additionalFeatures}}</dd>
      </li>
    </ul>
    </div>
    `
})