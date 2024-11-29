// Array of random splash messages
const splashMessages = [
  "Any suggestion? Go ask the leader!",
  "Don't be lazy! It's not the right time for lazy ness!",
  "Have a problem? You can open up to someone!",
  "It's not all about someone. It's all about teamwork!",
  "Unnoticeable Emotion's!",
  "Did you know that I didn't know what you know?",
  "Success is a journey, not a destination.",
  "Being responsive is a key! NOT LAZY NESS!",
  "Remember to take breaks, your mind needs rest.",
  "Johnson love's you guys.🥺",
  "It's not called bida². it is called being responsiveness!",
  "He loves that person as you love your someone!",
  "It's okay to create good things for this group. NOT ANOTHER ISSUES!",
  "It's always good to forgive someone.",
  "We have to work together team.😎",
  "FIGHT!",
  "Kaon na langga☺️",
  "Don't be too much."
];

// Function to show a random splash message when the page loads
function showRandomSplash() {
  const container = document.getElementById('splashContainer');
  
  // Choose a random message from the array
  const randomMessage = splashMessages[Math.floor(Math.random() * splashMessages.length)];
  
  // Create a new div element for the message
  const newMessage = document.createElement('div');
  newMessage.classList.add('splash-message');
  newMessage.textContent = randomMessage;
  
  // Append the new message to the container
  container.appendChild(newMessage);
}

// Show a random splash message immediately when the page loads
window.onload = showRandomSplash;

// Add event listener to handle form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();  // Prevent form submission

  const password = document.getElementById('password').value;

  // Check if the entered password is 'comptechg2'
  if (password === 'FUCK') {
    // Redirect to a new page (index.html or any other page)
    window.location.href = 'index.html'; // Replace with your desired page
  } else {
    alert('HAHAHAHAHAHA... Kamoham jud lamag tabi.😹');
  }
});
