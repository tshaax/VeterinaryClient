import { VeterinaryCalendarPage } from './app.po';

describe('veterinary-calendar App', () => {
  let page: VeterinaryCalendarPage;

  beforeEach(() => {
    page = new VeterinaryCalendarPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
