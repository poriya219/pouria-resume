export async function GET(req) {
  const data = [
    {
      "title": "Gramatic",
      "description": `Gramtic is an intuitive mobile application designed for Instagram account management. With a user-friendly interface, it allows users to schedule posts and stories, automate messaging, and analyze hashtags effortlessly. Designed to cater to social media managers and influencers, it simplifies daily Instagram operations while offering professional tools for better engagement.

Solving the main challenges:
Time Management:
Gramtic provides a post and story scheduler to help users maintain a consistent posting schedule without manual interventions.

Hashtag Optimization:
The app features a smart hashtag generator, allowing users to explore, select, and add the most trending hashtags to boost post visibility.

Automated Interaction:
With features like custom triggers and automated replies, Gramtic ensures smoother and faster responses, enhancing audience engagement.

Seamless User Experience:
A modern, organized layout with dark and light mode options ensures usability and comfort for all users.

Technology Stack:
Frontend: Developed using Flutter, enabling a cross-platform and responsive user interface.
Backend: Built with Dart and implemented through Dart Frog, ensuring robust performance and streamlined API management.
Current Availability:
Platforms: Gramtic is available as an Android app and a web application, offering flexibility for various users.
Future Expansion: Due to its Flutter-based architecture, the app can easily be extended to support iOS, making it highly adaptable for further growth.`,
"images": [
  "/images/gramatic2.jpg",
  "/images/gramatic3.jpg"
],
"cover": "/images/gramatic1.jpg",
"color": "bg-[#84c4eb]",
    },
    {
    "title": "BeeaaB",
      "description": `BeeaaB is an all-in-one health management app designed to empower users with actionable insights into their daily nutrition, physical activity, and overall well-being. With specialized features for monitoring micronutrient intake, tracking exercise routines, and providing essential information during pregnancy, BeeaaB ensures a holistic approach to health. The app also includes a vibrant social network for sharing recipes, real-time communication capabilities, and secure interactions with healthcare providers.

Key Features:
Nutrition Tracking:
BeeaaB offers detailed analysis of micronutrient intake for each meal, helping users understand their daily nutritional balance.

Fitness Monitoring:
Track and manage physical activities with built-in tools to help users meet their fitness goals.

Pregnancy Support:
A dedicated section for pregnant users provides vital information, tailored recommendations, and real-time communication with healthcare providers.

Social Networking:
Users can share their own recipes, engage with others, and explore a variety of healthy meal ideas within the app's community section.

Real-Time Chat:
Enables seamless communication between users, as well as direct interaction with healthcare professionals for advice and support.

Clean and Intuitive Design:
BeeaaB features a user-friendly interface, providing quick access to key features like food analysis, activity tracking, and social networking.

Technology Stack:
Frontend: Developed using Flutter, ensuring a responsive and cross-platform experience.
Backend: Built with Django, providing a secure and scalable architecture.
Notifications: Integrated with Firebase Push Notification to keep users updated in real-time.
Analytics: Powered by Google Analytics for advanced user behavior insights and app performance monitoring.
Current Availability:
Platforms: BeeaaB is available on both Android and iOS, ensuring a seamless experience for users across different devices.`,
"images": [
  "/images/beeaab2.jpg",
  "/images/beeaab3.jpg",
],
"cover": "/images/beeaab1.jpg",
"color": "bg-[#2f3543]",
    },
    {
      "title": "MusicFlow",
        "description": `MusicFlow is a modern music player application designed to enhance the user's audio experience. With features like real-time lyrics display, Spotify-based song recommendations, and a clean, intuitive design, the app provides a seamless and enjoyable experience for music lovers. Built using Flutter, MusicFlow is optimized for both Android and iOS, ensuring cross-platform compatibility and a highly responsive interface.

Key Features:
Real-Time Lyrics Display:
MusicFlow automatically fetches and displays song lyrics in sync with the audio playback, creating an engaging experience for users who enjoy singing along.

Smart Recommendations:
Powered by Spotify API, the app suggests similar tracks based on the user's listening habits, helping users discover new favorites effortlessly.

Advanced Search and Filtering:
Users can search songs, playlists, artists, or albums and filter them by genre or other preferences, offering a personalized music library experience.

Modern Interface:
A sleek and minimalistic dark mode interface ensures a visually pleasing and distraction-free environment, perfect for music enthusiasts.

Cross-Platform Compatibility:
The app is currently available for Android and has plans to expand to iOS thanks to its Flutter framework, which simplifies multi-platform deployment.`,
  "images": [
    "/images/music2.jpg"
  ],
  "cover": "/images/music1.jpg",
"color": "bg-[#e6bf62]",
      }
  ];
  const url = new URL(req.url);
  const index = url.searchParams.get("index");
  console.log('index:', index);
  

  if (index) {
    
    // If 'index' query parameter exists
    return Response.json(data[index], { status: 200 });
  } else {
    // If 'index' query parameter does not exist
    return Response.json(data, { status: 200 });
  }
}