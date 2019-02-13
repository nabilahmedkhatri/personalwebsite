function randomImage() {
  console.log("This ran");
  const IMAGES_COUNT = 20;
  const captions = [
    'City College Campus North, Harlem (2018)',
    'Ice Skating in Madison, Wisconsin (2018)',
    'Queens College Campus, Queens (2018)',
    'Ammar on the 7 Train, Queens (2017)',
    'PepsiCola Sign in Long Island City, Queens (2017)',
    'Flushing Community Garden, Queens (2018)',
    'A View From Brooklyn (2018)',
    'One World Trade Center (2017)',
    'Daniel and the Beaches (2018)',
    'Skateboarding West Side HighWay (2018)',
    'Main Street, Flushing (2018)',
    'Bike Lane Near Central Park, Manhattan (2018)',
    '7 Train, Queens (2017)',
    'A Handshake Gone Awry, Harlem (2017)',
    'Custom Village, Manhattan (2018)',
    'A Parade in Flushing, Queens (2018)',
    'Robert Moses Beach, Nassau (2017)',
    'Flowers, Flushing (2018)',
    'Self-Portrait, New York City (2018)',
    'Mirror Selfie, New York City (2018)'
  ]
  var index = Math.ceil(Math.random() * IMAGES_COUNT);
  console.log(index);
  document.getElementById("image-box").style.backgroundImage = "url('imgs/random_imgs/image_" + index + ".jpg')";
  document.getElementById("image-caption").innerHTML = captions[index-1];

}
