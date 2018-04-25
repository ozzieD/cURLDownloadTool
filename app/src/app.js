import * as Fieldset from './utils/fieldset';
import * as radioButtons from './utils/radioButtons';

// Window declarations to expose functionality to the console and Gui.html file
window.setPage = Fieldset.setPage;

window.Alteryx.Gui.BeforeLoad = (manager, AlteryxDataItems, json) => {
  // Setting up simplebool dataItems that will match up with the macro's radio buttons
  // Radio buttons for URL________________________________________________________________________
  // manager.getDataItem('radioURL').setSuppressed(true);
  manager.getDataItem('radioURL').registerPropertyListener('value', radioButtons.radioURLdataItemUpdater);


  const radioURLMan = new AlteryxDataItems.SimpleBool('radioURLMan');
  manager.addDataItem(radioURLMan);

  const radioURLField = new AlteryxDataItems.SimpleBool('radioURLField');
  manager.addDataItem(radioURLField);

  // Radio buttons for Headers____________________________________________________________________

  // manager.getDataItem('radioHeaders').setSuppressed(true);
  manager.getDataItem('radioHeaders').registerPropertyListener('value', radioButtons.radioHeadersdataItemUpdater);

  const radioHeadersNo = new AlteryxDataItems.SimpleBool('radioHeadersNo');
  manager.addDataItem(radioHeadersNo);

  const radioHeaderFields = new AlteryxDataItems.SimpleBool('radioHeaderFields');
  manager.addDataItem(radioHeaderFields);

  const radioHeadersMan = new AlteryxDataItems.SimpleBool('radioHeadersMan');
  manager.addDataItem(radioHeadersMan);

  // Radio buttons for Payload_______________________________________________________________________________
  // manager.getDataItem('radioPayload').setSuppressed(true);
  manager.getDataItem('radioPayload').registerPropertyListener('value', radioButtons.radioPayloaddataItemUpdater);

  const radioPayloadNo = new AlteryxDataItems.SimpleBool('radioPayloadNo');
  manager.addDataItem(radioPayloadNo);

  const radioPayloadField = new AlteryxDataItems.SimpleBool('radioPayloadField');
  manager.addDataItem(radioPayloadField);

  const radioPayloadMan = new AlteryxDataItems.SimpleBool('radioPayloadMan');
  manager.addDataItem(radioPayloadMan);

  // Radio buttons for Credentials_______________________________________________________________________________
  // manager.getDataItem('radioCredentials').setSuppressed(true);
  manager.getDataItem('radioCredentials').registerPropertyListener('value', radioButtons.radioCredentialsdataItemUpdater);

  const radioCredentialsNo = new AlteryxDataItems.SimpleBool('radioCredentialsNo');
  manager.addDataItem(radioCredentialsNo);

  const radioCredentialsField = new AlteryxDataItems.SimpleBool('radioCredentialsField');
  manager.addDataItem(radioCredentialsField);

  const radioCredentialsMan = new AlteryxDataItems.SimpleBool('radioCredentialsMan');
  manager.addDataItem(radioCredentialsMan);

  const radioCredentialsWinAuth = new AlteryxDataItems.SimpleBool('radioCredentialsWinAuth');
  manager.addDataItem(radioCredentialsWinAuth);

  // change pages
  const currentPage = new AlteryxDataItems.SimpleString('currentPage');
  manager.addDataItem(currentPage);

  // Sets default on first load
  if (manager.toolInfo.IsFirstConfig) {
    json.Configuration = { Value: [{ '@name': 'currentPage', '#text': 'HTTP' }] };
  }
};

window.Alteryx.Gui.AfterLoad = (manager) => {
  // Sets correct page (i.e. "fieldset")
  const currentPage = manager.getDataItem('currentPage');
  document.getElementById(currentPage.getValue()).style.display = 'block';

  // Set default values if it's the first config
  if (manager.toolInfo.IsFirstConfig) {
    radioButtons.setDefaultRadioButtonValues(manager);
  }
};
