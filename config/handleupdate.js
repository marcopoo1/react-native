function setStatusClosed(id) {
    issuesRef.child(`${id}`).update({
      "status": "Closed"
    })
    document.getElementById('issuesList').innerHTML = "";
    readIssues();
  }
  export default setStatusClosed();