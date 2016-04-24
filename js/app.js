function PhoneDetailViewModel(data){
    this.name = ko.observable(data.name);
    this.description = ko.observable(data.description);
}

function PhoneListViewModel(data){
    this.id = ko.observable(data.id);
    this.name = ko.observable(data.name);
    this.imageUrl = ko.observable(data.imageUrl);
    this.snippet = ko.observable(data.snippet);
}

function ListViewModel(){
    var self = this;
    self.searchText = ko.observable('');
    self.orderProp = ko.observable('name');   
    self.phones = ko.observableArray([]);
    self.phoneDetail = ko.observable(null);
           
    self.filterPhones = ko.computed(function(){
        if (!self.searchText()){
            return self.phones();
        } else {
            return ko.utils.arrayFilter(self.phones(), function(phone){
                var filterText = self.searchText().toLowerCase();
                return phone.name().toLowerCase().indexOf(filterText) > -1 ||
                phone.snippet().toLowerCase().indexOf(filterText) > -1;
            })
        }
    });

    self.phoneCount = ko.computed(function(){
       return self.filterPhones().length;
    });
        
    self.querySummary = ko.computed(function(){
        if (self.searchText() != ''){
            return 'You searched for "' + self.searchText() + '"';            
        }
    });
    
    self.resultsSummary = ko.computed(function(){
        if (self.phoneCount() > 0){
            return 'Found ' + self.phoneCount() + ' results, sorted by '+ self.orderProp();
        } else {
            return 'No results found'
        }
    });
    
    self.pageTitle = ko.computed(function(){
        return 'Google Phone Gallery: ' + self.searchText();
    });
    
    self.backToList = function(){
        $('#phonedetail').hide();
        $('#phonelist').show();
    }
            
    $.getJSON("/phones/phones.json", function(allData) {
        var mappedPhones = $.map(allData, function(item) { return new PhoneListViewModel(item) });
        self.phones(mappedPhones);
    });
       
}

ko.applyBindings(new ListViewModel(), document.getElementsByTagName('html')[0]);