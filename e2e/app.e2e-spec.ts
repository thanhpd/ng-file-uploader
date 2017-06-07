import { NgFileUploaderPage } from './app.po';

describe('ng-file-uploader App', () => {
  let page: NgFileUploaderPage;

  beforeEach(() => {
    page = new NgFileUploaderPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
