import { Angular1002Page } from './app.po';

describe('angular1002 App', function() {
  let page: Angular1002Page;

  beforeEach(() => {
    page = new Angular1002Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
