function uploadFiles() {
  var fileInput = document.getElementById('fileToUpload')
  var files = fileInput.files

  var formData = new FormData()

  for (var i = 0; i < files.length; i++) {
    formData.append('filesToUpload[]', files[i])
  }

  var xhr = new XMLHttpRequest()
  xhr.open('POST', 'przykladowy_serwer.php', true)

  xhr.onload = function () {
    if (xhr.status === 200) {
      // Obsłuż odpowiedź serwera po udanym przesłaniu plików
      console.log(xhr.responseText)
    } else {
      // Obsłuż błędy
      console.error(xhr.statusText)
    }
  }

  xhr.send(formData)
}
