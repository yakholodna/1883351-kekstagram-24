const fileUpload = document.querySelector('#upload-file');
const preview = document.querySelector('.img-upload__preview').querySelector('img');
const FILE_TYPES = ['jpg', 'jpeg', 'png'];

fileUpload.addEventListener('change', () => {
  const file = fileUpload.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => {
    return fileName.endsWith(it);
  });
  if (matches) {
    preview.src = URL.createObjectURL(file);
  }
});
