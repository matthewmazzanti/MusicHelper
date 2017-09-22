import { ChordsPage } from './app.po';

describe('chords App', () => {
  let page: ChordsPage;

  beforeEach(() => {
    page = new ChordsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
