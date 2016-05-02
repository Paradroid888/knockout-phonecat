define(['knockout', 'knockout-mapping'], function(ko, templateHtml){

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
        
        template: {require:'text!templates/phonelist.html'}
    });
    
});