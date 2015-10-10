System.register(['aurelia-framework', 'aurelia-fetch-client', 'aurelia-router'], function (_export) {
  'use strict';

  var inject, HttpClient, activationStrategy, Welcome;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
    }, function (_aureliaFetchClient) {
      HttpClient = _aureliaFetchClient.HttpClient;
    }, function (_aureliaRouter) {
      activationStrategy = _aureliaRouter.activationStrategy;
    }],
    execute: function () {
      Welcome = (function () {
        function Welcome(http) {
          _classCallCheck(this, _Welcome);

          this.http = http;
          this.categories = ['', 'Bahasa', 'Biologi', 'Fisika', 'IPA-SD', 'IPS', 'IPS-SD', 'Kimia', 'Komputer', 'Matematika', 'Lainnya'];
          this.obj = this.categories.reduce(function (o, v, i) {
            o[i] = v;
            return o;
          }, {});
          this.count = this.categories.length;
        }

        _createClass(Welcome, [{
          key: 'activate',
          value: function activate(params) {
            var _this = this;

            params.id = typeof params.id === 'undefined' ? 1 : params.id;
            this.http.fetch("categories/" + params.id + ".json").then(function (response) {
              return response.json();
            }).then(function (mnemonics) {
              return _this.mnemonics = mnemonics;
            });
          }
        }, {
          key: 'determineActivationStrategy',
          value: function determineActivationStrategy() {
            return activationStrategy.replace;
          }
        }]);

        var _Welcome = Welcome;
        Welcome = inject(HttpClient)(Welcome) || Welcome;
        return Welcome;
      })();

      _export('Welcome', Welcome);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGVnb3JpZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OzhDQUthLE9BQU87Ozs7Ozs7O2lDQUxaLE1BQU07O3VDQUNOLFVBQVU7OzBDQUNWLGtCQUFrQjs7O0FBR2IsYUFBTztBQUVQLGlCQUZBLE9BQU8sQ0FFTixJQUFJLEVBQUM7OztBQUNmLGNBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ2pCLGNBQUksQ0FBQyxVQUFVLEdBQUMsQ0FBQyxFQUFFLEVBQUMsUUFBUSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsU0FBUyxDQUFDLENBQUE7QUFDM0gsY0FBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxVQUFTLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQ2xELGFBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDVCxtQkFBTyxDQUFDLENBQUM7V0FDVixFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ1AsY0FBSSxDQUFDLEtBQUssR0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQTtTQUNsQzs7cUJBVlUsT0FBTzs7aUJBWVYsa0JBQUMsTUFBTSxFQUFDOzs7QUFDZCxrQkFBTSxDQUFDLEVBQUUsR0FBRyxBQUFDLE9BQU8sTUFBTSxDQUFDLEVBQUUsS0FBSyxXQUFXLEdBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUM7QUFDL0QsZ0JBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsR0FBQyxNQUFNLENBQUMsRUFBRSxHQUFDLE9BQU8sQ0FBQyxDQUM3QyxJQUFJLENBQUMsVUFBQSxRQUFRO3FCQUFJLFFBQVEsQ0FBQyxJQUFJLEVBQUU7YUFBQSxDQUFDLENBQ2pDLElBQUksQ0FBQyxVQUFBLFNBQVM7cUJBQUksTUFBSyxTQUFTLEdBQUMsU0FBUzthQUFBLENBQUMsQ0FBQztXQUNoRDs7O2lCQUUwQix1Q0FBRTtBQUMzQixtQkFBTyxrQkFBa0IsQ0FBQyxPQUFPLENBQUM7V0FDbkM7Ozt1QkFyQlUsT0FBTztBQUFQLGVBQU8sR0FEbkIsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUNOLE9BQU8sS0FBUCxPQUFPO2VBQVAsT0FBTyIsImZpbGUiOiJjYXRlZ29yaWVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCB7SHR0cENsaWVudH0gZnJvbSAnYXVyZWxpYS1mZXRjaC1jbGllbnQnO1xuaW1wb3J0IHthY3RpdmF0aW9uU3RyYXRlZ3l9IGZyb20gJ2F1cmVsaWEtcm91dGVyJztcblxuQGluamVjdChIdHRwQ2xpZW50KVxuZXhwb3J0IGNsYXNzIFdlbGNvbWV7ICBcblxuICBjb25zdHJ1Y3RvcihodHRwKXtcbiAgICB0aGlzLmh0dHAgPSBodHRwO1xuICAgIHRoaXMuY2F0ZWdvcmllcz1bJycsJ0JhaGFzYScsICdCaW9sb2dpJywgJ0Zpc2lrYScsICdJUEEtU0QnLCAnSVBTJywgJ0lQUy1TRCcsICdLaW1pYScsICdLb21wdXRlcicsICdNYXRlbWF0aWthJywgJ0xhaW5ueWEnXVxuICAgIHRoaXMub2JqID0gdGhpcy5jYXRlZ29yaWVzLnJlZHVjZShmdW5jdGlvbihvLCB2LCBpKSB7XG4gICAgICBvW2ldID0gdjtcbiAgICAgIHJldHVybiBvO1xuICAgIH0sIHt9KTtcbiAgICB0aGlzLmNvdW50PXRoaXMuY2F0ZWdvcmllcy5sZW5ndGhcbiAgfVxuXG4gIGFjdGl2YXRlKHBhcmFtcyl7XG4gICAgcGFyYW1zLmlkID0gKHR5cGVvZiBwYXJhbXMuaWQgPT09ICd1bmRlZmluZWQnKSA/IDEgOiBwYXJhbXMuaWQ7XG4gICAgdGhpcy5odHRwLmZldGNoKFwiY2F0ZWdvcmllcy9cIitwYXJhbXMuaWQrXCIuanNvblwiKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4obW5lbW9uaWNzID0+IHRoaXMubW5lbW9uaWNzPW1uZW1vbmljcyk7XG4gIH1cblxuICBkZXRlcm1pbmVBY3RpdmF0aW9uU3RyYXRlZ3koKXtcbiAgICByZXR1cm4gYWN0aXZhdGlvblN0cmF0ZWd5LnJlcGxhY2U7XG4gIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=