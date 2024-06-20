// Function to generate preview based on selected player
function generatePreview() {
  const hlsLinkInput = document.getElementById('hlsLink');
  const playerSelect = document.getElementById('playerSelect');

  // Get the selected player value
  const selectedPlayer = playerSelect.value;

  // Construct the iframe URL based on selected player and HLS link
  let embedUrl = '';
  switch (selectedPlayer) {
    case 'cleper':
      embedUrl = `https://player.xdx.buzz/live/player1.html?url=${encodeURIComponent(hlsLinkInput.value)}`;
      break;
    case 'jw':
      embedUrl = `https://player.xdx.buzz/live/player2.html?url=${encodeURIComponent(hlsLinkInput.value)}`;
      break;
    case 'videojs':
      embedUrl = `https://player.xdx.buzz/live/player3.html?url=${encodeURIComponent(hlsLinkInput.value)}`;
      break; 
    case 'flowplayer':
      embedUrl = `https://player.xdx.buzz/live/player4.html?url=${encodeURIComponent(hlsLinkInput.value)}`;
      break;
    case 'plyrPlayer':
      embedUrl = `https://player.xdx.buzz/live/player5.html?url=${encodeURIComponent(hlsLinkInput.value)}`;
      break;
    default:
      break;
  }
}

// Function to load sample HLS link from JSON file
async function loadSimpleHLS() {
  const hlsLinkInput = document.getElementById('hlsLink');
  
  try {
    const response = await fetch('live/*/*.json'); // Replace with your JSON file path
    if (!response.ok) {
      throw new Error('Failed to fetch HLS URL.');
    }
    const data = await response.json();
    const hlsUrl = data.url; // Assuming your JSON structure has a key 'url' containing the HLS link
    
    hlsLinkInput.value = hlsUrl;
    generatePreview(); // Update the preview after loading the HLS URL
  } catch (error) {
    console.error('Error fetching HLS URL:', error);
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Failed to load HLS URL. Please try again later.'
    });
  }
}
