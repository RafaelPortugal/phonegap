function LeftMenu($scope) {
    $scope.itens = [
        {href: '#page1', title: 'Page 1', status: 'active'},
        {href: '#page2', title: 'Page 2', status: 'deactive'},
        {href: '#page3', title: 'Page 3', status: 'deactive'}
    ];

    $scope.activeMenu = function(item) {
    	angular.forEach($scope.itens, function(i) {
    		i.status = 'deactive';
    	});
    	item.status = 'active';
    }
}