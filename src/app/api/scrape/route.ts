import axios from "axios";
import * as cheerio from "cheerio";

// Define the match data structure
interface Match {
  team1: string;
  team2: string;
  matchTime: string;
}

export async function GET(): Promise<Response> {
  try {
    // Fetch HTML from the IPL website
    const { data } = await axios.get("https://www.iplt20.com/");

    // Load HTML into Cheerio for scraping
    const $ = cheerio.load(data);

    // Scrape data and populate matches array
    const matches: Match[] = [];
    $(".match-list__item").each((index, element) => {
      const match: Match = {
        team1: $(element).find(".team1 .name").text().trim(),
        team2: $(element).find(".team2 .name").text().trim(),
        matchTime: $(element).find(".match-info__time").text().trim(),
      };
      matches.push(match);
    });

    // Return the scraped data
    return new Response(JSON.stringify({ matches }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: unknown) {
    // Ensure error type safety
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error occurred";

    return new Response(
      JSON.stringify({ message: "Error scraping data", error: errorMessage }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
