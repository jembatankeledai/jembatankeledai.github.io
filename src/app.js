export class App {
  configureRouter(config, router){
    config.title = 'Aurelia';
    config.map([
      { route: ['','categories/:id'], name: 'categories', moduleId: 'categories', title:'categories' }
    ]);

    this.router = router;
  }
}
