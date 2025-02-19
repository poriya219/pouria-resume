export async function GET(req) {
  const data = [
    {
      "title": "gramatic.title",
      "description": "gramatic.description",
      "images": [
        "/images/gramatic2.jpg",
        "/images/gramatic3.jpg"
      ],
      "cover": "/images/gramatic1.png",
      "color": "bg-[#84c4eb]"
    },
    {
      "title": "beeaab.title",
      "description": "beeaab.description",
      "images": [
        "/images/beeaab2.jpg",
        "/images/beeaab3.jpg"
      ],
      "cover": "/images/beeaab1.png",
      "color": "bg-[#2f3543]"
    },
    {
      "title": "musicflow.title",
      "description": "musicflow.description",
      "images": [
        "/images/music2.jpg"
      ],
      "cover": "/images/music1.png",
      "color": "bg-[#e6bf62]"
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