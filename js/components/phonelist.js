ko.components.register('phonelist', {
    viewModel: function(params){

        this.phones = params.phones;
        
        this.viewDetail = function(data, event){
            var dataUrl = '/phones/' + data.id() + '.json';
                    
            $.getJSON(dataUrl, function(data) {
                $('#phonelist').hide();
                var phone = ko.mapping.fromJS(data);
                params.phone(phone);
                $('#phonedetail').show();
            });        
        };        
    },
    
    template: `<ul class="phones" data-bind="foreach: phones">
          <li class="thumbnail" data-bind="click: $parent.viewDetail">
            <a href="#/phones/phone.id" class="thumb"><img data-bind="attr: {src: imageUrl}"></a>
            <a href="#/phones/phone.id" data-bind="text: name"></a>
            <p data-bind="text: snippet"></p>
          </li>
        </ul>`
});

