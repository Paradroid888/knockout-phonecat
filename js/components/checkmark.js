ko.components.register('checkmark', {
    viewModel: function(params){
        self = this;
        self.value = params.value;
        self.templateCharacter = ko.computed(function(){
            return self.value() ? '\u2713' : '\u2718';
        })
    },
    
    template: '<span data-bind="text: templateCharacter">x</span>'
    
})