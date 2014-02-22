App = Ember.Application.create();

App.Store = DS.Store.extend();

App.ApplicationAdapter = DS.RESTAdapter.extend({
  host: 'https://api.usatoday.com/open'
});

App.Router.map(function() {
	this.resource('articles');
	this.resource('sports');
  	this.resource('topics');
  	this.resource('entertainment');
  	this.resource('tech');
	this.resource('most');
	this.resource('tags');
});


App.IndexRoute = Ember.Route.extend({
  model: function() {
    return this.store.findAll('article', { section: 'news', most: 'commented', encoding: 'json', api_key: '6rq9xbchvx97bqnjqjk6nre2'});
  }
});

App.TechRoute = Ember.Route.extend({});

App.SportsRoute = Ember.Route.extend({});

App.TopicsRoute = Ember.Route.extend({});

App.MostRoute = Ember.Route.extend({});

App.ArticlesRoute = Ember.Route.extend({
	model: function() {
    	return this.store.findAll('article', { section: 'news', most: 'commented', encoding: 'json', api_key: '6rq9xbchvx97bqnjqjk6nre2'});
 	}
});

App.Article = DS.Model.extend({
	description: DS.attr('string'),
	guid: DS.attr(),
	link: DS.attr('string'),
	pubDate: DS.attr('date'),
	title: DS.attr('string')
});
