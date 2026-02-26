export async function GET() {
    try {
      const response = await fetch('https://icanhazdadjoke.com/', {
        headers: { 'Accept': 'application/json' }
      });
      const jokeData = await response.json();

      return Response.json({
        message: jokeData.joke,
        status: 'success'
      });
    } catch (error) {
      console.error("Joke API error:", error);
      return Response.json({
        message: 'Joke API was unavailable',
        status: 'fallback'
      }, { status: 500 });
    }
  }