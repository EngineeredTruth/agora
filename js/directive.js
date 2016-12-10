app.directive('navBar', () => {
        return {
            restrict: 'E',
            templateUrl: '../templates/nav-bar.html',
            controller: 'NavCtrl',
            link: function(scope, element, attributes) {
                var scroll_start = 0;
                var startchange = $('#header');
                var offset = startchange.offset();
                $(document).scroll(function() {
                    scroll_start = $(this).scrollTop();
                    if (scroll_start > offset.top) {
                        $('#header').css('background-color', 'rgba(34,34,34,0.9)');
                    } else {
                        $('#header').css('background-color', 'transparent');
                    }
                });
            }
        }
    })
    .directive('navBarBlack', () => {
        return {
            restrict: 'E',
            templateUrl: '../templates/nav-bar-black.html',
        }
    })
