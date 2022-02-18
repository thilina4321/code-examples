function addBoqFile() {
  let allowedExtension = [".pdf", ".doc", ".docx", ".xlsx", ".xls", ".csv"];

  let hasInvalid = allowedExtension.some(
    (ab) => this.boqfiles && this.boqfiles.name.endsWith(ab)
  );

  if (hasInvalid) {
    this.form.boq_document = this.boqfiles;
  } else {
    if (this.boqfiles) {
      this.$toast.error("Please select a minimum of one Road!").goAway(3500);
    }
  }
}
