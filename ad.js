alert('hello');
document.getElementById('blogForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form values
    var title = document.getElementById('title').value;
    var content = document.getElementById('content').value;
    var image = document.getElementById('image').files[0];
    alert('image');
    var video = document.getElementById('video').files[0];
    alert('video');
  
    // Perform further processing (e.g., upload image/video, save data to database, etc.)
  
    // Example output
    console.log('Title:', title);
    console.log('Content:', content);
    console.log('Image:', image);
    console.log('Video:', video);
  
    // Reset form
    this.reset();
  });