const radioURLdataItemUpdater = (e) => {
    window.Alteryx.Gui.Manager.getDataItem('radioURLField').setValue(e.value === 'URLField');
    window.Alteryx.Gui.Manager.getDataItem('radioURLMan').setValue(e.value === 'URLMan');
};

const radioHeadersdataItemUpdater = (e) => {
    window.Alteryx.Gui.Manager.getDataItem('radioHeadersNo').setValue(e.value === 'noHeaders');
    window.Alteryx.Gui.Manager.getDataItem('radioHeaderFields').setValue(e.value === 'headerFields');
    window.Alteryx.Gui.Manager.getDataItem('radioHeadersMan').setValue(e.value === 'headersMan');
};

const radioPayloaddataItemUpdater = (e) => {
    window.Alteryx.Gui.Manager.getDataItem('radioPayloadNo').setValue(e.value === 'noPayload');
    window.Alteryx.Gui.Manager.getDataItem('radioPayloadField').setValue(e.value === 'payloadField');
    window.Alteryx.Gui.Manager.getDataItem('radioPayloadMan').setValue(e.value === 'payloadMan');
};

const radioCredentialsdataItemUpdater = (e) => {
    window.Alteryx.Gui.Manager.getDataItem('radioCredentialsNo').setValue(e.value === 'noCredentials');
    window.Alteryx.Gui.Manager.getDataItem('radioCredentialsField').setValue(e.value === 'credentialsField');
    window.Alteryx.Gui.Manager.getDataItem('radioCredentialsMan').setValue(e.value === 'credentialsMan');
    window.Alteryx.Gui.Manager.getDataItem('radioCredentialsWinAuth').setValue(e.value === 'credentialsWinAuth');
};

const setDefaultRadioButtonValues = (manager) => {
    manager.getDataItem('radioURL').setValue('URLField');
    manager.getDataItem('radioHeaders').setValue('noHeaders');
    manager.getDataItem('radioPayload').setValue('noPayload');
    manager.getDataItem('radioCredentials').setValue('noCredentials');
};

export {
    radioURLdataItemUpdater,
    radioHeadersdataItemUpdater,
    radioPayloaddataItemUpdater,
    radioCredentialsdataItemUpdater,
    setDefaultRadioButtonValues,
};
