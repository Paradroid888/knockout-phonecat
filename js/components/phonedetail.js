define(['knockout'], function(ko, templateHtml){
        
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
        
        template: {require:'text!templates/phonedetail.html'}
    })
        
});