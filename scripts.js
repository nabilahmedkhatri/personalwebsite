function randomImage() {
  console.log("This ran");
  const IMAGES_COUNT = 10;
  const captions = [
    'Ice Skating in Madison, Wisconsin (2018)',
    'Queens College Campus, Queens (2018)',
    'Ammar on the 7 Train, Queens (2017)',
    'PepsiCola Sign in Long Island City, Queens (2017)',
    'Mirror Selfie, New York City (2018)',
    'Flushing Community Garden, Queens (2018)',
    'Robert Moses Beach, Nassau (2017)',
    'Omar and Rabbe, Long Island City (2017)',
    'Flowers, Flushing (2018)',
    'Self-Portrait, New York City (2018)'
  ]
  var index = Math.ceil(Math.random() * IMAGES_COUNT);
  console.log(index);
  document.getElementById("image-box").style.backgroundImage = "url('imgs/random_imgs/image_" + index + "-min.jpg')";
  document.getElementById("image-caption").innerHTML = captions[index-1];

}
