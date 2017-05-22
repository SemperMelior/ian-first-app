import { IanFirstAppPage } from './app.po';

describe('ian-first-app App', () => {
  let page: IanFirstAppPage;

  beforeEach(() => {
    page = new IanFirstAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
