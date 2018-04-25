const setPage = (page) => {
  const currentPage = window.Alteryx.Gui.Manager.getDataItem('currentPage');
  document.getElementById(currentPage.getValue()).style.display = 'none';
  currentPage.setValue(page);
  document.getElementById(currentPage.getValue()).style.display = 'block';
};
export { setPage };
