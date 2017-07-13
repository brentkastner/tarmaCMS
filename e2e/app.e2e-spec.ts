import { DriveCMSPage } from './app.po';

describe('drive-cms App', () => {
  let page: DriveCMSPage;

  beforeEach(() => {
    page = new DriveCMSPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
